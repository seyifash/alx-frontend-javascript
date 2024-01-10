interface MajorCredits {
    credits: number;
    brand: 'Major';
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: 'Minor';
  }
  
  // Create a function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'Major',
    };
  }
  
  // Create a function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'Minor',
    };
  }
  
  // Example usage
  const majorSubject1: MajorCredits = { credits: 3, brand: 'Major' };
  const majorSubject2: MajorCredits = { credits: 4, brand: 'Major' };
  
  const minorSubject1: MinorCredits = { credits: 2, brand: 'Minor' };
  const minorSubject2: MinorCredits = { credits: 1, brand: 'Minor' };
  
  const sumMajorResult = sumMajorCredits(majorSubject1, majorSubject2);
  const sumMinorResult = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log('Sum of Major Credits:', sumMajorResult);
  console.log('Sum of Minor Credits:', sumMinorResult);
  
  export {};