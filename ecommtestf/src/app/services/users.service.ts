import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService {

  constructor(http:HttpClient) { 
    super('http://localhost/aswakb/public/api/users',http);    
  }
}
