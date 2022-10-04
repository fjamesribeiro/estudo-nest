import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Array<Course> = [
    {
      id: 1,
      name: 'Nest',
      description: 'Curso de Nest JS',
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const val = this.courses.find((course: Course) => course.id == Number(id));
    console.log('fdfdf');
    if (!val) {
      throw new HttpException(`Course ${id} not Found`, HttpStatus.NOT_FOUND);
    }
    return val;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, courseDto: Course) {
    const pos = this.courses.findIndex(
      (course: Course) => course.id == Number(id),
    );

    if (pos >= 0) {
      this.courses[pos] = courseDto;
    }
  }

  remove(id: string) {
    const pos = this.courses.findIndex(
      (course: Course) => course.id == Number(id),
    );
    console.log(pos);
    if (pos >= 0) {
      this.courses.splice(pos, 1);
    }
  }
}
