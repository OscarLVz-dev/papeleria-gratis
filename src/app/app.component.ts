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

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    if (CommonData.categories==null) {
      this.categoriesService.findUserById().subscribe(response => {
        CommonData.categories = response;
      });
    }
  }

}
