import {Component, Input} from "@angular/core";

@Component({
  selector: 'popup-component',
  template:
    `
      <div>{{message}}</div>
    `
})

export class PopupComponent {
  @Input() message!: string;
}
