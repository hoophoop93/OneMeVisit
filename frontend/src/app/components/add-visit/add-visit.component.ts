import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Visit } from 'src/app/shared/models/visit.model';
import { DatePipe } from '@angular/common';
import { VisitService } from 'src/app/services/visit/visit.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { MyNotifierService } from 'src/app/services/notifier/my-notifier.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {

  readonly notifier: MyNotifierService;
  protected user: User;
  protected visitHours: Array<String>;
  protected doctors = new Array<Doctor>();
  protected visit = new Visit();
  protected visitDate: string;
  protected visitHour = [
    { hour: "7.00" },
    { hour: "8.30" },
    { hour: "9.30" },
    { hour: "11.00" },
    { hour: "13.00" }
  ]

  constructor(private doctorService: DoctorService, private datePipe: DatePipe, private visitService: VisitService,
    private router: Router, private notiferService: MyNotifierService, private userService: UserService) {
    this.notifier = notiferService;
    this.doctorService.getDoctors().subscribe(results => {
      results.forEach(doctor => {
        this.doctors.push(doctor);
      })
    })
  }

  ngOnInit() {
    this.userService.getLogedUser().subscribe(res => {
      this.user = res;
    });
  }

  addVisitButton() {
    this.visit.visitDate = this.datePipe.transform(this.visitDate, 'yyyy-MM-dd').toString();
    this.visit.registrationDate = this.datePipe.transform(new Date, 'yyyy-MM-dd').toString();
    this.visit.userDTO = this.user;
    console.log(this.visit.userDTO);
    this.visitService.addVisit(this.visit).subscribe(res => {
      this.router.navigate(['/home']).then(() => {
        this.notifier.showNotifer("success", res.body);
      })
    })
  }

}
