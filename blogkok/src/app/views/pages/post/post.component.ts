import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostArticleService } from 'src/app/services/post-article.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  article = {
    body: '',
    title: '',
    description: '',
  };

  mode = 'update';

  constructor(
    private articleService: PostArticleService,
    private formBuilder: FormBuilder,
    public router: Router,
    public snackBar: MatSnackBar,
    public route: ActivatedRoute
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.mode = 'update';
    } else {
      this.mode = 'create';
    }
    this.article = this.articleService.article;
  }

  articleForm!: FormGroup;

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      title: [this.article.title, Validators.required],
      description: [this.article.description, Validators.required],
      body: [this.article.body, Validators.required],
    });
  }

  onFormSubmit() {
    console.log(this.articleForm.value);
    if (this.mode === 'create') {
      this.articleService
        .createArticle(this.articleForm.value)
        .subscribe((data) => {
          this.articleService.resetArticle();
          this.snackBar.open('Success!', 'OK', { duration: 3000 });
          this.router.navigate(['']);
        });
    } else {
      const slug = this.route.snapshot.paramMap.get('slug');
      if (slug) {
        this.articleService
          .updateArticle(this.articleForm.value, slug)
          .subscribe((data) => {
            this.articleService.resetArticle();
            this.snackBar.open('Success!', 'OK', { duration: 3000 });
            this.router.navigate(['']);
          });
      }
    }
  }

  // title = '';
  // description = '';

  // htmlContent = '';

  get title() {
    return this.articleForm.get('title')?.value;
  }

  get description() {
    return this.articleForm.get('description')?.value;
  }

  get body() {
    return this.articleForm.get('body')?.value;
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
}
