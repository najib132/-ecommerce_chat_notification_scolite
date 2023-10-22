import { LandingPageService } from './../../../services/landing-page.service';
import { AppError } from 'src/app/common/app-error';
import { Component } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-index-annonce',
  templateUrl: './index-annonce.component.html',
  styleUrls: ['./index-annonce.component.css']
}) 
export class IndexAnnonceComponent {
  annonces!:any[]; 
  category!:any[];
  searchAnnonce!:any[];
  count:number=1;
  constructor(private LandingPageService:LandingPageService,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAnnonces();
    this.getCategory(); 
  }  

  getAnnonces(){
    this.LandingPageService.getAll().subscribe( 
      (annonces:any) => {
        this.annonces = annonces.data;
        this.searchAnnonce = this.annonces.sort((y, x) => +new Date(x.created) - +new Date(y.created));
      });
  }

  getCategory(){
    this.categoryService.getAll().subscribe( 
      (category:any) => this.category = category.data)
  }

  filterAnnonces(cat:any){ 
    this.searchAnnonce = this.annonces.filter( item => 
        item.category == cat.id
    );
}

showAll(){  
  this.searchAnnonce = this.annonces.sort((y, x) => +new Date(x.created) - +new Date(y.created));
}

search(query:string){
  this.searchAnnonce = (query) ? this.annonces.filter(annonce => annonce.description.toLowerCase().includes(query.toLowerCase()) || annonce.title.toLowerCase().includes(query.toLowerCase()) || annonce.name.toLowerCase().includes(query.toLowerCase())) : this.annonces;
}
 
deleteAnnonce(annonce:any){
  this.LandingPageService.delete(annonce)
     .subscribe(() =>{
       let index = this.searchAnnonce.indexOf(annonce);
       this.searchAnnonce.splice(index,1);
     },(error : AppError) => {
       if(error instanceof NotFoundError){
         alert("this ad already deleted");
       }else{
         alert("unexpected error");
         console.log(error);
       }
     })
    } 


}
