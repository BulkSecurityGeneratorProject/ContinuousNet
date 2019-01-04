import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../core';
import { PasswordComponent } from './password.component';

export const passwordRoute: Route = {
    path: 'password',
    component: PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.mnu.account.password'
    },
    canActivate: [UserRouteAccessService]
};
