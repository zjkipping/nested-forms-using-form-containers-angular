import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormPagesService {
  formPages: FormGroup;

  constructor(fb: FormBuilder) {
    this.formPages = fb.group({
      page1: fb.group({
        name: fb.control('', Validators.required),
        age: fb.control('', Validators.required),
        email: fb.control('', Validators.required)
      }),
      page2: fb.group({
        street: fb.control('', Validators.required),
        city: fb.control('', Validators.required),
        zip: fb.control('', Validators.required)
      }),
      page3: fb.group({
        label: fb.control('', Validators.required),
        price: fb.control('', Validators.required),
        quantity: fb.control('', Validators.required)
      }),
      page4: fb.group({
        name: fb.control('', Validators.required),
        description: fb.control('', Validators.required),
        length: fb.control('', Validators.required)
      })
    })
  }

  submitFormToApi() {
    console.log(this.formPages.value);
  }
}