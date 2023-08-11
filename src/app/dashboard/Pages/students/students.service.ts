import { Injectable } from '@angular/core';
import { Student,CreateStudentData,UpdateStudentData} from 'src/app/structdata/datastudents.model';
import { BehaviorSubject, Observable, Subject, delay, map, mergeMap, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/helpers';
import { environment } from 'src/environments/environments';


//const STUDENT_DB: Observable<Student[]> = of([
//  {
//    id_Stu: 100,
//    firstNameStu: 'María',
//    lastNameStu: 'López',
//    telephoneStu: '98500622',
//    emailStu: 'mlopez@gmail.com',
//    courseStu: 'Ingeniería',
//  },
//  {
//    id_Stu: 200,
//    firstNameStu: 'Manuel',
//    lastNameStu: 'Hernández',
//    telephoneStu: '98485479',
//    emailStu: 'mhernandez@gmail.com',
//    courseStu: 'Contabilidad',
//  },
//  {
//    id_Stu: 300,
//   firstNameStu: 'Javier',
//    lastNameStu: 'Toro',
//    telephoneStu: '97632565',
//    emailStu: 'jtoro@hotmail.com',
//    courseStu: 'Pedagogía',
//  },
//]).pipe(delay(1000));

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private _student$ = new BehaviorSubject<Student[]>([]);
  private student$ = this._student$.asObservable();
  private _isLoading$ = new BehaviorSubject(false);
  public isLoading$ = this._isLoading$.asObservable();

  constructor(private notifier: NotifierService, private httpclient: HttpClient) {}

  loadStudent(): void {
    //STUDENT_DB.subscribe({
    //  next: (studentsFromDb) => this._student$.next(studentsFromDb),
    //});
    this._isLoading$.next(true);
    this.httpclient.get<Student[]>(environment.baseApiUrl + '/student', {
      headers: new HttpHeaders({
        'token': '12345678910'
      }),     
    }).subscribe({
      next: (response) => {        
        this._student$.next(response);
      },
      error: () => {        
        this.notifier.showError('Error al cargar los alumnos');
      },
      complete: () => {
        this._isLoading$.next(false); 
      },
    })

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
  createStudent(payload: CreateStudentData): void {
    
 
   const token = generateRandomString(20);

   this.httpclient.post<Student>(environment.baseApiUrl  + '/student', { ...payload, token })   
     .pipe(
       mergeMap((userCreate) => this.student$.pipe(
         take(1),
         map(
           (arrayActual) => [...arrayActual, userCreate])
         )
       )
     )
     .subscribe({
       next: (arrayActualizado) => {
         this._student$.next(arrayActualizado);
       }
     })
 }

  updateStudentById(id_Stu: number, alumnoActualizado: UpdateStudentData): void {
    //this.student$.pipe(take(1)).subscribe({
    //  next: (arrayActual) => {
    //    this._student$.next(
    //      arrayActual.map((s) =>
    //        s.id_Stu === id_Stu ? { ...s, ...alumnoActualizado } : s
    //      )
    //    );
    //    this.notifier.showSuccess('Alumno Actualizado');
    //  },
    //});

    this.httpclient.put(environment.baseApiUrl + '/student/' + id_Stu, alumnoActualizado).subscribe({
      next: () => this.loadStudent(),
    })
  }
  
  deleteStudentById(id_Stu: number): void {
   // this._student$.pipe(take(1)).subscribe({
   //   next: (arrayActual) => {
   //     this._student$.next(arrayActual.filter((s) => s.id_Stu !== id_Stu));
   //     this.notifier.showSuccess('Alumno eliminado');
   //   },
   // });

   this.httpclient.delete(environment.baseApiUrl + '/student/' + id_Stu)
   .pipe().subscribe({
     next: () => this.loadStudent(),
   })

}  
  }