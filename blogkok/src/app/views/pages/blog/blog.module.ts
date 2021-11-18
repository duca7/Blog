import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    BlogCommentComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,

  ],
  exports: [
    BlogDetailComponent,
    BlogCommentComponent,
  ]
})
export class BlogModule { }
