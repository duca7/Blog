import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticleResponse } from 'src/app/model/article.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostArticleService } from 'src/app/services/post-article.service';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {
  constructor(
    private articleService: PostArticleService,
    public router: Router,
    public authService: AuthService
  ) {}

  articles!: ArticleResponse[];
  ngOnInit(): void {
    // this.getAll();
    this.articleService.searchInput
      .pipe(
        switchMap((input) => {
          return this.articleService.getAllWithSearch(input);
        })
      )
      .subscribe((value) => {
        console.log(value);
        this.articles = value;
      });
  }

  getAll() {
    this.articleService.getAll().subscribe((articles) => {
      console.log(articles);
      this.articles = articles;
    });
  }

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
}
