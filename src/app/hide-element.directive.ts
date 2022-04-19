import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {

  constructor(private elem: ElementRef) { 
    elem.nativeElement.style.display="none";
  }

}
