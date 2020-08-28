import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page-three',
  templateUrl: './form-page-three.component.html',
  styleUrls: ['./form-page-three.component.css']
})
export class FormPageThreeComponent implements OnInit {
  form: FormGroup;

  constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.form = this.containerForm.control.get('page3') as FormGroup;
  }
}
