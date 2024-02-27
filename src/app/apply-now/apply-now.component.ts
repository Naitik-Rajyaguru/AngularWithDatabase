import { Component, OnInit } from '@angular/core';
import { ButtonVisibilityService } from '../button-visibility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit{
  data:any
  index:any
  whichDiscription:any
  applicationForm:any
  jobroles:any
  // indexset(index:any){
  //   this.index = index
  //   console.log("done");

  // }

ngOnInit(): void {
  this.route.params.subscribe(data=>{
    this.index = +data['ID'];
  })
      this.dataService.getData('data.json').subscribe(data=>{
      this.data = Object.values(data);
      console.log(this.data);
      this.jobroles=this.data[this.index].jobroles.map((itm: any) =>{
        return {value:itm, selected:false};
      })
      this.applicationForm={
        title : this.data[this.index].title,
        time : '',
        preferedRoles : this.jobroles
      }

    })

    this.dataService.getData('discription.json').subscribe(data=>{
      this.whichDiscription = Object.keys(data);
      console.log(this.whichDiscription[this.index]);
      this.whichDiscription = this.whichDiscription[this.index]
    })





}

  constructor(private dataService: ButtonVisibilityService, private route: ActivatedRoute){  }



}
