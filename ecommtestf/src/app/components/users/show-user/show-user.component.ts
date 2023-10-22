import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent { 

  authUser_id = JSON.parse(localStorage.getItem('id') || '{}');
  authUser:any;




  constructor(private tokenService:TokenService,private usersService:UsersService) {
  }

  ngOnInit(): void {
    this.getAuthUser();
  }

  

  getAuthUser(){
    this.usersService.getOne(this.authUser_id).subscribe((authUser :any) => {
      this.authUser = authUser.data; 
      console.log(this.authUser)  
    })
  }


}
