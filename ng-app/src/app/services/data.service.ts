import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get<Item[]>('http://localhost:3000/items');
  }

  addItem(item){
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http.post('http://localhost:3000/items', item, {headers});
  }

  deleteItem(id){
    console.log(id + "from data");
    return this.http.delete('http://localhost:3000/items/'+id);
  }

  updateItem(item){
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http.put('http://localhost:3000/items/'+item._id , item, {headers} );
  }
}
