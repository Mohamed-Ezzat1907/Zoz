import { Component,output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  itemEvent = output<string>()
  fireParentEvent():void{
    this.itemEvent.emit("")

  }
}
