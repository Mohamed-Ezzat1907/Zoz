import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';




@Component({
  selector: 'app-team',
  imports: [CardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  @ViewChild("el") childElement!:ElementRef
  hideChildComponent():void{
    this.childElement.nativeElement.classList.add("d-none")
  }


}
