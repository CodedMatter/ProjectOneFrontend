import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/Employee';
import { ProjectOneApiService } from '../project-one-api.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  employees :Array<Employee> = [];
  projectOneAPIService :ProjectOneApiService;
  //createdEmployee :Employee = new Employee(2,"John","Johnson",4);
  @Input() warehouseId :number = 0;

  constructor(projectOneAPIService :ProjectOneApiService) { 
    this.projectOneAPIService = projectOneAPIService;
  }

  ngOnInit(): void {

    this.projectOneAPIService.findEmployeesByWarehouseId(this.warehouseId).subscribe(req => {
      this.employees = [];
      this.employees = req;
     })
  }
}
