import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { HttpApisService } from '../services/http-apis.service';
import { clickOnGetRecipe, recivedSummary, recivedSummaryError } from '../store-ngrx/actions/event.action';

@Component({
  selector: 'app-analysis-form',
  templateUrl: './analysis-form.component.html',
  styleUrls: ['./analysis-form.component.css']
})
export class AnalysisFormComponent implements OnInit {
  analysisForm: FormGroup;
  storeData;
  errorMsg;
  constructor(public httpApi: HttpApisService,
    private fb: FormBuilder,
    public store:  Store<{ recipeNgrx: any}>,
    public router: Router,
    public state: State<any>) { }

  ngOnInit(): void {
    this.inItForm(); 
    this.store.select('recipeNgrx').subscribe(data => {
      this.storeData = data;
    })
  }
  inItForm() {
    this.analysisForm = this.fb.group({
      ingredient: new FormControl(this.state.value.recipeNgrx.recipe.value, [Validators.required])
  }); 
  }
  formValidation(){
    return this.analysisForm.status === 'INVALID'
  }
  submitForm(){
    this.errorMsg = '';
    if(this.formValidation())
    return

    this.store.dispatch(clickOnGetRecipe({value:this.analysisForm.controls.ingredient.value}));
    const request = {
      ingr: this.analysisForm.controls.ingredient.value.split('\n')
    }
    this.httpApi.getNutritionAnalysisByRecipe(request).subscribe(res =>{
      this.store.dispatch(recivedSummary(res));
      this.router.navigate(['summary'])
    }, err =>{
      this.errorMsg = 'somthing went worng on serve.'
      this.store.dispatch(recivedSummaryError());
    })
  }
}
