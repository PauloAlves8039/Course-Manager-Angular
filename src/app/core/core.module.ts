/**
 * @file: core.module.ts
 * @author: Paulo Alves
 * @description: responsável por organizar o módulo core.
 * @version 1.0.1 (01/07/2020)
 */

import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Erro-404/error-404.component';

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})

export class CoreModule {

}
