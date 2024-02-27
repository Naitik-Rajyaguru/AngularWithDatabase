import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonVisibilityService } from '../../button-visibility.service';

@Component({
  selector: 'app-qualification-title',
  templateUrl: './qualification-title.component.html',
  styleUrls: ['./qualification-title.component.scss']
})
export class QualificationTitleComponent {
  @Output() eventEm = new EventEmitter<void>();
  rotate=false;
  @Input() innerText = '';
  changeVariable(){
    this.eventEm.emit()
    this.rotate = !this.rotate
  }


}
