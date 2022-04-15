import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { GamaProductosComponent } from './gama-productos/gama-productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesCompraComponent } from './detalles-compra/detalles-compra.component';
import { SelecionCompraComponent } from './selecion-compra/selecion-compra.component';
import { RegistroVendedorComponent } from './registro_entidades/registro-vendedor/registro-vendedor.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes= [
  {path:'',redirectTo:'',pathMatch:'full'},
 {path:'registro_vendedor', component: RegistroVendedorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroProductoComponent,
    GamaProductosComponent,
    DetalleProductosComponent,
    ContactoComponent,
    DetallesCompraComponent,
    SelecionCompraComponent,
    RegistroVendedorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RegistroVendedorComponent]
})
export class AppModule { }
