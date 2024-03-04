import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.scss'
})
export class Card2Component {

  text: string = "Texto via TY / Texto via TY / Texto via TY / Texto via TY / Texto via TY / Texto via TY / Texto via TY / Texto via TY / Texto via TY / "

  @Input({required:true})
  planType2: string = '';

  @Input({required:true})
  card2Style: 'bisque' | 'aqua' = 'bisque'; 
}
