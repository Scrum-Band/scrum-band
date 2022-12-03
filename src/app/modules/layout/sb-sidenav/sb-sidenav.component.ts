import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-sidenav',
  templateUrl: './sb-sidenav.component.html',
  styleUrls: ['./sb-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbSidenavComponent implements OnInit {
  public MENU = [
    { name: 'the-adventure', icon: 'signpost' },
    { name: 'game-rules', icon: 'menu_book' },
    { name: 'character-sheet', icon: 'badge' },
    { name: 'sm-screen', icon: 'smart_screen' },
    { name: 'FAQ', icon: 'quiz' }
  ];

  @Input() smallDisplay: boolean = true;
  @Input() signedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {}
}
