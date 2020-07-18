import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Order } from "../../model/order";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class OrderService {

    private _baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    private get header(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json')
    }

    public finishShopping(order: Order): Observable<number> {
        return this.http.post<number>(this._baseUrl + "api/order", JSON.stringify(order), { headers: this.header });
    }
}
