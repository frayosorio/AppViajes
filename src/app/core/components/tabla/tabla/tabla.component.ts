import { Component, Input, OnInit } from '@angular/core';

export interface Filtro {
  numeroColumna: number;
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

  filtros: Filtro[] = [];

  columnaFiltro: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  public agregarFiltro() {
    if (this.columnaFiltro >= 0) {
      const opciones = Array.from(new Set(this.datos.map(item => item[this.columnaFiltro])));

      window.alert(opciones);

      const filtro = { numeroColumna: this.columnaFiltro, opciones: opciones.map(String), opcionSeleccionada: "" };
      this.filtros.push(filtro);
    }
  }

}
