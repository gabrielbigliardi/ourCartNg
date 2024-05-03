import { Component, inject } from "@angular/core";
import { PropsService } from "../../services/props.service";

@Component({
    selector: 'app-house-items',
    standalone: true,
    templateUrl: 'items.component.html'
})
export class HouseItemsComponent {
    propsService = inject(PropsService)
}