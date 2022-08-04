import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Libros } from 'src/app/models/respuestas.interface';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Array<any> = []
  public listLibros: any = []
 

  constructor(private librosService: LibrosService) { }
  ngOnInit(): void {

    this.librosService.cargarLibros()
    .subscribe( data => {
      this.libros = data
    });

    this.cargarData();
  }

  public cargarData(){
    this.librosService.get('http://127.0.0.1:8000/api/biblioteca/')
    .subscribe(respuesta =>{
      this.listLibros = respuesta;
    })
  }

}
