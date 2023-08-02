import { Injectable } from '@angular/core';
import { Courses,CreateCoursesData,UpdateCoursesData } from 'src/app/structdata/datacourses.model';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';


const COURSE_DB: Observable<Courses[]> = of([
  {
    id_cour: 5000,
    nameCourse: 'Ingeniería',
    campusCourse: 'Zona norte',
    stateCourse: 'Vigente',   
  },
  {
    id_cour: 6000,
    nameCourse: 'Pedagogía',
    campusCourse: 'Zona sur',
    stateCourse: 'Vigente',   
  },
  {
    id_cour: 7000,
    nameCourse: 'Contabilidad',
    campusCourse: 'Zona norte',
    stateCourse: 'Vigente',   
  },
  {
    id_cour: 8000,
    nameCourse: 'Medicina',
    campusCourse: 'Zona sur',
    stateCourse: 'No Vigente',   
  },
  
]).pipe(delay(1000));

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _courses$ = new BehaviorSubject<Courses[]>([]);
  private courses$ = this._courses$.asObservable();

  constructor(private notifier: NotifierService) {}

  loadCourses(): void {
    COURSE_DB.subscribe({
      next: (coursesFromDb) => this._courses$.next(coursesFromDb),
    });
  }

  getCourses(): Observable<Courses[]> {
    return this.courses$;
  }

  getCoursesById(id_cour: number) {
    return this.courses$.pipe(
      take(1),
      map(( courses ) =>  courses.find((c) => c.id_cour === id_cour)),
    )
  }
  createCourses(courses: CreateCoursesData): void {
    
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._courses$.next([
          ...arrayActual,
          { ...courses, id_cour: arrayActual.length + 1 },
        ]);
        this.notifier.showSuccess('Curso creado');
      },
    });
  }

  updateCoursesById(id_cour: number, cursoActualizado: UpdateCoursesData): void {
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._courses$.next(
          arrayActual.map((c) =>
            c.id_cour === id_cour ? { ...c, ...cursoActualizado } : c
          )
        );
        this.notifier.showSuccess('Curso Actualizado');
      },
    });
  }
  
  deleteCoursesById(id_cour: number): void {
    this._courses$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._courses$.next(arrayActual.filter((c) => c.id_cour !== id_cour));
        this.notifier.showSuccess('Curso eliminado');
      },
    });
  }
}
