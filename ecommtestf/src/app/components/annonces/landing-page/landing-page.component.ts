import { Component } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  annonces!:any[];
  count:number=1;
  constructor(private annoncesService:AnnoncesService) { } 

  ngOnInit(): void {
    this.getAnnonces(); 
  } 

  getAnnonces(){
    this.annoncesService.getAll().subscribe(
      (annonces:any) => {
        this.annonces = annonces.data;
        this.annonces = this.shuffle(this.annonces);
      })
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

}
