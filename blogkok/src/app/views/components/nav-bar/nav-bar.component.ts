import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostArticleService } from 'src/app/services/post-article.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  user!: User | null;
  
  searchInput?: string;

  constructor(
    public router: Router,
    private authService: AuthService,
    private articleService: PostArticleService
  ) {
    authService.getUser().subscribe((user) => {
      console.log(user);

      this.user = user;
    });

    
  }
  signout() {
    this.authService.logout();
  }

  goToPost() {
    this.articleService.resetArticle();
    this.router.navigate(['/post']);
  }

  search() {
    this.articleService.searchInput = this.searchInput ?? '';
  }
}
