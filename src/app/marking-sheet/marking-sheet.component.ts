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

  public candidateInfo: Model.CandidateInfo;

  public marking: Model.Marking;

  public ngOnInit() {
    this._loadMarkingTemplate().then(template => {
      this.candidateInfo = {
        firstName: 'John',
        lastName: 'Smith',
        role: 1
      };

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
          firstImpression: [
            {
              value: 1,
              text: 'Wow!! This looks awesome, I\'m excited to read this!',
              description: 'I can learn some new presentation and formatting ideas from this.',
              barLevel: Model.BarLevel.Raise,
              score: 25
            },
            {
              value: 2,
              text: 'Nice! This looks like something I\'d write.',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 3,
              text: 'This looks OK, but I\'m not excited to read this.',
              barLevel: Model.BarLevel.Lower,
              score: -75
            },
            {
              value: 4,
              text: 'This looks horrible, I\'m not even going to read this!',
              barLevel: Model.BarLevel.Unacceptable,
              score: -100
            },
          ],
          numOfPages: [
            {
              value: 1,
              text: '<=6',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: '7',
              barLevel: Model.BarLevel.Lower,
              score: -10
            },
            {
              value: 3,
              text: '8',
              barLevel: Model.BarLevel.Lower,
              score: -20
            }
          ],
          documentFormat: [
            {
              value: 1,
              text: 'PDF',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: 'Word (.doc; .docx)',
              barLevel: Model.BarLevel.Lower,
              score: -10
            },
            {
              value: 3,
              text: 'PowerPoint (.ppt; .pptx)',
              barLevel: Model.BarLevel.Lower,
              score: -20
            },
            {
              value: 4,
              text: 'Other',
              barLevel: Model.BarLevel.Unacceptable,
              score: -50
            }
          ],
          inNarrativeFormat: [
            {
              value: 1,
              text: 'Yes',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: 'No',
              barLevel: Model.BarLevel.Lower,
              score: -100
            }
          ],
          hasDiagrams: [
            {
              value: 1,
              text: 'Yes',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: 'No',
              barLevel: Model.BarLevel.Lower,
              score: -100
            }
          ],
          useSimpleIcons: [
            {
              value: 1,
              text: 'Yes',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: 'No',
              barLevel: Model.BarLevel.Lower,
              score: -50
            }
          ],
          hasConsistentFormatting: [
            {
              value: 1,
              text: 'Consistent throughout',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: 'Mainly consistent',
              barLevel: Model.BarLevel.Lower,
              score: -75
            },
            {
              value: 3,
              text: 'Lots of inconsistencies',
              barLevel: Model.BarLevel.Unacceptable,
              score: -100
            }
          ],
          hasSpellingErrors: [
            {
              value: 1,
              text: 'None or Not Noticeable',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: 'A few',
              barLevel: Model.BarLevel.Lower,
              score: -75
            },
            {
              value: 3,
              text: 'Excessive, to the point it\'s distracting',
              barLevel: Model.BarLevel.Unacceptable,
              score: -100
            }
          ],
          hasGrammarErrors: [
            {
              value: 1,
              text: 'None or Not Noticeable',
              barLevel: Model.BarLevel.Meet,
              score: 0
            },
            {
              value: 2,
              text: 'A few',
              barLevel: Model.BarLevel.Lower,
              score: -75
            },
            {
              value: 3,
              text: 'Excessive, to the point it\'s distracting',
              barLevel: Model.BarLevel.Unacceptable,
              score: -100
            }
          ]
        }
      });
  }

  private _initializeMarking(): Promise<Model.Marking> {
    return Promise.resolve({
      presentation: {
        firstImpression: null,
        numOfPages: null,
        documentFormat: null
      }
    });
  }
}
