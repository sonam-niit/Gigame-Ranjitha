import { Component, OnInit } from '@angular/core';
import productsData from '../../assets/products.json';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[]=[];
  constructor(private authService:AuthService,private router:Router) { }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    this.products=productsData;
  }

}
