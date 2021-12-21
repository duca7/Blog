import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  model = 'articles';
  constructor(private http: HttpClient) {}

  createComment(slug: string, comment: Comment) {
    return this.http.post<Comment>(
      `${environment.apiUrl}/articles/${slug}/comments`,
      { comment }
    );
  }

  getAllComment(slug: string) {
    return this.http.get(`${environment.apiUrl}/articles/${slug}/comments`);
  }

  deleteComment(slug: string, commentId: string) {
    return this.http.delete(
      `${environment.apiUrl}/articles/${slug}/comments/${commentId}`
    );
  }
}
