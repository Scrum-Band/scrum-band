import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-sprint-backlog',
  templateUrl: './sprint-backlog.component.html',
  styleUrls: ['./sprint-backlog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SprintBacklogComponent implements OnInit {
  public sprintBacklog: any = SCRUM_GUIDE.artifacts.sprintBacklog;
  constructor() {}

  ngOnInit(): void {}
}
