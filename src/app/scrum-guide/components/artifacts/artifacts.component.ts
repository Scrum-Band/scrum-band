import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideArtifacts } from '../../interfaces/scrum-guide-artifacts.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtifactsComponent implements OnInit {
  public scrumGuideArtifacts: ScrumGuideArtifacts = SCRUM_GUIDE.artifacts;
  constructor() {}

  ngOnInit(): void {}
}
