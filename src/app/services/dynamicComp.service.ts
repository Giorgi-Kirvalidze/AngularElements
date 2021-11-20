
import {Injectable} from "@angular/core";
import {PopupComponent} from "../popup-component";
import {Test1Component} from "../test1/test1.component";
import {Test2Component} from "../test2/test2.component";

@Injectable({providedIn: 'root'})

export class DynamicCompService{

  compList: any = {
    'popup-component' : {Component : PopupComponent},
    'test1-component' : {Component : Test1Component},
    'test2-component' : {Component : Test2Component},
  }

  getComponent(name : string){
      return this.compList[name].Component;
  }
}
