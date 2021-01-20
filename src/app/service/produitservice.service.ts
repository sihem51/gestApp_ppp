
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {Observable}  from 'rxjs';
import { Produit } from './../model/produit';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  private baseUrl="http://localhost:9090/getstock/produit";

public dataform: FormGroup;
constructor (private http: HttpClient) {}
getData (): Observable<any>
{
  return this.http.get<Produit[]>(`${this.baseUrl}`);



}
getPeoduitById(id:number): Observable<Produit> {
   return this.http.get<Produit>(`${this.baseUrl}/${id}`);
}
createData (produit: Produit): Observable<object> {
  return this.http.post(`${this.baseUrl}`, produit);
}
updateProd(id:number , produit : Produit): Observable<object>{
  return  this.http.put(`${this.baseUrl}/${id}`, produit);
}
}
