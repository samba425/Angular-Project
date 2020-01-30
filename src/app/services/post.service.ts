import { NotFoundError } from './../common/not-found-error';
import 'rxjs/operator/catch';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 

  }

  getPosts(){
  return this.http.get(this.url);

  }

  createPost(post){
    return this.http.post(this.url, post);

  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, ({isReady:true}));

  }
  deletePost(id){
   return this.http.delete(this.url + '/' + id)((error: Response) => {
     if(error.status === 404)
     return Observable.throw(new NotFoundError());
     return Observable.throw(new AppError(error));
});

  }
}
