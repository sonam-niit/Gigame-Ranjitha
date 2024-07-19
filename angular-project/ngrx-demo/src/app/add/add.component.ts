import { Component, OnInit } from '@angular/core';
import { Book } from '../state/book.model';
import { addBook } from '../state/book.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store:Store){}

  ngOnInit(): void {
  }

  addRandomBook(){
    const book:Book={
      id:Number(Math.random().toString().substring(7)),
      title:'Random Book',
      author:'Random Author'
    }
    this.store.dispatch(addBook({book}))
    //we have to dispatch action
    //which triggers redures which update state
    //using selector the new updated state will be read by our components ts file
    //that data we will update to our HTML file template
  }
}
