import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from '../dashboard/Pages/students/students.component';
import { RouterModule, Router } from '@angular/router';
import { commonmaterialModule } from './modules/common-material.module';
import { ResaltadoDirective } from '../dashboard/Pages/students/resaltado.directive';

@NgModule({
  declarations: [
    StudentDialogComponent,
    StudentsComponent,     
    ResaltadoDirective
  ],
  imports: [
    CommonModule,    
    RouterModule,   
    ReactiveFormsModule,
    commonmaterialModule
  ],
  exports: [
    StudentDialogComponent,
    StudentsComponent,    
  ]

})
export class SharedModule { }
