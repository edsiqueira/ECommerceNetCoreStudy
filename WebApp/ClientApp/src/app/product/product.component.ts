import { Component, OnInit } from "@angular/core"
import { ProductService } from "../services/product/product.service";
import { Product } from "../model/product";
import { Router } from "@angular/router";

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

    public product: Product;
    public selectedFile: File;
    public onLoad: boolean;
    public message: string;
    constructor(private productService: ProductService, private router: Router) {

    }

    ngOnInit(): void {
        let productSession = sessionStorage.getItem("productSession");

        if (productSession)
            this.product = JSON.parse(productSession);

        else {
           
            this.product = new Product();
        }
         
    }

    public uploadChange(files: FileList) {
        this.selectedFile = files.item(0);
        this.activeWait();
        this.productService.sendFile(this.selectedFile).subscribe(
            success => {
                this.product.fileName = success;
                this.deactiveWait()
            },
            error => {
                this.deactiveWait()
            }
        );
    }

    public create() {

        this.activeWait();

        this.productService.create(this.product).subscribe(
            success => {

                this.deactiveWait();
                this.router.navigate(['/productSearch'])
            },
            error => {
                this.message = error.error;
                this.deactiveWait();
            }
        )
    }

    public activeWait() { this.onLoad = true; }

    public deactiveWait() { this.onLoad = false; }

}
