import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post } from './post.model';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

@Injectable()
export class PostService{

    constructor(private http:Http){

    }

    url:string = 'http://rest.learncode.academy/api/redesocialkim/posts'
    
    // posts = [
    //     new Post(1, "PessoaUm", "Eu sou a primeira pessoa", 0),
    //     new Post(2, "PessoaDois", "Eu não sou a primeira pessoa, eu sou a segunda pessoa", 0),
    //     new Post(3, "PessoaTres", "Eu sou a terceira pessoa, sou melhor que as anteriores", 0)
    // ]

    posts:Post[] = [];

      getPosts(){
        return this.http.get(this.url)
        .map((response:Response) => {
            this.posts = []
            for(let p of response.json()){
              this.posts.push(new Post(p.id, p.nomePessoa, p.texto, p.qtdLikes))
            }
            return this.posts
          }
        )
        .catch((error:Response) => Observable.throw(error))
      }
        
      addPost(post: Post){
        return this.http.post(this.url, post)
          .map((response:Response) => response.json()) //map se der certo - Response filtra só o resultado
          .catch((error:Response) => Observable.throw(error)) //catch se der errado
      }

      editPost(post: Post){
        return this.http.post(this.url + "/" + post.id, post)
        .map((response:Response) => response.json()) //map se der certo - Response filtra só o resultado
        .catch((error:Response) => Observable.throw(error)) //catch se der errado
      }
    
      excluirPost(id:number){
        return this.http.delete(this.url + "/" + id)
          .map((response:Response) => response.text)
          .catch((error:Response) => Observable.throw(error)) //catch se der errado
        
      }

      addPosts(){
        return this.posts;
      }

      capturarLike(post: Post){
        post.qtdLikes +=1;
        return this.http.put(this.url + "/" + post.id, post)
        .map((response: Response) => response.json())
        .catch((error:Response) => Observable.throw(error)) //catch se der errado
      }
}