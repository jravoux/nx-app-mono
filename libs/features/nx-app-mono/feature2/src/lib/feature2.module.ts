import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Feature2Component,
  },
];

@NgModule({
  declarations: [Feature2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Feature2Module {}
