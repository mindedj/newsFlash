import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { MatCardModule } from '@angular/material/card';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  ertekeles: number = 0;
  idopont: String = new Date().toLocaleString();


  newsArray: Array<News> = [];
  
  constructor(private newsService: NewsService, private router: Router) { 
  }
  ngOnInit() {
    this.newsArray = this.newsService.getNews();
  }
  navigate(){
    this.router.navigate(['/addNews']);
  }
  ertekelPozitiv(news: News){
    if(this.ertekeles == 0){
      this.ertekeles = 1;
      news.ertekeles++;
    } else if(this.ertekeles == 1){
      this.ertekeles = 0;
      news.ertekeles--;
    } else {
      this.ertekeles = 1;
      news.ertekeles += 2;
    }
  }
  ertekelNegativ(news: News){
    if(this.ertekeles == 0){
      this.ertekeles = -1;
      news.ertekeles--;
    } else if(this.ertekeles == -1){
      this.ertekeles = 0;
      news.ertekeles++;
    } else {
      this.ertekeles = -1;
      news.ertekeles -= 2;
    }
  }
  show(news: News){
    news.mutat = !news.mutat;
  }
  max(): number {
    let maximum = -100;
    for(let news of this.newsArray){
      if(news.ertekeles > maximum){
        maximum = news.ertekeles;
      }
    }
    return maximum;
  }
  
}
