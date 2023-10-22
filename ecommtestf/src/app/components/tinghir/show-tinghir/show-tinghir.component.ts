import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TinghirService } from 'src/app/services/tinghir.service';

@Component({
  selector: 'app-show-tinghir',
  templateUrl: './show-tinghir.component.html',
  styleUrls: ['./show-tinghir.component.css']
})
export class ShowTinghirComponent {
  slug:string='';
  tinghir:any;

  constructor(private tinghirService:TinghirService,private route:ActivatedRoute,private router:Router) { } 

  ngOnInit(): void { 
    this.slug = this.route.snapshot.params.slug;
    this.getOneTinghir();
  }

  getOneTinghir(){
    this.tinghirService.getOne(this.slug).subscribe((tinghir :any) => {
      this.tinghir = tinghir.data; 
    })
  }

}
