
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { Courses } from 'src/app/structdata/datacourses.model';



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses$ = new BehaviorSubject<Courses[]>([]);

  constructor() { }

  
  getCourses(): Observable<Courses[]> {
    return this.courses$.asObservable();
  }

  LoadCourses(): void {
    
    this.courses$.next([
      {
        id: 1000,
        NameCourse: 'Ingeniería',
        stateCourse: 'Vigente',        
        
      },
      {
        id: 2000,
        NameCourse: 'Antropolgía',
        stateCourse: 'No Vigente',   
      },
      
    ]);
  }

  AddCourses(): void {
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.courses$.next([
          ...arrayActual,
          {  
            id: arrayActual.length + 1,
            NameCourse: 'Antropolgía',
            stateCourse: 'No Vigente', 
          },
        ]);
      },
    });
  }

  deleteCourses(id: number): void {
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.courses$.next(
          arrayActual.filter((p) => p.id !== id),
        );
      }
    })
  }

}