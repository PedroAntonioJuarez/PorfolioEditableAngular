import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })}

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {


  url = 'http://localhost:3000/login';
  currentUserSubjet: BehaviorSubject<any>;


  private isLoggedIn = false;


  constructor(private http:HttpClient) { 
    console.log("el servivio de autenticación esta corriendo");
    this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));

  }
  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales, httpOptions).pipe(map(response => {
      sessionStorage.setItem('currentUser', JSON.stringify(response));
      this.isLoggedIn = true;
      return response;
    }))
  }
}
