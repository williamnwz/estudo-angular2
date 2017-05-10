import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ItemNoticiaComponent } from './lista-noticias/item-noticia/item-noticia.component';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [
    HomeComponent, 
    HomeNavbarComponent, 
    ListaNoticiasComponent, 
    ItemNoticiaComponent
    ],
  exports:[
    HomeComponent,
    AccordionModule,
    HomeNavbarComponent
  ]
})
export class HomeModule { 


}
