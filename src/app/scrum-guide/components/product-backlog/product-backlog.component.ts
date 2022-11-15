import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../scrum-guide.constant';

@Component({
  selector: 'sb-sg-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBacklogComponent implements OnInit {
  public productBacklog: any = SCRUM_GUIDE.artifacts.productBacklog;
  constructor() {}

  ngOnInit(): void {}
}
