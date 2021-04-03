import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';

@Component({
  selector: 'app-analysis-summary',
  templateUrl: './analysis-summary.component.html',
  styleUrls: ['./analysis-summary.component.css']
})
export class AnalysisSummaryComponent implements OnInit {
  summaryData; 
  ingredientsList = [];
  showTotalNutrition = false;
  constructor(public store:  Store<{ recipeNgrx: any}>,
    public router: Router) { }

  ngOnInit(): void {
    this.store.select('recipeNgrx').subscribe((data: any) => {
      this.summaryData = data.enteredRecipe;
      this.getIngredientsData();
    })
  }
  showTotalNutritionClick(){
    this.showTotalNutrition = true;
  }
  backClick(){
    this.router.navigate(['enter-recipe']);
  }
  getIngredientsData(){
    this.ingredientsList = this.summaryData ? this.summaryData.ingredients.filter(val => val.parsed) : [];
  }

}
