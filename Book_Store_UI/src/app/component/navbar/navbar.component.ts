import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  height:string="0";
  catStatus:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  NavControl() 
  {
    if(this.catStatus)
    {
      this.height = "0";
      this.catStatus = false;
    }
    else{
      this.height = "70px";
      this.catStatus = true;
    }
  }
}
  
