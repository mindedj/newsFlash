import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../app.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }
  

  login(form: NgForm) {
    if(form.form.value.password == form.form.value.password2){
      this.router.navigate(["/news"]);
    }
    
  }

  navigate() {
    this.router.navigate(["/login"]);
  }
}
