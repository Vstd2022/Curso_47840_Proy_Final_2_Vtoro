import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { commonmaterialModule } from 'src/app/shared/modules/common-material.module';
import { RouterModule } from '@angular/router';
import { CoursesService } from './courses.service';
import { CoursesDialogComponent } from 'src/app/shared/components/courses-form.component';
import { Courses } from 'src/app/structdata/datacourses.model';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './store/courses.effects';
import { StoreModule } from '@ngrx/store';
import { coursesFeature } from './store/courses.reducer';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,    
    SharedModule,
    CoursesRoutingModule,
    commonmaterialModule,
    RouterModule,    
    StoreModule.forFeature(coursesFeature),
    EffectsModule.forFeature([CoursesEffects])
  ],
  exports: [CoursesComponent],
  providers: [   
    {
      provide: 'IS_DEV',
      useValue: false,
    },    
  ],
})  
  
export class CoursesModule { }
