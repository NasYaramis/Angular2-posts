import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post';

@Injectable()
export class PostService {

  private postServiceURI: string = 'http://localhost:4000';

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
     let url = `${this.postServiceURI}`;

     return this.http.get<Post[]>(url);
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {}
}
