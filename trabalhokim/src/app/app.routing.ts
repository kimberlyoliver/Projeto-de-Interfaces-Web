import { Routes, RouterModule } from '@angular/router'

import { LinhadotempoComponent } from './linhadotempo/linhadotempo.component';
import { PostInputComponent } from './post-input/post-input.component';

const APP_ROUTES: Routes =[
    {path:"", redirectTo:"/linhadotempo",pathMatch:"full"},
    {path:"linhadotempo", component:LinhadotempoComponent},
    {path:"postar", component:PostInputComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);