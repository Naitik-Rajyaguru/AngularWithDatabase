import { Component, Input } from '@angular/core';
import { DatasService } from '../datas.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-cancle',
  templateUrl: './create-cancle.component.html',
  styleUrls: ['./create-cancle.component.scss']
})
export class CreateCancleComponent {
  constructor(private dataservice: DatasService, private apiservice: ApiService){}
@Input() condition=false;
data:any
sendDataToApi(){

  this.data = this.dataservice.sendAllData();
  console.log(this.data);
  this.apiservice.sendJson(this.data, "http://localhost:5241/Step3/").subscribe(
    (Response)=>{
      console.log(Response);
    },
    (error)=>{
      console.log(error);
    }

  )
}
}
