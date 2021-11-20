import {Component, Injector, Input, OnInit} from "@angular/core";
import {createCustomElement, NgElement, WithProperties} from '@angular/elements'
import {DynamicCompService} from "./services/dynamicComp.service";

@Component({
  selector: 'component-loader',
  template: '<div id="test"></div>'
})

export class ComponentLoaderComponent implements OnInit {
  @Input() comp!: any;

  constructor(injector: Injector, private dynamicCompService: DynamicCompService) {
    setTimeout(()=>{
      if(this.comp){
        const component = this.dynamicCompService.getComponent(this.comp);
        const elementClass = createCustomElement(component, {injector});
        if (!customElements.get(this.comp)) { customElements.define(this.comp, elementClass); }
      }
    },0)
  }

  ngOnInit() {
    this.renderComponents();
  }

  renderComponents() {
    const dynamicComp = document.createElement(this.comp) as NgElement & WithProperties<any>;
    dynamicComp["message"] = 'wtf Web components is future, this is so easy';
    const parent = document.getElementById('test')!;
    parent.appendChild(dynamicComp);
  }

}
