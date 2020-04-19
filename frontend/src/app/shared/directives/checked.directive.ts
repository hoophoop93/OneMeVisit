import { Directive, ElementRef, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnChanges  {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    // const element = this.el.nativeElement;
    // this.renderer.setStyle(element,'list-style-image', 'url(assets/details.png)');
    // this.renderer.setStyle(element, 'background', 'blue');
    if(changes.input){
      console.log('input changed');
    }
  }

}
