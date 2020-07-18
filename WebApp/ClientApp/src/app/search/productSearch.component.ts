import { Component, OnInit } from "@angular/core"
import { Product } from "../model/product"
import { ProductService } from "../services/product/product.service";
import { Router } from "@angular/router";

@Component({
    selector: "product-search",
    templateUrl: "./productSearch.component.html",
    styleUrls: ["./productSearch.component.css"]
})

export class ProductSearchComponent implements OnInit {

    public products: Product[];

    ngOnInit(): void {
        
    }

    constructor(private productSerivce: ProductService, private router: Router) {
        this.productSerivce.getAllProduct().subscribe(success => {
            this.products = success;
        }, e => { });
    }

    public create() {
        sessionStorage.setItem("productSession", "");
        this.router.navigate(['/product']);
    }

    public delete(product: Product) {
        var result = confirm("Delete the selected product");

        if (result) {
            this.productSerivce.delete(product).subscribe(success => { this.products = success }, err => { });
        }
    }

    public edit(product: Product) {

        sessionStorage.setItem("productSession", JSON.stringify(product));
        this.router.navigate(['/product']);

       
    }

}
