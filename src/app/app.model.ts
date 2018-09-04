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
  technical: MarkingForTechnical;
  architecture: MarkingForArchitecture;
  comments?: string;
}

export interface MarkingSection {
  overallBarLevel?: BarLevel;
  overallScore?: number;
  comments?: string;
}

export interface MarkingForPresentation extends MarkingSection {
  firstImpression: number | null;
  numOfPages: number | null;
  documentFormat: number | null;
}

export interface MarkingForTechnical extends MarkingSection {
  isWorkableSolution: number | null;
}

export interface MarkingForArchitecture extends MarkingSection {
  security: number | null;
}
