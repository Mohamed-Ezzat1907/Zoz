import { Component, Input } from '@angular/core';

interface Idata {
  title :string
  description:string
}

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input({required:true}) dataParent :Idata = {
    title: '',
    description: ''
  }

}
