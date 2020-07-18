"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chart = /** @class */ (function () {
    function Chart() {
        this.products = [];
    }
    Chart.prototype.add = function (product) {
        var productStorage = localStorage.getItem("productStorage");
        if (!productStorage) {
            this.products.push(product);
        }
        else {
            this.products = JSON.parse(productStorage);
            this.products.push(product);
        }
        localStorage.setItem("productStorage", JSON.stringify(this.products));
    };
    Chart.prototype.getAll = function () {
        var productStorage = localStorage.getItem("productStorage");
        if (productStorage) {
            return JSON.parse(productStorage);
        }
        return this.products;
    };
    Chart.prototype.Remove = function (product) {
        var productStorage = localStorage.getItem("productStorage");
        if (productStorage) {
            this.products = JSON.parse(productStorage);
            this.products = this.products.filter(function (p) { return p.id != product.id; });
            localStorage.setItem("productStorage", JSON.stringify(this.products));
        }
    };
    Chart.prototype.update = function (products) {
        localStorage.setItem("productStorage", JSON.stringify(products));
    };
    Chart.prototype.haveItemOnChart = function () {
        var itens = this.getAll();
        return itens.length > 0;
    };
    Chart.prototype.clearChart = function () {
        localStorage.setItem("productStorage", "");
    };
    return Chart;
}());
exports.Chart = Chart;
//# sourceMappingURL=chart.js.map