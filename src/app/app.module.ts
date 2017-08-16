import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AuthGuard } from './guards/index';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { DashboardnameComponent } from './dashboardname/dashboardname.component';
import { YourdashboardComponent } from './yourdashboard/yourdashboard.component';
import { CreateComponent } from './create/create.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadComponent,
    DashboardnameComponent,
    YourdashboardComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

