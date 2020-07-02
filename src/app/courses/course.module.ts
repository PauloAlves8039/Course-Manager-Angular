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
import { CommonModule } from '@angular/common';
import { StarModule } from './../shared/component/star/star.module';
import { AppPipeModule } from './../shared/component/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoCompoent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
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
