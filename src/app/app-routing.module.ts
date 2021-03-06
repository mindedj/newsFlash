import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "signup", component: SignupComponent},
  { path: "login", component: LoginComponent},
  { path: "news", component: NewsComponent},
  { path: "addNews", component: AddNewsComponent},
  { path: "banner", component: BannerComponent},
  { path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
