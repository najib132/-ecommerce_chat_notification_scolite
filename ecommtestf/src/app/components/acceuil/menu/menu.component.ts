import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentUser!:null; 


  constructor(private accountService:AccountService,private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void { 
    this.accountService.authStatus.subscribe(res => {
      this.currentUser = this.tokenService.getInfo();
   })
  }
 
  logOut(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl('/login');
    location.reload();
  }

}
