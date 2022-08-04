import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libros } from '../models/respuestas.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) {
    console.log('Servicios libros listo!')
   }
   public get(url:string){
    return this.http.get(url);
   }
   cargarLibros(){
    const url = 'http://127.0.0.1:8000/api/biblioteca/'
    return this.http.get<Libros[]>(url)
   }
}
