import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ForumRoutingModule } from "app/forum/forum-routing/forum-routing.module";
import { HomeNavbarComponent } from "app/home/home-navbar/home-navbar.component";
import { HomeModule } from "app/home/home.module";
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    HomeModule, 
    PaginationModule.forRoot()
  ],
  declarations: [ForumComponent],
  exports :[ForumComponent]
})
export class ForumModule { }
