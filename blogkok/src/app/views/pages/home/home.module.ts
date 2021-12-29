import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BaseModule } from '../../base.module';

import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatIconModule,
    BaseModule,
    NgxUsefulSwiperModule,
  ],
})
export class HomeModule {}
