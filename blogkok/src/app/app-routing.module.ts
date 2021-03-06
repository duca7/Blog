import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './views/pages/blog/blog-detail/blog-detail.component';
import { ProfileDetailComponent } from './views/pages/profile/profile-detail/profile-detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./views/pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./views/pages/blog/blog.module').then((m) => m.BlogModule),
  },
  { path: 'blog/:slug', component: BlogDetailComponent },
  {
    path: 'post',
    loadChildren: () =>
      import('./views/pages/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./views/pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./views/pages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  { path: 'profile/:username', component: ProfileDetailComponent },
  {
    path: 'mypost',
    loadChildren: () =>
      import('./views/pages/mypost/mypost.module').then((m) => m.MypostModule),
  },
  {
    path: 'likedarticles',
    loadChildren: () =>
      import('./views/pages/likedarticles/likedarticles.module').then(
        (m) => m.LikedarticlesModule
      ),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./views/pages/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
