import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { Layout } from '../../constants/layout.constants';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'sb-sidenav',
  templateUrl: './sb-sidenav.component.html',
  styleUrls: ['./sb-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbSidenavComponent {
  public isSmall$: Observable<boolean>;
  public isSigned$: Observable<any>;

  public MENU = Layout.MENU;
  public BOTTOM_MENU = Layout.BOTTOM_MENU;

  constructor(private layout: LayoutService, private auth: AuthService) {
    this.isSmall$ = this.layout.isSmall();
    this.isSigned$ = this.auth.isSigned();
  }

  toggle(): void {}
}
