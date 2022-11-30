import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class GuiService {
  constructor() {}

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
