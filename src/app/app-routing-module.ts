import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Inicio } from './pages/inicio/inicio';

const routes: Routes = [
  {path: '', component: Login, pathMatch: 'full'},
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'home', component: Home, children: [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio, pathMatch: 'full'},
  ] },

];

@NgModule({
  imports : [ RouterModule.forRoot ( routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
