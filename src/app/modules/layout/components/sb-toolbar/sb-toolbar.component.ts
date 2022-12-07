import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'sb-toolbar',
  templateUrl: './sb-toolbar.component.html',
  styleUrls: ['./sb-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbToolbarComponent {
  public isSmall$: Observable<boolean>;
  public isSigned$: Observable<any>;

  @Input() sidenavOpen: boolean = true;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private layout: LayoutService, private auth: AuthService) {
    this.isSmall$ = this.layout.isSmall();
    this.isSigned$ = this.auth.isSigned();
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    this.toggle.emit(this.sidenavOpen);
  }
}
