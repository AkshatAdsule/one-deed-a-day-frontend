import { Deed, User } from './../Types';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api_url = 'http://localhost:2000';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<HttpResponse<object>> {
    return this.http.post<HttpResponse<object>>(`${this.api_url}/login`, {
      username: username,
      password: password,
    });
  }
  register(
    email: string,
    username: string,
    password: string
  ): Observable<HttpResponse<User>> {
    return this.http.post<HttpResponse<User>>(`${this.api_url}/signup`, {
      email: email,
      username: username,
      password: password,
    });
  }

  getDeeds(): Observable<Deed[]> {
    return this.http.get<Deed[]>(this.api_url + '/deeds');
  }
}
