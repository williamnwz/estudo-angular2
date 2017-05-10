import { Component, OnInit ,Input} from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NoticiaModel } from "app/home/lista-noticias/noticia.model";

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  @Input()
  public Noticias : Array<NoticiaModel> = [];

  constructor() { 

  }

  ngOnInit() {


  }

}
