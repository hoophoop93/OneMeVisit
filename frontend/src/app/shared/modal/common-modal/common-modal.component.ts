import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommonModalComponent implements OnInit {

  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'app-common-modal') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('app-common-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('app-common-open');
  }

}
