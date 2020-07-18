import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user/user.service";


@Injectable({
    providedIn: "root"
})
export class RouteGuard implements CanActivate{


    constructor(private router: Router, private userService: UserService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean /*| import("rxjs").Observable<boolean> | Promise<boolean>*/ {
        //this.router.navigate(['/login']);

        //this.userService
        if (this.userService.userAuth()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
