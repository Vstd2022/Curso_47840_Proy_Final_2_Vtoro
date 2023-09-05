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
 import { MatIconModule } from '@angular/material/icon';
import { FullNamePipe } from './pipes/full-name.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    StudentDialogComponent,
    ResaltadoDirective,
    ControlErrorMessagePipe,
    CoursesDialogComponent,
    ClassesDialogComponent  ,
    FullNamePipe 
  ],
  imports: [
    CommonModule,    
    RouterModule,   
    ReactiveFormsModule,
    commonmaterialModule, 
    MatCardModule ,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    StudentDialogComponent,  
  ]

})
export class SharedModule { }
