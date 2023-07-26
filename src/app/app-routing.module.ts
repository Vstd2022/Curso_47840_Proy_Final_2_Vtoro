import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './dashboard/Pages/courses/courses.component';
import { StudentsComponent } from './dashboard/Pages/students/students.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      
      {
        path: 'students',
        component: StudentsComponent,        
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      
    ],
  },    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ] ,
  exports: [RouterModule]
})
export class AppRoutingModule {}

