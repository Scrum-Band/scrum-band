import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideChanges } from '../../../services/idb/scrum-guide/scrum-guide-changes.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangesComponent implements OnInit {
  public scrumGuideChanges: ScrumGuideChanges = SCRUM_GUIDE.changes;
  constructor() {}

  ngOnInit(): void {}
}
