import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/shared/employee.service';
export interface PeriodicElement {
  name: string;
  position: number;
  Department: string;
  office: string;
  status: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  ELEMENT_DATA!: any[];
  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'address',
    'dateOfBirth',
    'Action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  paginator: any;
  sort: any;
  constructor(private employee: EmployeeService) {}
  ngOnInit() {
    this.employee.getEmployee().subscribe((res: any) => {
      console.log('res.response', res.response);

      this.ELEMENT_DATA = res.response;
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
