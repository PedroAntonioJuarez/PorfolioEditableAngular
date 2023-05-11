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
  
  // private urlExperiencia ='http://localhost:3000/experiencia'
  private urlApi ='https://porfolio-backend-p5jp.onrender.com'
  private urlExperiencia ='https://porfolio-backend-p5jp.onrender.com/ver/experiencia'
  private urlSobremi = 'https://porfolio-backend-p5jp.onrender.com/ver/personas'
  private urlEducacion = 'https://porfolio-backend-p5jp.onrender.com/ver/educacion'
  

  experiencia: Experiencia[]=[]
  // sobreMi: SobreMi[]=[]
  educacion: Educacion[]=[]
  perfil: SobreMi[]=[]

  constructor(private http:HttpClient) { }



  getAllExperience():Observable<Experiencia[]> {
      return this.http.get<Experiencia[]>(this.urlExperiencia)
  }

  getAllSobreMi():Observable<SobreMi[]> {
    return this.http.get<SobreMi[]>(this.urlSobremi)
}

  getEducacion():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.urlEducacion)
  }


    
  addExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`https://porfolio-backend-p5jp.onrender.com/agregar/experiencia`, experiencia, httpOptions)
  }

  addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`https://porfolio-backend-p5jp.onrender.com/agregar/educacion`, educacion, httpOptions)
  }
      

  eliminaExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    
    const url = `${this.urlApi}/borrar/${experiencia.id}`
    return this.http.delete<Experiencia>(url)
  }

  eliminarEducacion(educacion:Educacion):Observable<Educacion>{
    const urlEducacion = `${this.urlApi}/borrarEdu/${educacion.id}`
    return this.http.delete<Educacion>(urlEducacion)
  }

  updateSobreMi(perfil:SobreMi):Observable<SobreMi[]>{
    const urlSobreMi = `${this.urlApi}/actualizar/persona`
    return this.http.put<SobreMi[]>(urlSobreMi, perfil, httpOptions)
  }

  updateExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    const urlExperiencia = `${this.urlApi}/actualizar/experiencia`
    return this.http.put<Experiencia>(urlExperiencia, experiencia, httpOptions)
  }

  updateEducacion(educacion: Educacion):Observable<Educacion>{
    const urlEducacion = `${this.urlApi}/actualizar/educacion`
    return this.http.put<Experiencia>(urlEducacion, educacion, httpOptions)
  }
}

 