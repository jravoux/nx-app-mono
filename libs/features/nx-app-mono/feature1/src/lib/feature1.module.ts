import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeComponentModule } from '@shared/awesome-component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Feature1Component,
  },
];

@NgModule({
  declarations: [Feature1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AwesomeComponentModule,
  ],
})
export class Feature1Module {}
