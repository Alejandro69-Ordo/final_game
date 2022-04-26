import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest, HttpEvent} from '@angular/common/http';
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
    return this.http_client.put<Product>(`${this.url}/${id}`,product
    ,{headers:this.httpHeaders});
   }

   private urlEndPoint_assets="http://localhost:8080/api/assets";
   upload(file: File,id?:number):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.urlEndPoint_assets}/upload/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log('llgue');
    return this.http_client.request(req);
  }


}
