import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConsumoService {

  public url: string = '';
  constructor(public httpcliente: HttpClient) {
    this.url = 'https://localhost:7011/api/';
  }

  public function_GET(objClass: string) {
    return this.httpcliente.get(this.url + objClass);
  }

}
