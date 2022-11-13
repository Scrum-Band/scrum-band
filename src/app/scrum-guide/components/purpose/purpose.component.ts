import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuidePurpose } from '../../../services/idb/scrum-guide/scrum-guide-purpose.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurposeComponent implements OnInit {
  public scrumGuidePurpose: ScrumGuidePurpose = SCRUM_GUIDE.purpose;

  constructor() {}

  ngOnInit(): void {}
}
