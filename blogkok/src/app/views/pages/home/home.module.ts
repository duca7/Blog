import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BaseModule } from '../../views.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeArticlesComponent } from './home-articles/home-articles.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeArticlesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BaseModule
  ]
})
export class HomeModule { }
