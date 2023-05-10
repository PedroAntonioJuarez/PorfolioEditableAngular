import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/servicios/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticarService: AutenticarService, private ruta:Router) {
    this.myForm = this.formBuilder.group({
        email:['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          devideId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
        })

      })
  }


    ngOnInit(): void {
    
    }

   get Email(){
    return this.myForm.get('email')
   }

  get Password(){
    return this.myForm.get('password')
  }

    login(event:Event){
      event.preventDefault;
      this.autenticarService.iniciarSesion(this.myForm.value).subscribe(data => {
        console.log("data" + JSON.stringify(data))
        this.ruta.navigate(['']);
      })
    }
  }
