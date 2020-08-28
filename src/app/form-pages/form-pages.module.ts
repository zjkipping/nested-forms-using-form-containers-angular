import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormPageOneComponent } from './form-page-one/form-page-one.component';
import { FormPageTwoComponent } from './form-page-two/form-page-two.component';
import { FormPageThreeComponent } from './form-page-three/form-page-three.component';
import { FormPageFourComponent } from './form-page-four/form-page-four.component';
import { FormPagesComponent } from './form-pages.component';

const routes = [
  {
    path: '',
    component: FormPagesComponent,
    children: [
      { path: '', redirectTo: 'page1' },
      {
        path: 'page1',
        component: FormPageOneComponent
      },
      {
        path: 'page2',
        component: FormPageTwoComponent
      },
      {
        path: 'page3',
        component: FormPageThreeComponent
      },
      {
        path: 'page4',
        component: FormPageFourComponent
      },
      { path: '**', redirectTo: 'page1' }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPageOneComponent, FormPageTwoComponent, FormPageThreeComponent, FormPageFourComponent, FormPagesComponent]
})
export class FormPagesModule { }