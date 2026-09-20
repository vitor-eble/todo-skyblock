import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Mining } from './pages/mining/mining';
import { Blaze } from './pages/blaze/blaze';
import { Eman } from './pages/eman/eman';
import { Fishing } from './pages/fishing/fishing';
import { Farming } from './pages/farming/farming';

const routes: Routes = [
  {path: '', component: Login, pathMatch: 'full'},
  // {path: '', component: Home, pathMatch: 'full'},
  {path: 'home', component: Home, children: [
    {path: 'mining', component: Mining },
    {path: 'blaze', component: Blaze},
    {path: 'eman', component: Eman},
    {path: 'fishing', component: Fishing},
    {path: 'farming', component: Farming}
  ]},
  

];

@NgModule({
  imports : [ RouterModule.forRoot ( routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
