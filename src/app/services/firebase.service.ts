import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Observable } from 'rxjs/Observable';  //'rxjs/Rx'

import 'rxjs/add/operator/map';  //'rxjs/Rx'

@Injectable()
export class FirebaseService {

  books : FirebaseListObservable<any[]>;
  favouriteBooks: Observable<any>;
  unreadBooks: Observable<any>;
  bookDetails: Observable<any>;

  constructor(private db: AngularFireDatabase) {

   }

   getBooks() {
      this.books = this.db.list('/books') as FirebaseListObservable<any[]>; 
      return this.books;
   }

   getFavouriteBooks() {
      this.favouriteBooks = this.db.list('/books').map(books => {
        const topRated = books.filter(item => item.rate > 4);
        return topRated;
      }) 
      return this.favouriteBooks;
  }

  getUnreadBooks() {
    this.unreadBooks = this.db.list('/books').map(books => {
      const ub = books.filter(item => item.dateread == null);
      return ub;
    }) 
    return this.unreadBooks;
}

getBookDetail(id) {
  this.bookDetails = this.db.object('/books/' + id) as Observable<any>;
  return this.bookDetails;
}

}
