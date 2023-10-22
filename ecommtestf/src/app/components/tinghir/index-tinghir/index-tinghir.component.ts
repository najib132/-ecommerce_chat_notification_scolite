import { Component } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { AppError } from 'src/app/common/app-error';
import { TinghirService } from 'src/app/services/tinghir.service';

@Component({
  selector: 'app-index-tinghir',
  templateUrl: './index-tinghir.component.html',
  styleUrls: ['./index-tinghir.component.css']
})
export class IndexTinghirComponent {
  tinghirs!:any[];
  count:number=1;

  constructor(private tinghirService:TinghirService) { }

  ngOnInit(): void {
    this.getTinghirs(); 
  }

  getTinghirs(){
    this.tinghirService.getAll().subscribe((tinghirs:any) => {
      this.tinghirs = tinghirs.data; 
      this.tinghirs = this.tinghirs.sort((y, x) => +new Date(x.created) - +new Date(y.created));
    }) 
  } 

  deleteTinghir(tinghir:any){
    this.tinghirService.delete(tinghir)
        .subscribe(() =>{
          let index = this.tinghirs.indexOf(tinghir);
          this.tinghirs.splice(index,1);
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
