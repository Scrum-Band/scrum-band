import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideTeam } from '../../../services/idb/scrum-guide/scrum-guide-team.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit {
  public scrumGuideTeam: ScrumGuideTeam = SCRUM_GUIDE.team;
  constructor() {}

  ngOnInit(): void {}
}
