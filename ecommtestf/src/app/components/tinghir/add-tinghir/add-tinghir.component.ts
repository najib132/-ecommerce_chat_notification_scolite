import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-tinghir',
  templateUrl: './add-tinghir.component.html',
  styleUrls: ['./add-tinghir.component.css']
})
export class AddTinghirComponent {

  constructor(private http:HttpClient, private route:Router, private flashMessage:FlashMessagesService ) { }

  tinghir = {
    id:0,
    titre:'',
    image:'',
    description:''
 }

 config: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  
};

filedata:any;   

  fileEvent(e:any){ 
    this.filedata = e.target.files[0]; 
}

addTinghir(f: NgForm){
  var myFormData:any = new FormData();

  const headers = new HttpHeaders();

  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');

  myFormData.append('titre',      this.tinghir.titre);
  myFormData.append('description',  this.tinghir.description);
  myFormData.append('image',      this.filedata);
  
  this.http.post('http://localhost/aswakb/public/api/tinghirs', myFormData, {
  headers: headers
  }).subscribe(data => {
    this.flashMessage.show('tinghir added succssfully.', { cssClass : 'alert-success',timeout: 10000 });
    return this.route.navigate(['/tinghirs']); 
    
  });   

}


}
