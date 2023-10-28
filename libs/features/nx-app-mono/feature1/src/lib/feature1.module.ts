import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Feature1Component,
  },
];

@NgModule({
  declarations: [Feature1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Feature1Module {}
