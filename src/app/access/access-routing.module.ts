import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./Pages/login/login.component";
import { RegisterComponent } from "./Pages/register/register.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      // /access
      {
        // /access/login
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ]
})
export class AccessRoutingModule {}