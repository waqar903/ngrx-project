import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpService: HttpService) {}

  getAllUsers(): Observable<User[]> {
    return this._httpService.get('/users').pipe(map((data) => data as User[]));
  }
}
