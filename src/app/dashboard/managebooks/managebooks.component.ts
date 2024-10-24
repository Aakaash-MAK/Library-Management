import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { JwtService } from 'src/app/jwt.service';

@Component({
  selector: 'app-managebooks',
  templateUrl: './managebooks.component.html',
  styleUrls: ['./managebooks.component.scss']
})
export class ManagebooksComponent implements OnInit{
  books: any[] = [];
  
  constructor(private booksService:BooksService,private jwt:JwtService){}
  
  ngOnInit(): void {
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
}
