import { Component } from "@angular/core";
import { InputComponent } from "./components/input/input.component";

@Component({
    selector: 'app-house',
    templateUrl: './house.component.html',
    standalone: true,
    imports: [InputComponent]
})
export class HouseComponent {

}