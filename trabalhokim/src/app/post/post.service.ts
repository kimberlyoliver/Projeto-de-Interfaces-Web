import { Injectable } from '@angular/core';
import { Post } from './post.model'

@Injectable()
export class PostService{
    
    posts = [
        new Post(1, "PessoaUm", "Eu sou a primeira pessoa", 1),
        new Post(2, "PessoaDois", "Eu não sou a primeira pessoa, eu sou a segunda pessoa", 1),
        new Post(3, "PessoaTres", "Eu sou a terceira pessoa, sou melhor que as anteriores", 1)
    ]

    getPosts(){
        return this.posts
      }
    
      capturarLike(post:Post){
        console.log(post.nomePessoa + "Ganhou like");
        let indice = this.posts.indexOf(post)
        this.posts[indice].qtdLikes +=1
      }
    
      addPost(post: Post){
        this.posts.push(post)
        console.log(this.posts)
      }
    
      excluirPost(id:number){
        let indice = null;
        for (let i in this.posts){
          if (id == this.posts[i].id){
            indice = i;
          }
        }
        this.posts.splice(indice,1)
      }

}