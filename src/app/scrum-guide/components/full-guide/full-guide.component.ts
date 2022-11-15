import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-sg-full-guide',
  templateUrl: './full-guide.component.html',
  styleUrls: ['./full-guide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullGuideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
