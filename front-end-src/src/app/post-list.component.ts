import { Component, OnInit }     from '@angular/core';
import { Post }          from './post'
import { PostService }   from './app.service'


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
 
  constructor(private postService: PostService) { }
 
  ngOnInit() {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
}