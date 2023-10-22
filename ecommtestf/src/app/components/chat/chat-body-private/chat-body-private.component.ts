import { Component, Input } from '@angular/core';
import { Messages } from 'src/app/models/messages';
import { UserAuths } from 'src/app/models/user-auths';

@Component({
  selector: 'app-chat-body-private',
  templateUrl: './chat-body-private.component.html',
  styleUrls: ['./chat-body-private.component.css']
})
export class ChatBodyPrivateComponent {
  @Input() selectedUser!: UserAuths;
  @Input() authUser!: UserAuths; 
  @Input() allMessages: Messages[] = [];

}
