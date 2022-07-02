import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'users',
  template: `<div>
    <youtube-user-list [users]="this.users"></youtube-user-list>
  </div>`,
  styles: [``],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._api.getAllUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }
}
