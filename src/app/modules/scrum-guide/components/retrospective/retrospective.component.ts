import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RetrospectiveComponent implements OnInit {
  public retrospective: any = SCRUM_GUIDE.events.retrospective;
  constructor() {}

  ngOnInit(): void {}
}
