import { Injectable } from '@angular/core';
import { Employee } from './user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  _url = ' http://localhost:3000';
  httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  constructor(private _http: HttpClient) { }
  getEmployees(): Observable<any> {
    return this._http.get(this._url + '/employee-list')
                      .pipe(catchError(this.errorHandler));
  }
  getEmployee(id): Observable<Employee> {
    return this._http.get<Employee>(this._url + '/employees/'+id);
  }
  createEmployee(data): Observable<any> {
    return this._http.post(this._url + '/registerUser', JSON.stringify(data), this.httpOption);
  }
  updateEmployee(id,employee):Observable<Employee>{
    return this._http.put<Employee>(this._url+"/employees/"+id,JSON.stringify(employee),this.httpOption)
  }
  deleteEmployee(id){
    return this._http.delete<Employee>(this._url+"/employees/"+id)
  }
  errorHandler(error:HttpErrorResponse){
  return throwError(error.message || "server error")
  }
}
