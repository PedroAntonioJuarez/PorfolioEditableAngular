import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Experiencia } from 'src/assets/models/experiencia';
import { SobreMi } from 'src/assets/models/sobreMi';
import { Educacion } from 'src/assets/models/educacion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })}

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
  private apiUrl ='http://localhost:3000/experiencia'
  private urlSobremi = 'http://localhost:3000/perfil'
  private urlEducacion = 'http://localhost:3000/educacion'

  experiencia: Experiencia[]=[]
  sobreMi: SobreMi[]=[]
  educacion: Educacion[]=[]

  constructor(private http:HttpClient) { }



  getAllExperience():Observable<Experiencia[]> {
      return this.http.get<Experiencia[]>(this.apiUrl)
  }

  getAllSobreMi():Observable<SobreMi[]> {
    return this.http.get<SobreMi[]>(this.urlSobremi)
}

  getEducacion():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.urlEducacion)
  }


    
  addExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl, experiencia, httpOptions)
  }

  addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.urlEducacion, educacion, httpOptions)
  }
      

  eliminaExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    const url = `${this.apiUrl}/${experiencia.id}`
    return this.http.delete<Experiencia>(url)
  }
}
