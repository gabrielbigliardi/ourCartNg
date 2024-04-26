import { Injectable, signal } from "@angular/core";
import { CartItem } from "../types/cartItem.interface";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartSig = signal<CartItem[]>([])

    addItem(newItem: string): void {
        const newToAdd: CartItem = {
            name: newItem,
            id: Math.random().toString(16)
        }
        this.cartSig.update((items) => [...items, newToAdd])
        console.log('item added');
        console.log(this.cartSig());
    }

    removeItem(id: string): void {
        this.cartSig.update(items => items.filter(item => item.id !== id))
    }
}