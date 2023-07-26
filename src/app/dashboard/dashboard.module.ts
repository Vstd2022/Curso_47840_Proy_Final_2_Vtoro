import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
//import {CoursesRoutingModule} from './Pages/courses/courses-routing.module';
//import { CoursesModule } from './Pages/courses/courses.module';

@NgModule({
  declarations: [
    DashboardComponent,          
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    SharedModule,  
    RouterModule,  
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
