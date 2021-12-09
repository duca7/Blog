import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleResponse } from 'src/app/model/article.model';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss'],
})
export class MypostComponent implements OnInit {
  constructor(
    private articleService: PostArticleService,
    private router: Router
  ) {}
  articles!: ArticleResponse[];

  ngOnInit(): void {
    this.getArticleUserName();
  }

  getArticleUserName() {
    this.articleService.getArticleByUserName().subscribe((articles) => {
      this.articles = articles.articles;
    });
  }

  goToUpdate(slug: string) {
    this.articleService.getDetail(slug).subscribe((res) => {
      this.articleService.setArticle(res.article);
      this.router.navigate(['/post/' + slug]);
    });
  }

  deletePost(slug: string) {
    this.articleService.deleteArticle(slug).subscribe(() => {
      this.getArticleUserName();
    });
  }
}
