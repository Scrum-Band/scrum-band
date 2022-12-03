import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-sidenav',
  templateUrl: './sb-sidenav.component.html',
  styleUrls: ['./sb-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbSidenavComponent implements OnInit {
  public MENU = [
    { name: 'adventures', icon: 'signpost' },
    { name: 'game-rules', icon: 'menu_book' },
    { name: 'character-sheet', icon: 'badge' },
    { name: 'inventory', icon: 'backpack' }
  ];

  @Input() smallDisplay: boolean = true;
  @Input() signedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {}
}
