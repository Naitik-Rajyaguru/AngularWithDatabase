import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-track',
  templateUrl: './form-track.component.html',
  styleUrls: ['./form-track.component.scss']
})
export class FormTrackComponent {
  @Input() condition1:boolean=false;
  @Input() condition2:boolean=false;
  @Input() condition3:boolean=false;
}
