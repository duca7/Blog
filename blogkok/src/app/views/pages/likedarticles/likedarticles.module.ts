import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedarticlesRoutingModule } from './likedarticles-routing.module';
import { LikedarticlesComponent } from './likedarticles.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LikedarticlesComponent],
  imports: [CommonModule, LikedarticlesRoutingModule, MatIconModule],
})
export class LikedarticlesModule {}
