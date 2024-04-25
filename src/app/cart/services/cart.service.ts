import { Injectable, signal } from "@angular/core";
import { CartItem } from "../types/cartItem.interface";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartSig = signal<CartItem[]>([])
}