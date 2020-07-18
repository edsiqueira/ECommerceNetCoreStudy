import { Product } from "../../model/product"

export class Chart {
    public products: Product[] = [];


    public add(product: Product) {
        var productStorage = localStorage.getItem("productStorage");

        if (!productStorage) {
            this.products.push(product);
        }

        else {
            this.products = JSON.parse(productStorage);
            this.products.push(product);
            
        }

        localStorage.setItem("productStorage", JSON.stringify(this.products))
    }
    public getAll(): Product[]{
        var productStorage = localStorage.getItem("productStorage");
        if (productStorage) {
            return JSON.parse(productStorage);
        }

        return this.products;
    }
    public Remove(product: Product) {
        let productStorage = localStorage.getItem("productStorage");
        if (productStorage) {
            this.products = JSON.parse(productStorage);
            this.products = this.products.filter(p => p.id != product.id);
            localStorage.setItem("productStorage", JSON.stringify(this.products))
        }
    }

    public update(products: Product[]) {
        localStorage.setItem("productStorage", JSON.stringify(products));
    }

    public haveItemOnChart(): boolean {
        let itens = this.getAll();
        return itens.length > 0;
    }

    public clearChart(){
        localStorage.setItem("productStorage","")
    }
}


