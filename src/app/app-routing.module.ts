import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './views/components/home/clientes/clientes.component';
import { VendedoresComponent } from './views/components/home/vendedores/vendedores.component';
import { HomeComponent } from './views/components/home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "inicio", pathMatch: "full"},
  // {path: "**", redirectTo: "inicio", pathMatch: "full"},
  {path: "inicio", component: HomeComponent, children: [
    {path: "vendedor", component: VendedoresComponent},
    {path: "cliente", component: ClientesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
