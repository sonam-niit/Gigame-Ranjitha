import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product:any=null ;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.product= productsData.find(item=>item.id===id);
  }

}
