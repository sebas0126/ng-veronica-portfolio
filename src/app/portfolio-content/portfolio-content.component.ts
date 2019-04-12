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
      message: "Extasis 9:05: Un poema para el fin del mundo. 2017",
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
      message: "¿Qué está pasando con el teatro universitario?. 2017",
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
      message: "El teatro La hora 25: El arte para la transformación social. 2018",
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
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-11-full.png",
      alt: "assets/imgs/chair-11-emp.png",
      message: "Cuando la historia sucede al revés: El descubrimiento de Europa. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/Cuando-la-historia-sucede-al-rev%C3%A9s:-El-descubrimiento-de-Europa/104?fbclid=IwAR3MA02kAotdNwagkIJ0OgSHL05qwvmwOANYoXys1FKrqfNOesBO1SZFeSQ"
    },
    {
      image: "assets/imgs/chair-2-full.png",
      alt: "assets/imgs/chair-2-emp.png",
      message: "Escombrera, una obra sobre la memoria y la violencia en Medellín. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/Escombrera,-una-obra-sobre-la-memoria-y-la-violencia-en-Medell%C3%ADn/105"
    },
    {
      image: "assets/imgs/chair-5-full.png",
      alt: "assets/imgs/chair-5-emp.png",
      message: "Las mujeres afro se toman la palabra. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/Las-mujeres-afro-se-toman-la-palabra./103?fbclid=IwAR2UXyolu7hy3lu7KJHHSSDA7NWUzv-uKXxsZIgfdBV0iJzyZqo56bzpmSg"
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-3-emp.png",
      alt: "",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-9-full.png",
      alt: "assets/imgs/chair-9-emp.png",
      message: "La Hora 25 es la hora de las criaturas de un día. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/La-Hora-25-es-la-hora-de-las-criaturas-de-un-d%C3%ADa./102"
    },
    {
      image: "assets/imgs/chair-14-full.png",
      alt: "assets/imgs/chair-14-emp.png",
      message: "De la selva a la ciudad, un desplazamiento. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/De-la-selva-a-la-ciudad,-un-desplazamiento./101"
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair.png",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-7-full.png",
      alt: "assets/imgs/chair-7-emp.png",
      message: "Una comparsa para viajar en el tiempo. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/Una-comparsa-para-viajar-en-el-tiempo/100"
    },
    {
      image: "assets/imgs/chair-11-emp.png",
      alt: "",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-5-full.png",
      alt: "assets/imgs/chair-5-emp.png",
      message: "10 años, 10 personajes, 1 ilusionista. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/10-a%C3%B1os,-10-personajes,-1-ilusionista./99?fbclid=IwAR31Tm-2xRDV31cW9ZMIwQVEN8XFMsDFYYzpWWUNzAjcd8xbGWhCehUBd5I"
    },
    {
      image: "assets/imgs/chair-14-emp.png",
      alt: "",
      message: "",
      show: false,
      url: ""
    },
    {
      image: "assets/imgs/chair-3-full.png",
      alt: "assets/imgs/chair-3-emp.png",
      message: "Tras la pista del marinero de Amsterdam. 2018",
      show: false,
      url: "https://www.salallena.com/noticias/Tras-la-pista-del-marinero-de-Ámsterdam-del-Teatro-El-Trueque/96"
    }
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
    }, 2000);
  }

  userInteraction() {
    if (this.interval){
      clearInterval(this.interval);
      this.mouseLeave(this.currentChair);
      this.interval = null;
    } 
  }

  goArticle(url) {
    if(url){
      window.open(url, "_blank");
    }
  }

  mouseEnter(chair){
    if(chair.message) chair.show = true;
  }

  mouseLeave(chair){
    chair.show = false;
  }

}
