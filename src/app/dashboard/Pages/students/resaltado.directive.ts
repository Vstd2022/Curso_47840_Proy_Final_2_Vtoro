import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})

export class ResaltadoDirective implements OnChanges {

  @Input()
  appResaltado = 'font-size:20px';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.establecerColorDeFondo();
  }

  establecerColorDeFondo(): void {
     this.renderer2.setStyle(
       this.elementRef.nativeElement,
       'font-size',
       '20px'
     );
   
  }
}