/**
 * 根模块 告诉 ionic 如何组装应用
 */

// ionic angular 的核心模块
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// 引用路由配置文件
import { AppRoutingModule } from './app-routing.module';
// 引入根组件
import { AppComponent } from './app.component';

@NgModule({
  // 声明组件
  declarations: [AppComponent],
  // 引入的模块，依赖的模块
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  // 配置服务
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
