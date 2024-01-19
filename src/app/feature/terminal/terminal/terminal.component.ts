import { Component, OnInit, ViewChild } from '@angular/core';
import { TablaComponent } from 'src/app/core/components/tabla/tabla/tabla.component';
import { Terminal } from 'src/app/entities/terminal';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  columnas: string[] = ['id', 'nombre', 'ciudad.nombre', 'codigoIata'];
  datos: Terminal[] = [];

  @ViewChild('tabla')  tabla!: TablaComponent;

  constructor(private terminalService: TerminalService) { }

  ngOnInit(): void {
    this.datos = this.terminalService.obtenerTodos();


  }

}
