import { Post } from './post.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit {

  @Input() posts: Post[]; //lista de classes tipo Post
  @Input() index:number;
  @Output() recebeuLike = new EventEmitter<any>(); // aqui que vai emitir os eventos
  @Output() excluirPost = new EventEmitter();
  @Output() editPost = new EventEmitter();
  
  edicao: boolean = false;
  textoEdit: string = ""

  constructor() { }

  curtiu(){
    this.recebeuLike.emit(this.posts[this.index]); //este 'recebeuLike' está enviando um Post inteiro para algum lugar
  }

  removeu(id:number){
    this.excluirPost.emit(id)
  }

  editou(post: Post){
    post.texto = this.textoEdit
    this.edicao = false;
    this.textoEdit = "";
    this.editPost.emit(post)
  }

  cancelar(){
    this.edicao = false;
    this.textoEdit = "";
  }

  ativarEdicao(){
    this.edicao = true;
    this.textoEdit = this.posts[this.index].texto
  }


  ngOnInit() {
  }

}
