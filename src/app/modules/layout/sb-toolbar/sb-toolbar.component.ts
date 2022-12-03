import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'sb-toolbar',
  templateUrl: './sb-toolbar.component.html',
  styleUrls: ['./sb-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbToolbarComponent {
  @Input() smallDisplay: boolean = true;
  @Input() sidenavOpen: boolean = true;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    this.toggle.emit(this.sidenavOpen);
  }
}
