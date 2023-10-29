import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomeComponentComponent } from './awesome-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AwesomeComponentComponent],
  exports: [AwesomeComponentComponent],
})
export class AwesomeComponentModule {}
