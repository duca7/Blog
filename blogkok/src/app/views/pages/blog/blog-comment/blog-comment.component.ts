import { Component, Input, OnInit } from '@angular/core';
import { CommentInfo } from 'src/app/model/comment.model';
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.scss'],
})
export class BlogCommentComponent implements OnInit {
  constructor(private commentService: CommentService) {}

  @Input() slug!: string | null;

  ngOnInit(): void {
    this.getAllComment();
  }

  comment: string = '';
  commentList!: CommentInfo[];

  getAllComment() {
    if (!this.slug) return;
    this.commentService.getAllComment(this.slug).subscribe((res: any) => {
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
}
