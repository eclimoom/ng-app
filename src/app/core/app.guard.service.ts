import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {NavigatorService} from "./navigator.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()
export class AppGuard implements CanActivate {
  constructor(private navigatorService: NavigatorService) { }
  canActivate(next: ActivatedRouteSnapshot) {
    this.navigatorService.toggleNavigation(next.url[0].path);
    return Observable.of(true);
  }
}
