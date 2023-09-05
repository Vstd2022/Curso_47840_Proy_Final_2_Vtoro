import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StudentsModule } from './Pages/students/students.module';
import { CoursesModule } from './Pages/courses/courses.module';
import { ClassesModule } from './Pages/classes/classes.module';
import { UsersModule } from './Pages/users/users.module';
import { HomeModule } from './Pages/home/home.module';



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
    RouterModule,  
    DashboardRoutingModule,
    StudentsModule,
    CoursesModule,
    ClassesModule,
    HomeModule ,
    UsersModule  
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
