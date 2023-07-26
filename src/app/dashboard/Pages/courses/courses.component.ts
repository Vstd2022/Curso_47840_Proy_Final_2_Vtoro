

import { Component,OnDestroy, OnInit } from '@angular/core';
import { Courses } from 'src/app/structdata/datacourses.model';
import { CoursesService } from './courses.service';
import { Observable,take } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

  export class CoursesComponent implements OnInit, OnDestroy {
    
    public data$: Observable<Courses[]>;
  
    public displayedColumns = ['id', 'namecourse', 'statecourse'];
  
    constructor(private CoursesService: CoursesService) {
      this.data$ = this.CoursesService.getCourses();
    }
  
    ngOnDestroy(): void {    
    }
  
    ngOnInit(): void {     
      this.CoursesService.LoadCourses();      
    }
  
    onCreate(): void {
      this.CoursesService.AddCourses();
    }
  
    onDelete(id: number): void {
      this.CoursesService.deleteCourses(id);
    }
  
}
