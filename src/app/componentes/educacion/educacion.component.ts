import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/assets/models/educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:Educacion[]=[]
  
  formValue!: FormGroup
  modeloEducacion: Educacion = new Educacion()
  
  

   constructor(private porfolioService:PorfolioService, private formBuilder: FormBuilder){}

   ngOnInit(): void {
this.formValue = this.formBuilder.group({
  nombre:[''],
  descripcion:['']
  })

    this.getEducacion()
     }


     getEducacion(){
      this.porfolioService.getEducacion().subscribe(e => {
        this.educacion = e
      })
     }

     addEducacion(educacion:Educacion){
      this.porfolioService.addEducacion(educacion).subscribe(data =>{
        this.educacion.push(data)
      })
    }

    deleteEducacion(educacion:Educacion){
      this.porfolioService.eliminarEducacion(educacion).subscribe( () => {
        this.educacion = this.educacion.filter( (edu) => {
          return edu.id !== educacion.id
        })
      })
    }
      
    abrirFormParaEditar(item:Educacion){
      this.modeloEducacion.id = item.id
      this.formValue.controls['nombre'].setValue(item.nombre)
      this.formValue.controls['descripcion'].setValue(item.descripcion)

     
    }


    guardarActualizacion(){
      this.modeloEducacion.nombre = this.formValue.value.nombre;
      this.modeloEducacion.descripcion =this.formValue.value.descripcion;
      this.porfolioService.updateEducacion(this.modeloEducacion).subscribe(data =>{
        alert("Actualización exitosa. Puedes cerrar el formulario");
        this.formValue.reset();
        this.getEducacion()
      })
    }
   
    }

