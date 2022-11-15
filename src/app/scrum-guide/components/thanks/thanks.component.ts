import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideThanks } from '../../../services/idb/scrum-guide/scrum-guide-thanks.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThanksComponent implements OnInit {
  public scrumGuideThanks: ScrumGuideThanks = SCRUM_GUIDE.thanks;
  constructor() {}

  ngOnInit(): void {}
}
