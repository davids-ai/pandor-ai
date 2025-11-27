import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [
    { id: 1, title: 'Primer post', slug: 'primer-post', excerpt: 'Resumen del primer post', content: '<p>Contenido del primer post</p>', author: 'Autor', publishedAt: new Date().toISOString() },
    { id: 2, title: 'Segundo post', slug: 'segundo-post', excerpt: 'Resumen del segundo post', content: '<p>Contenido del segundo post</p>', author: 'Autor', publishedAt: new Date().toISOString() }
  ];

  constructor() { }

  getAll(): Observable<Post[]> {
    return of(this.posts);
  }

  getBySlug(slug: string): Observable<Post | undefined> {
    return of(this.posts.find(p => p.slug === slug));
  }

  add(post: Post) {
    post.id = this.posts.length + 1;
    this.posts.unshift(post);
    return of(post);
  }
}
