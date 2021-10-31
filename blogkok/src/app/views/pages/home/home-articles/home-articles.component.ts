import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.scss']
})
export class HomeArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postList = [
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    },
    {
      img: '../../../../../assets/images/posts/1.png',
      title: 'Best Wordpress Theme of 2018',
      date: '18-04-21',
      tag: {
        tag1: 'design',
        tag2: 'travel',
        tag3: 'technology'
      },
      content: 'When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and shop online,...'
    }
  ];

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
    }
  ];

}
