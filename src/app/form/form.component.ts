import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      fistname: [''],
      lastname: [''],
      email: [''],
      dob: ['']
    });
  }
}
