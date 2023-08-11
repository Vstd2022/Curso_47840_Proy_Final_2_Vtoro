import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from './models';
import { UserService } from './user.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [],
})
export class UsersComponent implements OnDestroy {
  public users: Observable<User[]>;
  public isLoading$: Observable<boolean>;
  public destroyed = new Subject<boolean>();

  public loading = false;
  constructor(private matDialog: MatDialog, private userService: UserService) {
    this.userService.loadUsers();
    this.isLoading$ = this.userService.isLoading$;
    this.users = this.userService.getUsers();
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

  
  

  
}