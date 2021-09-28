import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =  [
    new Recipe('dal Makni','Very Tasty','https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80'),
    new Recipe('dal Makni','Very Tasty','https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
