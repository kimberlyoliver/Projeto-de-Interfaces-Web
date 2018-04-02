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
    this.pservice.capturarLike(post)
  }

  removerPost(id:number){
    this.pservice.excluirPost(id)
  }

  ngOnInit() {
    this.posts = this.pservice.getPosts()
  }

}
