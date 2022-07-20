import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { JjComponent } from './jj.component';

@NgModule({
  declarations: [JjComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [JjComponent]
})
export class JjModule { }
