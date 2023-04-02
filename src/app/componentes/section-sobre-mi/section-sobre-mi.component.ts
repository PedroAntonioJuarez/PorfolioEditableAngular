import { Component, OnInit } from '@angular/core';

import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SobreMi } from 'src/assets/models/sobreMi';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section-sobre-mi',
  templateUrl: './section-sobre-mi.component.html',
  styleUrls: ['./section-sobre-mi.component.css']
})
export class SectionSobreMiComponent implements OnInit {
  

  sobreMi: SobreMi[]=[];

  formValue!: FormGroup
  modeloSobremi: SobreMi = new SobreMi()
  
  

  constructor(private porfolioService: PorfolioService, private formBuilder: FormBuilder ){}
  
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      descripcion:['']
    })

    this.getSobremi()
  }

  getSobremi(){
    this.porfolioService.getAllSobreMi().subscribe(data => {
      this.sobreMi = data
    });
  }

  botonEditar(item: SobreMi){
    this.modeloSobremi.id = item.id
    this.formValue.controls['descripcion'].setValue(item.descripcion);
    console.log(item)
  }

  guardarActualizacion() {
    this.modeloSobremi.descripcion = this.formValue.value.descripcion;
    this.porfolioService.updateSobreMi(this.modeloSobremi).subscribe(data => {
      alert("guardado correctamente")
      this.getSobremi()
    })
}

}