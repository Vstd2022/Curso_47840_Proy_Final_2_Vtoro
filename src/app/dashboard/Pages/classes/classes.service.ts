import { Injectable } from '@angular/core';
import { Classes,CreateClassesData,UpdateClassesData } from 'src/app/structdata/dataclasses.model';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/helpers';
import { environment } from 'src/environments/environments';


const CLASSES_DB: Observable<Classes[]> = of([
  {    
    id_Class: 1000,
    NameClass: 'Biologia',
    teacherClass:'Juan Hidalgo',   
    stateClass: 'Vigente'
  },
  {    
    id_Class: 2000,
    NameClass: 'Ciencias',
    teacherClass:'Sergio Campos',   
    stateClass: 'Vigente'
  },
  {    
    id_Class: 3000,
    NameClass: 'Matemática',
    teacherClass:'Felipe Rios',   
    stateClass: 'No Vigente'
  },
  {    
    id_Class: 4000,
    NameClass: 'Calculo',
    teacherClass:'Carlos Caro',   
    stateClass: 'Vigente'
  },
  {    
    id_Class: 5000,
    NameClass: 'Sicologia Infantil',
    teacherClass:'Patricio Reyes',   
    stateClass: 'Vigente'
  },
  {    
    id_Class: 6000,
    NameClass: 'Tecnologia Medica',
    teacherClass:'Sandra Perez',   
    stateClass: 'Vigente'
  },
  

]).pipe(delay(1000));

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private _classes$ = new BehaviorSubject<Classes[]>([]);
  private classes$ = this._classes$.asObservable();

  constructor(private notifier: NotifierService) {}

  loadClasses(): void {
    CLASSES_DB.subscribe({
      next: (classesFromDb) => this._classes$.next(classesFromDb),
    });
  }

  getClasses(): Observable<Classes[]> {
    return this.classes$;
  }

  getClassesById(id_Class: number) {
    return this.classes$.pipe(
      take(1),
      map(( classes ) =>  classes.find((c) => c.id_Class === id_Class)),
    )
  }
  createClasses(classes: CreateClassesData): void {
    
    this.classes$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._classes$.next([
          ...arrayActual,
          { ...classes, id_Class: arrayActual.length + 1 },
        ]);
        this.notifier.showSuccess('Clase creada');
      },
    });
  }

  updateClassesById(id_Class: number, claseActualizado: UpdateClassesData): void {
    this.classes$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._classes$.next(
          arrayActual.map((c) =>
            c.id_Class === id_Class ? { ...c, ...claseActualizado } : c
          )
        );
        this.notifier.showSuccess('Clase Actualizada');
      },
    });
  }
  
  deleteClassesById(id_Class: number): void {
    this._classes$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._classes$.next(arrayActual.filter((c) => c.id_Class !== id_Class));
        this.notifier.showSuccess('Clase eliminada');
      },
    });
  }
}
