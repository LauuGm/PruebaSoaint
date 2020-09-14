import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  url:"https://datos.gob.es/apidata/catalog/distribution";
  constructor(private http: HttpClient) { }

  getResult(url: string) {

    return this.http.get(url);

  }

}
