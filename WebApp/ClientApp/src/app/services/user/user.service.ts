import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../model/user";


@Injectable({
    providedIn: "root"
})
export class UserService{

    private baseUrl: string;

    private _user: User;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get user(): User {
        let user = sessionStorage.getItem("auth-user");
        this._user = JSON.parse(user);
        return this._user;
    }

    set user(user: User) {
        sessionStorage.setItem("auth-user", JSON.stringify(user));
        this._user = user;
    }

    public userAuth(): boolean {
        return this._user != null && this._user.email != "";
    }

    public userAdministrator(): boolean {
        return this.userAuth() && this.user.isAdministrator;
    }

    public clearSession() {
        sessionStorage.setItem("auth-user", "");
        this._user = null;
    }

    get headers() {
        return new HttpHeaders().set('content-type', 'application/json');
    }


    public verifyUser(user: User): Observable<User> {
       
        return this.http.post<User>(this.baseUrl + 'api/User/Login', JSON.stringify(user), { headers: this.headers });

    }


    public registerUser(user: User): Observable<User> {

        return this.http.post<User>(this.baseUrl + 'api/User/Register', JSON.stringify(user), { headers: this.headers });
    }

}




