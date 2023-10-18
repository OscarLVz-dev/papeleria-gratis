import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonData } from 'src/app/constants/common-data';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';

@Component({
  selector: 'home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  categoriesActives: any[]=[true];
  categorySelectedId:number = 1;
  categories: any[] = this.commonData.categories;

  constructor(
    private router: Router,
    routed: ActivatedRoute,
    public commonData: CommonData,
    private subCategoriesService: SubCategoriesService
  ) { 
    let paramId = routed.snapshot.paramMap.get('id');
    
    if (isNaN(parseInt(paramId))) {
      this.router.navigate(['/categorias']);
    }else if(paramId){
      this.categorySelectedId = parseInt(paramId);
      this.categoriesActives = [];
    }
  }

  ngOnInit(): void {
    this.getSubCategories(this.categorySelectedId);
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
        this.categoriesActives[idCategory-1] = true;
      });
    }
  }

}
