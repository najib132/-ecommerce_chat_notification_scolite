import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Annonce } from 'src/app/models/annonce/annonce.module';
import { CategoryService } from 'src/app/services/category.service';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { SouscategoryService } from 'src/app/services/souscategory.service';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent {
  slug:string = '';
  soucategory_id:number=0;
  souscategories:any = []; 
  souscategoriesea:any = [];  
  categories:any = [];   

  annonce : Annonce = { 
    id:0,
    category_id:0,    
    souscategory_id:0, 
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
  
  


constructor(private http:HttpClient,private router:Router,private flashService:FlashMessagesService,private landingPageService:LandingPageService,private route:ActivatedRoute,private categoryService:CategoryService,private souscategoryService:SouscategoryService) { }

ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug; 
    this.getOneAnnonce();
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

getOneAnnonce(){
  this.landingPageService.getOne(this.slug).subscribe((annonce :any) => {
    this.annonce = annonce.data;  
  }) 
}  

ChangeCategory(cat:any){ 
    this.souscategoriesea = this.souscategories.filter( (item:any) => 
        item.category == cat.target.value, 
    );
} 


editannonce(f: NgForm) {
       
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
  
  this.http.post('http://localhost/aswakb/public/api/annonces/'+this.slug, myFormData, {
  headers: headers
  }).subscribe(data => {
    this.flashService.show('annonce added succssfully.', { cssClass : 'alert-success',timeout: 10000 });
    return this.router.navigate(['/annonces/show/',this.slug]); 
    
  });    

}

}
