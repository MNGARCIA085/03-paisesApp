import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string ='';

  hayError: boolean = false;

  // inyecto el servicio
  constructor( private paisService: PaisService ){};

  buscar(){
    this.hayError = false; // quita el error anterior de haberlo
    console.log(this.termino);
    // uso el servicio de busqueda
    this.paisService.buscarPais(this.termino).subscribe( resp => {
      console.log(resp);
    }, (err) => {
      console.log('Error');
      this.hayError = true;
    });
  }
}
