import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    standalone: true,
    imports: [HeaderComponent]
})
export class CartComponent {

}