import { EventsService } from './events.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private eventService:EventsService,
    private router:Router) {}
  canActivate() : boolean  {
    if (this.eventService.loggedIn){
      return  true;
    }
    else {
      
        this.router.navigate(['/login'])
        
       return false;
      
    }
  }
  
}
