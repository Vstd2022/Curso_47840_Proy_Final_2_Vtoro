import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';



import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';


import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AccessRoutingModule } from './access-routing.module';

@NgModule({    
  declarations: [AccessComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, RouterModule,AccessRoutingModule],
})
export class AccessModule {}