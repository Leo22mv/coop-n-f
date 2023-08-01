import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes: any[] = [];
  vendedores: any[] = [];

  clientesActive: boolean = false;
  vendedoresActive: boolean = false;

  // uri: string = "http://localhost:8080";
  uri: string = "https://coop-n-b.azurewebsites.net";

  loading: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  getClientes() {
    this.router.navigate(["/inicio"])
    this.loading = true;
    this.error = false;
    this.vendedoresActive = false;
    this.clientesActive = false;
    this.vendedores = [];
    this.http.get<any[]>(this.uri + "/clientes").subscribe(res => {
      this.loading = false;
      this.error = false;
      this.clientes = res;
      this.vendedores = [];
      // console.log(res);
      this.clientesActive = true;
      this.vendedoresActive = false;
    }, err => {
      this.error = true;
      this.loading = false;
      this.vendedoresActive = false;
      this.clientesActive = false;
    })
  }

  getVendedores() {
    this.router.navigate(["/inicio"])
    this.loading = true;
    this.error = false;
    this.vendedoresActive = false;
    this.clientesActive = false;
    this.clientes = [];
    this.http.get<any[]>(this.uri + "/vendedores").subscribe(res => {
      this.loading = false;
      this.error = false;
      this.vendedores = res;
      // console.log(res);
      this.clientesActive = false;
      this.vendedoresActive = true;
    }, err => {
      this.error = true;
      this.loading = false;
      this.vendedoresActive = false;
      this.clientesActive = false;
    })
  }

  addCliente() {
    this.router.navigate(["cliente"]);
    this.vendedoresActive = false;
  }

  addVendedor() {
    this.router.navigate(["vendedor"]);
    this.clientesActive = false;
  }
}
