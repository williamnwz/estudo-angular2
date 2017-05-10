import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from "app/forum/forum/forum.component";

const appRoutes : Routes = [
  {
    path:"forum",
    component : ForumComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class ForumRoutingModule { }
