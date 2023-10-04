import { Component, OnInit } from '@angular/core';
import { CommonData } from 'src/app/constants/common-data';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';

@Component({
  selector: 'home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  categories: any[] = this.commonData.categories;
  categoriesActives: any[]=[true];

  constructor(
    public commonData: CommonData,
    private subCategoriesService: SubCategoriesService
  ) { }

  ngOnInit(): void {
    this.getSubCategories(1);
  }

  /**
   * Seleccion de categoria
   * @param index 
   */
  selectCategory(index:number, idCategory:number){
    this.togleCategory(index);
    this.getSubCategories(idCategory);
  }

  /**
   * Activa la categoria seleccionada
   * -Desactiva el resto de categorias
   * @param index 
   */
  togleCategory(index:number){
    this.categoriesActives=[];
    this.categoriesActives[index]=true;
  }

  /**
   * Obtiene las subcategorias por id de categoria
   * -Valida si ya se cuenta con la informacion de la subcategoria 
   */
  getSubCategories(idCategory:number){
    if (!this.commonData.subCategories[idCategory]) {
      this.subCategoriesService.findSubCategoriesByCategory(idCategory).subscribe(response => {
        this.commonData.subCategories[idCategory] = response;
      });
    }
  }

}
