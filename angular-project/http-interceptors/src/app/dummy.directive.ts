import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMultiFunction]'
})
export class DummyDirective {

  @Input() appMultiFunction:any;

  constructor(private el:ElementRef,private render:Renderer2) { }

  ngOnInit(){
    if(this.appMultiFunction.backgroundColor){
      this.setBackgroundColor(this.appMultiFunction.backgroundColor)
    }
    if(this.appMultiFunction.border){
      this.setBorder(this.appMultiFunction.border)
    }
  }
  setBackgroundColor(color:string){
    this.render.setStyle(this.el.nativeElement,'background',color)
  }
  setBorder(border:string){
    this.render.setStyle(this.el.nativeElement,'border',border)
  }
}
