import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Experiencia} from 'src/assets/models/experiencia'

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  @Output()onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter()
  experiencias:Experiencia[] = []

  

  nombre:string ="";
  descripcion:string="";
  
  

  constructor(){}

  ngOnInit(): void {
   
  }

  

  onSubmit(){
    console.log("me apretaste")
    const nuevaExperiencia = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      }

    
    if(this.nombre.length === 0){
      alert("ingresa una tarea")
      return
    }
        this.onAddExperiencia.emit(nuevaExperiencia)

    alert("Los datos se añadieron exitosamente. Puedes ingresar nuevamente")
  }


}
