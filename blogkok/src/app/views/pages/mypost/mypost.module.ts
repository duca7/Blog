import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypostRoutingModule } from './mypost-routing.module';
import { MypostComponent } from './mypost.component';


@NgModule({
  declarations: [
    MypostComponent
  ],
  imports: [
    CommonModule,
    MypostRoutingModule
  ]
})
export class MypostModule { }
