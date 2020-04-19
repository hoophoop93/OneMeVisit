import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailsModalComponent } from './visit-details.component';

describe('VisitDetailsModalComponent', () => {
  let component: VisitDetailsModalComponent;
  let fixture: ComponentFixture<VisitDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
