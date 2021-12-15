import { Component, OnInit } from '@angular/core';
import { ArticleResponse } from 'src/app/model/article.model';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private articleService: PostArticleService) {}

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

  popular = [
    {
      img: '../../../../../assets/images/posts/popular.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
    },
    {
      img: '../../../../../assets/images/posts/popular.png',
      title: 'Dating While Studying Abroad—Maximize',
      date: '18-04-21',
    },
    {
      img: '../../../../../assets/images/posts/popular.png',
      title: 'Nature Photography Best Place Focus',
      date: '18-04-21',
    },
    {
      img: '../../../../../assets/images/posts/popular.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
    },
  ];
}
