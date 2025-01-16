import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";

interface Idata {
  title :string
  description:string
}

@Component({
  selector: 'app-about',
  imports: [ContentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  dataCHild :Idata ={
    title:"About",
    description:"Special title For About"
  }

}
