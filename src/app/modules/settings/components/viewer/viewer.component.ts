import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class SettingsViewerComponent implements OnInit {
  typesOfShoes: string[] = ['General', 'Identities'];

  constructor() {}

  ngOnInit(): void {}
}
