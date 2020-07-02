/**
 * @file: course-list.component.ts
 * @author: Paulo Alves
 * @description: responsável pela manipulação da lista dos cursos.
 * @version 1.0.1 (29/06/2020)
 */

import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['../courses/course-list.component.css']
})

export class CourseListComponent implements OnInit{

  _courses: Course[] = [];

  filteredCourses: Course[] = [];

  _filterBy: string;

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error ', err)
    });
  }

  deleteBYId(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}
