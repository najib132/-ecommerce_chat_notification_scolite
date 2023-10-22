import { Component } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  annonces!:any[]; 
  count:number=1; 
  products : any = [];
  product : any ;



  constructor(private cartService:CartService,private annonceService:AnnoncesService) { } 
  

  ngOnInit(): void {
    this.getAnnonces(); 
    window.scrollTo(0, 0);
    this.getProducts();

  }

  getAnnonces(){
    this.annonceService.getAll().subscribe(
      (annonces:any) => {
        this.annonces = annonces.data;
        this.annonces = this.shuffle(this.annonces);
      })
  } 

  getProducts(){
    this.product = history.state.item;
    this.products.push(this.product)
    console.log(this.products)
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
