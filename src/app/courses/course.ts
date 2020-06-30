/**
 * @file: course.ts
 * @author: Paulo Alves
 * @description: responsável por representar os atributos da entidade curso.
 * @version 1.0.1 (29/06/2020)
 */

export class Course {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
  description: string;
}
