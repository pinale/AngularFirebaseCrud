import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favouriteBooks: any;
  unreadBooks: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    // this.favouriteBooks = this.firebaseService.getFavouriteBooks().subscribe(favBooks => {
    //   this.favouriteBooks = favBooks;
    //   console.log('favourite:' + this.favouriteBooks);
    // });
  
    // this.unreadBooks = this.firebaseService.getUnreadBooks().subscribe(unBooks => {
    //     this.unreadBooks = unBooks;
    //     console.log('unread:' + this.unreadBooks);
    // })

    this.firebaseService.getFavouriteBooks().subscribe(favBooks => {
      this.favouriteBooks = favBooks;
      console.log('favourite:' + this.favouriteBooks);
    });
  
    this.firebaseService.getUnreadBooks().subscribe(unBooks => {
        this.unreadBooks = unBooks;
        console.log('unread:' + this.unreadBooks);
    })
  
  }

}
