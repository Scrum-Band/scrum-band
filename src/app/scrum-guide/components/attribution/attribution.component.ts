import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideAttribution } from '../../interfaces/scrum-guide-attribution.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributionComponent implements OnInit {
  public scrumGuideAttribution: ScrumGuideAttribution = SCRUM_GUIDE.attribution;

  constructor() {}

  ngOnInit(): void {}
}
