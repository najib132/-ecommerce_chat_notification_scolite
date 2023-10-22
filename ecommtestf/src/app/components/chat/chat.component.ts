import { Component, EventEmitter } from '@angular/core';
import Echo from 'laravel-echo';
import { Messages } from 'src/app/models/messages';
import { User } from 'src/app/models/user';
import { UserAuths } from 'src/app/models/user-auths';
import { ChatService } from 'src/app/services/chat.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-chat', 
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'] 
})
export class ChatComponent {
  echo!: Echo;
  inputMessage!: string;
  username = 'Rami';
  groupMessages: Messages[] = [];
  users: User[] = []; 
  authUser:any;
  userActive = false;
  messageNotification = new EventEmitter<{ newMessage: boolean, senderId: string, receiveId: string}>();
  selectedUser!: UserAuths;
  privateMessages: Messages[] = [];





  authUser_id = JSON.parse(localStorage.getItem('id') || '{}');




  constructor(private chatService:ChatService,private usersService:UsersService ) {
    this.getSocketsId();
  }

  ngOnInit(): void {
     this.getGroupChat()
     this.joinChat(this.authUser_id)
     this.getAuthUser()
     this.getPrivateMessage();

  }

  getSocketsId() {
    this.echo = this.chatService.getSockets();  
  }

 

  joinChat(id:any) {
    this.echo.join(`chat`)
      .here((users:any) => {
        this.users = users;
        this.users = this.users.filter(user => {
          return user.id !== id;
        }); 
        console.log('users here : ', this.users);
      })
      .joining((user:any) => {
        this.users.push(user);
        console.log('join : ', user.name, user);
      })
      .leaving((user:any) => {
        console.log('Leave : ', user.name, user);
        this.users = this.users.filter(userList => {
           return user.id !== userList.id;
        }); 
        
      })
      .error((error:any) => {
        console.error(error);
      });
  }

 
  sendGroupMessage() {
    if (this.inputMessage) {
      const socketId = this.echo.socketId(); 
      this.chatService.sendMessage(this.inputMessage, socketId).subscribe(data => console.log('subscribe data : ', data));
      const message: Messages = {
        message: this.inputMessage,
        me: true,
        from : {name:"you"}
      };
      this.inputMessage = '';
      this.groupMessages.push(message);
      console.log(message)
    }
  }

  getGroupChat() { 
    this.echo.private('chat')
      .listen('ChatEvent', (res:any) => {
        const message: Messages = {
          message: res.message,
          me: false,
          from: res.from
        }; 
        this.groupMessages.push(message);
      }); 
  }

  getPrivateMessage() {
    const userAuthId = this.authUser_id;
    this.echo.private('channel-direct-message.' + userAuthId)
      .listen('ChatDirectMessageEvent', (res:any) => {
        console.log('private Msg : ', res);
        const messages: Messages = {
          message: res.response.message,
          me: false,
          from: {name:res.response.from.name},
          senderId: res.response.from.id,
          receiveId: res.response.authUserId
        };
        const messageNotification = {
          newMessage: true,
          senderId: res.response.from.id,
          receiveId: res.response.authUserId
        };
        this.privateMessages.push(messages);
        this.messageNotification.emit(messageNotification);
        console.log('Get Private message from chat : ', this.privateMessages);
      });
  }

  sendPrivateMessage() {
    const socketId = this.echo.socketId();
    const selectedID = this.selectedUser?.id;
    console.log(this.echo.socketId());
    console.log('selected User :' , this.selectedUser);
    // return;
    this.chatService.sendDirectMessage(this.inputMessage, +selectedID, socketId).subscribe(
      data => console.log('subscribe data : ', data) );
    const message: Messages = {
      message: this.inputMessage,
      me: true,
      from: {name:"you"},
      senderId: this.authUser.id,
      receiveId: selectedID
    };
    this.inputMessage = '';
    this.privateMessages.push(message);
    console.log('Send Private message from chat : ', this.privateMessages);
  }

  

  getAuthUser(){
    this.usersService.getOne(this.authUser_id).subscribe((authUser :any) => {
      this.authUser = authUser.data; 
      console.log("user authentifier est : "+ this.authUser.name)  
    })
  }

  selectUser(user:any) {
    this.userActive=true;
    console.log(user)
  }

 

  getSelectedAuthUser(event:any) {
    // console.log('user is : ', event);
    // console.log('auth user is : ', this.authUser);
    this.selectedUser = event;
  }  

}
 