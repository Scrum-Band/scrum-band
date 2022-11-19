import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class GuiService {
  public smallDisplay: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeDisplaySize();
  }

  observeDisplaySize() {
    this.breakpointObserver.observe(['(max-width: 1200px)']).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.smallDisplay = true;
      } else {
        this.smallDisplay = false;
      }
    });
  }

  scrollTo(target: string, parent?: string) {
    const targetElement = document.getElementById(target)!;
    let finalScrollPosition = targetElement.offsetTop;
    if (parent) {
      const parentElement = document.getElementById(parent)!;
      finalScrollPosition = finalScrollPosition + parentElement.offsetTop;
    }
    window.scrollTo(0, finalScrollPosition);
  }
}
