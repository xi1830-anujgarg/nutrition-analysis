import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AnalysisSummaryComponent } from '../analysis-summary/analysis-summary.component';
import { recipeReducer } from '../store-ngrx/reducers/recipe.reducer';

import { AnalysisFormComponent } from './analysis-form.component';

describe('AnalysisFormComponent', () => {
  let component: AnalysisFormComponent;
  let fixture: ComponentFixture<AnalysisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisFormComponent ],
      imports:[HttpClientModule,StoreModule.forRoot({recipeNgrx: recipeReducer}),  RouterTestingModule.withRoutes([{path:'summary', component: AnalysisSummaryComponent}])],
      providers:[FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Form validation', () => {
    expect(component.formValidation()).toBeTrue();
    component.analysisForm.controls.ingredient.setValue('test1');
    expect(component.formValidation()).toBeFalse();
  });
  it('Submit form validation', () => {
    component.analysisForm.controls.ingredient.setValue('1 apple');
    component.submitForm();
    expect(component.formValidation()).toBeFalse();
  });
  it('Submit form with false validation', () => {
    component.submitForm();
    expect(component.formValidation()).toBeTrue();
  });
});
