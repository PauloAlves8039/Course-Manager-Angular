/**
 * @file: core.module.ts
 * @author: Paulo Alves
 * @description: responsável por organizar o módulo core.
 * @version 1.0.1 (01/07/2020)
 */

import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})

export class CoreModule {

}
