import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Educacion } from 'src/assets/models/educacion';
;

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  @Output()addEducacion:EventEmitter<Educacion> = new EventEmitter()
  educacion:Educacion[]=[]
  texto:string =""
  descripcion: string = ""

  constructor(){}

  ngOnInit(): void {
    
  }
  guardarEducacion(){
    console.log("me aprestaste")

    if(this.texto.length === 0){
      alert ("no insertaste ninguna nueva Educación")
      return }

    const nuevaEducacion = {
      nombre: this.texto,
      descripcion: this.descripcion
    }
    this.addEducacion.emit(nuevaEducacion)
      


  }


}
