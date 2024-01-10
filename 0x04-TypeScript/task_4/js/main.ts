import { Cpp, Java, React, Teacher } from './subjects';

// Create and export constants
export const cpp: Cpp = new Cpp();
export const java: Java = new Java();
export const react: React = new React();

// Create a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Set cTeacher as the teacher for Cpp
cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set cTeacher as the teacher for Java
java.setTeacher(cTeacher);
console.log('\nJava');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set cTeacher as the teacher for React
react.setTeacher(cTeacher);
console.log('\nReact');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
