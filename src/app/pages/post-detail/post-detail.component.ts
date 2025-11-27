import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post?: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.postService.getBySlug(slug).subscribe(p => this.post = p);
  }
}
