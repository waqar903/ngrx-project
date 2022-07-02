import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'youtube-user-card',
  template: `<mat-card style="margin: 10px;">
    <mat-card-title>{{ this.user?.name }}</mat-card-title>
    <mat-card-content>{{ this.user?.email }}</mat-card-content>
  </mat-card>`,
  styles: [``],
})
export class UserCardComponent implements OnInit {
  @Input() user: User | undefined;
  constructor() {}

  ngOnInit(): void {}
}
