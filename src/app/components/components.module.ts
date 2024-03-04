import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";
import { Card2Component } from './card2/card2.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    ButtonComponent,
    CardComponent,
    Card2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    Card2Component
  ]
})

export class ComponentsModule {

}