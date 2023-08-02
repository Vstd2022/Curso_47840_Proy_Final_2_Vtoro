
import { Component,OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Classes } from 'src/app/structdata/dataclasses.model';
import { MatDialog} from '@angular/material/dialog';
import { ClassesDialogComponent } from 'src/app/shared/components/classes-form.component';
import { ClassesService } from './classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})


export class ClassesComponent implements OnDestroy {
  public classes: Observable<Classes[]>;
  public destroyed = new Subject<boolean>();

  public loading = false;
  constructor(private matDialog: MatDialog, private classesService: ClassesService) {
    this.classesService.loadClasses();
    this.classes = this.classesService.getClasses();
  }

  displayedColumns: string[] = ['id_Class', 'NameClass', 'teacherClass', 'stateClass','edit','delete'];
    
  @Input()
  dataSource: Classes[] = [];

  @Output()
  deleteClasses = new EventEmitter<Classes>();

  @Output()
  editClasses = new EventEmitter<Classes>();


  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

  onCreateClasses(): void {
    this.matDialog      
      .open(ClassesDialogComponent)
       
      .afterClosed()
      
      .subscribe({
        next: (v) => {
          if (v) {
            this.classesService.createClasses({
              NameClass: v.NameClass,
              teacherClass: v.teacherClass,
              stateClass: v.stateClass,              
            });
          }
        },
      });
  }

  onDeleteClasses(classesToDelete: number): void {
    if (confirm(`¿Está seguro de eliminar clase?`)) {
      this.classesService.deleteClassesById(classesToDelete );
    }
  }

  onEditClasses(classesToEdit: number): void {
    this.matDialog      
      .open(ClassesDialogComponent, {        
        data: this.classes,
      })
      
      .afterClosed()
      
      .subscribe({
        next: (classesUpdated) => {
          if (classesUpdated) {
            this.classesService.updateClassesById(classesToEdit, classesUpdated);
          }
        },
      });
  }
}

