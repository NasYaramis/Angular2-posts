import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post';
import { Comment } from './comment';

@Injectable()
export class PostService {

  private postServiceURI: string = 'http://jsonplaceholder.typicode.com';

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
     let url = `${this.postServiceURI}/posts`;

     return this.http.get<Post[]>(url);
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
     let url = "http://jsonplaceholder.typicode.com/comments/?postId=" + (index + 1);

     return this.http.get<Comment[]>(url);
   }
}
