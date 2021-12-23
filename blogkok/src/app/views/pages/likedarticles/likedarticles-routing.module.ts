import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedarticlesComponent } from './likedarticles.component';

const routes: Routes = [{ path: '', component: LikedarticlesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikedarticlesRoutingModule { }
