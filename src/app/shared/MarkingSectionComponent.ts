import { OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import * as Model from '../app.model';

export class MarkingSectionComponent implements OnInit {
  constructor() { }

  @Input()
  public template: Model.MarkingTemplateSection;

  @Input()
  public marking: Model.MarkingSection;

  ngOnInit() {
  }

  public getOverallDecision(): Model.Decision {
    return this.getOverallScore() > -100 ? Model.Decision.Inclined  : Model.Decision.NotInclined;
  }

  public getOverallScore(): number {
    return _(this.marking).keys().map(i => this.getLookupScore(i)).sum();
  }

  public getLookupDescription(field: string, value?: number): string {
    const lookup = this._findLookup(field, value);
    return lookup ? lookup.description : '';
  }

  public getLookupBarLevelIcon(field: string, value?: number): string {
    const lookup = this._findLookup(field, value);
    switch (lookup ? lookup.barLevel : Model.BarLevel.Meet) {
      case Model.BarLevel.Unacceptable:
        return 'times';
      case Model.BarLevel.Lower:
        return 'arrow-down';
      case Model.BarLevel.Raise:
        return 'arrow-up';
      case Model.BarLevel.Meet:
      default:
        return 'minus';
    }
  }

  public getLookupScore(field: string, value?: number): number {
    const lookup = this._findLookup(field, value);
    return lookup ? lookup.score : 0;
  }

  private _findLookup(field: string, value?: number): Model.ScoringLookup {
    let result: Model.ScoringLookup = null;

    if (this.template.hasOwnProperty(field) && this.marking.hasOwnProperty(field)) {
      const lookups = <Model.ScoringLookup[]>(this.template[field] || []);
      const lookupValue = value !== null && value !== undefined ? value : parseInt(this.marking[field], 10);

      result = _.find(lookups, i => i.value === lookupValue) || null;
    }

    return result;
  }
}
