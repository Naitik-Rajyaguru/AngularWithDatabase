import { Component, Input } from '@angular/core';
import {ButtonVisibilityService} from '../button-visibility.service'
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.scss']
})
export class FooterButtonComponent {
  constructor(public buttonservice:ButtonVisibilityService,  private router: Router, private apiservice:ApiService){

  }

  @Input() next='afgh';
  @Input() prv='afgh';
  @Input() loginURL = '';
  @Input() data:any

  goToNext(){
    // this.router.navigate([this.next]);
    console.log(this.data);

    this.apiservice.sendJson(this.data, this.loginURL).subscribe(
      (Response)=>{
        console.log(Response);
      },
      (error)=>{
        console.log(error);

      }
    )

  }
  goToPrv(){
    this.router.navigate([this.prv]);
  }



}
