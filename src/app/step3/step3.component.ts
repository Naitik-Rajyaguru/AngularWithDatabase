import { Component } from '@angular/core';
import { ButtonVisibilityService } from '../button-visibility.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  x = "../../assets/quantum_screen_assets/icons/Zeus-LMS-logo.svg";
  constructor (private buttonservice: ButtonVisibilityService){
    buttonservice.nshow=false;
  }

}

