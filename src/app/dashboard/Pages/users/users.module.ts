import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from './user.service';
import { UserMockService } from './mocks/user-mock.service';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent, 
  ],
  imports: [CommonModule, SharedModule, RouterModule, UsersRoutingModule],
  exports: [UsersComponent],
  providers: [
    
    {
      provide: 'IS_DEV',
      useValue: false,
    },
    
  ],
})
export class UsersModule {}