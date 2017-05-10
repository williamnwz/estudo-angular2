import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EcadInputComponent } from './customComponent/ecad-input/ecad-input.component';
import { HomeModule } from "app/home/home.module";
import { NoticiaService } from "app/noticia.service";
import { AppRoutingModule } from "app/app-routing/app-routing.module";
import { HomeRoutingModule } from "app/home/home-routing/home-routing.module";
import { ForumRoutingModule } from "app/forum/forum-routing/forum-routing.module";
import { ForumModule } from "app/forum/forum.module";

@NgModule({
  declarations: [
    AppComponent,
    EcadInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AppRoutingModule,
    HomeRoutingModule,
    ForumRoutingModule,
    ForumModule
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
