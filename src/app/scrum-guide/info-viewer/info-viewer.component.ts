import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SGInfoViewerDialogData } from '../interfaces/scrum-guide-info-dialog-data.interface';
import { SGInfoViewerDialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'sb-sg-info-viewer',
  templateUrl: './info-viewer.component.html',
  styleUrls: ['./info-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoViewerComponent implements OnInit {
  @Input()
  key: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(SGInfoViewerDialogComponent, {
      data: {
        key: this.key.toLowerCase()
      }
    });
  }

  isValidKey() {
    return [
      'scrum',
      'theory',
      'values',
      'team',
      'developers',
      'product owner',
      'scrum master',
      'events',
      'sprint',
      'planning',
      'daily',
      'review',
      'retrospective',
      'artifacts',
      'product backlog',
      'sprint backlog',
      'increment'
    ].includes(this.key);
  }
}
