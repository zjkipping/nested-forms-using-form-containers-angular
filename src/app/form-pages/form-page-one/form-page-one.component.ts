import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page-one',
  templateUrl: './form-page-one.component.html',
  styleUrls: ['./form-page-one.component.css']
})
export class FormPageOneComponent implements OnInit {
  form: FormGroup;

  constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.form = this.containerForm.control.get('page1') as FormGroup;
  }
}
