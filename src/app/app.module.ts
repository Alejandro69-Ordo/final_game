import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { GamaProductosComponent } from './gama-productos/gama-productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesCompraComponent } from './detalles-compra/detalles-compra.component';
import { SelecionCompraComponent } from './selecion-compra/selecion-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroProductoComponent,
    GamaProductosComponent,
    DetalleProductosComponent,
    ContactoComponent,
    DetallesCompraComponent,
    SelecionCompraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GamaProductosComponent]
})
export class AppModule { }
