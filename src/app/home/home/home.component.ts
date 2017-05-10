import { Component, OnInit } from '@angular/core';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NoticiaService } from "app/noticia.service";
import { NoticiaModel } from "app/home/lista-noticias/noticia.model";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public Noticias : Array<NoticiaModel> = [];

  constructor(private noticiaService : NoticiaService) { }

  ngOnInit() {
    this.Noticias = this.noticiaService.findAll();
  }

}
