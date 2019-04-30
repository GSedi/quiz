import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'posts', component: PostsListComponent},
  {path: 'posts/:id', component: PostsDetailComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
