import {ViewChild, HostListener, ElementRef, Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-sidescrollarray',
  templateUrl: './sidescrollarray.component.html',
  styleUrls: ['./sidescrollarray.component.css']
})



export class SidescrollarrayComponent implements OnInit {

  @Input() data: any[] = [];

  @ViewChild('scroll') element: ElementRef;
  constructor() {
    
  }

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
     this.element.nativeElement.scrollLeft += event.deltaY;
  }

  ngOnInit(): void {
  }

}
