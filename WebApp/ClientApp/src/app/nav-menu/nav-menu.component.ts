import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { Chart } from '../store/chart/chart';
import { v } from '@angular/core/src/render3';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
    ngOnInit(): void {
        this.chart = new Chart(); 
    }
    isExpanded = false;

    public chart: Chart

    constructor(private router: Router, private userService: UserService) {

    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    public userAdministrator(): boolean {
        return this.userService.userAdministrator();
    }

    public userLoggedIn(): boolean {
        return this.userService.userAuth();
    }



    logout() {
        this.userService.clearSession();
        this.router.navigate(['/'])
    }

    get userLogged() {
        return this.userService.user;
    }

    public haveItemOnChart(): boolean {
        return this.chart.haveItemOnChart();
    }

}
