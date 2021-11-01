import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./views/pages/about/about.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
