import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Router } from '@angular/router';

interface UserResponse {
  user: User;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user!: User | null;

  constructor(private http: HttpClient, private router: Router) {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      this.user = JSON.parse(localUser) as User;
    } else {
      this.user = null;
    }
    this.userSubject.next(this.user);
  }
  login(email: string, password: string) {
    return this.http
      .post<UserResponse>(`${environment.apiUrl}/users/login`, {
        user: { email, password },
      })
      .pipe(
        pluck('user'),
        map((user: User) => {
          if (user && user.token) {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            this.user = user;
            return user;
          } else {
            return null;
          }
        })
      );
  }

  register(user: User) {
    console.log(user);
    return this.http.post(`${environment.apiUrl}/users/register`, {
      user,
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}
