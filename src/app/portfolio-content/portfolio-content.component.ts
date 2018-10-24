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
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-2-full.png",
      alt: "assets/imgs/chair-2-emp.png",
      message: "EXTASIS 9:05: UN POEMA PARA EL FIN DEL MUNDO. 2017 ",
      show: false,
      url: "http://aplaudirdepie.com/extasis-905-un-poema-para-el-fin-del-mundo/"
    },
    {
      image: "assets/imgs/chair-3-full.png",
      alt: "assets/imgs/chair-3-emp.png",
      message: "Después de tantos kilómetros recorridos. 2017",
      show: false,
      url: "https://www.salallena.com/noticias/Despu%C3%A9s-de-tantos-kil%C3%B3metros-recorridos/73"
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-5-full.png",
      alt: "assets/imgs/chair-5-emp.png",
      message: "¿QUÉ ESTÁ PASANDO CON EL TEATRO UNIVERSITARIO?. 2017",
      show: false,
      url: "http://aplaudirdepie.com/que-esta-pasando-con-el-teatro-universitario/"
    },
    {
      image: "assets/imgs/chair-6-emp.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-7-full.png",
      alt: "assets/imgs/chair-7-emp.png",
      message: "El teatro La hora 25: El arte para la transformación social.2018",
      show: false,
      url: "https://www.elespectador.com/noticias/noticias-de-cultura/el-teatro-la-hora-25-el-arte-para-la-transformacion-social-articulo-745531"
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-9-full.png",
      alt: "assets/imgs/chair-9-emp.png",
      message: "Oscar González y su mediación e intervención en el teatro. 2018",
      show: false,
      url: "http://www.elmundo.com/noticia/Oscar-Gonzalez-y-su-mediacion-e-intervencion-en-el-teatro/373313?platform=hootsuite"
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-11-full.png",
      alt: "assets/imgs/chair-11-emp.png",
      message: "A qué suena “El Principito” en el Pequeño Teatro. 2017",
      show: false,
      url: "https://www.salallena.com/noticias/A-qu%C3%A9-suena-%E2%80%9CEl-Principito%E2%80%9D-en-el-Peque%C3%B1o-Teatro/72"
    },
    {
      image: "assets/imgs/chair-12-emp.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-14-full.png",
      alt: "assets/imgs/chair-14-emp.png",
      message: "Amnesia: fragmentos del olvido. 2017",
      show: false,
      url: "https://www.salallena.com/noticias/Amnesia:-fragmentos-del-olvido/69"
    },

  ]

  constructor() { }

  ngOnInit() {
    this.animateChairs();
  }

  animateChairs() {
    let chairs = this.chairs.filter(chair => chair.message);
    let index = 0;
    this.interval = setInterval(() => {
      this.mouseEnter(chairs[index]);
      this.mouseLeave(chairs[index - 1 == -1 ? chairs.length - 1 : index - 1]);
      this.currentChair = chairs[index];
      index++;
      if (index > chairs.length - 1) index = 0;
    }, 1000);
  }

  userInteraction() {
    if (this.interval){
      clearInterval(this.interval);
      this.mouseLeave(this.currentChair);
      this.interval = null;
    } 
  }

  goArticle(url) {
    window.open(url, "_blank");
  }

  mouseEnter(chair){
    if(chair.message) chair.show = true;
  }

  mouseLeave(chair){
    chair.show = false;
  }

}
