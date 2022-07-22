import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/Item';
import { Warehouse } from '../models/Warehouse';
import { ProjectOneApiService } from '../project-one-api.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {

  startEditing :boolean = false;
  startAdding :boolean = false;
  items :Array<Item> = [];
  itemAmounts :Array<number> = []
  projectOneAPIService :ProjectOneApiService;
  selectedItem :Item = new Item(0,"","");
  @Input() warehouseId :number = 0;
  @Input() currentAmountOfItems  :number =0;
  @Input() maxCapacity :number = 0;

  constructor(projectOneAPIService :ProjectOneApiService) { 
    this.projectOneAPIService = projectOneAPIService;
  }

  ngOnInit(): void {
    this.projectOneAPIService.findItemsInWarehouse(this.warehouseId).subscribe(resp => {
      this.items = resp;
    })
  }

  viewButton(item : Item){
    this.selectedItem = item;
    this.startEditing = true;
  }

  editButton(item :Item){
    
    
  }

  updateItem(item :Item) {
    this.projectOneAPIService.updateItem(item).subscribe();
    this.cancelEditButton()
  }

  cancelEditButton(){
    this.startEditing = false;
    this.selectedItem = new Item(0,"","");
  }

  addNewItemButton(){
    this.selectedItem = new Item(0,"","");
    this.startEditing = false;
    this.startAdding = true;
  }

  createItem(item :Item){
    if(this.currentAmountOfItems < this.maxCapacity){
      this.projectOneAPIService.createItem(item).subscribe();
    }
  }
}