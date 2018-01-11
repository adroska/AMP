import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') creationDate: Date;
  private twoWeeksInMillisec = 14 * 24 * 60 * 60 * 1000;

  public constructor(private el: ElementRef) {
  }

  public ngOnInit() {
    this.el.nativeElement.style.borderColor  = this.colorByDate(this.creationDate);
  }

  private colorByDate(creationDate: Date): string {
    var color: string,
      currentDate = new Date(),
      isInFuture = !!(creationDate > currentDate),
      isWithinTwoWeeks: boolean = currentDate.valueOf() - creationDate.valueOf() <= this.twoWeeksInMillisec;
    
      (isInFuture) ? color = '#009999' : (isWithinTwoWeeks) ? color = '#00ff00': null ;

    return color;
  }

}
