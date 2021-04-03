import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpApisService {
  paramObj = {
    app_id: '47379841',
    app_key: 'd28718060b8adfd39783ead254df7f92'    
  }
  baseUrl = "https://api.edamam.com/";
  
  constructor(private http: HttpClient) { }

  getNutritionAnalysisByRecipe(reqObj): Observable<HttpResponse<Object>>{
    const url = this.baseUrl + 'api/nutrition-details';
    return this.http.post<HttpResponse<Object>>(url,reqObj, {params:this.paramObj});
  }
}