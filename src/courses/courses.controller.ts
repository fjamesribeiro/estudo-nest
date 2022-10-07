import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly serviceConstructor: CoursesService) {}

  @Get()
  findAll() {
    return this.serviceConstructor.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceConstructor.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.serviceConstructor.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.serviceConstructor.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.serviceConstructor.remove(id);
  }
}
