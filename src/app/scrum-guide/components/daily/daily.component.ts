import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyComponent implements OnInit {
  public daily: any = SCRUM_GUIDE.events.daily;
  constructor() {}

  ngOnInit(): void {}
}
