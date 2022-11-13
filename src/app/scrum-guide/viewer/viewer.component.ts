import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class SGViewerComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  scrollTo(target: string) {
    const targetElement = document.getElementById(target)!;
    window.scrollTo(0, targetElement.offsetTop);
  }

  public MENU = [
    { name: 'scrum-guide.intro.title', icon: 'menu', anchor: 'sb-sg-intro' },
    { name: 'scrum-guide.purpose.title', icon: 'menu', anchor: 'sb-sg-purpose' },
    { name: 'scrum-guide.definition.title', icon: 'menu', anchor: 'sb-sg-definition' },
    { name: 'scrum-guide.theory.title', icon: 'menu', anchor: 'sb-sg-theory' },
    { name: 'scrum-guide.values.title', icon: 'menu', anchor: 'sb-sg-values' },
    { name: 'scrum-guide.team.title', icon: 'menu', anchor: 'sb-sg-team' },
    { name: 'scrum-guide.events.title', icon: 'menu', anchor: 'sb-sg-events' },
    { name: 'scrum-guide.artifacts.title', icon: 'menu', anchor: 'sb-sg-artifacts' },
    { name: 'scrum-guide.endNotes.title', icon: 'menu', anchor: 'sb-sg-endNotes' },
    { name: 'scrum-guide.thanks.title', icon: 'menu', anchor: 'sb-sg-thanks' },
    { name: 'scrum-guide.changes.title', icon: 'menu', anchor: 'sb-sg-changes' }
  ];
}
