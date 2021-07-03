import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartGuardGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router)
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     return new Promise(resolve=>{
      this.auth.user.subscribe(user=>{
        if(user) resolve(true)
        else{
          this.router.navigate(['login'])
          resolve(false);
        }
      })
     })
      
  }
  
}
