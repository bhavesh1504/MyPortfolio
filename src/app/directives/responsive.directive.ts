import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {
  
  constructor(private El: ElementRef, private breakpointObserver: BreakpointObserver) { 
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe({
      next: (result:any) => {
        for (let breakpoint of Object.keys(result.breakpoints))
        if (result.breakpoints[breakpoint]) {
          if (breakpoint === Breakpoints.HandsetPortrait) 
            this.El.nativeElement.classList.remove('pc');
          
          if (breakpoint === Breakpoints.WebLandscape) 
            this.El.nativeElement.classList.add('pc');
          
        }
      },
    });
  }

}
