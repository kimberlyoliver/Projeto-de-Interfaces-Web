import { PostService } from './../post/post.service';
import { Post } from './../post/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linhadotempo',
  templateUrl: './linhadotempo.component.html',
  styleUrls: ['./linhadotempo.component.css'],
  providers: [PostService]

})
export class LinhadotempoComponent implements OnInit {

  posts: Post[]
  constructor(private pservice:PostService) {
  }

  capturarLike(post:Post){
    this.pservice.capturarLike(post).subscribe(
      (data) => {
        console.log("likado")
        this.loadPosts()
      },
      (error) =>{
        console.log(error)
      }
    )
  }

  removerPost(id:number){
    this.pservice.excluirPost(id).subscribe(
      (data) => {
        console.log("postagem excluida")
        this.loadPosts()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  editPost (post: Post){
    this.pservice.editPost(post).subscribe(
      (data) => {
        console.log("edição concluida")
        this.loadPosts()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.loadPosts()
  }

  loadPosts(){
    this.pservice.getPosts().subscribe(
      (data) => {
        console.log(data)
        this.posts = data
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
