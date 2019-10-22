import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'employee-list',pathMatch:'full'},
  {path:'create-Employee',component:EmployeeCreateComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'employee-edit/:id',component:EmployeeEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
