export class Patient {
    [x:string]:any; 
    constructor(
      public PatientID: string,
      public FirstName: string,
      public LastName: string,
      public DOB: string,
      public Contact: string,
      public Email: string,
      public Address: string,
      public Gender: string,
      public BloodType: string,
      public EmergencyContact: string,
      public Insurance: string,
    ){}
  }
  