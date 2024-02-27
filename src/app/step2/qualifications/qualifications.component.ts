import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ButtonVisibilityService } from 'src/app/button-visibility.service';
import { DatasService } from 'src/app/datas.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent {
  constructor(private buttonservice : ButtonVisibilityService, private router: Router, private apiservice:ApiService, private dataservice: DatasService){
    buttonservice.pshow=true;
  }
  pshow=true
  nshow=true




  educational = "Educational Qualification"
  professional ="Professional Qualification"
  fresher = false;

  change2(){
    this.fresher=false;

  }
  change1(){
    this.fresher=true;

  }

  techexpert=[
    {
      value:'JavaScript',
      selected:false
    },
    {
      value:'Angular Js',
      selected:false
    },
    {
      value:'React',
      selected:false
    },
    {
      value:'Node Js',
      selected:false
    },
    {
      value:'Other',
      selected:false
    },

  ]
  techfamil=[
    {
      value:'JavaScript',
      selected:false
    },
    {
      value:'Angular Js',
      selected:false
    },
    {
      value:'React',
      selected:false
    },
    {
      value:'Node Js',
      selected:false
    },
    {
      value:'Other',
      selected:false
    },

  ]

  qualificationData={
    edu:{
      persentage:'',
      passingy:'',
      qualificaiton:'',
      stream:'',
      collage:'',
      ocollage:'',
      collagecity:'',
    },
    prof:{
      fresher:'',
      expY:'',
      currentCTC:'',
      expectedCTC:'',
      techexpert:this.techexpert,
      othertechexpert:'',
      techfamil:this.techfamil,
      othertechfamil:'',
      onNotic:'',
      noticdate:'',
      durationNotic:'',
      prevapply:'',
      whichRole:'',

    }
  }
  x:any
  valid = true
  ocollagecondtion=false
  jobapplycondition=false
  noticcondition=false
  techexpertcondition=false
  checkValidation(){
    this.valid = true
    this.ocollagecondtion=false
    this.jobapplycondition=false
    this.noticcondition=false
    this.techexpertcondition=true

    if(this.qualificationData.edu.persentage=='' || this.qualificationData.edu.passingy=='' || this.qualificationData.edu.stream=='' || this.qualificationData.edu.qualificaiton=='' || this.qualificationData.edu.collagecity==''){
      this.valid = this.valid && false;
    }
    if(this.qualificationData.edu.collage=="Other"){
      if(this.qualificationData.edu.ocollage==''){
        this.valid = this.valid && false;
        this.ocollagecondtion=true
      }
    }
    else if(this.qualificationData.edu.collage==''){
      this.valid = this.valid && false;
    }
    if(this.qualificationData.prof.fresher==''){
      this.valid = this.valid && false;
    }

    if(this.qualificationData.prof.fresher=="experianced"){
      this.techexpert.some(x=>{
        if(!x.selected){
          this.valid = this.valid && false;
          console.log("here");
          return false;
        }
        this.techexpertcondition=false
          return true;

      })
      if(this.qualificationData.prof.expY=='' || this.qualificationData.prof.currentCTC==''|| this.qualificationData.prof.expectedCTC=='' || this.qualificationData.prof.onNotic==''){
        this.valid = this.valid && false;
      }
      if(this.qualificationData.prof.onNotic=="yes" || this.qualificationData.prof.onNotic==''){
        if(this.qualificationData.prof.durationNotic=='' || this.qualificationData.prof.noticdate==''){
          this.valid = this.valid && false;
          this.noticcondition=true
        }
      }
    }
    if(this.qualificationData.prof.prevapply=="yes" || this.qualificationData.prof.prevapply==''){
      if(this.qualificationData.prof.whichRole==''){
        this.valid = this.valid && false;
        this.jobapplycondition=true
      }
    }

    if(!this.valid){
      var elements = document.querySelectorAll('.validation');

      elements.forEach(element => {
        let htmlElement = element as HTMLElement;
        htmlElement.style.display = 'block';
      });
    }



    return this.valid


  }
  goToNext(){

    console.log(this.checkValidation());
    console.log("dssgsdg");
    if(this.checkValidation()){
        this.x = this.qualificationData
        this.x.prof.techexpert = this.techexpert.filter((p)=>p.selected==true).map((p)=>p.value)
        this.x.prof.techfamil = this.techfamil.filter((p)=>p.selected==true).map((p)=>p.value)
        console.log(this.x);
        this.dataservice.getQuaificationData(this.x);
        this.apiservice.sendJson(this.x, "http://localhost:5241/step2/").subscribe(
          (Response)=>{
            console.log(Response);
          },
          (error)=>{
            console.log(error);

          }
        )
        this.router.navigate(['/step3']);
    }


  }
  goToPrv(){
    this.router.navigate(['/step1']);
  }



}
