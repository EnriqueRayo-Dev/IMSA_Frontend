import { Routes } from "@angular/router";
import { RegistroSolicitudComponent } from "./pages/registro-solicitud/registro-solicitud.component";
import { RegistroExitosoComponent } from "./pages/registro-exitoso/registro-exitoso.component";

export const ordenesCompraRoute: Routes =[

    {
        path:'',
        component: RegistroSolicitudComponent

    },
    {
        path:'exitoso',
        component: RegistroExitosoComponent
    }
    
]