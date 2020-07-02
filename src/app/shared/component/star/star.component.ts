/**
 * @file: star.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição do componente estrela.
 * @version 1.0.1 (29/06/2020)
 */

import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: '../star/star.component.html',
  styleUrls: ['../star/star.component.css']
})

export class StartComponent implements OnChanges{

  @Input()
  rating: number = 0;

  startWidth: number;

  ngOnChanges(): void {
    this.startWidth = this.rating * 74 / 5;
  }
}
