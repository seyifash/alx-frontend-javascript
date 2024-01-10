interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Hailey",
    lastName: "bailey",
    age: 25,
    location: "Washington",
  };
  
const student2: Student = {
    firstName: "Smith",
    lastName: "Arnold",
    age: 29,
    location: "california"
  }

const studentsList: Student[] = [student1, student2];
const table = document.createElement("table");
const headerRow = table.insertRow();
const header1 = headerRow.insertCell(0);
const header2 = headerRow.insertCell(1);

header1.textContent = "firstName";
header2.textContent = "lastName";

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.lastName;

});
document.body.appendChild(table);

export {};
