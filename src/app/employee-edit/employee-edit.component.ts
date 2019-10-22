import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/DataserviceService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id= this.activtRoute.snapshot.params['id']
  employeeData:any={}

  constructor(private restApi:DataserviceService,
    public activtRoute:ActivatedRoute,
    public route:Router) { }

  ngOnInit() {
    return this.restApi.getEmployee(this.id)
    .subscribe(data => { this.employeeData = data })
    }
    updateEmployee(){
      if(window.confirm("Are you sure you want to edit/update")){
        this.restApi.updateEmployee(this.id,this.employeeData)
        .subscribe(data =>{
          this.route.navigate(['/employee-list'])
        })
      }
    }
  

}
