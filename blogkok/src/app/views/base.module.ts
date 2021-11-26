import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, MatMenuModule, MatButtonModule],
  exports: [NavBarComponent, FooterComponent],
})
export class BaseModule {}
