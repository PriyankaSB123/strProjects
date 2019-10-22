import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/DataserviceService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employees:any=[]
  userModel={
    name:'',
    phone:null,
    email:''
  }

   constructor(private restApi:DataserviceService,
               private route:Router) { }

  
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userModel)
    this.restApi.createEmployee(this.userModel)
    .subscribe(
     (data)=>{console.log("successfullycreated",data)
      this.route.navigate(['/employee-list']),
      (error) =>{  console.log(error)}
    }
  
    );
    
   }

}
