import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotFoundError, catchError, map, throwError } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) {
    
   }

  getAll(){
    return this.http.get(this.url).  
    pipe(map(response => response),  
     catchError(
       this.handleError
     )         
     )}
  
     create(resource:any){ 
      return this.http.post(this.url,resource). 
     pipe(map(response => response),
       catchError(
         this.handleError
       )         
       )} 

  delete(resource:any){
  return this.http.delete(this.url + "/" + resource.slug).
  pipe(map(response => response),
    catchError(
      this.handleError
    )           
    )} 

    getOne(slug:string){ 
      return this.http.get(this.url + '/show/' + slug).   
      pipe(map(response => response),
        catchError(
          this.handleError 
        )         
        )}   
  
    
    update(resource:any){
      return this.http.put(this.url +'/'+ resource.slug, resource,{
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }). 
        pipe(map(response => response),
          catchError(
            this.handleError  
          )         
          )}  

  private handleError(error : Response){
    if(error.status===404){ 
      return throwError(new NotFoundError( JSON.parse(error.toString())));
    }
    if(error.status===400){
      return throwError(new BadInput(error))
    }
    return throwError(new AppError(error))
  }
  
}
