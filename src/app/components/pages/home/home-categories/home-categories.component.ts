import { Component } from '@angular/core';
import { CommonData } from 'src/app/constants/common-data';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';

@Component({
  selector: 'home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent {

  categories: any[] = this.commonData.categories;
  categoriesActives: any[]=[true];

  constructor(
    public commonData: CommonData,
    private subCategoriesService: SubCategoriesService
  ) { }

  /**
   * Click category name
   * @param index 
   */
  selectCategory(index:number, idCategory:number){
    this.togleCategory(index);
    this.getSubCategories(idCategory);
  }

  /**
   * Activate selected category. Disable others.
   * @param index 
   */
  togleCategory(index:number){
    this.categoriesActives=[];
    this.categoriesActives[index]=true;
  }

  /**
   * Get subcategories by category id
   */
  getSubCategories(idCategory:number){
    console.log("Consultando sub categorias...");    
    if (!this.commonData.subCategories[idCategory]) {
      console.log("No existe");
      this.subCategoriesService.findSubCategoriesByCategory(idCategory).subscribe(response => {
        this.commonData.subCategories[idCategory] = response;
      });
    } else {
      console.log("Ya existe");      
    }
  }

}
