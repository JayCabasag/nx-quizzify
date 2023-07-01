import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)

  userService.isAuthenticated().subscribe((isVerified: boolean) => {
    if (isVerified) {
      return true
    } else {
      return router.navigateByUrl('/auth/signin')
    }
  })

  return true;
};
