import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SCRUM_GUIDE } from '../../../services/idb/scrum-guide/scrum-guide.constant';

@Component({
  selector: 'sb-sg-product-owner',
  templateUrl: './product-owner.component.html',
  styleUrls: ['./product-owner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductOwnerComponent implements OnInit {
  public po: any = SCRUM_GUIDE.team.po;
  constructor() {}

  ngOnInit(): void {}
}
