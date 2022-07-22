import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';
import { Item } from './models/Item';
import { Warehouse } from './models/Warehouse';

@Injectable({
  providedIn: 'root'
})
export class ProjectOneApiService {

  http :HttpClient;
  baseUrl = 'http://localhost:8080/ProjectOne/';
  constructor(http: HttpClient) { 
    this.http = http;
  }

  adminId = 1;


  //#region warehouse
  findAllWarehouses() :Observable<any> {
    return this.http.get(this.baseUrl + "warehouse/");
  }

  findWarehouseById(id :number) :Observable<any> {
    return this.http.get(this.baseUrl + "warehouse/findById/" + id);
  }

  findByAdminId(id :number) :Observable<any> {
    return this.http.get(this.baseUrl + "warehouse/findByAdminId/" + id);
  }

  createWarehouse(warehouse :Warehouse) :Observable<any>{
    return this.http.post(this.baseUrl + "warehouse/", warehouse);
  }

  updateWarehouse(warehouse :Warehouse) :Observable<any> {
    return this.http.put(this.baseUrl + "warehouse/", warehouse);
  }

  deleteWarehouse(id :number) :void{
    this.http.delete(this.baseUrl + "warehouse/" + id)
  }
  //#endregion

  //#region Employee
  findallEmployees() :Observable<any>{
    return this.http.get(this.baseUrl + "employee/")
  }

  findEmployeeById(id :number) :Observable<any>{
    return this.http.get(this.baseUrl + "employee/findById/" + id)
  }

  findEmployeesByFirstName(firstName :string) :Observable<any>{
    return this.http.get(this.baseUrl + "employee/findByFirstName/" + firstName)
  }
  
  findEmployeesByLastName(lastName :string) :Observable<any>{
    return this.http.get(this.baseUrl + "employee/findByLastName/" + lastName)
  }

  findEmployeesByWarehouseId(id :number) :Observable<any>{
    return this.http.get(this.baseUrl + "employee/findByWarehouseId/" + id)
  }

  createEmployee(employee :Employee) :Observable<any>{
    return this.http.post(this.baseUrl + "employee/" ,employee)
  }

  updateEmployee(employee :Employee) :Observable<any>{
    return this.http.put(this.baseUrl + "employee/" ,employee)
  }

  deleteEmployeeById(id :number) :Observable<any>{
    return this.http.delete(this.baseUrl + "employee/" + id)
  }
  //#endregion

  //#region Item
  findAllItems() :Observable<any>{
    return this.http.get(this.baseUrl + "item/")
  }

  findItemById(id :number) :Observable<any>{
    return this.http.get(this.baseUrl + "item/findById/" + id)
  }

  findItemsByName(name :string) :Observable<any>{
    return this.http.get(this.baseUrl + "item/findByName/" + name)
  }

  findItemsInWarehouse(id :number) :Observable<any>{
    return this.http.get(this.baseUrl + "item/findItemsInWarehouse/" + id);
  }

  getAmountOfItemsInWarehouse(warehouseId :number) :Observable<any> {
    return this.http.get(this.baseUrl + "item/amountOfItemsInWarehouse/" + warehouseId);
  }

  getAmountOfSpecificItemInWarehouse(warehouseId :number, item_id :number) : Observable<any>{
    return this.http.get(this.baseUrl + "item/amountOfSpecificItemInWarehouse/" + warehouseId +"/" + item_id)
  }

  createItem(item :Item) :Observable<any>{
    return this.http.post(this.baseUrl + "/item/",item)
  }

  updateItem(item :Item) :Observable<any> {
    return this.http.put(this.baseUrl + "item/",item)
  }

  deleteItemById(id :number) :Observable<any>{
    return this.http.delete(this.baseUrl + "/item/" + id);
  }
  //#endregion
}
