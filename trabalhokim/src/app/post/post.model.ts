export class Post{
    id:number;
    nomePessoa:string;
    texto:string;
    qtdLikes:number;
    
    constructor(id, nomePessoa, texto, qtdLikes){
        this.id = id;
        this.nomePessoa = nomePessoa;
        this.texto = texto;
        this.qtdLikes = qtdLikes;
    }
}


