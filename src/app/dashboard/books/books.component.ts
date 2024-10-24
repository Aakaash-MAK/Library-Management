import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { JwtService } from '../../jwt.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  
  constructor(private booksService:BooksService,private jwt:JwtService){}

  username = this.jwt.username;

  ngOnInit(): void {
      this.getbooks();
  }

  getbooks(){
    var username = this.username;
    this.booksService.getcheckedinbooks({ username })
      .subscribe(
        (book :any[]) => {
          this.books = book;
          console.log('Checked-in books:', book);
        },
        (error) => {
          console.error('Error fetching checked-in books:', error);
        }
      );
  }

  checkin(id: string) {
    const token = sessionStorage.getItem('jwtToken');
    const requestdata = { id: parseInt(id, 10) };
    if (token) {
      this.booksService.updatecheckedin(requestdata).subscribe(
        response => {
          console.log('Checkin successful:', response);
          this.getbooks();
        },
        error => {
          console.error('Error during checkout:', error);
        }
      )
    }
  }
}
