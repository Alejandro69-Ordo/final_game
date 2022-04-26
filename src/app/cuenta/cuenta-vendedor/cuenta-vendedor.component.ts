import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Saller } from 'src/app/Services_Back/Saller';
import { VendedorService } from 'src/app/Services_Back/vendedor.service';
import { User } from '../../Services_Back/usuario/User';
import { ProductoService } from '../../Services_Back/producto/producto.service';
import { Product } from '../../Services_Back/producto/Product';

@Component({
  selector: 'app-cuenta-vendedor',
  templateUrl: './cuenta-vendedor.component.html',
  styleUrls: ['./cuenta-vendedor.component.css']
})
export class CuentaVendedorComponent implements OnInit {

  constructor(private router:Router
    ,private activatedRoute: ActivatedRoute,
    private vendedor_service:VendedorService,
    private producto_service:ProductoService) { }

    observable?:Observable<Saller>;
  public object:Saller=new Saller();
  public productos:Product[]=[];



  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['vendedor'];
      this.observable= this.vendedor_service.getClientById(id);
    })

    this.observable?.subscribe(
      _objet=>{
        this.object=_objet;

    }, error => console.log(error));


    this.producto_service.getProduct().subscribe(
      objets =>
      this.productos = objets
    );

  }

  registrarProducto():void{
    this.activatedRoute.params.subscribe( params => {
      let id = params['vendedor'];
      this.router.navigate(['/registro_producto',id])
    })
  }

  initUpdate(id_product?:number):void{
    this.activatedRoute.params.subscribe( params => {
      let id = params['vendedor'];
      this.router.navigate(['/detalle_producto_vendedor',id_product,id])
    })
  }


}
