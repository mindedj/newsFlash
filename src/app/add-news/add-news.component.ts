import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  navigate(){
    this.router.navigate(['/news']);
  }
}
