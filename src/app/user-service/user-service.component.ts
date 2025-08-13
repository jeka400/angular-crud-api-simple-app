import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-user-service',
  standalone: true,
  imports: [],
  templateUrl: './user-service.component.html',
  styleUrl: './user-service.component.scss'
})

export class UserServiceComponent {
  private apiUrl = `${environment.apiBase}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      // .pipe(
      //   map(res => res?.data ?? res)
      // );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number | string, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${ this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
