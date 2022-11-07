import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sb-scrum-phases",
  templateUrl: "./scrum-phases.component.html",
  styleUrls: ["./scrum-phases.component.scss"],
})
export class ScrumPhasesComponent implements OnInit {
  private features: any[] = [{ title: "" }];

  constructor() {}

  ngOnInit(): void {}
}
