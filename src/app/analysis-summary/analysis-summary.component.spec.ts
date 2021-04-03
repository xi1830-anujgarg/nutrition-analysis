import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AnalysisFormComponent } from '../analysis-form/analysis-form.component';
import { recipeReducer } from '../store-ngrx/reducers/recipe.reducer';

import { AnalysisSummaryComponent } from './analysis-summary.component';

describe('AnalysisSummaryComponent', () => {
  let component: AnalysisSummaryComponent;
  let fixture: ComponentFixture<AnalysisSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisSummaryComponent ],
      imports:[StoreModule.forRoot({recipeNgrx: recipeReducer}),RouterTestingModule.withRoutes([{path:'enter-recipe-', component: AnalysisFormComponent}])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('showTotalNutritionClick enable ', () => {
    component.showTotalNutritionClick()
    expect(component.showTotalNutrition).toBeTrue();
  });
  it('getIngredientsData called when no data in summary ', () => {
    component.getIngredientsData();
    expect(component.ingredientsList.length === 0).toBeTrue();
  });
  it('getIngredientsData called when  data in summary ', () => {
    component.summaryData = {"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_e8cc71762dcc4976947a4f5ee035f96f","yield":2.0,"calories":94,"totalWeight":182.0,"dietLabels":["LOW_FAT","LOW_SODIUM"],"healthLabels":["FAT_FREE","LOW_FAT_ABS","LOW_POTASSIUM","KIDNEY_FRIENDLY","VEGAN","VEGETARIAN","PESCATARIAN","PALEO","SPECIFIC_CARBS","DAIRY_FREE","GLUTEN_FREE","WHEAT_FREE","EGG_FREE","MILK_FREE","PEANUT_FREE","TREE_NUT_FREE","SOY_FREE","FISH_FREE","SHELLFISH_FREE","PORK_FREE","RED_MEAT_FREE","CRUSTACEAN_FREE","CELERY_FREE","MUSTARD_FREE","SESAME_FREE","LUPINE_FREE","MOLLUSK_FREE","ALCOHOL_FREE","NO_OIL_ADDED","NO_SUGAR_ADDED","SULPHITE_FREE","KOSHER"],"cautions":["SULFITES"],"totalNutrients":{"ENERC_KCAL":{"label":"Energy","quantity":94.64,"unit":"kcal"},"FAT":{"label":"Fat","quantity":0.3094,"unit":"g"},"FASAT":{"label":"Saturated","quantity":0.050960000000000005,"unit":"g"},"FAMS":{"label":"Monounsaturated","quantity":0.012740000000000001,"unit":"g"},"FAPU":{"label":"Polyunsaturated","quantity":0.09282,"unit":"g"},"CHOCDF":{"label":"Carbs","quantity":25.134200000000003,"unit":"g"},"FIBTG":{"label":"Fiber","quantity":4.368,"unit":"g"},"SUGAR":{"label":"Sugars","quantity":18.9098,"unit":"g"},"PROCNT":{"label":"Protein","quantity":0.4732,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"mg"},"NA":{"label":"Sodium","quantity":1.82,"unit":"mg"},"CA":{"label":"Calcium","quantity":10.92,"unit":"mg"},"MG":{"label":"Magnesium","quantity":9.1,"unit":"mg"},"K":{"label":"Potassium","quantity":194.74,"unit":"mg"},"FE":{"label":"Iron","quantity":0.2184,"unit":"mg"},"ZN":{"label":"Zinc","quantity":0.0728,"unit":"mg"},"P":{"label":"Phosphorus","quantity":20.02,"unit":"mg"},"VITA_RAE":{"label":"Vitamin A","quantity":5.46,"unit":"µg"},"VITC":{"label":"Vitamin C","quantity":8.372,"unit":"mg"},"THIA":{"label":"Thiamin (B1)","quantity":0.030940000000000002,"unit":"mg"},"RIBF":{"label":"Riboflavin (B2)","quantity":0.04732,"unit":"mg"},"NIA":{"label":"Niacin (B3)","quantity":0.16562,"unit":"mg"},"VITB6A":{"label":"Vitamin B6","quantity":0.07462,"unit":"mg"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":5.46,"unit":"µg"},"FOLFD":{"label":"Folate (food)","quantity":5.46,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0.0,"unit":"µg"},"VITB12":{"label":"Vitamin B12","quantity":0.0,"unit":"µg"},"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"µg"},"TOCPHA":{"label":"Vitamin E","quantity":0.3276,"unit":"mg"},"VITK1":{"label":"Vitamin K","quantity":4.0040000000000004,"unit":"µg"},"WATER":{"label":"Water","quantity":155.7192,"unit":"g"}},"totalDaily":{"ENERC_KCAL":{"label":"Energy","quantity":4.732,"unit":"%"},"FAT":{"label":"Fat","quantity":0.47600000000000003,"unit":"%"},"FASAT":{"label":"Saturated","quantity":0.2548,"unit":"%"},"CHOCDF":{"label":"Carbs","quantity":8.378066666666669,"unit":"%"},"FIBTG":{"label":"Fiber","quantity":17.472,"unit":"%"},"PROCNT":{"label":"Protein","quantity":0.9464,"unit":"%"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"%"},"NA":{"label":"Sodium","quantity":0.07583333333333334,"unit":"%"},"CA":{"label":"Calcium","quantity":1.092,"unit":"%"},"MG":{"label":"Magnesium","quantity":2.1666666666666665,"unit":"%"},"K":{"label":"Potassium","quantity":4.143404255319149,"unit":"%"},"FE":{"label":"Iron","quantity":1.2133333333333334,"unit":"%"},"ZN":{"label":"Zinc","quantity":0.6618181818181819,"unit":"%"},"P":{"label":"Phosphorus","quantity":2.86,"unit":"%"},"VITA_RAE":{"label":"Vitamin A","quantity":0.6066666666666667,"unit":"%"},"VITC":{"label":"Vitamin C","quantity":9.302222222222223,"unit":"%"},"THIA":{"label":"Thiamin (B1)","quantity":2.5783333333333336,"unit":"%"},"RIBF":{"label":"Riboflavin (B2)","quantity":3.64,"unit":"%"},"NIA":{"label":"Niacin (B3)","quantity":1.0351249999999999,"unit":"%"},"VITB6A":{"label":"Vitamin B6","quantity":5.74,"unit":"%"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":1.365,"unit":"%"},"VITB12":{"label":"Vitamin B12","quantity":0.0,"unit":"%"},"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"%"},"TOCPHA":{"label":"Vitamin E","quantity":2.1839999999999997,"unit":"%"},"VITK1":{"label":"Vitamin K","quantity":3.336666666666667,"unit":"%"}},"ingredients":[{"text":"1 apple","parsed":[{"quantity":1.0,"measure":"whole","foodMatch":"apple","food":"apple","foodId":"food_a1gb9ubb72c7snbuxr3weagwv0dd","weight":182.0,"retainedWeight":182.0,"nutrients":{"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"IU"},"ENERC_KCAL":{"label":"Energy","quantity":94.64,"unit":"kcal"},"FASAT":{"label":"Fatty acids, total saturated","quantity":0.05096,"unit":"g"},"VITA_RAE":{"label":"Vitamin A, RAE","quantity":5.46,"unit":"µg"},"PROCNT":{"label":"Protein","quantity":0.4732,"unit":"g"},"TOCPHA":{"label":"Vitamin E (alpha-tocopherol)","quantity":0.3276,"unit":"mg"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"mg"},"CHOCDF":{"label":"Carbohydrate, by difference","quantity":25.1342,"unit":"g"},"FAT":{"label":"Total lipid (fat)","quantity":0.3094,"unit":"g"},"FIBTG":{"label":"Fiber, total dietary","quantity":4.368,"unit":"g"},"RIBF":{"label":"Riboflavin","quantity":0.04732,"unit":"mg"},"THIA":{"label":"Thiamin","quantity":0.030940000000000002,"unit":"mg"},"FAPU":{"label":"Fatty acids, total polyunsaturated","quantity":0.09282,"unit":"g"},"NIA":{"label":"Niacin","quantity":0.16562000000000002,"unit":"mg"},"VITC":{"label":"Vitamin C, total ascorbic acid","quantity":8.372,"unit":"mg"},"FAMS":{"label":"Fatty acids, total monounsaturated","quantity":0.01274,"unit":"g"},"VITB6A":{"label":"Vitamin B-6","quantity":0.07462,"unit":"mg"},"VITB12":{"label":"Vitamin B-12","quantity":0.0,"unit":"µg"},"WATER":{"label":"Water","quantity":155.7192,"unit":"g"},"K":{"label":"Potassium, K","quantity":194.74,"unit":"mg"},"P":{"label":"Phosphorus, P","quantity":20.02,"unit":"mg"},"NA":{"label":"Sodium, Na","quantity":1.82,"unit":"mg"},"ZN":{"label":"Zinc, Zn","quantity":0.0728,"unit":"mg"},"SUGAR":{"label":"Sugars, total","quantity":18.9098,"unit":"g"},"CA":{"label":"Calcium, Ca","quantity":10.92,"unit":"mg"},"MG":{"label":"Magnesium, Mg","quantity":9.1,"unit":"mg"},"FE":{"label":"Iron, Fe","quantity":0.2184,"unit":"mg"},"VITK1":{"label":"Vitamin K (phylloquinone)","quantity":4.0040000000000004,"unit":"µg"},"FOLFD":{"label":"Folate, food","quantity":5.46,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0.0,"unit":"µg"},"FOLDFE":{"label":"Folate, DFE","quantity":5.46,"unit":"µg"}},"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_unit","status":"OK"}]}]};
    component.getIngredientsData();
    expect(component.ingredientsList.length !== 0).toBeTrue();
  });
});
