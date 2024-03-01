import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true })
  planType: string = '';

  @Input({ required: true })
  planPrice: number = 0;

  @Input({ required: true })
  cardStyle: 'orange' | 'purple'| 'blue' = 'orange';

  @Output('buttonClicked')
  buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}

//Ai aqui, lá no HTML do card component, eu vou utilizar o evento "clicked" que veio lá do button component com a função onbuttonclicked. Dai essa função vai chamar outro output, dessa vez pra levar o evento do click até o app component. O alias desse output vai ser "buttonclicked".
