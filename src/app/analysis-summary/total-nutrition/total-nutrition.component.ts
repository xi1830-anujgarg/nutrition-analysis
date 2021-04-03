import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-nutrition',
  templateUrl: './total-nutrition.component.html',
  styleUrls: ['./total-nutrition.component.css']
})
export class TotalNutritionComponent implements OnInit {
  @Input() totalNutriantDetails;
  totalNutritionData = [];
  constructor() { }

  ngOnInit(): void {
    const req = this.totalNutriantDetails ? Object.keys(this.totalNutriantDetails.totalDaily) : [];
    this.createDataForDisplay(req)
  }

  createDataForDisplay(arrKeys){
   arrKeys.forEach(val => {
     if(this.getMachingKey(val))
     {
      this.totalNutritionData.push({name: this.getMachingKey(val), 
        dailyValue: this.totalNutriantDetails.totalDaily[val].quantity.toFixed(2) + ' ' + this.totalNutriantDetails.totalDaily[val].unit, 
        seprateValue:this.totalNutriantDetails.totalNutrients[val].quantity.toFixed(2) + ' ' + this.totalNutriantDetails.totalNutrients[val].unit})
     }
   })
  }
  getMachingKey(val){
    const mappingArray = {
      ENERC_KCAL :'Calories',
      CHOLE:'Cholesterol',
      FAT:"Fat",
      NA:"Sodium",
      CHOCDF:"Carbohydrate (Fiber, Sugar)",
      PROCNT:"Protein",
      VITD:"Vitamin",
      CA:"Calcium",
      FE:"Iron",
      K:"Potassium"
    }
    return mappingArray[val]
  }

}
