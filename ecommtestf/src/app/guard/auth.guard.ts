import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService:TokenService,private accountService:AccountService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { 
    if(this.tokenService.auth == false){ 
      this.tokenService.remove();
      this.accountService.changeStatus(false); 
      this.router.navigateByUrl("/login");
      return false; 
    }
     
    return true;
  }
  
}
