export class Appointment {
    [x:string]:any; 
    constructor(
      public AppointmentID: string,
      public PatientId: string,
      public Date: string,
      public TimeSlot: string,
      public DoctorId: string,
    ){}
  }
  