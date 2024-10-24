import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyaccountComponent } from './dashboard/myaccount/myaccount.component';
import { ManagebooksComponent } from './dashboard/managebooks/managebooks.component';
import { HomeComponent } from './dashboard/home/home.component';
import { BooksComponent } from './dashboard/books/books.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BooksComponent,
    DashboardComponent,
    ManagebooksComponent,
    MyaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
