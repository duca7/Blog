import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedarticlesComponent } from './likedarticles.component';

describe('LikedarticlesComponent', () => {
  let component: LikedarticlesComponent;
  let fixture: ComponentFixture<LikedarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedarticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
