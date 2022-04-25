import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint="http://localhost:8080/austrom/";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = this.urlEndPoint + 'product';

  constructor(private http_client:HttpClient) {}

  create(product:Product):Observable<Product>{
    return this.http_client.post<Product>(this.url+"",product
    ,{headers:this.httpHeaders});
   }

   getProduct():Observable<Product[]>{
    return this.http_client.get<Product[]>(`${this.url}`);
   }

   getProductById(id:number):Observable<Product>{
    return this.http_client.get(`${this.url}/${id}`);
   }

   update(product:Product,id?:number):Observable<Product>{
    return this.http_client.put<Product>(`${this.url}/avalibility/${id}`,product
    ,{headers:this.httpHeaders});
   }

}
