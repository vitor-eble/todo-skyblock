import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideIonicAngular, IonAccordion } from '@ionic/angular';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Login } from './pages/login/login';
import { InputComponent } from './shared/components/input-component/input-component';
import { MenuLateral } from './shared/components/menu-lateral/menu-lateral';
import { CriarObjetivo } from './shared/components/criar-objetivo/criar-objetivo';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    InputComponent,
    MenuLateral,
    CriarObjetivo,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule,
    IonAccordion
],
  providers: [provideBrowserGlobalErrorListeners(), provideIonicAngular()],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
