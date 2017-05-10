export class NoticiaModel{

    public Id : number;
    public Titulo : string;
    public Data : Date;
    public UrlImagemCapa : string;
    public Texto : string;

    public Resumo() : string {
        let limiteCaracteres = 150;
        if (this.Texto.length <= limiteCaracteres){ return this.Texto;}
        else if (this.Texto.length > limiteCaracteres){ return  this.Texto.substring(0,limiteCaracteres) +"...";}
    }


}