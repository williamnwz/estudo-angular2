import { Component, OnInit ,Input} from '@angular/core';
import { NoticiaModel } from "app/home/lista-noticias/noticia.model";

@Component({
  selector: 'item-noticia',
  templateUrl: './item-noticia.component.html',
  styleUrls: ['./item-noticia.component.css']
})
export class ItemNoticiaComponent implements OnInit {

  @Input()
  noticia : NoticiaModel = new NoticiaModel();

  constructor() { }

  ngOnInit() {
  }

}
