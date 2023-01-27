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
  {
    path: 'elimina-registro',
    loadChildren: () => import('./elimina-registro/elimina-registro.module').then( m => m.EliminaRegistroPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'existencias-por-vendedor',
    loadChildren: () => import('./existencias-por-vendedor/existencias-por-vendedor.module').then( m => m.ExistenciasPorVendedorPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'existencias-por-marca',
    loadChildren: () => import('./existencias-por-marca/existencias-por-marca.module').then( m => m.ExistenciasPorMarcaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'sims-pdv',
    loadChildren: () => import('./sims-pdv/sims-pdv.module').then( m => m.SimsPdvPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'sims-vendedor',
    loadChildren: () => import('./sims-vendedor/sims-vendedor.module').then( m => m.SimsVendedorPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'sims-vendedor-detalle',
    loadChildren: () => import('./sims-vendedor-detalle/sims-vendedor-detalle.module').then( m => m.SimsVendedorDetallePageModule),
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
