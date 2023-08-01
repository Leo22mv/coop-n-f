import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './views/components/home/clientes/clientes.component';
import { VendedoresComponent } from './views/components/home/vendedores/vendedores.component';

const routes: Routes = [
  {path: "vendedor", component: VendedoresComponent},
  {path: "cliente", component: ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
