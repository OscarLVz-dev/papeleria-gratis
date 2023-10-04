import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  constructor(private http: HttpClient) { }

  findSubCategoriesByCategory(idCategory:number): Observable<any> {
    return this.http.get<any>(environment.host_back + '/active?idCategory='+idCategory);
  }
}
