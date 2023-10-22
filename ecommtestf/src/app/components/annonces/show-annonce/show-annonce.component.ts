import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces.service';
import { CartService } from 'src/app/services/cart.service';
import { LandingPageService } from 'src/app/services/landing-page.service'; 

@Component({
  selector: 'app-show-annonce',
  templateUrl: './show-annonce.component.html',
  styleUrls: ['./show-annonce.component.css']
})
export class ShowAnnonceComponent {

  annonce:any;
  slug:string ='';
  annonces!:any[]; 
  count:number=1;
 

  constructor(private cartService:CartService,private landingPageService:LandingPageService,private route:ActivatedRoute,private annonceService:AnnoncesService,private router:Router) { }
  

  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;   
    this.getOneAnnonce();
    this.getAnnonces(); 
    window.scrollTo(0, 0);
  }

  getOneAnnonce(){
    this.landingPageService.getOne(this.slug).subscribe((annonce :any) => {
      this.annonce = annonce.data;  
    })
  }

  addtocart(item: any){ 
    this.cartService.addtoCart(item);
    return this.router.navigate(['/annonces/cart'], { state: { item } });
  } 


  getAnnonces(){
    this.annonceService.getAll().subscribe(
      (annonces:any) => {
        this.annonces = annonces.data;
        this.annonces = this.shuffle(this.annonces);
      })
  } 

  mightAnnonces(mightAlso:any){
    this.annonce = mightAlso; 
    window.scrollTo(0, 0);
  }


  shuffle(annonces:any) {
    let len = annonces.length,  index;
    while (len != 0) {
    
    index = Math.floor(Math.random() * len); 
    len--;
     
    [annonces[len], annonces[index]] = [annonces[index], annonces[len]];
      }
      return annonces;
    } 
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


}
