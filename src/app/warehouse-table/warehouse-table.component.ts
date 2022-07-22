import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../models/Warehouse';
import { ProjectOneApiService } from '../project-one-api.service';

@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.css']
})
export class WarehouseTableComponent implements OnInit {

  showInfo :boolean = false;
  startEditing : boolean = false;
  startAdding :boolean = false;
  warehouses :Array<Warehouse> = []
  projectOneAPIService :ProjectOneApiService;
  selectedWarehouse :Warehouse = new Warehouse(0,"",0,0,0,0);
  warehouseToUpdate :Warehouse = new Warehouse(0,"",0,0,0,0);
  currentAmountOfItems : number = 0
  
  constructor(projectOneAPIService :ProjectOneApiService) { 
    this.projectOneAPIService = projectOneAPIService;
  }

  ngOnInit(): void {
    // get all the warehouses on start
    this.projectOneAPIService.findAllWarehouses().subscribe(resp => {
      this.warehouses = []
      this.warehouses = resp;
      console.log(this.warehouses);
    })
    // this.getAmountOfItemsInWarehouse(1);
  }

  viewButton(warehouse :Warehouse){
    this.selectedWarehouse = warehouse;
    this.getAmountOfItemsInWarehouse(warehouse.id);
    this.showInfo = true;
  }

  warehouseEditButton(){
    // this.warehouseToUpdate = new Warehouse(this.selectedWarehouse.id,
    //   this.selectedWarehouse.name,this.selectedWarehouse.capacity,this.selectedWarehouse.companyId,
    //   this.selectedWarehouse.numOfEmployees,this.selectedWarehouse.administratorId);
      this.startEditing = true;
  }

  cancelEditButton(){
    this.back();
  }

  deleteButton(id :number){
    this.projectOneAPIService.deleteWarehouse(id);
  }

  getAmountOfItemsInWarehouse(warehouseId :number){
    this.projectOneAPIService.getAmountOfItemsInWarehouse(warehouseId).subscribe(resp => {
      this.currentAmountOfItems = resp;
    });
  }

  updateWarehouse(warehouse :Warehouse){
      this.projectOneAPIService.updateWarehouse(warehouse).subscribe();
      this.startEditing = false;
      this.showInfo = false;
    }

    addButton(){
      this.selectedWarehouse = new Warehouse(0,"",0,0,0,0);
      this.startAdding = true;

    }

    addWarehouse(warehouse :Warehouse){
      this.projectOneAPIService.createWarehouse(warehouse).subscribe();
      this.back();
    }

    back(){
      this.showInfo=false;
      this.startAdding = false;
      this.startEditing=false;
    }
}