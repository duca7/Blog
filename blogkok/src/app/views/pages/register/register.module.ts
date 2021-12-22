import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { BaseModule } from '../../base.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RegisterRoutingModule,
    BaseModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
})
export class RegisterModule {}
