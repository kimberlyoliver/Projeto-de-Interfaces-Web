import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post } from './post.model';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

@Injectable() //coisas daqui serão injetadas em outros componentes
export class PostService{

    constructor(private http:Http){

    }

    url:string = 'http://rest.learncode.academy/api/redesocialkim/posts'
    
    // posts = [
    //     new Post(1, "PessoaUm", "Eu sou a primeira pessoa", 0),
    //     new Post(2, "PessoaDois", "Eu não sou a primeira pessoa, eu sou a segunda pessoa", 0),
    //     new Post(3, "PessoaTres", "Eu sou a terceira pessoa, sou melhor que as anteriores", 0)
    // ]

    posts:Post[] = []; //lista de posts

      addPost(post: Post){
        return this.http.post(this.url, post) // url rest
          .map((response:Response) => response.json()) //map se der certo - Response filtra só o resultado
          .catch((error:Response) => Observable.throw(error)) //catch se der errado
      }

      getPosts(){
        return this.http.get(this.url)
        .map((response:Response) => {
            this.posts = [] //começa vazia para não repetir informações
            for(let p of response.json()){
              this.posts.push(new Post(p.id, p.nomePessoa, p.texto, p.qtdLikes)) //add um post na lista de posts
            }
            return this.posts
          }
        )
        .catch((error:Response) => Observable.throw(error)) //throw = ativar erro
      }

      editPost(post: Post){
        return this.http.put(this.url + "/" + post.id, post) // put atualizar = estava post, por isso não estava dando certo
        .map((response:Response) => response.json()) //map se der certo - Response filtra só o resultado
        .catch((error:Response) => Observable.throw(error)) //catch se der errado
      }

      capturarLike(post: Post){
        post.qtdLikes +=1;
        return this.http.put(this.url + "/" + post.id, post)
        .map((response: Response) => response.json())
        .catch((error:Response) => Observable.throw(error)) //catch se der errado
      }

      excluirPost(id:number){
        return this.http.delete(this.url + "/" + id)
          .map((response:Response) => response.text)
          .catch((error:Response) => Observable.throw(error)) //catch se der errado
      }
}