import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ArticleResponse } from 'src/app/model/article.model';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.scss'],
})
export class HomeArticlesComponent implements OnInit {
  constructor(
    private postArticleService: PostArticleService,
    private router: Router
  ) {}

  articles!: ArticleResponse[];
  ngOnInit(): void {
    this.postArticleService.getAll().subscribe((articles) => {
      console.log(articles);
      this.articles = articles;
    });
  }

  goToUpdate(slug: string) {
    this.postArticleService.getDetail(slug).subscribe((res) => {
      this.postArticleService.setArticle(res.article);
      this.router.navigate(['/post/' + slug]);
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
