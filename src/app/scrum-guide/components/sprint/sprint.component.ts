import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideEvents } from '../../interfaces/scrum-guide-events.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SprintComponent implements OnInit {
  public sprint: any = SCRUM_GUIDE.events.sprint;
  constructor() {}

  ngOnInit(): void {}
}
