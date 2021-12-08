import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  currentArticle: any;

  slug!: string | null;
  constructor(
    private articleService: PostArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getDetail(this.route.snapshot.paramMap.get('slug'));
  }

  getDetail(slug: any | null) {
    this.articleService.getDetail(slug).subscribe(
      (data) => {
        console.log(data);
        this.currentArticle = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
