import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url:string="http://localhost:8080/api/producto";
  private HttpHeaders= new HttpHeaders({'Content-Type':'aplication/json'})

  constructor(private http_client:HttpClient) {}

  create(producto:Producto):Observable<Producto>{
    return this.http_client.post<Producto>(this.url,producto,{headers:this.HttpHeaders});
   }

}
