import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanningComponent implements OnInit {
  public planning: any = SCRUM_GUIDE.events.planning;
  constructor() {}

  ngOnInit(): void {}
}
