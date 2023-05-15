import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from 'src/assets/models/experiencia';

import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias:Experiencia[]=[];
  

  ////////////////////

  formValue!: FormGroup
  modeloExperiencia: Experiencia = new Experiencia()
  
  
  //////////////////////////


  
  constructor(private porfolioService:PorfolioService, private formBuilder: FormBuilder){}

   ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nombre:[''],
      descripcion:['']
    })
     this.getExperiencias()
    }
   
   getExperiencias(){
    this.porfolioService.getAllExperience().subscribe(data => {
       this.experiencias =data
   })}


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




  abrirFormParaEditar(item:Experiencia){
    this.modeloExperiencia.id = item.id
    this.formValue.controls['nombre'].setValue(item.nombre);
    this.formValue.controls['descripcion'].setValue(item.descripcion)
    
    console.log(item)
  }



  guardarActualizacion(){
    this.modeloExperiencia.nombre = this.formValue.value.nombre;
    this.modeloExperiencia.descripcion = this.formValue.value.descripcion;
    this.porfolioService.updateExperiencia(this.modeloExperiencia).subscribe((a) => {
      alert("Actualización exitosa. Puede cerrar el formulario")
      this.formValue.reset();
      this.getExperiencias();
      
    })
    

   }


   
}



