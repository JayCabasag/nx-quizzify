import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

export const DashboardGuard: CanActivateFn = (route) => {
    const userService = inject(UserService)
    const router = inject(Router)

    const currentUser = userService.getCurrentUser()

    if (currentUser?.type !== 'teacher') {
        router.navigate(['/' + router.navigate([route.url[0].path])])
        return false
    }

    return true;
};
