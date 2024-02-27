import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ButtonVisibilityService } from 'src/app/button-visibility.service';
import { DatasService } from 'src/app/datas.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  // @Output() formDataChanged = new EventEmitter<any>();
  roles = [
    {
      name:'Instrcutional Design',
      selected:false
    },
    {
      name:'Software Engineer',
      selected:false
    },
    {
      name:'Software Quality Engineer',
      selected:false
    },
  ]
  personalData ={
    'fName':'',
    'lName':'',
    'Email':'',
    'Resume':'',
    'phone':'',
    'portfolio':'',
    roles:this.roles,
    'Rname':'',
    'sub':false,
    'profilepic':'',
  }


pshow=true
nshow=true
x:any
valid=false
jobrolecondition=false
checkValidation(data:any){
  // console.log("first");
  this.valid=false
  this.jobrolecondition=true
  var elements = document.querySelectorAll('.required');

  elements.forEach(element => {
    let htmlElement = element as HTMLElement;
    htmlElement.style.display = 'block';
  });
  this.roles.forEach(x=>{
    if(x.selected){
      this.valid = this.valid || true;
      this.jobrolecondition=false
    }

  })
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(this.personalData.fName=='' || this.personalData.lName=='' || this.personalData.phone=='' || !emailRegex.test(this.personalData.Email)){
    this.valid = this.valid && false;
  }
  return this.valid;

}
goToNext(){

  this.x = this.personalData;

  this.x.roles = this.roles.filter((p:any)=>p.selected==true).map((p:any)=>p.name)

  console.log(this.x);
  console.log((this.checkValidation(this.x)));
  console.log("ahfsdfg");

  if((this.checkValidation(this.x))){
    this.dataservice.getPersonalData(this.x)
  this.apiservice.sendJson(this.personalData, 'http://localhost:5241/Step1/').subscribe(
    (Response)=>{
      console.log(Response);
    },
    (error)=>{
      console.log(error);

    }
  )
  this.router.navigate(['/step2']);
  }


}
goToPrv(){
  this.router.navigate(['/login']);
}


  constructor(private buttonservice : ButtonVisibilityService, private router: Router, private dataservice : DatasService, private apiservice: ApiService){

  }




}
