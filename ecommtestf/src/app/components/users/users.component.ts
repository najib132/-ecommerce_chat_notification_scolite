import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users!:any[]; 

  constructor(private usersService:UsersService) { }



  ngOnInit(): void {
    this.getUsers();
  }  

  getUsers(){
    this.usersService.getAll().subscribe( 
      (users:any) => {
        this.users = users.data;
        console.log(this.users)
      });
  }

}  
