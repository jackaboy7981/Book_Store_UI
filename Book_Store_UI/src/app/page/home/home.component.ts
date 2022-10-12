import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any[] = [];
  newarrivals: any[] = [];
  featured: any[] = [];
  constructor(private dataService: DataService) { 
    
    this.dataService.getCategory("Category/Getallcategories").subscribe((response: any) => {
      this.categories = response;})
      this.dataService.getCategory("Book/Getbooksnewarrival").subscribe((response: any) => {
        this.newarrivals = response;})
        this.dataService.getCategory("Book/Getbooksfeatured").subscribe((response: any) => {
          this.featured = response;})
    
  }

  ngOnInit(): void {
  }

}
