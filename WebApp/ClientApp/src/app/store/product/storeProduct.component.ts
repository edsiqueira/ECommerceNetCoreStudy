import { Component, OnInit } from "@angular/core"
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../model/product";
import { Router } from "@angular/router";
import { Chart } from "../chart/chart";


@Component({
    selector: "app-productstore",
    templateUrl: "./storeProduct.component.html",
    styleUrls: ["./storeProduct.component.css"]
})

export class StoreProductComponent implements OnInit {

    public product: Product;
    public chart: Chart

    ngOnInit(): void {

        this.chart = new Chart();

        let productDetails = sessionStorage.getItem('productDetails');
        if (productDetails) {
            this.product = JSON.parse(productDetails);
        }
    }

    constructor(private productService: ProductService, private router: Router) {

    }

    public buy() {
        this.chart.add(this.product)
        this.router.navigate(['/storeFinish'])
    }
}
