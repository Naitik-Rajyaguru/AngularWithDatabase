import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ButtonVisibilityService } from 'src/app/button-visibility.service';
import { ApiService } from 'src/app/api.service';
import { DatasService } from 'src/app/datas.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  testForm: any;
  constructor(private router:Router ,private dataservice: DatasService, private apiservice : ApiService, ){  }
  variable='password'
  passwordvisible(){
    if(this.variable =="password"){
      this.variable = 'text';
      console.log("change visi");
    }
    else{
      this.variable = 'password';
    }
  }

  ngOnInit(){

  }


  formData={
    email:'',
    password:'',
    remember:false
  };
  onSubmit(){
    // console.log("hiii");

    // console.log(this.formData);

  }

  private loginURL = "http://localhost:5241/CreateAccount/";

  goTo(){
    if(this.checkrequired()){
          console.log(this.formData);

        this.apiservice.sendJson(this.formData, "http://localhost:5241/LogIn/").subscribe(
          (Response)=>{
            console.log(Response);
            this.dataservice.getlogIndata(this.formData);
            this.router.navigate(['/jobcards'])
          },
          (error)=>{
            console.log(error);
            alert(error.error)

          }
        )

        console.log("hiiiee");
    }

  }
  checkrequired(){
    var elements = document.querySelectorAll('.requred');

      elements.forEach(element => {
        let htmlElement = element as HTMLElement;
        htmlElement.style.display = 'block';
      });
      if(this.formData.email=='' || this.formData.password==''){
        return false
      }
    return true;
  }

  Create(){
    if(this.checkrequired()){


        this.apiservice.sendJson(this.formData, this.loginURL).subscribe(
          (Response)=>{
            console.log(Response);
            this.dataservice.getlogIndata(this.formData);
            this.router.navigate(['/step1'])
            console.log("hiii");

          },
          (error)=>{
            console.log(error);
            alert(error.error)

          }
        )

    }


  }
}
