import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-footer',
  templateUrl: './sb-footer.component.html',
  styleUrls: ['./sb-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
