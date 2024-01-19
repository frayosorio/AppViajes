import { Ciudad } from "./ciudad";
import { TipoTerminal } from "./tipo-terminal";


export class Terminal {

    public id: number;
    public nombre: string;
    public ciudad: Ciudad | null;
    public tipo: TipoTerminal;
    public codigoIata: string;

    constructor(
        id: number,
        nombre: string,
        tipo: TipoTerminal,
        ciudad: Ciudad,
        codigoIata: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.tipo = tipo;
        this.codigoIata = codigoIata;
    }
}
