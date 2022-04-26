import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Saller } from '../Saller';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint="http://localhost:8080/austrom/";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = this.urlEndPoint + 'user/register';
  private url_login: string = this.urlEndPoint + 'user/login';
  private url_saller: string = this.urlEndPoint + 'saller/login';

  constructor(private http_client:HttpClient) { }

  create(user:User):Observable<User>{
    user.state=true;
   return this.http_client.post(this.url,user,{headers:this.httpHeaders});
  }

  login(mail?:string,clave?:string):Observable<User>{
    return this.http_client.get(`${this.url_login}/${mail}/${clave}`);
  }


  getUser(id_?:number):Observable<Saller>{
    return this.http_client.get(`${this.url_saller}/${id_}`);
  }

}
