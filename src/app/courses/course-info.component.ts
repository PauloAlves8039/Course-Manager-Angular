/**
 * @file: course-info.component.ts
 * @author: Paulo Alves
 * @description: responsável por definir rotas para edição e exclusão de curso.
 * @version 1.0.1 (30/06/2020)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoCompoent implements OnInit{

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

  }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
  }

  save(): void {
    this.courseService.save(this.course);
  }
}
