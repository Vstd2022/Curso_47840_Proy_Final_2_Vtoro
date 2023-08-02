import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesComponent } from './classes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassesRoutingModule } from './classes-routing.module';
import { commonmaterialModule } from 'src/app/shared/modules/common-material.module';
import { RouterModule } from '@angular/router';
import { ClassesService } from './classes.service';
import { ClassesDialogComponent } from 'src/app/shared/components/classes-form.component';
import { Classes } from 'src/app/structdata/dataclasses.model';


 
@NgModule({
  declarations: [
    ClassesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClassesRoutingModule,
    commonmaterialModule,
    RouterModule,
  ],
    exports: [ClassesComponent],
    providers: [   
      {
        provide: 'IS_DEV',
        useValue: false,
      },    
    ],
  })  
  
    
export class ClassesModule { }
