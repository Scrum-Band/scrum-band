import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sb-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
})
export class BackgroundComponent implements OnInit {
  constructor() {}

  private postitsNum: number = 100;
  private colors: string[] = ["#3CC157", "#2AA7FF", "#FCBC0F", "#F85F36"];
  private postits: any = [];

  ngOnInit(): void {
    this.generateBgPostits();
  }

  generateBgPostits(): void {
    for (let i = 0; i < this.postitsNum; i++) {
      let postit = document.createElement("div");
      postit.classList.add("postit");
      postit.style.background =
        this.colors[Math.floor(Math.random() * this.colors.length)];
      postit.style.left = `${Math.floor(Math.random() * 100)}vw`;
      postit.style.top = `${Math.floor(Math.random() * 80)}vh`;
      postit.style.transform = `scale(${Math.random() * 2})`;
      postit.style.width = `${Math.random() * 2}em`;
      postit.style.height = postit.style.width;

      this.postits.push(postit);
      document.body.append(postit);
    }

    // Keyframes
    this.postits.forEach(
      (
        el: {
          animate: (
            arg0: { transform: string }[],
            arg1: {
              duration: number; // random duration
              direction: string;
              fill: string;
              iterations: number;
              easing: string;
            }
          ) => any;
        },
        i: number,
        ra: any
      ) => {
        let to = {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12,
        };

        let anim = el.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` },
          ],
          {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        );
      }
    );
  }
}
