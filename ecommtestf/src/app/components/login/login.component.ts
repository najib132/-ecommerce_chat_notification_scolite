import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  loginForm = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  });

  constructor(private authService:AuthService,private tokenService:TokenService,private router:Router,private accountService:AccountService) { }
  ngOnInit(): void {
  }
 
  login(){  
     this.authService.login(this.loginForm.value).subscribe(res => this.handleResponse(res));
  } 

  handleResponse(res:any){ 
    this.tokenService.handle(res); 
    this.accountService.changeStatus(true);
    this.tokenService.auth = true; 
    this.router.navigateByUrl('/annonces');
  }

}
