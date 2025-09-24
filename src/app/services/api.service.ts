import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AnimalGet} from '../model/Animal.get.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getAnimalService() {
    return this.http.get<AnimalGet[]>(this.apiURL);
  }

}
