import { Component, OnInit, OnDestroy } from '@angular/core';
import { VisitService } from 'src/app/services/visit/visit.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Visit } from 'src/app/shared/models/visit.model';
import { Doctor } from 'src/app/shared/models/doctor.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalService } from 'src/app/services/modal/modal.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Subscription } from 'rxjs';
import { MyNotifierService } from 'src/app/services/notifier/my-notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  readonly notifier: MyNotifierService;
  protected user: User;
  protected visit: Visit;
  protected doctor: Doctor;
  protected isLoggedIn;
  protected visitsForUser = new Array<Visit>();
  private visitIdToDelte: number;
  subscription: Subscription;

  constructor(private navbarService: NavbarService, private visitService: VisitService, private userService: UserService,
    private notifierService: MyNotifierService, private modalService: ModalService) {
    this.notifier = this.notifierService;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  test() {
    this.isLoggedIn = true;
  }
  ngOnInit() {
    this.isLoggedIn = false;
    this.subscription = this.userService.getLogedUser().subscribe(res => {
      this.user = res;
    })
    this.getVisit();

  }

  getVisit() {
    this.visitService.getVisitsByUserId(this.user.id).subscribe(res => {
      res.forEach(vis => {
        this.visitsForUser.push(vis);
      })
    })
  }
  deleteVisitClick(visitId) {
    this.openModal('confirm-modal');
    this.visitIdToDelte = visitId;
  }
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id.nodeValue;
    if (idAttr === 'yes') {
      this.deleteVisit(this.visitIdToDelte);
    }
    this.modalService.close('confirm-modal');

  }
  deleteVisit(visitId: number) {
    this.visitService.deleteVisist(visitId).subscribe(res => {
      this.visitsForUser = this.visitsForUser.filter(item => item.id !== visitId);
      this.notifier.showNotifer("success", res.body);
    },
      (err: HttpErrorResponse) => {
        if (err.status === 400) {
          this.notifier.showNotifer("error", err.error);
        }
      });
  }
}
