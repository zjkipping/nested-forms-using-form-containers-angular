import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormPagesService } from '../form-pages.service';

@Component({
  selector: 'app-form-page-four',
  templateUrl: './form-page-four.component.html',
  styleUrls: ['./form-page-four.component.css']
})
export class FormPageFourComponent implements OnInit {
  form: FormGroup;

  // public to be used in the template
  constructor(
    public containerForm: ControlContainer,
    public formPagesService: FormPagesService
  ) { }

  ngOnInit() {
    this.form = this.containerForm.control.get('page4') as FormGroup;
  }
}
