import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { CommonData } from './constants/common-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'papeleria-gratis';

  constructor(
    private commonData: CommonData,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    if (this.commonData.categories.length == 0) {
      this.categoriesService.findCategories().subscribe(response => {
        this.commonData.categories = response;
      });
    }
  }

}
