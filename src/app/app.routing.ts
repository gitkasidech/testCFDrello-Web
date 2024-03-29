import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CanActivate } from '@angular/router';
// import { provideRouter } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {HeadComponent} from './head/head.component';
import {DashboardnameComponent} from './dashboardname/dashboardname.component';
import {CreateComponent} from './create/create.component';
import { GettokenComponent } from './gettoken/gettoken.component';


const appRoutes: Routes=[
     {
    path: '',
    component: LoginComponent
    // ,canActivate: [AuthGuard]
  },
  {
    path: 'gettoken/:token/:id',
    component: GettokenComponent
  },
  {
    path: 'yourdashboard',
    component: DashboardnameComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateComponent
    
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];



export const appRoutingProviders: any = [AuthGuard];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
