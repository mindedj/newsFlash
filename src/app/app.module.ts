import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';
import { AddNewsComponent } from './add-news/add-news.component';
import { BannerComponent } from './banner/banner.component';
import { BannerVerticalComponent } from './banner-vertical/banner-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NewsComponent,
    AddNewsComponent,
    BannerComponent,
    BannerVerticalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
