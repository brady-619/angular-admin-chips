import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./proveedores/proveedores.module').then( m => m.ProveedoresPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'icc',
    loadChildren: () => import('./icc/icc.module').then( m => m.IccPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'bait',
    loadChildren: () => import('./bait/bait.module').then( m => m.BaitPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'vendedores',
    loadChildren: () => import('./vendedores/vendedores.module').then( m => m.VendedoresPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'estatus',
    loadChildren: () => import('./estatus/estatus.module').then( m => m.EstatusPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    // canActivate: [NoIngresadoGuard]
  },
  {
    path: 'actualiza-vendedor',
    loadChildren: () => import('./actualiza-vendedor/actualiza-vendedor.module').then( m => m.ActualizaVendedorPageModule),
    canActivate: [IngresadoGuard]
  },
 




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
