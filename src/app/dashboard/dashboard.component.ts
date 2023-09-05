import { Component } from '@angular/core';
import { selectIsAdmin, selecteAuthUserRole } from 'src/app/store/auth/auth.selectors';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccessService } from '../access/access.services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  showPage = true;

  public selectIsAdmin$: Observable<boolean>;

  constructor(
    private router: Router,
    private accessService: AccessService,
    private store: Store
  ) {
    this.selectIsAdmin$ = this.store.select(selectIsAdmin);
  }

  logout(): void {
    this.accessService.logout();
    this.router.navigate(['auth', 'login'], {})
  }
}









