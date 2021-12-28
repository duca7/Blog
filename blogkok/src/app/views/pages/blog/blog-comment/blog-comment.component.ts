import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentInfo } from 'src/app/model/comment.model';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.scss'],
})
export class BlogCommentComponent implements OnInit {
  constructor(
    private commentService: CommentService,
    public router: Router,
    public authService: AuthService
  ) {}

  @Input() slug!: string | null;

  ngOnInit(): void {
    this.getAllComment();
    this.authService.user;
  }

  comment: string = '';
  commentList!: CommentInfo[];

  getAllComment() {
    if (!this.slug) return;
    this.commentService.getAllComment(this.slug).subscribe((res: any) => {
      console.log(res);

      this.commentList = res.comments;
    });
  }

  createComment() {
    if (!this.slug) return;
    const body = this.comment;

    this.commentService.createComment(this.slug, { body }).subscribe((res) => {
      this.comment = '';
      this.getAllComment();
    });
  }

  deleteComment(commentId: string) {
    if (!this.slug) return;
    this.commentService.deleteComment(this.slug, commentId).subscribe((res) => {
      this.getAllComment();
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
}
