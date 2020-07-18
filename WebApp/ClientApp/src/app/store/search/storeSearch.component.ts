import { Component, OnInit } from "@angular/core"
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../model/product";
import { Router } from "@angular/router";

@Component({
    selector: "app-store", 
    templateUrl: "./storeSearch.component.html",
    styleUrls: ["./storeSearch.component.css"]
})

export class StoreSearchComponent implements OnInit {
    public products: Product[];

    ngOnInit(): void {

    }


    constructor(private productService: ProductService, private router: Router) {
        this.productService.getAllProduct().subscribe(success => { this.products = success }, err => { });
    }

    public getDescription(product: Product) {
        sessionStorage.setItem('productDetails', JSON.stringify(product));
        this.router.navigate(['/storeProduct'])
    }
}
