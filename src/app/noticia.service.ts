import { Injectable } from '@angular/core';
import { NoticiaModel } from "app/home/lista-noticias/noticia.model";

@Injectable()
export class NoticiaService {

  constructor() { }


  public findAll() : Array<NoticiaModel>{

    var noticias = new Array<NoticiaModel>();

    var n1 = new NoticiaModel();
    n1.Texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    n1.Titulo ="Passagem padrão original de Lorem Ipsum, usada desde o século XVI.";
    n1.Id = 1;
    n1.Data = new Date();
    n1.UrlImagemCapa = "http://www.ferramentasblog.com/wordpress/wp-content/uploads/2012/03/logo-ecad.png"
    noticias.push(n1);

    var n2 = new NoticiaModel();
    n2.Texto = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";
    n2.Titulo ="Tradução para o inglês por H. Rackha, feita em 1914";
    n2.Id = 2;
    n2.Data = new Date();
    n2.UrlImagemCapa = "http://musica.culturamix.com/blog/wp-content/gallery/melhores-blogs-de-musica-de-2016-7/Os-Melhores-Blogs-de-M%C3%BAsica-de-2016-15.jpg"
    noticias.push(n2);

    var n3 = new NoticiaModel();
    n3.Texto = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";
    n3.Titulo ="Tradução para o inglês por H. Rackha, feita em 1914";
    n3.Id = 3;
    n3.Data = new Date();
    n3.UrlImagemCapa = "http://musica.culturamix.com/blog/wp-content/gallery/melhores-blogs-de-musica-de-2016-7/Os-Melhores-Blogs-de-M%C3%BAsica-de-2016-15.jpg"
    noticias.push(n3);



    return noticias;
  }


  public find(id : number) : NoticiaModel{
    return this.findAll().find((currentValue,index,objs)=>{
      if (currentValue.Id == id){
        return true;
      }
    })
  }


}
