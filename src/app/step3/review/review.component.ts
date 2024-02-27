import { Component } from '@angular/core';
import { DatasService } from 'src/app/datas.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss', '../../step1/personal-info/personal-info.component.scss', '../../step2/applicant-type/applicant-type.component.scss', '../../step2/educational-qualification/educational-qualification.component.scss', '../../step2/professional-qualification/professional-qualification.component.scss', '../../step2/qualification-title/qualification-title.component.scss',]
})



export class ReviewComponent {
  finaldata:any
  constructor(private dataserivce: DatasService){
    this.finaldata = dataserivce.sendAllData();
    console.log("reviewwwwwwww");

    console.log(this.finaldata);
    console.log("reviewwwwwwww");

  }

}
