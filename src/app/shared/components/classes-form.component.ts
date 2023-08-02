
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder  } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA,MatDialogRef  }from '@angular/material/dialog';
import { Classes } from 'src/app/structdata/dataclasses.model';

@Component({
  selector: 'app-classes-form',
  templateUrl: './classes-form.component.html',
  styleUrls: []
})
export class ClassesDialogComponent {

editingClasses?: Classes;


    NameClassControl = new FormControl<string | null>(null, [Validators.required,Validators.minLength(1),]);
    teacherClassControl = new FormControl<string | null>(null, [Validators.required,Validators.minLength(1)]);
    stateClassControl = new FormControl<string | null>(null, [Validators.required]);
  
    classesForm = new FormGroup({
    NameClass: this.NameClassControl,
    teacherClass: this.teacherClassControl,
    stateClass: this.stateClassControl,
    
  });
 
  constructor(
    private dialogRef: MatDialogRef<ClassesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Classes
  ) {   
    if (this.data) {
      this.editingClasses = this.data;
      this.NameClassControl.setValue(this.data.NameClass);
      this.teacherClassControl.setValue(this.data.teacherClass);
      this.stateClassControl.setValue(this.data.stateClass);     
    }
  }

  onSubmit(): void {
    if (this.classesForm.invalid) {
      this.classesForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.classesForm.value);
    }
  }
}