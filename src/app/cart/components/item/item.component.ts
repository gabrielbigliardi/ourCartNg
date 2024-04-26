import { Component, Input, inject } from '@angular/core';
import { CartItem } from '../../types/cartItem.interface';
import { CartService } from '../../services/cart.service';

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

  removeItem(): void {
    this.cartService.removeItem(this.cartItem.id)
  }
}
