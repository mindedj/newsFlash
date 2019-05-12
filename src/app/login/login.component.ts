import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    
  }
  em : string = "asd@gmail.com";
  pw : string = "alma123";
  ngOnInit() {
  }
  

  login(form: NgForm) {
    if(form.form.value.email == this.em  && form.form.value.password == this.pw){
      this.router.navigate(["/news"]);
    }
    
  }

  navigate() {
    this.router.navigate(["/signup"]);
  }

}
