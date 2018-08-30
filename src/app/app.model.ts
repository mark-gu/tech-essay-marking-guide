export interface Lookup {
  value: number;
  text: string;
}

export interface MarkingTemplate {
  role: Lookup[];
  presentation: {
    documentFormat: Lookup[];
  };
}

export interface CAGeneralMarkingTemplate extends MarkingTemplate {
  workableSolution: boolean;
}

export interface Marking {
  firstName: string;
  lastName: string;
  role: number;
  presentation: {
    documentFormat: number;
  };
}
