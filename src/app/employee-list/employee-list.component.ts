import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/DataserviceService';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any = [];
  errorMessage;
  constructor(private restApi: DataserviceService
  ) { }
  ngOnInit() {
    this.loadEmployees()
  }

  loadEmployees() {
    return this.restApi.getEmployees().subscribe(
      data => { this.employees = data },
      error => {this.errorMessage=error}
    )
  }
  deleteEmployee(id){
    if(window.confirm("Are you sure you want to delete your own work")){
   this.restApi.deleteEmployee(id).
   subscribe(data =>{this.loadEmployees()})
  }
}
}