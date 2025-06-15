import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./home-dashboard/dashboard.component'),
        children: [

            {
                path: 'solicitudes-de-compra',
                title: 'Solicitudes de compra',
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute)
            },
            {
                path: 'dashboard-de-solicitudes',
                title: 'Dashboard de solicitudes',
                loadChildren: () => import('./dashboard-solicitudes/dashboard-solicitudes.route').then((m) => m.dashboardSolicitudesRoute)
            },
             {
                path: 'cotizador',
                title: 'Cotizar',
                loadChildren: () => import('./Cotizador/cotizador.route').then((m) => m.cotizadorRoute)
            },
            {
                path: 'mantenimiento-clientes',
                title: 'Mantenimiento de clientes',
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute)
            },
            {
                path: 'mantenimiento-analistas',
                title: 'Mantenimiento de analistas',
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute)
            },
            {
                path: 'mantenimiento-proveedores',
                title: 'Mantenimiento de proveedores',
                loadChildren: () => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m) => m.ordenesCompraRoute)
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
