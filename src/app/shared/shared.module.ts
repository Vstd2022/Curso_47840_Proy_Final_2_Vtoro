import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { commonmaterialModule } from './modules/common-material.module';
import { ResaltadoDirective } from '../dashboard/Pages/students/resaltado.directive';
import { MatCardModule } from '@angular/material/card';
import { ControlErrorMessagePipe } from './pipes/control-error.pipe';
import { CoursesDialogComponent } from './components/courses-form.component';
import { ClassesDialogComponent } from './components/classes-form.component';

@NgModule({
  declarations: [
    StudentDialogComponent,
    ResaltadoDirective,
    ControlErrorMessagePipe,
    CoursesDialogComponent,
    ClassesDialogComponent   
  ],
  imports: [
    CommonModule,    
    RouterModule,   
    ReactiveFormsModule,
    commonmaterialModule, 
    MatCardModule 
  ],
  exports: [
    StudentDialogComponent,  
  ]

})
export class SharedModule { }
