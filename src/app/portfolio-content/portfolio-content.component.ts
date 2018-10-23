import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.sass']
})
export class PortfolioContentComponent implements OnInit {

  action = false;
  currentChair;
  interval;

  chairs = [
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false
    },
    {
      image: "assets/imgs/chair-2-full.png",
      message: "Lorem ipsum dolor sit amet",
      show: false
    },
    {
      image: "assets/imgs/chair-3-emp.png",
      message: "",
      show: false
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false
    },
    {
      image: "assets/imgs/chair-5-full.png",
      message: "Lorem ipsum dolor sit amet",
      show: false
    },
    {
      image: "assets/imgs/chair-6-emp.png",
      message: "",
      show: false
    },
    {
      image: "assets/imgs/chair-7-full.png",
      message: "Lorem ipsum dolor sit amet",
      show: false
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false
    },
    {
      image: "assets/imgs/chair-9-full.png",
      message: "Lorem ipsum dolor sit amet",
      show: false
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false
    },
    {
      image: "assets/imgs/chair-11-full.png",
      message: "Lorem ipsum dolor sit amet",
      show: false
    },
    {
      image: "assets/imgs/chair-12-emp.png",
      message: "",
      show: false
    },
    {
      image: "assets/imgs/chair-14-full.png",
      message: "Lorem ipsum dolor sit amet",
      show: false
    },

  ]

  constructor() { }

  ngOnInit() {
    this.animateChairs();
  }

  animateChairs(){
    let chairs = this.chairs.filter(chair => chair.message);
    let index = 0;
    this.interval = setInterval(() => {
      this.mouseLeave(chairs[index - 1 == -1 ? chairs.length - 1 : index - 1]);
      this.mouseEnter(chairs[index]);
      this.currentChair = chairs[index];
      index++;
      if(index > chairs.length - 1) index = 0;
    }, 1000);
  }

  userInteraction(){
    if(this.interval) clearInterval(this.interval);
    this.mouseLeave(this.currentChair);
  }

  mouseEnter(chair) {
    chair.show = chair.message
    if (chair.show) chair.image = chair.image.replace("full", "emp");
  }

  mouseLeave(chair) {
    if (chair.show) chair.image = chair.image.replace("emp", "full");
    chair.show = false;
  }

}
