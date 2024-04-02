import { findIndex } from "rxjs";
import { Patient } from "../models/patient.model";

export class PatientLogic {
  private Patients: Array<Patient>;

  constructor(){
    this.Patients = new Array<Patient>();
    this.Patients.push(new Patient('P1', 'Akash', 'Mehta', '04/06/2000', '9898765678', 'akash@gmail.com', 'B101 Royal Orchid, Vadodara','Male', 'O+', '8768567890', 'Individual'));
    this.Patients.push(new Patient('P2', 'Akash', 'Mehta', '04/06/2000', '9898765678', 'akash@gmail.com', 'B101 Royal Orchid, Vadodara','Male', 'O+', '8768567890', 'Individual'));
  }

  getPatients():Array<Patient>{
    return this.Patients;
  }
  addPatient(ptn:Patient):Array<Patient>{
    ptn.PatientID =  "P" + (this.Patients.length + 1)
    console.log(ptn);
    this.Patients.push(ptn);
    console.log(this.Patients)
    return this.Patients;
  }
  deletePatient(ptn:Patient):Array<Patient>
  {
    const index = this.Patients.indexOf(ptn)
    if (index!==-1)
    {
      this.Patients.splice(index, 1);
    }
    else
    {
      console.log("No Patient to delete.");
    }
    return this.Patients;
  }

}
