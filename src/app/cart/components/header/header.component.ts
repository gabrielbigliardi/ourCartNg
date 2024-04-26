import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartService = inject(CartService)

  text: string = ''

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement
    this.text = target.value
  }

  addItem() {
    console.log('adding ', this.text);
    this.cartService.addItem(this.text)
    this.text = ''
  }
}
