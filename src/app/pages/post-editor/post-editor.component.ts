import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent {
  model: Partial<Post> = { title: '', slug: '', excerpt: '', content: '' };

  constructor(private postService: PostService) { }

  save() {
    const post: Post = {
      id: 0,
      title: this.model.title || '',
      slug: this.model.slug || (this.model.title || '').toLowerCase().replace(/\s+/g, '-'),
      excerpt: this.model.excerpt || '',
      content: this.model.content || '',
      author: 'Admin',
      publishedAt: new Date().toISOString()
    };
    this.postService.add(post).subscribe(() => alert('Post guardado (mock)'));
  }
}
