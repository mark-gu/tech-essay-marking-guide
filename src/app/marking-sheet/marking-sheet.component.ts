import { Component, OnInit } from '@angular/core';
import * as Model from '../app.model';

@Component({
  selector: 'app-marking-sheet',
  templateUrl: './marking-sheet.component.html',
  styleUrls: ['./marking-sheet.component.scss']
})
export class MarkingSheetComponent implements OnInit {

  constructor() {
  }

  public template: Model.MarkingTemplate;

  public marking: Model.Marking;

  public ngOnInit() {
    this._loadMarkingTemplate().then(template => {
      this.template = template;
      this._initializeMarking().then(marking => this.marking = marking);
    });
  }

  public onClick() {
    console.log(this.marking);
    return true;
  }

  private _loadMarkingTemplate(): Promise<Model.MarkingTemplate> {
    return Promise.resolve(
      {
        role: [
          {
            value: 0,
            text: 'Select...'
          },
          {
            value: 1,
            text: 'Cloud Architect - General'
          },
          {
            value: 2,
            text: 'Cloud Architect - Database Specialty'
          },
          {
            value: 3,
            text: 'Cloud Architect - Security Specialty'
          }
        ],
        presentation: {
          documentFormat: [
            {
              value: 0,
              text: 'Select...'
            },
            {
              value: 1,
              text: 'PDF'
            },
            {
              value: 2,
              text: 'Word (.doc; .docx)'
            },
            {
              value: 3,
              text: 'Other'
            }
          ]
        }
      });
  }

  private _initializeMarking(): Promise<Model.Marking> {
    return Promise.resolve({
      firstName: 'Mark',
      lastName: 'Gu',
      role: 1,
      presentation: {
        documentFormat: 0
      }
    });
  }
}
