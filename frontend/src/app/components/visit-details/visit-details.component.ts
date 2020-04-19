import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/shared/models/visit.model';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css']
})
export class VisitDetailsModalComponent implements OnInit {

  protected visit: Visit;

  constructor() { }

  ngOnInit() {
  }

  openVisitDetails(visit) {
    this.visit = visit;
  }
}
