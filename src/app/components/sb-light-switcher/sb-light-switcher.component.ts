import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, Renderer2 } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "sb-light-switcher",
  templateUrl: "./sb-light-switcher.component.html",
  styleUrls: ["./sb-light-switcher.component.scss"],
})
export class SbLightSwitcherComponent implements OnInit {
  private classOn: string = "light-on";
  private classOff: string = "light-off";
  lightsOn: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.changeClasses();
  }

  switchLight() {
    this.lightsOn = !this.lightsOn;
    this.changeClasses();
  }

  changeClasses() {
    if (this.lightsOn === false) {
      this.renderer.addClass(this.document.body, this.classOff);
      this.renderer.removeClass(this.document.body, this.classOn);
    } else {
      this.renderer.addClass(this.document.body, this.classOn);
      this.renderer.removeClass(this.document.body, this.classOff);
    }
  }
}
