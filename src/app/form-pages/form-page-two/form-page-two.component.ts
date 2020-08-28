import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page-two',
  templateUrl: './form-page-two.component.html',
  styleUrls: ['./form-page-two.component.css']
})
export class FormPageTwoComponent implements OnInit {
  form: FormGroup;

  constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.form = this.containerForm.control.get('page2') as FormGroup;
  }
}
