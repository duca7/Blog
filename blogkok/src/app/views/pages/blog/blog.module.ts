import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    BlogCommentComponent,
    BlogEditorComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
    BlogDetailComponent,
    BlogCommentComponent
  ]
})
export class BlogModule { }
