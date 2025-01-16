import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MealComponent } from "../meal/meal.component";
import { SeafoodComponent } from "../seafood/seafood.component";
import { PastaComponent } from "../pasta/pasta.component";
import { BreakfastComponent } from "../breakfast/breakfast.component";



@Component({
  selector: 'app-meals',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SeafoodComponent, PastaComponent, BreakfastComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {



}
