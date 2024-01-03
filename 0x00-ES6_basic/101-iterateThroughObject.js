export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the iterator to get each employee name
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the employee names with '|'
  return employeeNames.join('|');
}
