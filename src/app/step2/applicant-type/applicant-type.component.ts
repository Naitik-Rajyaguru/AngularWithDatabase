import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-applicant-type',
  templateUrl: './applicant-type.component.html',
  styleUrls: ['./applicant-type.component.scss']
})
export class ApplicantTypeComponent {

  @Output() fresherd = new EventEmitter<boolean>();
   fresher:boolean = false;


  change2(){
    this.fresher=false;
    this.fresherd.emit(this.fresher);
  }
  change1(){
    this.fresher=true;
    this.fresherd.emit(this.fresher);
  }



}
