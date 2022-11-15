import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrumGuideEndNote } from '../../interfaces/scrum-guide-end-note.interface';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-end-note',
  templateUrl: './end-note.component.html',
  styleUrls: ['./end-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EndNoteComponent implements OnInit {
  public scrumGuideEndNote: ScrumGuideEndNote = SCRUM_GUIDE.endNotes;

  constructor() {}

  ngOnInit(): void {}
}
