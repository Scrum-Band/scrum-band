import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SGInfoViewerDialogData } from '../../interfaces/scrum-guide-info-dialog-data.interface';

@Component({
  selector: 'sb-sg-info-viewer-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SGInfoViewerDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: SGInfoViewerDialogData) {}

  ngOnInit(): void {}
}
