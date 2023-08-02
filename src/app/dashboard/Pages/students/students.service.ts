import { Injectable } from '@angular/core';
import { Student,CreateStudentData,UpdateStudentData} from 'src/app/structdata/datastudents.model';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';

const STUDENT_DB: Observable<Student[]> = of([
  {
    id_Stu: 100,
    firstNameStu: 'María',
    lastNameStu: 'López',
    telephoneStu: '98500622',
    emailStu: 'mlopez@gmail.com',
    courseStu: 'Ingeniería',
  },
  {
    id_Stu: 200,
    firstNameStu: 'Manuel',
    lastNameStu: 'Hernández',
    telephoneStu: '98485479',
    emailStu: 'mhernandez@gmail.com',
    courseStu: 'Contabilidad',
  },
  {
    id_Stu: 300,
    firstNameStu: 'Javier',
    lastNameStu: 'Toro',
    telephoneStu: '97632565',
    emailStu: 'jtoro@hotmail.com',
    courseStu: 'Pedagogía',
  },
]).pipe(delay(1000));

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private _student$ = new BehaviorSubject<Student[]>([]);
  private student$ = this._student$.asObservable();

  constructor(private notifier: NotifierService) {}

  loadStudent(): void {
    STUDENT_DB.subscribe({
      next: (studentsFromDb) => this._student$.next(studentsFromDb),
    });
  }

  getStudent(): Observable<Student[]> {
    return this.student$;
  }

  getStudentById(id_Stu: number) {
    return this.student$.pipe(
      take(1),
      map(( student ) =>  student.find((s) => s.id_Stu === id_Stu)),
    )
  }
  createStudent(student: CreateStudentData): void {
    
    this.student$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._student$.next([
          ...arrayActual,
          { ...student, id_Stu: arrayActual.length + 1 },
        ]);
        this.notifier.showSuccess('Alumno creado');
      },
    });
  }

  updateStudentById(id_Stu: number, alumnoActualizado: UpdateStudentData): void {
    this.student$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._student$.next(
          arrayActual.map((s) =>
            s.id_Stu === id_Stu ? { ...s, ...alumnoActualizado } : s
          )
        );
        this.notifier.showSuccess('Alumno Actualizado');
      },
    });
  }
  
  deleteStudentById(id_Stu: number): void {
    this._student$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._student$.next(arrayActual.filter((s) => s.id_Stu !== id_Stu));
        this.notifier.showSuccess('Alumno eliminado');
      },
    });
  }
}
