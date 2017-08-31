import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Post }          from './post'
import { PostService }   from './app.service'


@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  post: Post;
 
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location) { }
 
  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.postService.getPost(+params.get('id')))
        .subscribe(post => this.post = post)
  }
}