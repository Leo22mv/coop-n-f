import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toHome() {
    this.router.navigate(["/inicio"])
  }

}
