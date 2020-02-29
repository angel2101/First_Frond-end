import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(el: ElementRef) {
    var element = el.nativeElement;
    element.style.background = 'red';
    element.style.padding =  '20px';
    element.style.marginTop = '15px';
    element.style.textAlign = 'center';
  }

}
