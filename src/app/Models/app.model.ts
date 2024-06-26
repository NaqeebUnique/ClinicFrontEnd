export class Appointment {
  [x:string]:any;
  constructor(
    public appoinmentId:number,
    public patientId:number,
    public date:Date,
    public timeSlot:string,
    public doctorId:number
  ){}
}

export class Bill {
  [x:string]:any;
  constructor(
    public billID:number,
    public patientID:number,
    public consultingCharge:number,
    public insuranceCoverage:number,
    public totalCharge:number,
    public dateOfVisit:Date
  ){}
}


export class Doctor{
  [x:string]:any;
  constructor(
    public doctorID:number,
    public firstName:string,
    public lastName:string,
    public speciality:string,
    public email: string,
    public salary: number
  ){}
}

export class Patient{
  [x:string]:any;
  constructor(
    public patientID:number,
    public firstName:string,
    public lastName:string,
    public dob:Date,
    public contact:string,
    public email:string,
    public address:string,
    public gender:string,
    public bloodType :string,
    public emergencyContact:string,
    public insurance:string
  ){}
}

export class Prescription{
  [x:string]:any;
  constructor(
    public priId:number,
    public medicine:string,
    public patientId:number,
    public docId:number
  ){}
}

export class Report{
  [x:string]:any;
  constructor(
   public reportID:number,
   public patientID:number,
   public dId:number,
   public diagnosis:string
  ){}
}

export class Visit{
  [x:string]:any;
  constructor(
    public vId:number,
    public pId:number,
    public dateofVisit:Date,
    public doctorId:number,
    public billId:number,
    public reportID:number

  ){}
}

///class for Receiving Http Response after the API Call
export class APIResponse<T> {
  constructor(
    public Message:string,
    public StatusCode: number,
    public records: Array<T>,
    public record: T
  ){}
}
