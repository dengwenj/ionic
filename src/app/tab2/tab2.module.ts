import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { JjModule } from '../module/jj/jj.module';
// import { WwModule } from './component/ww/ww.module';
import { WwComponent } from './component/ww/ww.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    JjModule,
    // WwModule
  ],
  // 声明 声明就可以不用模块
  declarations: [Tab2Page, WwComponent],

})
export class Tab2PageModule {}
