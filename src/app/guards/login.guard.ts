import { ActivatedRouteSnapshot, Router } from "@angular/router";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AUTHORIZATION_KEY } from "../constants";
@Injectable({
  providedIn: "root"
})
export class LoginGuard {
  constructor(private router: Router) { }
  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = localStorage.getItem(AUTHORIZATION_KEY);
    if (user) {
      this.router.navigate(["/ui/projects"]);
    }
    return user ? false : true;
  }

}
