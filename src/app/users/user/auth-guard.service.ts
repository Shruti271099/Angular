// import { AuthService } from './auth.service';
// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   RouterStateSnapshot,
//   Router
// } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService,
//     private router:Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//    return this.authService.IsAuthenticated().then((authenticated:boolean)=> {
//       if (authenticated) {
//         return true;
//       } else {
//         this.router.navigate(['/']);
//       }
//     }
//     );
//   }
// }
