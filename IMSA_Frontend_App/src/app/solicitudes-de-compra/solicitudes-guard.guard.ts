import { CanActivate, CanActivateFn } from '@angular/router';
import { delay, of } from 'rxjs';



export const solicitudesGuardGuard: CanActivateFn = (route, state) => {
  return of(true).pipe(delay(1000));
};

