import { Injectable } from '@angular/core';
import { Vendedor } from './vendedor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private url:string="http://localhost:8080/api/vendedor";
  private HttpHeaders= new HttpHeaders({'Content-Type':'aplication/json'})

  constructor(private http_client:HttpClient) { }

  create(vendedor:Vendedor):Observable<Vendedor>{
   return this.http_client.post<Vendedor>(this.url,vendedor,{headers:this.HttpHeaders});
  }




}
