import { Component, Input } from '@angular/core';
import { ButtonVisibilityService } from '../button-visibility.service';

@Component({
  selector: 'app-walkin-listing',
  templateUrl: './walkin-listing.component.html',
  styleUrls: ['./walkin-listing.component.scss']
})
export class WalkinListingComponent {
  data:any
  constructor(private dataService: ButtonVisibilityService){
    this.dataService.getData('data.json').subscribe(data=>{
      this.data = data;
      // console.log(Object.keys(this.data));
      
    })
  }
}
