import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleRequest, ArticleResponse } from '../model/article.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

interface ArticleFake {
  articles: ArticleResponse[];
}

@Injectable({
  providedIn: 'root',
})
export class PostArticleService {
  article = {
    body: '',
    title: '',
    description: '',
  };

  searchInput = new BehaviorSubject('');

  constructor(private http: HttpClient, private authService: AuthService) {}

  createArticle(article: ArticleRequest) {
    return this.http.post(`${environment.apiUrl}/articles`, { article });
  }

  getAll() {
    return this.http
      .get<ArticleFake>(`${environment.apiUrl}/articles`)
      .pipe(pluck('articles'));
  }

  getAllWithSearch(searchInput: string) {
    return this.http
      .get<ArticleFake>(`${environment.apiUrl}/articles`, {
        params: {
          "author": searchInput
        }
      })
      .pipe(pluck('articles'));
  }

  getAllLikedArticles(favorited?: boolean) {
    return this.http
      .get<ArticleFake>(`${environment.apiUrl}/articles`, {
        params: {
          "favorited": favorited!
        }
      })
      .pipe(pluck('articles'));
  }

  getArticleByUserName(): Observable<any> {
    return this.http.get<ArticleFake>(
      `${environment.apiUrl}/articles?author=${this.authService.user?.username}`
    );
  }

  getDetail(slug: string): Observable<any> {
    return this.http.get<ArticleFake>(`${environment.apiUrl}/articles/${slug}`);
  }

  setArticle(article: any) {
    this.article = article;
  }

  resetArticle() {
    this.article = {
      body: '',
      title: '',
      description: '',
    };
  }

  updateArticle(article: ArticleRequest, slug = '') {
    return this.http.put(`${environment.apiUrl}/articles/${slug}`, { article });
  }

  deleteArticle(slug: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/articles/${slug}`);
  }

  getFavorite(id: string) {
    return this.http.get<any>(`${environment.apiUrl}/articles/${id}/favorite`);
  }

  addFavorite(slug: string) {
    return this.http.post<any>(
      `${environment.apiUrl}/articles/${slug}/favorite`,
      null
    );
  }

  removeFavorite(slug: string) {
    return this.http.delete<any>(
      `${environment.apiUrl}/articles/${slug}/favorite`
    );
  }
}
