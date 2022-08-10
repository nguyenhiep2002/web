import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Cart {
    id?: number;
    idpro?: number;
    danhmuc_id?: number;
    name?: any;
    anh?: any;
    price?: any;
    quantity?: number
}