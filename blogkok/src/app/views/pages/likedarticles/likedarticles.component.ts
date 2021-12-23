import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleResponse } from 'src/app/model/article.model';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-likedarticles',
  templateUrl: './likedarticles.component.html',
  styleUrls: ['./likedarticles.component.scss'],
})
export class LikedarticlesComponent implements OnInit {
  articles?: ArticleResponse[];
  numberOfArticles = 0;

  constructor(
    public router: Router, 
    public articlesService: PostArticleService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.articlesService.getAllLikedArticles(true).subscribe((articles) => {
      console.log(articles);
      this.articles = articles;
      this.numberOfArticles = articles.length;
    });
  }
}
