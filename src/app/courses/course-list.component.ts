/**
 * @file: course-list.component.ts
 * @author: Paulo Alves
 * @description: compoenente responsável pela listagem dos cursos.
 * @version 1.0.1 (29/06/2020)
 */

import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
          id: 1,
          name: 'Angular: Forms',
          imageUrl: '../../assets/images/forms.png',
          price: 99.99,
          code: 'XPS-8796',
          duration: 120,
          rating: 4.5,
          releaseDate: 'March, 2, 2020'
      },
      {
          id: 2,
          name: 'Angular: HTTP',
          imageUrl: '../../assets/images/http.png',
          price: 45.99,
          code: 'LKL-1094',
          duration: 80,
          rating: 4,
          releaseDate: 'April, 4, 2020'
      }
    ];
  }

}
