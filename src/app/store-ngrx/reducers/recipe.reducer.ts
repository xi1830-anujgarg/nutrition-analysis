import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import {  clickOnGetRecipe, recivedSummary, recivedSummaryError } from "../actions/event.action";
import { initialState } from "../states/recipe.state";
const _recipeReducer = createReducer(initialState, 
    on(clickOnGetRecipe, (state, action)=> {
        return {
            ...state,
            enteredRecipe: '',
            recipe: action,
            loading: true
        }
    }),on(recivedSummary, (state, action)=> {
        return {
            ...state,
            enteredRecipe: action,
            loading: false
        }
    }),on(recivedSummaryError, (state)=> {
        return {
            ...state,
            loading: false
        }
    })
);
export function recipeReducer(state, action){
    return _recipeReducer(state, action);
}