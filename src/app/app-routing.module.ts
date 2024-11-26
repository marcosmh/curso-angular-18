import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home.component';
import { ErrorComponent } from './component/error.component';
import { ProductosListComponent } from './component/productos-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosListComponent },
  { path: '**', component: ErrorComponent }
  
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
