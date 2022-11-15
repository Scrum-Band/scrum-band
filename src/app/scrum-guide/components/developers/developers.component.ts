import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideTeam } from '../../../services/idb/scrum-guide/scrum-guide-team.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopersComponent implements OnInit {
  public developers: any = SCRUM_GUIDE.team.developers;
  constructor() {}

  ngOnInit(): void {}
}
