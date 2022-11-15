import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideValues } from '../../../services/idb/scrum-guide/scrum-guide-values.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuesComponent implements OnInit {
  public scrumGuideValues: ScrumGuideValues = SCRUM_GUIDE.values;
  constructor() {}

  ngOnInit(): void {}
}
