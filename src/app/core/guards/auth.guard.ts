import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AccessService } from 'src/app/access/access.services';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessService = inject(AccessService);

  return accessService.isAuthenticated().pipe(
    map((isAuth) => {
      // SI ESTA AUTENTICADO LO DEJO VER LA PANTALLA...
      if (isAuth) return true;

      
      return router.createUrlTree(['/access/login']);
    })
  );
};

