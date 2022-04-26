import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../Services_Back/producto/producto.service';
import { Product } from '../Services_Back/producto/Product';

@Component({
  selector: 'app-gama-productos',
  templateUrl: './gama-productos.component.html',
  styleUrls: ['./gama-productos.component.css']
})
export class GamaProductosComponent implements OnInit {

  public productos:Product[]=[];
  constructor( private producto_service:ProductoService) { }

  ngOnInit(): void {

    this.producto_service.getProduct().subscribe(
      objets =>
      this.productos = objets
    );
  }

}
