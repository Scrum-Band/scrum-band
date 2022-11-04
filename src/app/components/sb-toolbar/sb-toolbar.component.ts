import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: "sb-toolbar",
  templateUrl: "./sb-toolbar.component.html",
  styleUrls: ["./sb-toolbar.component.scss"],
})
export class SbToolbarComponent implements OnInit {
  public isMobileDisplay: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(["(max-width: 768px)"])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.isMobileDisplay = true;
        } else {
          this.isMobileDisplay = false;
        }
      });
  }

  ngOnInit(): void {}
}
