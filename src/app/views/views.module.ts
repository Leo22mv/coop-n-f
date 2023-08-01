import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/home/clientes/clientes.component';
import { VendedoresComponent } from './components/home/vendedores/vendedores.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    VendedoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ViewsModule { }
