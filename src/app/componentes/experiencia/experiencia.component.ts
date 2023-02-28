import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from 'src/assets/models/experiencia';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias:Experiencia[]=[];
  
  constructor(private porfolioService:PorfolioService){}

   ngOnInit(): void {
     this.porfolioService.getAllExperience().subscribe(data => {
      this.experiencias =data
     })
   }

   addExperiencia(experiencia:Experiencia){
    this.porfolioService.addExperiencia(experiencia).subscribe(data => {
      this.experiencias.push(data)
    })
  }

  deleteExperiencia(experiencia:Experiencia){
    this.porfolioService.eliminaExperiencia(experiencia).subscribe(()=>{
      this.experiencias = this.experiencias.filter(e => {
        return e.id !== experiencia.id
      })
    })
  }

   
}
