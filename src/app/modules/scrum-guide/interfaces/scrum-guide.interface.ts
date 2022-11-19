import { ScrumGuideArtifacts } from './scrum-guide-artifacts.interface';
import { ScrumGuideAttribution } from './scrum-guide-attribution.interface';
import { ScrumGuideChanges } from './scrum-guide-changes.interface';
import { ScrumGuideDefinition } from './scrum-guide-definition.interface';
import { ScrumGuideEndNote } from './scrum-guide-end-note.interface';
import { ScrumGuideEvents } from './scrum-guide-events.interface';
import { ScrumGuideIntro } from './scrum-guide-intro.interface';
import { ScrumGuidePurpose } from './scrum-guide-purpose.interface';
import { ScrumGuideTeam } from './scrum-guide-team.interface';
import { ScrumGuideThanks } from './scrum-guide-thanks.interface';
import { ScrumGuideTheory } from './scrum-guide-theory.interface';
import { ScrumGuideValues } from './scrum-guide-values.interface';

export interface ScrumGuide {
  attribution: ScrumGuideAttribution;
  intro: ScrumGuideIntro;
  purpose: ScrumGuidePurpose;
  definition: ScrumGuideDefinition;
  theory: ScrumGuideTheory;
  values: ScrumGuideValues;
  team: ScrumGuideTeam;
  events: ScrumGuideEvents;
  artifacts: ScrumGuideArtifacts;
  endNotes: ScrumGuideEndNote;
  thanks: ScrumGuideThanks;
  changes: ScrumGuideChanges;
}
