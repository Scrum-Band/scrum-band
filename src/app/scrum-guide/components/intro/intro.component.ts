import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideIntro } from '../../../services/idb/scrum-guide/scrum-guide-intro.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {
  public scrumGuideIntro: ScrumGuideIntro = SCRUM_GUIDE.intro;
  constructor() {}

  ngOnInit(): void {}
}
