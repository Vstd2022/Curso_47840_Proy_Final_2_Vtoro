import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup,Validators  } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA }from '@angular/material/dialog';
import { Student } from 'src/app/structdata/datastudents.model';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [ ]
})
export class StudentDialogComponent {


  nameControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2),    
  ]);


   firstNameControl = new FormControl('',[Validators.required])
   lastNameControl = new FormControl('',[Validators.required])
   telephoneControl = new FormControl('')
   emailControl = new FormControl('')
   courseControl = new FormControl('',[Validators.required])
   studentForm = new FormGroup({
   firstName: this.firstNameControl,
   lastName: this.lastNameControl,
   telephone: this.telephoneControl,
   email: this.emailControl,
   course: this.courseControl
   })

  

   constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data : Student | null,
  ) {
    console.log(data);
    if (data){
      this.studentForm.patchValue(data)
    }
   
  }


   close() {
    this.dialogRef.close()
   }

}