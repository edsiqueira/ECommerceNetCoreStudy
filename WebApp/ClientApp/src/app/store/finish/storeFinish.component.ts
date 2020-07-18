import { Component, OnInit } from "@angular/core"
import { Product } from "../../model/product";
import { Router } from "@angular/router";
import { Chart } from "../chart/chart";
import { Order } from "../../model/order";
import { UserService } from "../../services/user/user.service";
import { OrderItem } from "../../model/orderItem";
import { OrderService } from "../../services/order/order.service";

@Component({
    selector: "app-storefinish", 
    templateUrl: "./storeFinish.component.html",
    styleUrls: ["./storeFinish.component.css"]
})

export class StoreFinishComponent implements OnInit {

    public chart: Chart;
    public products: Product[];
    public total: number;
    public activeAddress: boolean;

    ngOnInit(): void {
        this.chart = new Chart();
        this.products = this.chart.getAll();
        this.updateTotal();
        this.activeAddress = false;
    }


    constructor(private userService: UserService, private router: Router, private orderService: OrderService) {

    }


    public updateValue(product: Product, quantity: number) {

        if (!product.originalValue) {
            product.originalValue = product.value;
        }

        if (quantity <= 0) {
            quantity = 1;
            product.quantity = quantity;
        }

        product.value = product.originalValue * quantity;
        this.chart.update(this.products);
        this.updateTotal();
    }


    public remove(product: Product) {
        this.chart.Remove(product);
        this.products = this.chart.getAll();
        this.updateTotal();
    }

    public updateTotal() {
        this.total = this.products.reduce((acc, prod) => acc + prod.value, 0);
    }

    public finishShopping() {
        this.orderService.finishShopping(this.InitOrder()).subscribe(success => {
            sessionStorage.setItem("Order ID", success.toString())
            this.products = [];

            this.chart.clearChart();

            this.router.navigate(['/'])

        }, err => {

        });
    }

    public InitOrder(): Order {
        let order = new Order();
        order.userID = this.userService.user.id;
        this.products = this.chart.getAll();

        for (let product of this.products) {
            let orderItem = new OrderItem();

            orderItem.productId = product.id
           
            if (!product.quantity) 
                product.quantity = 1;

            orderItem.quantity = product.quantity;
            order.orderItens.push(orderItem);
        }

        return order;
    }


    
}
