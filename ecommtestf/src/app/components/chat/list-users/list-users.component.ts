import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserAuths } from 'src/app/models/user-auths';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  @Input() usersList: User[] = []; 
  @Input() authUser!: UserAuths;
  @Output() selectedAuthUser = new EventEmitter<UserAuths>();
  @Input() messageNotification!: EventEmitter<any>; 
  notifyNewMessage: any;
  userActive = false;

  
  ngOnInit(): void {
    this.messageNotification.subscribe(d => {
      this.notifyNewMessage = d;
      console.log('not : ', d);
    });
  }

  changeToGroupChat() {
    const user: UserAuths | null = null;
    this.selectedAuthUser.emit(user || undefined);
  }

  selectUser(user:any) {
    if (user.id === this.authUser.id) {
      return;
    }
    if (this.notifyNewMessage) {
      this.notifyNewMessage.newMessage = false;
    }
    this.selectedAuthUser.emit(user);
  }

}
