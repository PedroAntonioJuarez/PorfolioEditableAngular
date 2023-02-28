import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/assets/models/educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:Educacion[]=[]
  
  
  

   constructor(private porfolioService:PorfolioService){}

   ngOnInit(): void {
    this.porfolioService.getEducacion().subscribe(e => {
      this.educacion = e
    })
     }

     addEducacion(educacion:Educacion){
      this.porfolioService.addEducacion(educacion).subscribe(data =>{
        this.educacion.push(data)
      })
    }
      
   
    }
