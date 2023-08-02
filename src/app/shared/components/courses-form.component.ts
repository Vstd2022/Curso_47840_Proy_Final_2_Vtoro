
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder  } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA,MatDialogRef  }from '@angular/material/dialog';
import { Courses } from 'src/app/structdata/datacourses.model';
 
@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: []
})
export class CoursesDialogComponent {

editingCourses?: Courses;

    nameCourseControl = new FormControl<string | null>(null, [Validators.required,Validators.minLength(1),]);
    campusCourseControl = new FormControl<string | null>(null, [Validators.required,Validators.minLength(1)]);
    stateCourseControl = new FormControl<string | null>(null, [Validators.required]);
  
    coursesForm = new FormGroup({
    nameCourse: this.nameCourseControl,
    campusCourse: this.campusCourseControl,
    stateCourse: this.stateCourseControl,
    
  });
 
  constructor(
    private dialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Courses
  ) {   
    if (this.data) {
      this.editingCourses = this.data;
      this.nameCourseControl.setValue(this.data.nameCourse);
      this.campusCourseControl.setValue(this.data.campusCourse);
      this.stateCourseControl.setValue(this.data.stateCourse);     
    }
  }

  onSubmit(): void {
    if (this.coursesForm.invalid) {
      this.coursesForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.coursesForm.value);
    }
  }
}