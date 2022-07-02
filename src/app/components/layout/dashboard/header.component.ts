import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'youtube-header',
  template: `
    <mat-toolbar color="primary" style="height: 85px; padding: 0 16px;">
      <div class="h-100">
        <button
          mat-button
          routerLink=""
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="selected"
        >
          Users
        </button>
        <button mat-button routerLink="/post" routerLinkActive="selected">
          Post
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .selected {
        background: #000;
        color: #fff;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
