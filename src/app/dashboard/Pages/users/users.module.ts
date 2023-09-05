import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserService } from './user.service';
import { UserMockService } from './mocks/user-mock.service';
import { UserDetailComponent } from './pages/user-detail.component'; 
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UsersTableComponent,
    UserDetailComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, UsersRoutingModule,MatIconModule],
  exports: [UsersComponent],
  providers: [
    // {
    //   // Cuando UserService sea proveido
    //   provide: UserService,
    //   // Usa esta clase...
    //   useClass: UserMockService,
    // },
    {
      provide: 'IS_DEV',
      useValue: false,
    },
    // {
    //   provide: UserService,
    //   useFactory: (authService: AuthService) => {
    //     const isAdmin = authService.authUser.role === 'ADMIN';
    //     return isAdmin ? new UserMockService() : new UserService();
    //   },
    //   deps: [
    //     AuthService
    //   ]
    // },
  ],
})
export class UsersModule {}