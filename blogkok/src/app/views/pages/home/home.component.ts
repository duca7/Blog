import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleResponse } from 'src/app/model/article.model';
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

  Images: Array<object> = [
    {
      src: 'https://loremflickr.com/g/600/400/paris',
      alt: 'Image 1',
    },
    {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 2',
    },
    {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 3',
    },
    {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 4',
    },
    {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 5',
    },
    {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 6',
    },
  ];

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
