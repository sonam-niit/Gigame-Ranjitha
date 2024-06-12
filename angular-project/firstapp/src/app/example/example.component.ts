import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  name="sonam soni";
  imageUrl="https://t4.ftcdn.net/jpg/01/53/16/27/360_F_153162731_NdSzFZN6vHYRiNWv5trZOeXFJNobVN9j.jpg";
  height=200;
  width=300;
  flag=false;
  users=[
    {id:1,name:"Alex",email:"alex@gmail.com",country:"US"},
    {id:2,name:"Bob",email:"bob@gmail.com",country:"UK"},
    {id:3,name:"Catty",email:"catty@gmail.com",country:"India"},
  ]
  onClick(){
    this.flag=!this.flag
  }
  viewMode = 'map'; 

  isHighlighted = false;
  isBold = false;
  fontSize = 16;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    if (this.fontSize > 10) {
      this.fontSize -= 2;
    }
  }
  getStyles() {
    return {
      'background-color': this.isHighlighted ? 'yellow' : 'transparent',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-size': `${this.fontSize}px`
    };
  }

  //for NgClass Demo
  isPrimary:boolean=true;

  isSpecial:boolean=true;
  canSave:boolean=false;
  toggleClass(){
    this.isPrimary=!this.isPrimary;
  }
  getButtonClass(){
    return{
      'btn':true,
      'btn-primary':this.isPrimary,
      'btn-secondary':!this.isPrimary
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
