import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
  },
  {
    path: 'icc',
    loadChildren: () => import('./icc/icc.module').then( m => m.IccPageModule)
  },
  {
    path: 'bait',
    loadChildren: () => import('./bait/bait.module').then( m => m.BaitPageModule)
  },
  {
    path: 'vendedores',
    loadChildren: () => import('./vendedores/vendedores.module').then( m => m.VendedoresPageModule)
  },
  {
    path: 'estatus',
    loadChildren: () => import('./estatus/estatus.module').then( m => m.EstatusPageModule)
  },




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
