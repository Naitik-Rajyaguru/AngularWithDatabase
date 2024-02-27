import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  logInData:any
  personalData:any
  qualificationData:any
  jobData:any
  finalData:any
  finalDataForApply:any
  getlogIndata(data:any){
    this.logInData=data;
    console.log("datassssssss");
    console.log(this.logInData);
    console.log("datasssssss");
  }
  getPersonalData(data:any){
    this.personalData = data;
    console.log("**********");
    console.log(this.personalData);
    console.log("*****");
  }
  getQuaificationData(data:any){
    this.qualificationData = data;
  }
  getJobData(data:any){
    this.jobData = data
  }

  sendAllData(){
    this.finalData = {
      login:this.logInData,
      personal:this.personalData,
      qualification:this.qualificationData
    }
    return this.finalData
  }
  sendAllDataForApply(){
    this.finalDataForApply={
      login : this.logInData,
      applicationData : this.jobData
    }
    return this.finalDataForApply
  }


  constructor(private http: HttpClient) {
  }
}
