export class Doctor {
    [x:string]:any; 
    constructor(
      public DoctorID: string,
      public FirstName: string,
      public LastName: string,
      public Email: string,
      public Speciality: string,
      public Salary: string
    ){}
  }
  