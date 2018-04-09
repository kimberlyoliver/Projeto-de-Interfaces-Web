import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { LinhadotempoComponent } from './linhadotempo/linhadotempo.component';
import { PostInputComponent } from './post-input/post-input.component';
import { routing } from './app.routing'
import { PostService } from './post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    LinhadotempoComponent,
    PostInputComponent,
    LinhadotempoComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
