import { Component } from '@angular/core';
import { ButtonVisibilityService } from '../button-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  x = "../../assets/quantum_screen_assets/icons/Zeus-LMS-logo.svg"
  dynamicStage1Path = 'http://localhost:4200/step2';




}
