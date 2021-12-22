import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleResponse } from 'src/app/model/article.model';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private articleService: PostArticleService,
    public router: Router
  ) {}

  articles!: ArticleResponse[];
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.articleService.getAll().subscribe((articles) => {
      console.log(articles);
      this.articles = articles;
    });
  }
}
