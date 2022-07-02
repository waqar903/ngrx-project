import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'youtube-layout',
  template: `
    <youtube-header></youtube-header>
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
