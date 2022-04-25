import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint="http://localhost:8080/austrom/";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = this.urlEndPoint + 'user/register';

  constructor(private http_client:HttpClient) { }

  create(user:User):Observable<User>{
    user.state=true;
   return this.http_client.post<User>(this.url,user,{headers:this.httpHeaders});
  }
}
