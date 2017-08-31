import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Post } from './post'
import 'rxjs/add/operator/toPromise'
import { environment } from '../environments/environment'

@Injectable()
export class PostService {

  private apiBaseUrl = environment.apiUrl;
  
  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get(`${this.apiBaseUrl}blog/posts/`)
               .toPromise()
               .then(response => { 
                 let r = JSON.parse(response.json())
                  return r.map(p => {
                    let ret: Post = p.fields
                    ret['id'] = p.pk
                    return ret
                  })
                })
               .catch(this.handleError)
  }

  getPost(id: number): Promise<Post> {
    return this.http.get(`${this.apiBaseUrl}blog/post/${id}/`)
               .toPromise()
               .then(response => {
                 let r = JSON.parse(response.json())
                 return r[0].fields
                })
               .catch(this.handleError)
  }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}

export class ApiPost {
  model: string;
  pk: number;
  fields: {}
}



