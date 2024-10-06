import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from './services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular_crud';

  displayedColumns: string[] = [
    'id', 
    'firstname', 
    'lastname', 
    'email', 
    'dob', 
    'gender', 
    'qualification', 
    'company', 
    'experience', 
    'salary',
    'action'
    ];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _empService: EmployeeService){}

  ngOnInit():void{
    this.getEmployeeList();
  }


  openEmpForm() {
    const dialogRef= this._dialog.open(FormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        // console.log(res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteEmployee(id:number){
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        alert('Employee deleted successfully');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEmpEditForm(data: any) {
    const dialogRef= this._dialog.open(FormComponent,{
      data,
    });
    
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmployeeList();
        }
      },
    });
  }
}
