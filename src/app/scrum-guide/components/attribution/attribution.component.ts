import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideAttribution } from '../../../services/idb/scrum-guide/scrum-guide-attribution.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

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
