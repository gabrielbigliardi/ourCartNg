import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ItemsComponent } from "./components/items/items.component";

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    standalone: true,
    imports: [HeaderComponent, ItemsComponent]
})
export class CartComponent {

}