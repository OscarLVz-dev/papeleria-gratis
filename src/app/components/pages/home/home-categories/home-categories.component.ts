import { Component } from '@angular/core';
import { CommonData } from 'src/app/constants/common-data';

@Component({
  selector: 'home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent {

  categories: any[] = this.commonData.categories;

  constructor(
    public commonData: CommonData
  ) { }

}
