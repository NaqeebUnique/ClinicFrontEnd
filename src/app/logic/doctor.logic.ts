import { findIndex } from "rxjs";
import { Doctor } from "../models/doctor.model";

export class DoctorLogic {
  private Doctors: Array<Doctor>;

  constructor(){
    this.Doctors = new Array<Doctor>();
    this.Doctors.push(new Doctor('D1', 'Mahesh', 'Sabnis', 'mahesh@gmail.com', 'Cardiology', '50000' ))
}

  getDoctors():Array<Doctor>{
    return this.Doctors;
  }
  addDoctor(dct:Doctor):Array<Doctor>{
    dct.DoctorID =  "D" + (this.Doctors.length + 1)
    console.log(dct);
    this.Doctors.push(dct);
    console.log(this.Doctors)
    return this.Doctors;
  }
  deleteDoctor(dct:Doctor):Array<Doctor>
  {
    const index = this.Doctors.indexOf(dct)
    if (index!==-1)
    {
      this.Doctors.splice(index, 1);
    }
    else
    {
      console.log("No Doctor to delete.");
    }
    return this.Doctors;
  }

}
