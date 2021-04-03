import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisFormComponent } from './analysis-form/analysis-form.component';
import { AnalysisSummaryComponent } from './analysis-summary/analysis-summary.component';

const routes: Routes = [
  {path:'enter-recipe', component: AnalysisFormComponent},
  {path:'summary', component: AnalysisSummaryComponent},
  {path: '**',redirectTo: 'enter-recipe'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
