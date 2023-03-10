import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || '{}');
    console.log('loggedIn', loggedIn)
    if (loggedIn === true) {
      return true

    } else {
      this.router.navigate(['']);
      return false
    }
  }

}
