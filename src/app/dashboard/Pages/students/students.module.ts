import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { commonmaterialModule } from 'src/app/shared/modules/common-material.module';
import { RouterModule } from '@angular/router';
import { StudentService } from './students.service';
import { StudentDialogComponent } from 'src/app/shared/components/student-form.component';
import { Student } from 'src/app/structdata/datastudents.model';

@NgModule({
  declarations: [
    StudentsComponent    
  ],
  imports: [
    CommonModule,    
    SharedModule,
    StudentsRoutingModule,
    commonmaterialModule,
    RouterModule,   
  ],
  exports: [StudentsComponent],
  providers: [   
    {
      provide: 'IS_DEV',
      useValue: false,
    },    
  ],
})
export class StudentsModule { }