import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private serviceUrl = 'http://localhost:3004/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  addUser(data): Observable<User[]> {
    return this.http.post<User[]>(this.serviceUrl, data);
  }


}
