import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Experiencia} from 'src/assets/models/experiencia'

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  @Output()onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter()
  expriencias:Experiencia[] = []
  texto:string ="";
  descripcion:string="";

  constructor(){}

  ngOnInit(): void {}

  onSubmit(){
    console.log("me apretaste")
    if(this.texto.length === 0){
      alert("ingresa una tarea")
      return
    }
    const nuevaExperiencia = {
      nombre: this.texto,
      description: this.descripcion,
      
    }
    this.onAddExperiencia.emit(nuevaExperiencia)
}
}
