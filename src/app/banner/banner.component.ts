import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  current : number = 0;
  banners : Array<any> = ["../assets/bannerHorizontal0.png", "../assets/bannerHorizontal1.png", "../assets/bannerHorizontal2.png" ];
  
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
