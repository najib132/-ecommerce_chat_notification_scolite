import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private logginIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
authStatus = this.logginIn.asObservable();
a!:boolean;

constructor(private tokenService:TokenService) { }

changeStatus(value :boolean){
   this.logginIn.next(value) 
}
}
