import { TestBed } from '@angular/core/testing';

import { PostArticleService } from './post-article.service';

describe('PostArticleService', () => {
  let service: PostArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
