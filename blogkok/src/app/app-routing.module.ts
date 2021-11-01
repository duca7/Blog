import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./views/pages/about/about.module').then(m => m.AboutModule) },
  { path: '**', loadChildren: () => import('./views/pages/error/error.module').then(m => m.ErrorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
