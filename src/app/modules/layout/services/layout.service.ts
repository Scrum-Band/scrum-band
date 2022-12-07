import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Layout } from '../constants/layout.constants';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _isSmall: Subject<boolean> = new Subject<boolean>();
  private _sidenavOpened: Subject<boolean> = new Subject<boolean>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeSize();
  }

  /**
   * Observe the screen size and return if it is smaller than 1200px
   */
  private observeSize(): void {
    this.breakpointObserver.observe([Layout.SMALL_SIZE]).subscribe((result: BreakpointState) => {
      this._isSmall.next(result.matches);
    });
  }
  /**
   * Return if the screen is small (less than 1200px)
   * @returns Observable<boolean>
   */
  public isSmall(): Observable<boolean> {
    return this._isSmall.pipe();
  }

  /**
   * Return the opened state of the main sidenav
   * @returns Observable<boolean>
   */
  public sidenavOpened(): Observable<boolean> {
    return this._sidenavOpened.pipe();
  }
  /**
   * Open the main sidenav
   */
  public openSidenav(): void {
    this._sidenavOpened.next(true);
  }
  /**
   * Close the main sidenav
   */
  public closeSidenav(): void {
    this._sidenavOpened.next(false);
  }
}
