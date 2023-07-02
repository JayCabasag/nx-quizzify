import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

export const QuizzesGuard: CanActivateFn = (route) => {
    const userService = inject(UserService)
    const router = inject(Router)

    const currentUser = userService.getCurrentUser()

    if (currentUser?.type !== 'student') {
        router.navigate(['/'])
        return false
    }

    return true;
};
