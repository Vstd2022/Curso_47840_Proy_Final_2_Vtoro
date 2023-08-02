import { Component,OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from 'src/app/structdata/datastudents.model';
import { MatDialog} from '@angular/material/dialog';
import { StudentDialogComponent } from 'src/app/shared/components/student-form.component';
import { StudentService } from './students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnDestroy {
  public student: Observable<Student[]>;
  public destroyed = new Subject<boolean>();

  public loading = false;
  constructor(private matDialog: MatDialog, private studentService: StudentService) {
    this.studentService.loadStudent();
    this.student = this.studentService.getStudent();
  }

  displayedColumns: string[] = ['id_Stu', 'firstNameStu', 'lastNameStu', 'telephoneStu','emailStu','courseStu','edit','delete'];
  
  //@Input()
  //dataSource: Student[] = [];

  //@Output()
  //deleteStudent = new EventEmitter<Student>();

  //@Output()
  //editStudent = new EventEmitter<Student>();


  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

  onCreateStudent(): void {
    this.matDialog      
      .open(StudentDialogComponent)
      
      .afterClosed()
      
      .subscribe({
        next: (v) => {
          if (v) {
            this.studentService.createStudent({
              firstNameStu: v.firstNameStu,
              lastNameStu: v.lastNameStu,
              telephoneStu: v.telephoneStu,
              emailStu: v.emailStu,
              courseStu: v.courseStu,
            });
          }
        },
      });
  }

  onDeleteStudent(studentToDelete:number): void {
    if (confirm(`¿Está seguro de eliminar alumno?`)) {
      this.studentService.deleteStudentById(studentToDelete);
    }
  }

  onEditStudent(studentToEdit: number): void {
    this.matDialog      
      .open(StudentDialogComponent, {        
        data: this.student,
      })
      
      .afterClosed()
      
      .subscribe({
        next: (studentUpdated) => {
          if (studentUpdated) {
            this.studentService.updateStudentById(studentToEdit, studentUpdated);
          }
        },
      });
  }
}