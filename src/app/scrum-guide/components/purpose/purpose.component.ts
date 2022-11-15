import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuidePurpose } from '../../interfaces/scrum-guide-purpose.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

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
