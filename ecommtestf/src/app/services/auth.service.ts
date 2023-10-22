import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  login(data: {email?:string | null,password?:string | null}){
    return this.http.post('http://localhost/aswakb/public/api/login',data); 
  }
}
