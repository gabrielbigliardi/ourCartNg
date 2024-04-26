import { Injectable, inject } from "@angular/core";
import { Firestore, collectionData, deleteDoc, doc } from "@angular/fire/firestore";
import { collection } from "@firebase/firestore";
import { Observable, from } from "rxjs";
import { CartItem } from "../types/cartItem.interface";

@Injectable({
    providedIn: 'root',
})

export class CartFirebaseService {
    firestore = inject(Firestore)
    cartCollection = collection(this.firestore, 'cart')

    getCart(): Observable<CartItem[]> {
        return collectionData(this.cartCollection, {
            idField: 'id'
        }) as Observable<CartItem[]>
    }

    removeItem(itemId: string): Observable<void> {
        const docRef = doc(this.firestore, 'cart/' + itemId)
        const promise = deleteDoc(docRef)
        return from(promise)
    }
}