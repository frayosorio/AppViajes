import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Terminal } from '../entities/terminal';
import { TipoTerminal } from '../entities/tipo-terminal';
import { Ciudad } from '../entities/ciudad';
import { Pais } from '../entities/pais';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor() { }

  public obtenerTodos(): Terminal[] {
    const paisCOL = new Pais(1, 'Colombia', 'COL');
    const ciudadMED=new Ciudad(1, 'Medellín', paisCOL);
    const ciudadBAR=new Ciudad(2, 'Barranquilla', paisCOL);
    const ciudadCAL=new Ciudad(3, 'Cali', paisCOL);
    const ciudadBOG=new Ciudad(3, 'Bogotá', paisCOL);
    return [
      new Terminal(1, 'Aeropuerto Internacional José María Córdova', TipoTerminal.Aerea, ciudadMED, 'MDE'),
      new Terminal(2, 'Aeropuerto Enrique Olaya Herrera', TipoTerminal.Aerea, ciudadMED, 'EOH'),
      new Terminal(3, 'Aeropuerto Internacional Ernesto Cortissoz', TipoTerminal.Aerea, ciudadBAR, 'BAQ'),
      new Terminal(4, 'Aeropuerto Internacional Alfonso Bonilla Aragón', TipoTerminal.Aerea, ciudadCAL, 'CLO'),
      new Terminal(5, 'Aeropuerto Internacional El Dorado', TipoTerminal.Aerea, ciudadBOG, 'BOG'),
    ];
  }

}
