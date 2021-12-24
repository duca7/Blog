import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  currentArticle: any;
  isFavorited!: boolean;
  slug!: string | null;
  constructor(
    private articleService: PostArticleService,
    private route: ActivatedRoute,
    private authService: AuthService,
    public router: Router
  ) {
    this.getDetail(this.slug);
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getDetail(this.route.snapshot.paramMap.get('slug'));
  }

  getDetail(slug: any | null) {
    this.articleService.getDetail(slug).subscribe(
      (data) => {
        this.articleService.getFavorite(data.article._id).subscribe((res) => {
          this.currentArticle = {
            ...data.article,
            favoriteList: res.favoriteList,
          };
          this.isFavorited = this.checkFavorited();
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  checkFavorited() {
    const userList = this.currentArticle.favoriteList[0].users;
    console.log(this.authService.user?._id || 'abc');
    return userList.some((u: any) => u === this.authService.user?._id);
  }

  favorite() {
    this.articleService.addFavorite(this.slug!).subscribe((res) => {
      console.log(res);
    });
    this.isFavorited = !this.isFavorited;
  }

  unfavorite() {
    this.articleService.removeFavorite(this.slug!).subscribe((res)=> {
      console.log(res);
    });
    this.isFavorited = !this.isFavorited;
  }
}
