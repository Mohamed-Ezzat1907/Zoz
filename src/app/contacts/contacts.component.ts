import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";

interface Idata {
  title :string
  description:string
}

@Component({
  selector: 'app-contacts',
  imports: [ContentComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  dataCHild :Idata ={
    title:"Contacts",
    description:"Special title For Contacts"
  }

}
