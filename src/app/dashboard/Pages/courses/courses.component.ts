import { Component,OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Courses } from 'src/app/structdata/datacourses.model';
import { MatDialog} from '@angular/material/dialog';
import { CoursesDialogComponent } from 'src/app/shared/components/courses-form.component';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnDestroy {
  public courses: Observable<Courses[]>;
  public destroyed = new Subject<boolean>();

  public loading = false;
  constructor(private matDialog: MatDialog, private coursesService: CoursesService) {
    this.coursesService.loadCourses();
    this.courses = this.coursesService.getCourses();
  }

  displayedColumns: string[] = ['id_cour', 'nameCourse', 'campusCourse', 'stateCourse','edit','delete'];
  
  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

  onCreateCourses(): void {
    this.matDialog      
      .open(CoursesDialogComponent)
       
      .afterClosed()
      
      .subscribe({
        next: (v) => {
          if (v) {
            this.coursesService.createCourses({
              nameCourse: v.nameCourse,
              campusCourse: v.campusCourse,
              stateCourse: v.stateCourse,              
            });
          }
        },
      });
  }

  onDeleteCourses(coursesToDelete: number): void {
    if (confirm(`¿Está seguro de eliminar curso?`)) {
      this.coursesService.deleteCoursesById(coursesToDelete );
    }
  }
 
  onEditCourses(coursesToEdit: number): void {
    this.matDialog      
      .open(CoursesDialogComponent, {        
        data: this.courses,
      })
      
      .afterClosed()
      
      .subscribe({
        next: (coursesUpdated) => {
          if (coursesUpdated) {
            this.coursesService.updateCoursesById(coursesToEdit, coursesUpdated);
          }
        },
      });
  }
}

