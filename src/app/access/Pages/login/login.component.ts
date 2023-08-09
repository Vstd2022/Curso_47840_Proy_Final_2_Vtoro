
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccessService } from '../../access.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emailControl = new FormControl('usuario@mail.com', [Validators.required, Validators.email]);
  public passwordControl = new FormControl('123456', [Validators.required]);

  public loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  constructor(private accessService: AccessService) {}

  login(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      // FORMULARIO VALIDO
      this.accessService.login(this.loginForm.getRawValue())
    }

   
  }
}