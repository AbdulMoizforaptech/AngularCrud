import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_crud';


  constructor(private _dialog: MatDialog){}

  openEmpForm() {
    this._dialog.open(FormComponent);
  }
}
