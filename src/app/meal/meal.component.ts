import { Component, Input } from '@angular/core';

interface IMeals {
  strMeal: string
  strMealThumb: string
  Desc: string
  idMeal: string
}

@Component({
  selector: 'app-meal',
  imports: [],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent {

  @Input({required:true})mealParent:IMeals={
    strMeal: '',
    strMealThumb: '',
    Desc: '',
    idMeal: ''
  }

}
