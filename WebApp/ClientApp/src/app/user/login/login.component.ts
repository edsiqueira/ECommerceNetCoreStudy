import { Component, OnInit } from "@angular/core"
import { User } from "../../model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user/user.service";


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    public user;
    public returnUrl: string;
    public message: string;
    public onLoad: boolean;

    constructor(private router: Router, private activatedRouter: ActivatedRoute, private userService: UserService) {
    }

    ngOnInit(): void {
        this.user = new User();
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    }

    public imageAddress = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpI6HAfhRVmPn12ckQK8ZMOAaZIFQr4nS6zEoslZs68etHpJu4w&s";
    public titleImage = "Image logo";

    login() {
        this.onLoad = true;
        this.userService.verifyUser(this.user).subscribe(
            success => {
                this.userService.user = success;
                if (this.returnUrl == null)
                    this.router.navigate(["/"]);

                else
                  this.router.navigate([this.returnUrl]);
            },
            err => {
                this.message = err.error;
                this.onLoad = false;
            }
        );
    }
}
