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
import { CuentaCompristaComponent } from './cuenta/cuenta-comprista/cuenta-comprista.component';
import { HeaderComponent } from './header/header.component';
import { CuentaVendedorComponent } from './cuenta/cuenta-vendedor/cuenta-vendedor.component';
import { RegisterProductoComponent } from './cuenta/cuenta-vendedor/register-producto/register-producto.component';
import { DetalleProductoComponent } from './cuenta/cuenta-vendedor/detalle-producto/detalle-producto.component';
import {HttpClientModule} from '@angular/common/http';
import { VendedorService } from './Services_Back/vendedor.service';
import { FormsModule } from '@angular/forms';
import { ProductoService } from './Services_Back/producto/producto.service';
import { UsuarioService } from './Services_Back/usuario/usuario.service';
import { UpdateProductoComponent } from './registro-producto/update-producto/update-producto.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes= [
  {path:'',component:GamaProductosComponent},
 {path:'login', component: LoginComponent},
 {path:'registro_vendedor', component: RegistroVendedorComponent},
 {path:'vendedor', component: CuentaVendedorComponent},
 {path:'registro_producto/:vendedor', component: RegisterProductoComponent},
 {path:'detalle_producto_vendedor/:vendedor/:id_vendedor', component: DetalleProductoComponent},
 {path:'contacto', component:  ContactoComponent},
 {path:'vendedor_/:vendedor',component:CuentaVendedorComponent},
 {path:'actualizar_producto/:vendedor/:producto',component:UpdateProductoComponent},
 {path:'registro_cli',component:RegistroClienteComponent}
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
    RegistroVendedorComponent,
    CuentaCompristaComponent,
    HeaderComponent,
    CuentaVendedorComponent,
    RegisterProductoComponent,
    DetalleProductoComponent,
    UpdateProductoComponent,
    RegistroClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [VendedorService,ProductoService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
