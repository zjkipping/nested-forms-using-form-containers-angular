import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormPagesService } from './form-pages.service';

@Component({
  selector: 'app-form-pages',
  templateUrl: './form-pages.component.html',
  styleUrls: ['./form-pages.component.css']
})
export class FormPagesComponent {
  forms: FormGroup;

  constructor(fps: FormPagesService) {
    this.forms = fps.formPages;
  }
}
