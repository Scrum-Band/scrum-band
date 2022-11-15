import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideValues } from '../../interfaces/scrum-guide-values.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

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
