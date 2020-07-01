/**
 * @file: course-info.component.ts
 * @author: Paulo Alves
 * @description: responsável por definir rotas para edição e exclusão de curso.
 * @version 1.0.1 (30/06/2020)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoCompoent implements OnInit{

  courseId: number;

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
  }
}
