import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TinghirService extends DataService{

  constructor(http:HttpClient) {
    super('http://localhost/aswakb/public/api/tinghirs',http)
   }
}
