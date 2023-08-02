import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccessComponent } from './access/access.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent, 
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)   
  }, 
  {
  path: 'access',
  component: AccessComponent,
  loadChildren: () => import('./access/access.module').then((m) => m.AccessModule)
  },   
  {
    path : '**',
    redirectTo: '/access/login'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule {}

