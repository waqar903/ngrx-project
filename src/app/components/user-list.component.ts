import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'youtube-user-list',
  template: `<div>
    <youtube-user-card
      [user]="user"
      *ngFor="let user of users"
    ></youtube-user-card>
  </div>`,
  styles: [``],
})
export class UserListComponent implements OnInit {
  @Input() users: User[] | undefined;
  constructor() {}

  // ye dump component ay isko ni pata data kaha sy arha iska kam bus display krwana jo arha

  ngOnInit(): void {}
}
