import { Component, OnInit } from '@angular/core';
import { ArticleResponse } from 'src/app/model/article.model';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss'],
})
export class MypostComponent implements OnInit {
  constructor(private articleService: PostArticleService) {}
  articles!: ArticleResponse[];

  ngOnInit(): void {
    this.getArticleUserName();
  }

  getArticleUserName() {
    this.articleService.getArticleByUserName().subscribe((articles) => {
      this.articles = articles.articles;
    });
  }
}
