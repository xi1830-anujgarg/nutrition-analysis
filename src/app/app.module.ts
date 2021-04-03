import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { recipeReducer } from './store-ngrx/reducers/recipe.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalysisFormComponent } from './analysis-form/analysis-form.component';
import { AnalysisSummaryComponent } from './analysis-summary/analysis-summary.component';
import { TotalNutritionComponent } from './analysis-summary/total-nutrition/total-nutrition.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisFormComponent,
    AnalysisSummaryComponent,
    TotalNutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({recipeNgrx: recipeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
