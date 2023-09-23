import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'papeleria-gratis';

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.findUserById().subscribe(response => {
      console.log(response);
    });
  }

}
