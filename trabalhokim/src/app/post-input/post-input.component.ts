import { Post } from './../post/post.model';
import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css'],
  providers: [PostService]
})

export class PostInputComponent implements OnInit {
  id: number;
  nomePessoa: string = ''
  qtdLikes: number = 0
  texto: string = ''
  constructor(private pservice: PostService) { 

  }

  submeterPost(event){
    event.preventDefaut()
    if(this.nomePessoa != ''&& this.texto != ''){
      let p = new Post(this.id, this.nomePessoa, this.texto, this.qtdLikes)
      console.log(p)
      this.pservice.addPost(p)
    }
  }
  
  ngOnInit() {
  }

}

