import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list.component'
import { PostComponent } from './post.component'
import { PostService } from './app.service'
import { AppRoutingModule } from './app.routing.module'

const xsrfProvider = {
  provide: XSRFStrategy,
 // useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
  useFactory: xsrfFactory
}

//providers: [ { provide: XSRFStrategy, useFactory: xsrfFactory} ]

export function xsrfFactory() {
    return new CookieXSRFStrategy('csrftoken', 'X-CSRFToken');
}

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    PostService, 
    xsrfProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


