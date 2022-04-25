import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { VendedorService } from 'src/app/Services_Back/vendedor.service';
import { Saller } from 'src/app/Services_Back/Saller';
import { User } from '../../Services_Back/usuario/User';
import { UsuarioService } from '../../Services_Back/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.component.html',
  styleUrls: ['./registro-vendedor.component.css']
})
export class RegistroVendedorComponent implements OnInit {

  vendedor:Saller=new Saller();
  user:User=new User();
  id:number=0;

  constructor(private vendedor_service:VendedorService,
    private usuario_service:UsuarioService,
    private router:Router
    ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(): void {

   this.usuario_service.create(this.user).subscribe(data => {

    this.vendedor.user=data;
    this.vendedor_service.create(this.vendedor).subscribe(dat2 => {
      console.log(data)
      Swal.fire('Vendedor Registrado', `Nombre ${this.user.name}`,`success`);
      this.router.navigate(['/vendedor_',dat2.sallerId])
    }
      ,
      error => console.log(error));

    },error => console.log(error));


  }

}
