import { Component, OnInit } from '@angular/core';
import { User } from '../Services_Back/usuario/User';
import { ActivatedRoute,Router } from '@angular/router';
import { UsuarioService } from '../Services_Back/usuario/usuario.service';
import { VendedorService } from 'src/app/Services_Back/vendedor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user=new User();

  constructor( private usuario_service:UsuarioService,
    private vendedor_service:VendedorService,
    private router:Router
    ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {}

  logear():void{
      this.usuario_service.login(this.user.mail,this.user.password).subscribe(
        mapeo=>{

          if(mapeo.tipo==3){
            console.log("SALLER");
              this.usuario_service.getUser(mapeo.userId).subscribe(obje=>{
                console.log(obje.sallerId+":saller");
                this.router.navigate(['/vendedor_',obje.sallerId]);
              })
          }else{

          }

        }
      )
  }


}
