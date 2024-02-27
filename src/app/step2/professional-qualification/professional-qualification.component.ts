import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.scss']
})
export class ProfessionalQualificationComponent {
  @Input() condition:boolean = false;
}
