import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './dashboard/books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagebooksComponent } from './dashboard/managebooks/managebooks.component';
import { MyaccountComponent } from './dashboard/myaccount/myaccount.component';
import { ManageBooksGuard } from './managebooks.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo:'dashboard/home',pathMatch:'full' },
      { path: 'managebooks', component: ManagebooksComponent,canActivate:[ManageBooksGuard]},
      { path: 'myaccount', component: MyaccountComponent},
      { path: 'books',component: BooksComponent},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }