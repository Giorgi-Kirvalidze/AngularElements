import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';

  constructor() {
  }

  components = ['popup-component', 'test2-component', 'test1-component']
  identify(index:number, item:string) {
    return index;
  }
}
