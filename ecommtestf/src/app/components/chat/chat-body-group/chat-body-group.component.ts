import { Component, Input } from '@angular/core';
import { Messages } from 'src/app/models/messages';

@Component({
  selector: 'app-chat-body-group',
  templateUrl: './chat-body-group.component.html',
  styleUrls: ['./chat-body-group.component.css']
})
export class ChatBodyGroupComponent {

  @Input() allMessages: Messages[] = [];

}
 