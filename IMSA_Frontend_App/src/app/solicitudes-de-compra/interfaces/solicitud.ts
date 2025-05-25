import { Producto } from "./producto";

export interface Solicitud{
    fechaSolicitud: Date;
    numeroScSolicitud: string;
    nombreSolicitante: string;
    numeroFolio: string;
    fechaReciboUCC : Date;
    encargadoAdquisicion: string;
    emailAdquisiciones: string;
    telefonoAdquisiciones: string;
    producto: Producto[]
}