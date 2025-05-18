import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path :'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [

            {
                path:'solicitudes-de-compra',
                title: 'Solicitudes de compra',
                loadChildren:() => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m)=> m.changeDetectionComponts)
            },
              {
                path:'dashboard-de-solicitudes',
                title: 'Dashboard de solicitudes',
                loadChildren:() => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m)=> m.changeDetectionComponts)
            },
              {
                path:'mantenimiento-clientes',
                title: 'Mantenimiento de clientes',
                loadChildren:() => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m)=> m.changeDetectionComponts)
            },
            {
                path:'mantenimiento-analistas',
                title: 'Mantenimiento de analistas',
                loadChildren:() => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m)=> m.changeDetectionComponts)
            },
            {
                path:'mantenimiento-proveedores',
                title: 'Mantenimiento de proveedores',
                loadChildren:() => import('./solicitudes-de-compra/ordenes-de-compra.route').then((m)=> m.changeDetectionComponts)
            },
            {
                path:'',
                redirectTo: "",
                pathMatch:'full'
            }
        ]
    },
    {
        path:'',
        redirectTo: "/dashboard",
        pathMatch:'full'
    }
];
