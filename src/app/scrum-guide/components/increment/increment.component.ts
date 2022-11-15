import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementComponent implements OnInit {
  public increment: any = SCRUM_GUIDE.artifacts.increment;
  constructor() {}

  ngOnInit(): void {}
}
