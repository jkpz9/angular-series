import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `<h2>{{ courses.length }} courses available</h2>
    <ul><li *ngFor='let course of courses'>{{ course }}</li></ul>`
})

export class CourseComponent {
    constructor(private _coursesService: CoursesService) {
        this.courses = _coursesService.getAllCourses();
     }
    courses: string[];


    // calling HTTP Services
}
