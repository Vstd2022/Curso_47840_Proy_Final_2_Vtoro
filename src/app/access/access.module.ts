import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AccessRoutingModule } from './access-routing.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({    
  declarations: [AccessComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, MatCardModule, ReactiveFormsModule,MatTableModule,MatDialogModule,MatInputModule,MatFormFieldModule,RouterModule,AccessRoutingModule],
})
export class AccessModule {}