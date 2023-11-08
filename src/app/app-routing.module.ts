import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeCategoriesComponent } from './components/pages/home/home-categories/home-categories.component';
import { CategoryComponent } from './components/pages/category/category.component';

const routes: Routes = [
  { path: 'categorias', component: HomeCategoriesComponent, pathMatch: 'prefix' },
  { path: 'categoria', component: CategoryComponent, pathMatch: 'prefix' },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
