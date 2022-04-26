import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './Client';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint="http://localhost:8080/austrom/";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = this.urlEndPoint + 'client';
  private url_get: string = this.urlEndPoint + 'saller';

  constructor(private http_client:HttpClient) { }

  create(client:Client):Observable<Client>{
    return this.http_client.post<Client>(this.url,client,{headers:this.httpHeaders});
   }
}
