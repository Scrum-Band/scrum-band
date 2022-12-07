import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sb-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignComponent {
  public signedUser: any;
  public isSigned$: Observable<any>;

  constructor(private auth: AuthService) {
    this.isSigned$ = this.auth.isSigned();
    this.auth.signedUser().subscribe((signedUser) => (this.signedUser = signedUser));
  }

  signIn() {
    this.auth.signIn();
  }
  signOut() {
    this.auth.signOut();
  }
}
