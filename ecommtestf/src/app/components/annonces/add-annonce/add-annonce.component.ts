import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Annonce } from 'src/app/models/annonce/annonce.module';
import { CategoryService } from 'src/app/services/category.service';
import { SouscategoryService } from 'src/app/services/souscategory.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent {
  soucategory_id!:number;
  piece_id!:number;
  souscategories:any = [];
  categories:any = [];
  souscategoriesea:any=[];
  annonces:any = [];


  constructor(private http:HttpClient,private route:Router,private souscategoryService:SouscategoryService,private flashMessage:FlashMessagesService,private categoryService:CategoryService) { }


  annonce : Annonce = {  
    id:0,
    category_id:null,   
    souscategory_id:null,  
    user_id:0,
    type:0,
    domaine:'',
    contrat:'',
    entreprise:'',
    niveaua:'',
    poste:'',
    salaire:'', 
    marque:'',
    marquem:'',
    modele:'',
    annee:'',
    km:'',
    carburant:'',
    puissance:'',
    poidsl:'',
    piece:'',
    autrepi:'',
    surface:'',
    chambre:'',
    salleb:'',
    faces:'',
    name:'',
    title:'',
    slug:'',
    description:'',
    prix:0,
    image:'',
    images:'',
  };


  ngOnInit(): void {
    this.getCategory();
    this.getSouscategories();

  } 
  

filedata:any;   

  fileEvent(e:any){ 
    this.filedata = e.target.files[0]; 
}

ChangeSoucategory(soucategory:any) {
  this.soucategory_id = soucategory.target.value;
}

getCategory(){
  this.categoryService.getAll().subscribe((categories:any) => {
    this.categories = categories.data;   
  })
}

getSouscategories(){
  this.souscategoryService.getAll().subscribe((souscategories:any) => {
      this.souscategories = souscategories.data;

  })
}

ChangeCategory(cat:any){ 
  this.souscategoriesea = this.souscategories.filter( (item:any) => 
        item.category == cat.target.value,
  );
} 
 


ChangePiece(piece:any) {
  this.piece_id = piece.target.value;
  console.log(this.piece_id)
}
 

onSubmitform(f: NgForm) {
       
  var myFormData:any = new FormData(); 

  const headers = new HttpHeaders();

  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');

  myFormData.append('category_id',      this.annonce.category_id);
  myFormData.append('souscategory_id',  this.annonce.souscategory_id);
  myFormData.append('user_id',          this.annonce.user_id);
  myFormData.append('type',             this.annonce.type);
  myFormData.append('domaine',      this.annonce.domaine);
  myFormData.append('contrat',      this.annonce.contrat);
  myFormData.append('entreprise',      this.annonce.entreprise);
  myFormData.append('niveaua',      this.annonce.niveaua);
  myFormData.append('poste',      this.annonce.poste);
  myFormData.append('salaire',      this.annonce.salaire);
  myFormData.append('marque',      this.annonce.marque);
  myFormData.append('marquem',      this.annonce.marquem);
  myFormData.append('modele',      this.annonce.modele);
  myFormData.append('annee',      this.annonce.annee);
  myFormData.append('km',      this.annonce.km);
  myFormData.append('carburant',      this.annonce.carburant);
  myFormData.append('puissance',      this.annonce.puissance);
  myFormData.append('poidsl',      this.annonce.poidsl);
  myFormData.append('piece',      this.annonce.piece);
  myFormData.append('autrepi',      this.annonce.autrepi);
  myFormData.append('surface',      this.annonce.surface);
  myFormData.append('name',      this.annonce.name);
  myFormData.append('title',      this.annonce.title);
  myFormData.append('slug',      this.annonce.slug);
  myFormData.append('description',      this.annonce.description);
  myFormData.append('prix',      this.annonce.prix);
  myFormData.append('image',      this.filedata);
  /* Image Post Request */
  this.http.post('http://localhost/aswakb/public/api/annonces', myFormData, {
  headers: headers
  }).subscribe(data => {
    this.flashMessage.show('annonce added succssfully.', { cssClass : 'alert-success',timeout: 10000 });
    return this.route.navigate(['/annonces']); 
    
  });   

}

}
