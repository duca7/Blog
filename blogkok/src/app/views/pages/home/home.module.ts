import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BaseModule } from '../../base.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeArticlesComponent } from './home-articles/home-articles.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeArticlesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatIconModule,
    BaseModule,
  ],
})
export class HomeModule {}
