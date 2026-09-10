import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';

const routes: Routes = [
  {path: '', component: Login, pathMatch: 'full'},
  // {path: '', component: Home, pathMatch: 'full'},
  {path: 'home', component: Home },

];

@NgModule({
  imports : [ RouterModule.forRoot ( routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
