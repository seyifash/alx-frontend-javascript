interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }

interface Directors extends Teacher {
    numberOfReports: number;
  }

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface Student {
    firstName: string;
    lastName: string;
}

class StudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Function to create a Teacher object with specific attributes
  function createTeacher(params: {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
  }): Teacher {
    return {
      ...params,
    };
  }

  function createDirector(params: {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    numberOfReports: number;
  }): Directors {
    return {
      ...params,
    };
  }

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
  };
  
  
  // Example usage
  const teacher1: Teacher = createTeacher({
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    yearsOfExperience: 5,
  });
  
  const teacher2: Teacher = createTeacher({
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
  });
  
  const teacher3: Teacher = createTeacher({
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, 
  });

  const director1: Directors = createDirector({
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 10,
  });

const printedTeacher = printTeacher(teacher1.firstName, teacher1.lastName);
console.log(printedTeacher); 
  
  export {};
  