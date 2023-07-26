import { Component,OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/structdata/datastudents.model';
import { MatDialog} from '@angular/material/dialog';
import { StudentDialogComponent } from 'src/app/shared/components/student-form.component';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})


export class StudentsComponent  {
  datastudents:   Student[] = [
    new Student(100,'María','López','98500622','mlopez@gmail.com','Ingeniería'),
    new Student(200,'Manuel','Hernández','98485479','mhernandez@gmail.com','Pedagogía'),
    new Student(300,'Javier','Toro','97632565','jtoro@hotmail.com','Contabilidad'),
    new Student(400,'Gonzalo','Vargas','96487845','gvargas@empresa.co','Informática'),
    new Student(500,'Jose','Aravena','98525855','jaravena@outlook.com','Auditoria'),
  ]

  displayedColumns = ['id','firstName','lastName','telephone','email','course','edit','delete']
 
  constructor(private readonly dialogService: MatDialog){}

  addStudent() {
    
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value){
        const lastId = this.datastudents[this.datastudents.length - 1]?.id;        
        this.datastudents = [...this.datastudents, new Student(lastId + 100, value.firstName, value.lastName,value.telephone,value.email,value.course)];
      }
    })

  }

  removeStudent(student: Student) {
    this.datastudents = this.datastudents.filter(
      (stu) => stu.id !== student.id 
    );
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.datastudents = this.datastudents.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu)
      }
    })
  }
  

}
