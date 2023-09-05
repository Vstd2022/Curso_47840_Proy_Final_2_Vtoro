import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder  } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef  }from '@angular/material/dialog';
import { Student } from 'src/app/structdata/datastudents';
import { noHomeroValidator } from '../utils/form-validators';



@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [ ]
})
export class StudentDialogComponent {

  editingStudent?: Student;
  nameControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2),
    noHomeroValidator(),
  ]);

  firstNameStuControl = new FormControl<string | null>(null, [Validators.required,Validators.minLength(1),]);
  lastNameStuControl = new FormControl<string | null>(null, [Validators.required,Validators.minLength(1)]);
  telephoneStuControl = new FormControl<string | null>(null, [Validators.required]);
  emailStuControl = new FormControl<string | null>(null, [Validators.required]);
  courseStuControl = new FormControl<string | null>(null, [Validators.required]);

  studentForm = new FormGroup({
    firstNameStu: this.firstNameStuControl,
    lastNameStu: this.lastNameStuControl,
    telephoneStu: this.telephoneStuControl,
    emailStu: this.emailStuControl,
    courseStu: this.courseStuControl,
  });

 
  constructor(
    private dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Student
  ) {   
    
    if (this.data) {
      this.editingStudent = this.data;          
      this.firstNameStuControl.setValue(this.data.firstNameStu);
      this.lastNameStuControl.setValue(this.data.lastNameStu);
      this.telephoneStuControl.setValue(this.data.telephoneStu);
      this.emailStuControl.setValue(this.data.emailStu);
      this.courseStuControl.setValue(this.data.courseStu);
    }
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      const payload: any = {
        ...this.studentForm.value
      }
     

      this.dialogRef.close(payload);
    }
  }
}