import { Injectable } from "@angular/core";
import { LoginPayload } from "./structdata";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { User } from "../dashboard/Pages/users/models";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environments";

@Injectable({ providedIn: 'root' })
export class AccessService {
  private _accessUser$ = new BehaviorSubject<User | null>(null);
  public accessUser$ = this._accessUser$.asObservable();

  constructor(
    private notifier: NotifierService,
    private router: Router,
    private httpClient: HttpClient,
  ) {}


  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<User[]>(environment.baseApiUrl + '/users', {
      params: {
        token: localStorage.getItem('token') || '',
      }
    }).pipe(
      map((accessResult) => {
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
          this._accessUser$.next(accessUser);


          // ESTA EJECUTANDO ESTA LINEA
          this.router.navigate(['/dashboard']);




          localStorage.setItem('token', accessUser.token);
        } else {
          // LOGIN INVALIDO
          this.notifier.showError('Email o contrasena invalida');
          this._accessUser$.next(null);
        }
      },
      error: (err) => {

        if (err instanceof HttpErrorResponse) {
          let message = 'Ocurrio un error inespeado';
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
}