import { Component, Input } from '@angular/core';
import { ButtonVisibilityService } from '../../button-visibility.service';

@Component({
  selector: 'app-rolediscription',
  templateUrl: './rolediscription.component.html',
  styleUrls: ['./rolediscription.component.scss']
})
export class RolediscriptionComponent {
  data:any
  variable:boolean=true;
  changeVariable(){
    this.variable = !this.variable
    console.log("ii");
    
  }
  @Input() whichDiscription:string='';
  constructor(private dataService: ButtonVisibilityService){
    this.dataService.getData('discription.json').subscribe(data=>{
      this.data = data;
      
    })
  }
}
