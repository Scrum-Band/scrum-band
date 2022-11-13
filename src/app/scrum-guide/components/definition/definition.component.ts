import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideDefinition } from '../../../services/idb/scrum-guide/scrum-guide-definition.interface';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

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
