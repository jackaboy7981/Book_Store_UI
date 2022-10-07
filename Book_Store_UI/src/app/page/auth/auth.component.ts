import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  displaylogin:string = "block";
  displayregister:string = "none";
  constructor() { }

  Logindisplay(){
    this.displaylogin = "block";
    this.displayregister = "none";
  }

  Registerdisplay(){
    this.displaylogin = "none";
    this.displayregister = "block";
  }

  ngOnInit(): void {
  }

}
