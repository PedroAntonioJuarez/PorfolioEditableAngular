import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

// EL LOGIN NO FUNCIONA, SOLAMENTE VALIDA EL TIPO DE DATOS INGRESADOS Y LA CANTIDAD DE CARACTERES

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })}

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {


  url = 'https://porfolio-frontend-pedro.web.app';
  currentUserSubjet: BehaviorSubject<any>;


  private isLoggedIn = false;


  constructor(private http:HttpClient) { 
    console.log("el servivio de autenticación esta corriendo");
    this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));

  }
 
}
