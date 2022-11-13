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

  scrollTo(target: string, parent?: string) {
    const targetElement = document.getElementById(target)!;
    let finalScrollPosition = targetElement.offsetTop;
    if (parent) {
      const parentElement = document.getElementById(parent)!;
      finalScrollPosition = finalScrollPosition + parentElement.offsetTop;
    }
    window.scrollTo(0, finalScrollPosition);
  }

  public MENU = [
    { name: 'scrum-guide.intro.title', icon: 'menu', anchor: 'sb-sg-intro' },
    { name: 'scrum-guide.purpose.title', icon: 'menu', anchor: 'sb-sg-purpose' },
    { name: 'scrum-guide.definition.title', icon: 'menu', anchor: 'sb-sg-definition' },
    { name: 'scrum-guide.theory.title', icon: 'menu', anchor: 'sb-sg-theory' },
    { name: 'scrum-guide.values.title', icon: 'menu', anchor: 'sb-sg-values' },
    { name: 'scrum-guide.team.title', icon: 'menu', anchor: 'sb-sg-team' },
    { name: 'scrum-guide.team.developers.title', icon: 'menu', anchor: 'sb-sg-developers', parent: 'sb-sg-team' },
    { name: 'scrum-guide.team.po.title', icon: 'menu', anchor: 'sb-sg-product-owner', parent: 'sb-sg-team' },
    { name: 'scrum-guide.team.sm.title', icon: 'menu', anchor: 'sb-sg-scrum-master', parent: 'sb-sg-team' },
    { name: 'scrum-guide.events.title', icon: 'menu', anchor: 'sb-sg-events' },
    { name: 'scrum-guide.events.sprint.title', icon: 'menu', anchor: 'sb-sg-sprint', parent: 'sb-sg-events' },
    { name: 'scrum-guide.events.planning.title', icon: 'menu', anchor: 'sb-sg-planning', parent: 'sb-sg-events' },
    { name: 'scrum-guide.events.daily.title', icon: 'menu', anchor: 'sb-sg-daily', parent: 'sb-sg-events' },
    { name: 'scrum-guide.events.review.title', icon: 'menu', anchor: 'sb-sg-review', parent: 'sb-sg-events' },
    {
      name: 'scrum-guide.events.retrospective.title',
      icon: 'menu',
      anchor: 'sb-sg-retrospective',
      parent: 'sb-sg-events'
    },
    { name: 'scrum-guide.artifacts.title', icon: 'menu', anchor: 'sb-sg-artifacts' },
    {
      name: 'scrum-guide.artifacts.productBacklog.title',
      icon: 'menu',
      anchor: 'sb-sg-product-backlog',
      parent: 'sb-sg-artifacts'
    },
    {
      name: 'scrum-guide.artifacts.sprintBacklog.title',
      icon: 'menu',
      anchor: 'sb-sg-sprint-backlog',
      parent: 'sb-sg-artifacts'
    },
    {
      name: 'scrum-guide.artifacts.increment.title',
      icon: 'menu',
      anchor: 'sb-sg-increment',
      parent: 'sb-sg-artifacts'
    },
    { name: 'scrum-guide.endNotes.title', icon: 'menu', anchor: 'sb-sg-end-note' },
    { name: 'scrum-guide.thanks.title', icon: 'menu', anchor: 'sb-sg-thanks' },
    { name: 'scrum-guide.changes.title', icon: 'menu', anchor: 'sb-sg-changes' }
  ];
}
