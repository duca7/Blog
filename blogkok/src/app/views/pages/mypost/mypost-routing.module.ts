import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypostComponent } from './mypost.component';

const routes: Routes = [{ path: '', component: MypostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypostRoutingModule { }
