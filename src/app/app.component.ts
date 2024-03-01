import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 onCardButtonClicked() {
  console.log('onCardButtonClicked!');
  //Aqui iria a chamada HTTP
 }
}

//Ai aqui, lá no HTML, a gente traz o buttonClicked como evento e manda ele executar a função oncardbuttonclicked. Essa função vai retornar um console log porque a gente não vai implementar o método de chamada HTTP, mas deveria vir o método aqui.
