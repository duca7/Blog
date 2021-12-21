import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [BlogComponent, BlogDetailComponent, BlogCommentComponent],
  imports: [CommonModule, BlogRoutingModule, FormsModule, MatIconModule],
  exports: [BlogDetailComponent, BlogCommentComponent],
})
export class BlogModule {}
