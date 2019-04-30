import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './AuthInterceptor';
import { ProviderService } from './shared/services/provider.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    PostsListComponent,
    PostsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 