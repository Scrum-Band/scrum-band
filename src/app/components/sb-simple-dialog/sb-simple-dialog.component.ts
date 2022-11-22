import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'sb-simple-dialog',
  templateUrl: './sb-simple-dialog.component.html',
  styleUrls: ['./sb-simple-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbSimpleDialogComponent implements OnInit {
  constructor(public dialog: MatDialogRef<SbSimpleDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: string) {}

  confirm(): void {
    this.dialog.close(true);
  }

  ngOnInit() {}
}
