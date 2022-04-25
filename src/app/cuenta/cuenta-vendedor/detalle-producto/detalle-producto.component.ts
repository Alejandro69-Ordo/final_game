import { Saller } from './../../../Services_Back/Saller';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VendedorService } from 'src/app/Services_Back/vendedor.service';
import { ProductoService } from 'src/app/Services_Back/producto/producto.service';
import { Product } from 'src/app/Services_Back/producto/Product';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public producto:Product=new Product();
  public saller:Saller=new Saller();
  observable?:Observable<Product>;
  observable_saller?:Observable<Saller>;

  constructor( private producto_service:ProductoService,
    private saller_service:VendedorService,
    private router:Router
    ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['vendedor'];
      this.observable= this.producto_service.getProductById(id);
    })

    this.activatedRoute.params.subscribe( params => {
      let id_ = params['id_vendedor'];
      this.observable_saller=this.saller_service.getClientById(id_);
    })

    this.observable?.subscribe(
      _objet=>{
        this.producto=_objet;

    }, error => console.log(error));

    this.observable_saller?.subscribe(
      _objet=>{
        this.saller=_objet;

    }, error => console.log(error));
  }

}
