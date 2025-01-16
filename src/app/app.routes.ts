import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import path from 'path';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

export const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent, title:"Home"},
  {path:"about",component:AboutComponent,title:"About"},
  {path:"meals",component:MealsComponent ,title:"Meals" , children:[
    {path:"",redirectTo:"Seafood", pathMatch:"full"},
    {path:"Seafood" ,component:SeafoodComponent },
    {path:"Pasta" ,component:PastaComponent },
    {path:"Breakfast" ,component:BreakfastComponent }
  ]},
  {path:"team",component:TeamComponent , title:"Team"},
  {path:"contacts",component:ContactsComponent, title:"Contacts"},
  {path:"**",component:NotFoundComponent},
];
