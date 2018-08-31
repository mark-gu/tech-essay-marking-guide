export interface Lookup {
  value: number;
  text: string;
  description?: string;
}

export interface ScoringLookup extends Lookup {
  barLevel: BarLevel;
  score: number;
}

export enum BarLevel {
  Unacceptable,
  Lower,
  Meet,
  Raise
}

export enum Decision {
  Inclined,
  NotInclined
}

export interface MarkingTemplate {
  role: Lookup[];
  presentation: MarkingTemplateSectionForPresentation;
}

export interface MarkingTemplateSection {
}

export interface MarkingTemplateSectionForPresentation extends MarkingTemplateSection {
  firstImpression: ScoringLookup[];
  numOfPages: ScoringLookup[];
  documentFormat: ScoringLookup[];
}

export interface CandidateInfo {
  firstName: string;
  lastName: string;
  role: number;
}

export interface Marking {
  presentation: MarkingForPresentation;
}

export interface MarkingSection {
  overallBarLevel?: BarLevel;
  overallScore?: number;
}

export interface MarkingForPresentation extends MarkingSection {
  firstImpression: number | null;
  numOfPages: number | null;
  documentFormat: number | null;
}
