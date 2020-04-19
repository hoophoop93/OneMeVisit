import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/shared/models/visit.model';
import { Doctor } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { DatePipe } from '@angular/common';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyNotifierService } from 'src/app/services/notifier/my-notifier.service';

@Component({
  selector: 'app-update-visit',
  templateUrl: './update-visit.component.html',
  styleUrls: ['./update-visit.component.css']
})
export class UpdateVisitComponent implements OnInit {

  protected form: FormGroup;
  readonly notifier: MyNotifierService;
  protected visitObj: Visit;
  protected doctors = new Array<Doctor>();
  protected actualDoctorId: number;
  protected actualDoctor = new Doctor();
  protected actualHourVisit: string;
  protected visitDate: Date;
  protected visitHour = [
    { hour: "7.00" },
    { hour: "8.30" },
    { hour: "9.30" },
    { hour: "11.00" },
    { hour: "13.00" }
  ]

  constructor(private doctorService: DoctorService, private datePipe: DatePipe, private visitService: VisitService,
    private router: Router, private notiferService: MyNotifierService) {
    this.notifier = this.notiferService;
  }

  ngOnInit() {
    this.visitObj = new Visit();
    this.form = new FormGroup({
      doctor: new FormControl(null, Validators.required),
    });
  }

  updateVisit(visit) {
    if (this.doctors.length === 0) {
      this.doctorService.getDoctors().subscribe(results => {
        results.forEach(doctor => {
          this.doctors.push(doctor);
        })
      })
    }
    this.visitObj = visit;
    this.actualDoctor = visit.doctorDTO;
    this.form.controls['doctor'].setValue(this.actualDoctor);
    this.actualDoctorId = visit.doctorDTO.id;
    this.actualHourVisit = visit.visitHour;
    this.visitDate = new Date(this.datePipe.transform(visit.visitDate, 'MM/dd/yyyy'));

  }

  updateVisitForm() {
    this.visitObj.visitDate = this.datePipe.transform(this.visitDate, 'yyyy-MM-dd').toString();
    this.visitObj.registrationDate = this.datePipe.transform(new Date, 'yyyy-MM-dd').toString();
    this.visitObj.doctorDTO = this.form.controls.doctor.value;
    this.visitService.updateVisit(this.visitObj).subscribe(res => {
      this.router.navigate(['/home']).then(() => {
        this.notifier.showNotifer("success", res.body);
      })
    })
  }
  compareFn = (a, b) => a.id === b.id;
  
  closeModal() {
    //this.visit = new Visit();
  }
}
