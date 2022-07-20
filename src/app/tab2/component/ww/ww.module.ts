import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WwComponent } from './ww.component';

@NgModule({
  declarations: [WwComponent],
  imports: [
    CommonModule
  ],
  exports: [WwComponent]
})
export class WwModule { }
