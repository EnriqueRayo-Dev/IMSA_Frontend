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
