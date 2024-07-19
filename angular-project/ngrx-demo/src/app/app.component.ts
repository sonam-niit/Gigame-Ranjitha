import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './state/book.model';
import { Store } from '@ngrx/store';
import { selectBookList } from './state/book.selectors';
import { addBook, removeBook } from './state/book.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';
  books:Observable<Book[]>
  constructor(private store:Store){
    this.books=this.store.select(selectBookList);
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
  removeBook(bookId:number){
    this.store.dispatch(removeBook({bookId}))
  }
}
