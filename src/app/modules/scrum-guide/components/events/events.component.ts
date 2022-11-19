import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideEvents } from '../../interfaces/scrum-guide-events.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {
  public scrumGuideEvents: ScrumGuideEvents = SCRUM_GUIDE.events;
  constructor() {}

  ngOnInit(): void {}
}
