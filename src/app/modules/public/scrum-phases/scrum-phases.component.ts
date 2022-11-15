import { Component, OnInit } from "@angular/core";
import { FeaturesService } from "../features/features.service";

@Component({
  selector: "sb-scrum-phases",
  templateUrl: "./scrum-phases.component.html",
  styleUrls: ["./scrum-phases.component.scss"],
})
export class ScrumPhasesComponent implements OnInit {
  constructor(private featuresService: FeaturesService) {}

  ngOnInit(): void {}
}
