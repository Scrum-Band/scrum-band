import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';

@Component({
  selector: 'sb-footer',
  templateUrl: './sb-footer.component.html',
  styleUrls: ['./sb-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbFooterComponent implements OnInit {
  public online$;
  constructor(public network: Network) {
    this.online$ = this.network.onlineChanges;
  }

  ngOnInit(): void {}
}
