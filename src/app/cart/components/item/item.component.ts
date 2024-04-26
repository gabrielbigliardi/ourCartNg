import { Component, Input, inject } from '@angular/core';
import { CartItem } from '../../types/cartItem.interface';
import { CartService } from '../../services/cart.service';
import { CartFirebaseService } from '../../services/cartFirebase.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({ required: true }) cartItem!: CartItem;
  cartService = inject(CartService)
  cartFirebaseService = inject(CartFirebaseService)

  removeItem(): void {
    this.cartFirebaseService.removeItem(this.cartItem.id).subscribe(() => {
      this.cartService.removeItem(this.cartItem.id)
    })
  }
}
