import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpService) {}
  getEmployee() {
    console.log('getemployee');
    return this.http.getMethod('getEmployees');
  }
  createEmployee(data: any) {
    return this.http.postMethod('createEmployee', data);
  }
}
