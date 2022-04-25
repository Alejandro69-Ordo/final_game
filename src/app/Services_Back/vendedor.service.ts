import { Injectable } from '@angular/core';
import { Saller} from './Saller';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private urlEndPoint="http://localhost:8080/austrom/";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = this.urlEndPoint + 'saller/register';
  private url_get: string = this.urlEndPoint + 'saller';

  constructor(private http_client:HttpClient) { }

  create(vendedor:Saller):Observable<Saller>{
   return this.http_client.post<Saller>(this.url,vendedor,{headers:this.httpHeaders});
  }

  getClientById(sallerId:number):Observable<Saller>{
    return this.http_client.get(`${this.url_get}/${sallerId}`);
   }

}
