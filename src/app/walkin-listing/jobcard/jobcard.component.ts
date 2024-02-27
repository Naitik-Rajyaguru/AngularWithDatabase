import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ButtonVisibilityService } from 'src/app/button-visibility.service';
import { DatasService } from 'src/app/datas.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent {
  @Input() tempdata :any
  @Input() viewde:boolean =false;
  @Input() apply:boolean =false;
  index:any
  // @Output() indexEvent = new EventEmitter<any>();
  constructor(private routing:Router, private apiservice: ApiService, private dataservice: DatasService){}
  @Input() inputData:any
  hallticket(){
    this.routing.navigate(['hallticket'])
    this.inputData.preferedRoles = this.inputData.preferedRoles.filter((id:any)=> id.selected==true).map((id:any)=>id.value);
    this.dataservice.getJobData(this.inputData)
    console.log(this.dataservice.sendAllDataForApply());


    this.apiservice.sendJson(this.dataservice.sendAllDataForApply(), "http://localhost:5241/JobApplication/").subscribe(
      (Response)=>{
        console.log(Response);
      },
      (error)=>{
        console.log(error);

      }
    )


  }
  openThisIndex(index:number){
    // this.indexEvent.emit(this.data.index)
    console.log(this.tempdata.index);
    this.routing.navigate(['/role',this.tempdata.index])
    // this.index = this.data.index
  }

  // @Input() condition:boolean = false;
}
