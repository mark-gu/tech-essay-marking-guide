import { Component, Input } from '@angular/core';
import { MarkingSectionComponent } from '../shared/MarkingSectionComponent';
import * as Model from '../app.model';

@Component({
  selector: 'app-sec-presentation',
  templateUrl: './sec-presentation.component.html',
  styleUrls: ['./sec-presentation.component.scss']
})
export class SecPresentationComponent extends MarkingSectionComponent {
  constructor() {
    super();
  }
}
