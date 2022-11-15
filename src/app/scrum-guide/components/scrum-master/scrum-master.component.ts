import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-scrum-master',
  templateUrl: './scrum-master.component.html',
  styleUrls: ['./scrum-master.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrumMasterComponent implements OnInit {
  public sm: any = SCRUM_GUIDE.team.sm;
  constructor() {}

  ngOnInit(): void {}
}
