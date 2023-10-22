import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient,private tokenService:TokenService) { } 
  getSockets(): Echo {
    return new Echo({
      broadcaster: 'pusher',
      key: '9d80a4aa39484cd65055',
      cluster: 'eu',
      wsHost: 'localhost',
      authEndpoint: `http://localhost/aswakb/public/api/broadcasting/auth`, 
      auth: {
        headers: {
          Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      },
      encrypted: false, 
      forceTLS: false,    // Important Line
      wsPort: 6001,
      disableStats: true,
    });
  }

  sendMessage(message: string, socketId: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + this.tokenService.getToken(),
        'X-Socket-ID': socketId
      })
    };
    return this.http.post('http://localhost/aswakb/public/api/messages', {message}, options);
  }

 

  sendDirectMessage(message: string, authUserId: number, socketId: string) {
    const options = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + this.tokenService.getToken(),
        'X-Socket-ID': socketId
      })
    };
    return this.http.post('http://localhost/aswakb/public/api/messageDirect', {message,authUserId}, options); 
  }
}
