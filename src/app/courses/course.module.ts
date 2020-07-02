/**
 * @file: course.module.ts
 * @author: Paulo Alves
 * @description: responsável por organizar o módulo de cursos.
 * @version 1.0.1 (01/07/2020)
 */

import { NgModule } from '@angular/core';
import { CourseInfoCompoent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from './../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StartComponent } from './../star/star.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoCompoent,
    ReplacePipe,
    StartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoCompoent
      }
    ])
  ]
})

export class CourseModule {

}
