import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { UserDetailComponent } from '../users/pages/user-detail.component';

//const routes: Routes = [
//  {
//    // /dashboard/students
//    path: '',
//    component: StudentsComponent,
//  }
//];
//@NgModule({
//  imports: [RouterModule.forChild(routes)],
//  exports: [RouterModule]
//})

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        // /dashboard/students
        path: '',
        component: StudentsComponent,
      },
      
      
    ])
  ],
  exports: [RouterModule],
})

export class StudentsRoutingModule { }