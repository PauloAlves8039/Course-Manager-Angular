/**
 * @file: app-pipe.module.ts
 * @author: Paulo Alves
 * @description: responsável por organizar o módulo pipe.
 * @version 1.0.1 (01/07/2020)
 */

import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  declarations: [
    ReplacePipe
  ],
  exports: [
    ReplacePipe
  ]
})

export class AppPipeModule {

}
