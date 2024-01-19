import { Component, Input, OnInit } from '@angular/core';

export interface Filtro {
  columnaFiltro: string;
  opciones: string[];
  opcionSeleccionada: string;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() columnas: string[] = [];
  @Input() datos: any[] = [];

  datosCompletos: any[] = [];

  filtros: Filtro[] = [];

  columnaFiltro: string = "";
  filtrado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public agregarFiltro() {
    if (this.columnaFiltro != "") {

      let opciones = [];
      if (!this.columnaFiltro.includes('.')) {
        opciones = Array.from(new Set(this.datos.map(item => item[this.columnaFiltro])));
      }
      else {
        const campos = this.columnaFiltro.split('.');
        opciones = Array.from(new Set(this.datos.map(item => item[campos[0]][campos[1]])));
      }

      const filtro = { columnaFiltro: this.columnaFiltro, opciones: opciones.map(String), opcionSeleccionada: "" };
      this.filtros.push(filtro);
    }
  }

  public quitarFiltro(filtro: Filtro) {
    const indice = this.filtros.findIndex(item => item.columnaFiltro === filtro.columnaFiltro);
    if (indice !== -1) {
      this.filtros.splice(indice, 1);
    }
  }

  public filtrar() {
    this.filtrado = true;
    this.datosCompletos = this.datos;
    this.filtros.forEach(filtro => {
      if (!filtro.columnaFiltro.includes('.')) {
        this.datos = this.datos.filter(item => item[filtro.columnaFiltro] == filtro.opcionSeleccionada);
      }
      else {
        const campos = filtro.columnaFiltro.split('.');
        this.datos = this.datos.filter(item => item[campos[0]][campos[1]] == filtro.opcionSeleccionada);
      }
    });
  }

  public desfiltrar() {
    this.datos = this.datosCompletos;
    this.filtrado = false;
  }
}
