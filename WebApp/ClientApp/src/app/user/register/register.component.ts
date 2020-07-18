import { Component, OnInit } from "@angular/core"
import { User } from "../../model/user"
import { UserService } from "../../services/user/user.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})

export class RegisterComponent implements OnInit {
    
    public user: User;
    public onLoad: boolean;
    public message: string;
    public userRegistred: boolean;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.user = new User();
    }

    public registerUser() {
        this.onLoad = true;
        this.userService.registerUser(this.user).subscribe(
            success => {
                this.message = "";
                this.onLoad = false;
                this.userRegistred = true;
                
            },
            error => {
                this.message = error.error;
                this.onLoad = false;
                this.userRegistred = false;
            }
        );
       
    }
}
