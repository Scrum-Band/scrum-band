import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideEvents } from '../../../services/idb/scrum-guide/scrum-guide-events.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

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
