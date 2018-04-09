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
    event.preventDefault()
    if(this.nomePessoa != ''&& this.texto != ''){
      let p = new Post(null, this.nomePessoa, this.texto, this.qtdLikes)
      console.log(p)
      this.pservice.addPost(p).subscribe(
        (data) => {
          console.log(data) //data quando dá certo
        },
        (error) =>{
          console.log(error); //error para erro
        }
      )
    }
  }
  
  ngOnInit() {
  }

}

