import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-vertical',
  templateUrl: './banner-vertical.component.html',
  styleUrls: ['./banner-vertical.component.css']
})
export class BannerVerticalComponent implements OnInit {
  current : number = 0;
  bannersVertical : Array<any> = ["../assets/bannerVertical.png", "../assets/bannerVertical1.png", "../assets/bannerVertical2.png" ];
  
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.lapoz();
      this.modulo(this.current);
      
    }, 1500);
  }

  getCurrent(){
    return this.current;
  }
  lapoz(){
    this.current+=1;
  }
  modulo(x: number){
    this.current =  x % 3;
  }
}
