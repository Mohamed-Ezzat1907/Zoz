import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";

interface Idata {
  title :string
  description:string
}

@Component({
  selector: 'app-home',
  imports: [ ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dataCHild :Idata ={
    title:"Home",
    description:"Special title For Home"
  }

}
