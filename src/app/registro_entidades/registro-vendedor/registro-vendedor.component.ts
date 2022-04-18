import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { VendedorService } from 'src/app/Services_Back/vendedor.service';
import { Vendedor } from 'src/app/Services_Back/vendedor';

@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.component.html',
  styleUrls: ['./registro-vendedor.component.css']
})
export class RegistroVendedorComponent implements OnInit {

  vendedor:Vendedor=new Vendedor();

  constructor(private vendedor_service:VendedorService,
    private router:Router
    ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(): void {
    this.vendedor_service.create(this.vendedor);
  }


}
