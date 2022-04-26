import { Component, OnInit } from '@angular/core';
import { Client } from '../Services_Back/cliente/Client';
import { VendedorService } from 'src/app/Services_Back/vendedor.service';
import { Saller } from 'src/app/Services_Back/Saller';
import Swal from 'sweetalert2';
import { User } from '../Services_Back/usuario/User';
import { ActivatedRoute,Router } from '@angular/router';
import { UsuarioService } from '../Services_Back/usuario/usuario.service';
import { ClienteService } from '../Services_Back/cliente/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  cliente:Client=new Client();
  user:User=new User();

  constructor(private vendedor_service:VendedorService,
    private usuario_service:UsuarioService,
    private router:Router
    ,private activatedRoute: ActivatedRoute,
    private client_service:ClienteService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.usuario_service.create(this.user).subscribe(data => {
      this.cliente.user=data;
      this.client_service.create(this.cliente).subscribe(dat2 => {
        console.log(data)
        Swal.fire('ClienteRegistrado', `Nombre ${this.user.name}`,`success`);
        this.router.navigate([''])
      }
        ,
        error => console.log(error));

      },error => console.log(error));

  }

}
