import { Component, OnInit } from '@angular/core';
import { MarkingSectionComponent } from '../shared/MarkingSectionComponent';

@Component({
  selector: 'app-sec-architecture',
  templateUrl: './sec-architecture.component.html',
  styleUrls: ['./sec-architecture.component.scss']
})
export class SecArchitectureComponent extends MarkingSectionComponent {
  constructor() {
    super();
  }
}
