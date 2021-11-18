import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NavBarComponent, FooterComponent],
})
export class BaseModule {}
