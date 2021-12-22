import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedarticlesRoutingModule } from './likedarticles-routing.module';
import { LikedarticlesComponent } from './likedarticles.component';


@NgModule({
  declarations: [
    LikedarticlesComponent
  ],
  imports: [
    CommonModule,
    LikedarticlesRoutingModule
  ]
})
export class LikedarticlesModule { }
