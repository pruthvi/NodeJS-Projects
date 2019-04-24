package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;
//
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
//
import com.example.demo.models.Course;
//
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CourseController {
	//initialize a list of courses
	private List<Course> courses = createList();
	//
	@RequestMapping(value = "/courses", method = RequestMethod.GET, produces = "application/json")
	public List<Course> getCourses() {
		return courses;
	}
	@PostMapping
	public Course createCourse(@RequestBody Course course) {
		courses.add(course);
		System.out.println(courses);
		return course;
	}
	private static List<Course> createList() {
		List<Course> courses = new ArrayList<>();
		Course comp308 = new Course();
		comp308.setCourseCode("COMP-308");
		comp308.setCourseName("Emerging Technologies");
		comp308.setCourseDescription("Emerging SOftware Technologies");
		//
		Course comp254 = new Course();
		comp254.setCourseCode("COMP-254");
		comp254.setCourseName("Data Structures & Algorithms");
		comp254.setCourseDescription("Data Structures and Algorithms and Complexity");
		//
		courses.add(comp308);
		courses.add(comp254);
		return courses;
	}

}
