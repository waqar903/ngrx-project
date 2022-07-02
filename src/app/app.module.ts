import { HttpService } from './services/http.service';
import { LayoutComponent } from './components/layout/dashboard/youtube-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/dashboard/header.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { UserCardComponent } from './components/user-card.component';
import { UserListComponent } from './components/user-list.component';
import { UsersComponent } from './containers/users.component';
import { PostComponent } from './containers/post.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    UsersComponent,
    PostComponent,
    UserListComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
