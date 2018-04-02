import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { LinhadotempoComponent } from './linhadotempo/linhadotempo.component';
import { PostInputComponent } from './post-input/post-input.component';
import { PostPostarComponent } from './post-postar/post-postar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    LinhadotempoComponent,
    PostInputComponent,
    PostPostarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
