import { Injectable } from "@angular/core";
import { LoginPayload } from "./structdata";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { User } from "../dashboard/Pages/users/models";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environments";
import { Store } from "@ngrx/store";
import { AuthActions } from "../store/auth/auth.actions";
import { selectAuthUser } from "../store/auth/auth.selectors";



@Injectable({ providedIn: 'root' })
export class AccessService {
  //private _accessUser$ = new BehaviorSubject<User | null>(null);
  //public accessUser$ = this._accessUser$.asObservable();
  public authUser$ = this.store.select(selectAuthUser);

  constructor(
    private notifier: NotifierService,
    private router: Router,
    private httpClient: HttpClient,
    private store: Store,
  ) {}


  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<User[]>(environment.baseApiUrl + '/users', {
      params: {
        token: localStorage.getItem('token') || '',
      }
    }).pipe(
      map((accessResult) => {
        if (accessResult.length) {
          const authUser = accessResult[0];
          // LOGIN VALIDO
          // this._authUser$.next(authUser);
          this.store.dispatch(AuthActions.setAuthUser({ payload: authUser }));
        }
        return !!accessResult.length
      })
    )
  }

  login(payload: LoginPayload): void {

    this.httpClient.get<User[]>(environment.baseApiUrl + '/users', {
      params: {
        email: payload.email || '',
        password: payload.password || ''
      }
    }).subscribe({
      next: (response) => {
          if (response.length) {
          const accessUser = response[0];
          // LOGIN VALIDO
          //this._accessUser$.next(accessUser);
          this.store.dispatch(AuthActions.setAuthUser({ payload: accessUser }));
  

          // ESTA EJECUTANDO ESTA LINEA
          this.router.navigate(['/dashboard']);


          localStorage.setItem('token', accessUser.token);
        } else {
          // LOGIN INVALIDO
          this.notifier.showError('Email o contrasena invalida');
          //this._accessUser$.next(null);
          this.store.dispatch(AuthActions.setAuthUser({ payload: null }));
        }
      },
      error: (err) => {

        if (err instanceof HttpErrorResponse) {
          let message = 'Ocurrio un error inesperado';
          if (err.status === 500) {
          }
          if (err.status === 401) {
            message = 'Email o contrasena invalida';
          }
          this.notifier.showError(message)
        }
      }
    })

    
  }
  public logout(): void {
    this.store.dispatch(AuthActions.setAuthUser({ payload: null }))
  }
}