import { Component } from '@angular/core';
import { CommonData } from 'src/app/constants/common-data';

@Component({
  selector: 'home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent {

  categories: any[] = this.commonData.categories;
  categoriesActives: any[]=[true];

  constructor(
    public commonData: CommonData
  ) { }

  /**
   * Activate selected category. Disable others.
   * @param index 
   */
  togleCategory(index:number){
    this.categoriesActives=[];
    this.categoriesActives[index]=true;
  }

}
