import { TestBed } from "@angular/core/testing"
import { ClassesDialogComponent } from "./classes-form.component"
import { MatFormFieldModule } from "@angular/material/form-field"
import {MatInputModule} from '@angular/material/input';

describe('ClassesDialogComponent', () => {
  let component: ClassesDialogComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassesDialogComponent],
      imports: [ MatInputModule]
    })
    component = TestBed.createComponent(ClassesDialogComponent).componentInstance
  })

  it('El formulario debe ser invalido si los campos del mismo quedan en blanco', () => {
    component.NameClassControl.setValue('');
    component.teacherClassControl.setValue('');    
  })
}
)