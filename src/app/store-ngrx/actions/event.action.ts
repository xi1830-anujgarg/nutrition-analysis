import { createAction, props } from "@ngrx/store";

export const clickOnGetRecipe = createAction('clickOnGetRecipe', props<any>());
export const recivedSummary = createAction('recivedSummary', props<any>());
export const recivedSummaryError = createAction('recivedSummaryError');