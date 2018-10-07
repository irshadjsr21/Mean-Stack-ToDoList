import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items: Item[];

  constructor(private data:DataService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.data.getItems().subscribe( data => {
      this.items = data;
      this.items.sort(compare);
    });

    function compare(a,b) {
      if (!a.is_done)
        return -1;
      if (!b.is_done)
        return 1;
      return 0;
    }
  }

  addItem(form){
    let item = new Item(form.value.name, false);
    this.data.addItem(item).subscribe( (result: Item) => {
      this.getItems();
    });
  }

  deleteItem(item){
    this.data.deleteItem(item._id).subscribe(result => {
      this.getItems();
    });
  }

  updateItem(item){
    item.is_done = !item.is_done;

    this.data.updateItem(item).subscribe(result => {
      this.getItems();
    })

  }
}