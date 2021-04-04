import { Component, OnInit } from '@angular/core';
import { Cooperactive } from '../models/cooperactive.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    this.initializeProject();
  }
  

// projects component

  
projects: Cooperactive[]= [];
 
initializeProject(){
  this.projects=[
    {
      id:1,
      name: 'Rosario salta',
      descResume:'Establecimiento equipado para tricking, acrobacia de piso, parkour en la ciudad de Rosario.',
      vision:'Brindar un espacio a artistas acrobatas, traceurs, freerunners, gimnastas, trickers, o el que quiera divertirse en el aire',
      picture: '../../assets/img/rossalta.jpg'
    },
    {
      id:2,
      name: 'Medicinnabis',
      descResume:'Produccion y distribucion de cannabis medicinal en Argentina',
      vision:'Elevar los estandares productivos de la region aprovechando el suelo, condiciones climaticas y cultura en la industria del cannabis medicinal. Convertirse en exportador global',
      picture: '../../assets/img/cañamo.jpg'
    },
    {
      id:3,
      name: 'Atrapanta',
      descResume:'Videojuego de atrapar/escapar 1v1 orientado a mobile',
      vision:'none',
      picture: '../../assets/img/game2.jpg'
    },
    {
      id:4,
      name: 'Loop jam',
      descResume:'Interfaz grafica para co-crear musica basado en una loopera real-time con otros jugadores',
      vision:'Espacio para la creacion y streaming de musica cooperativa de forma remota de diferentes estilos musicales. Orientado a Beatmakers, DJs, Sound Designers, musicos buscando cosas nuevas',
      picture: '../../assets/img/looper.png'
    },
  ]
}


}
