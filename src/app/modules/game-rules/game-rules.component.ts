import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss']
})
export class GameRulesComponent implements OnInit {
  public books: any = [
    { title: 'Basic rules', url: 'basic-rules' },
    { title: 'Advanced guide', url: '/game-rules' },
    { title: 'Bestiary', url: '/game-rules' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
