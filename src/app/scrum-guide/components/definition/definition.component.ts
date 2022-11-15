import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideDefinition } from '../../interfaces/scrum-guide-definition.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefinitionComponent implements OnInit {
  public scrumGuideDefinition: ScrumGuideDefinition = SCRUM_GUIDE.definition;
  constructor() {}

  ngOnInit(): void {}
}
