export interface Member {
  id?: string;
  firstName: string; // Required for List display[cite: 4]
  lastName: string;  // Required for List display[cite: 4]
  age: number;
  email: string;
  sex: string;
  experienceYears: number;
  registerDate: string;   // Maps to Java LocalDate[cite: 6]
  expirationDate: string; // Maps to Java LocalDate[cite: 6]
  notes: string;
  password?: string;
}