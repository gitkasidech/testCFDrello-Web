import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ActivatedRoute } from '@angular/router';



import { AuthGuard } from './guards/index';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { DashboardnameComponent } from './dashboardname/dashboardname.component';
import { YourdashboardComponent } from './yourdashboard/yourdashboard.component';
import { CreateComponent } from './create/create.component';
import { GettokenComponent } from './gettoken/gettoken.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadComponent,
    DashboardnameComponent,
    YourdashboardComponent,
    CreateComponent,
    GettokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule,
    

    
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


