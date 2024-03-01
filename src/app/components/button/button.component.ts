import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text' }) buttonText: string = '';
  @Input({ required: true, alias: 'style' }) buttonStyle: 'white' | 'purple' | 'green'= 'white';

  @Input({ alias: 'disabled' })
  isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }

  //No botão, eu recebo o click. Através do output, vou enviar o evento de click do button component pro card component. Lá no HTML do button component eu tenho o evento de click que implementa a funcao onbuttonclicked, que vai puxar a variavel do meu output para emitir o evento de click pro card component. Eu vou utilizar o alias "clicked" lá no card component.
}
