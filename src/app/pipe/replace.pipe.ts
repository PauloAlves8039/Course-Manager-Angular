/**
 * @file: replace.pipe.ts
 * @author: Paulo Alves
 * @description: classe responsável pela atribuição dos pipes.
 * @version 1.0.1 (30/06/2020)
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})

export class ReplacePipe implements PipeTransform {

  transform(value: string, char: string, valueToRepalce: string) {
    return value.replace(char, valueToRepalce);
  }
}
