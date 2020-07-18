import { OrderItem } from "./orderItem";

export class Order {
    public id: number;
    public orderDate: Date;
    public userID: number;
    public estimatedSendDate: Date;
    public cep: string;
    public state: string;
    public city: string;
    public address: string;
    public number: string;
    public paymentTypeID: number;

    public orderItens: OrderItem[];

    constructor() {
        this.orderItens = [];
        this.orderDate = new Date();
    }
}
