import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticleResponse } from 'src/app/model/article.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostArticleService } from 'src/app/services/post-article.service';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  navigateToF5(username: string) {
    if (this.authService.user) {
      if (this.authService.user.username === username) {
        this.router.navigate(['/profile']);
      } else {
        this.router.navigate(['/profile/' + username]);
      }
    } else {
      this.router.navigate(['/profile/' + username]);
    }
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
