import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BaseModule } from '../../base.module';

import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HomeBannerComponent } from './home-banner/home-banner.component';
@NgModule({
  declarations: [HomeComponent, HomeBannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatIconModule,
    BaseModule,
    NgxUsefulSwiperModule,
  ],
  exports: [HomeBannerComponent],
})
export class HomeModule {}
