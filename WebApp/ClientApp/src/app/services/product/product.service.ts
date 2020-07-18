import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"
import { Product } from "../../model/product";


@Injectable({
    providedIn: "root"
})
export class ProductService implements OnInit {
   
    private _baseUrl: string;
    public products: Product[];

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl; 
    }

    ngOnInit(): void {
        this.products = [];
    }

    get headers() {
        return new HttpHeaders().set('content-type', "application/json");
    }

    public create(product: Product): Observable<Product> {

        return this.http.post<Product>(this._baseUrl + "api/product", JSON.stringify(product), { headers: this.headers })
    }

    public update(product: Product): Observable<Product> {
        return this.http.post<Product>(this._baseUrl + "api/product/update", JSON.stringify(product), { headers: this.headers })
    }

    public delete(product: Product): Observable<Product[]> {
        return this.http.post<Product[]>(this._baseUrl + "api/product/delete", JSON.stringify(product), { headers: this.headers })
    }

    public getAllProduct(): Observable<Product[]> {
        return this.http.get<Product[]>(this._baseUrl + "api/product"); 
    }

    public sendFile(selectedFile: File): Observable<string>{

        const formData: FormData = new FormData();
        formData.append("sendFile", selectedFile, selectedFile.name);
        return this.http.post<string>(this._baseUrl + "api/product/sendFile", formData)
    }
    public getProduct(productID: number): Observable<Product> {
        return this.http.get<Product>(this._baseUrl + "api/product");
    }
}
