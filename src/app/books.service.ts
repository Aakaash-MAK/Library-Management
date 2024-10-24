import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://localhost:7072/api/books'; 

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updatecheckedout(data: { id: number; username: string }){
    return this.http.post(`${this.apiUrl}/checkout`, data);
  }

  updatecheckedin(data:{id:number}){
    return this.http.post(`${this.apiUrl}/checkin`,data);
  }

  getcheckedinbooks(data: { username: string }):Observable<any[]>{
    return this.http.post<any[]>(`${this.apiUrl}/mybooks`,data);
  }
}
