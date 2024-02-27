import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ButtonVisibilityService {


  private storageKey = 'formData'; // Adjust the key based on your needs

  saveFormData(formData: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(formData));
  }

  getFormData(): any {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : null;
  }

  clearFormData(): void {
    localStorage.removeItem(this.storageKey);
  }



  pshow:boolean = true;
  nshow:boolean = true;
  base = '../assets/';
    constructor (private http:HttpClient){
  }
  getData(path:string){
    return this.http.get(this.base + path);
  }

}
