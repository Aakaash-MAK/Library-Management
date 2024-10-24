import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../jwt.service';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  role : string = this.jwt.role;
  books: any[] = [];
  username: string = this.jwt.username;

  constructor(private router: Router,private jwt:JwtService,private booksService: BooksService) {}

  
  ngOnInit(): void {
    console.log(this.username,this.role);
    this.loadBooks();
  }

  loadBooks(): void {
    this.booksService.getBooks().subscribe(
      (data: any[]) => {
        console.log(data);
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books', error);
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
          this.loadBooks();
        },
        error => {
          console.error('Error during checkout:', error);
        }
      )
    }
  }

  checkout(id: string) {
    const token = sessionStorage.getItem('jwtToken');

    if (token) {
      const data = this.jwt.getdataFromToken(token);
      const user = data.sub;

      const requestdata = { id: parseInt(id, 10), username: user };
      this.booksService.updatecheckedout(requestdata).subscribe(
        response => {
          console.log('Checkout successful:', response);
          this.loadBooks();
        },
        error => {
          console.error('Error during checkout:', error);
        });
    } else {
      console.error('Token is null. User is not authenticated.');
    }
  }
  
}
