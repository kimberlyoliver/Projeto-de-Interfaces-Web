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
  @Output() recebeuLike = new EventEmitter<any>();
  @Output() excluirPost = new EventEmitter();

  constructor() { }

  curtiu(){
    this.posts[this.index].qtdLikes+=1;
    this.recebeuLike.emit(this.posts[this.index]); //este 'recebeuLike' está enviando um Post inteiro para algum lugar
  }

  removeu(id:number){
    this.excluirPost.emit(id)
  }

  ngOnInit() {
  }

}
