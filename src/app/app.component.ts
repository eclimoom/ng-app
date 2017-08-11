import { Component ,OnInit} from '@angular/core';
import {NavigatorService} from "./core/navigator.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  showNavigation: boolean = true;

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
    this.navigatorService.displayNavigation
      .subscribe(res => this.showNavigation = res);
  }
  //  button click event
  toggleNav() {
    this.navigatorService.displayNavigation
      .subscribe(res => this.showNavigation = res);
  }

}
