/**
 * @file: star.module.ts
 * @author: Paulo Alves
 * @description: responsável por organizar o módulo star.
 * @version 1.0.1 (01/07/2020)
 */

import { NgModule } from '@angular/core';
import { StartComponent } from './star.component';

@NgModule({
  declarations: [
    StartComponent
  ],
  exports: [
    StartComponent
  ]
})

export class StarModule {

}
