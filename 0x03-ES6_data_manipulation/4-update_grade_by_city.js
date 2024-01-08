export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredByCity = students.filter((student) => student.location === city);
  const updatedStudent = filteredByCity.map((student) => {
    const matchingGrades = newGrades.find((grade) => grade.studentId === student.id);
    if (matchingGrades) {
      return { ...student, grade: matchingGrades.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudent;
}
