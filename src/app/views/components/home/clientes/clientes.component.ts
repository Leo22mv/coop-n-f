import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  // @Input() clientes: any;

  email: any = "";
  nombre: any = "";
  dni: any = 0;
  direccion: any = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toHome() {
    this.router.navigate(["/inicio"])
  }
}
