import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostArticleService } from 'src/app/services/post-article.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  currentArticle: any;
  isFavored!: boolean;
  slug!: string | null;
  constructor(
    private articleService: PostArticleService,
    private route: ActivatedRoute,
    private authService: AuthService,
    public router: Router
  ) {}

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
          // console.log(this.currentArticle);
          this.isFavored = this.checkFavored();
          // console.log(this.isFavored);
        });
        // console.log(data);
        // this.currentArticle = data.article;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  checkFavored() {
    const userList = this.currentArticle.favoriteList[0].users;
    console.log(userList);
    console.log(this.authService.user?._id || 'abc');
    return userList.some((u: any) => u === this.authService.user?._id);
  }

  tymFavorite(slug: string) {
    this.articleService.addFavorite(slug).subscribe((res) => {
      console.log(res);
    });
  }
}
