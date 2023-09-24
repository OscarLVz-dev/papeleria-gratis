import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { PreLoaderComponent } from './components/commons/pre-loader/pre-loader.component';
import { HomeCategoriesComponent } from './components/pages/home/home-categories/home-categories.component';
import { HomeTopProductsComponent } from './components/pages/home/home-top-products/home-top-products.component';
import { HomeSearchBarComponent } from './components/pages/home/home-search-bar/home-search-bar.component';
import { CommonData } from './constants/common-data';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PreLoaderComponent,
    HomeCategoriesComponent,
    HomeTopProductsComponent,
    HomeSearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CommonData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
