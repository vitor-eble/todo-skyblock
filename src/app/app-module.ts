import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Login } from './pages/login/login';
import { InputComponent } from './shared/components/input-component/input-component';

@NgModule({
  declarations: [App, Home, Login, InputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideIonicAngular()],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
