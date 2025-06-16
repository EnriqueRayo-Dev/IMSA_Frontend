import { Routes } from '@angular/router';
import { solicitudesGuardGuard } from './solicitudes-de-compra/solicitudes-guard.guard';


export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./home-dashboard/dashboard.component'),
        children: [

            {
                path: 'solicitudes-de-compra',
                title: 'Solicitudes de compra',
                canActivate:[solicitudesGuardGuard],
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute),
                 data: { icon: 'payments' }
            },
            {
                path: 'dashboard-de-solicitudes',
                title: 'Dashboard de solicitudes',
                loadChildren: () => import('./dashboard-solicitudes/dashboard-solicitudes.route').then((m) => m.dashboardSolicitudesRoute),
                data: { icon: 'dashboard' }
            },
             {
                path: 'cotizador',
                title: 'Cotizar',
                loadChildren: () => import('./cotizador/cotizador.route').then((m) => m.cotizadorRoute),
                 data: { icon: 'request_quote' }
            },
            {
                path: 'mantenimiento-clientes',
                title: 'Mantenimiento de clientes',
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute),
                 data: { icon: 'contacts_product' }
            },
            {
                path: 'mantenimiento-analistas',
                title: 'Mantenimiento de analistas',
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute),
                 data: { icon: 'content_paste_search' }
            },
            {
                path: 'mantenimiento-proveedores',
                title: 'Mantenimiento de proveedores',
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute),
                 data: { icon: 'patient_list' }
            },
            {
                path: '',
                redirectTo: "",
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: "/dashboard",
        pathMatch: 'full'
    }
];
