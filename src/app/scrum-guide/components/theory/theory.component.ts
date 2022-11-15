import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideTheory } from '../../../services/idb/scrum-guide/scrum-guide-theory.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheoryComponent implements OnInit {
  public scrumGuideTheory: ScrumGuideTheory = SCRUM_GUIDE.theory;
  constructor() {}

  ngOnInit(): void {}
}
