import { Component, OnInit } from '@angular/core';
import { MarkingSectionComponent } from '../shared/MarkingSectionComponent';

@Component({
  selector: 'app-sec-technical',
  templateUrl: './sec-technical.component.html',
  styleUrls: ['./sec-technical.component.scss']
})
export class SecTechnicalComponent extends MarkingSectionComponent {
  constructor() {
    super();
  }
}
