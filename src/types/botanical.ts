export type BotanicalClass =
  | 'Plant'
  | 'Flower'
  | 'Fruit'
  | 'Herb'
  | 'Tree'
  | 'Succulent';

export type PetToxicityTier =
  | 'Non-Toxic'
  | 'Mild Oral/GI Irritant'
  | 'Moderate Systemic Danger'
  | 'Critical / Life-Threatening';

export type HumanToxicityLevel =
  | 'Non-Toxic / Edible'
  | 'Mild Contact Irritant'
  | 'Moderate Poisonous'
  | 'Highly Toxic / Ingestion Danger';

export type LightExposure =
  | 'Deep Shade'
  | 'Partial Shade / Dappled'
  | 'Bright Indirect'
  | 'Full Sun';

export interface ToxicLookalike {
  id: string;
  binomialName: string;
  commonName: string;
  toxicityTier: PetToxicityTier;
  fatalHazard: boolean;
  lethalToxin: string; // e.g., "Coniine", "Aconitine", "Potentilla indica lack of flavor/irritation"
  primaryDistinguishingFeatures: {
    stem: string;
    foliage: string;
    root: string;
    flowers: string;
  };
  warningBanner: string;
}

export interface ToxicityProfile {
  cats: {
    toxic: boolean;
    severity: PetToxicityTier;
    clinicalSigns: string[];
    targetOrgans?: string[];
  };
  dogs: {
    toxic: boolean;
    severity: PetToxicityTier;
    clinicalSigns: string[];
    targetOrgans?: string[];
  };
  humans: {
    toxic: boolean;
    severity: HumanToxicityLevel;
    safeForChildren: boolean;
    contactDermatitisRisk: boolean;
    notes: string;
  };
  toxicCompounds: string[];
  lookalikeWarning?: ToxicLookalike;
}

export interface CareGuide {
  sunlight: LightExposure;
  sunlightDetails: string;
  wateringFrequency: string;
  wateringMetric: 'Low' | 'Moderate' | 'High' | 'Moist';
  hygrometerPips: number; // 1 to 5
  soilType: string;
  soilPh: string;
  temperatureRange: string;
  hardinessZones: string;
  humidityRequirement: string;
  fertilizerRecommendation: string;
}

export interface BotanicalUses {
  culinary: {
    edible: boolean;
    edibleParts: string[];
    flavorProfile?: string;
    culinaryUses?: string[];
    preparationWarnings?: string;
  };
  medicinal: {
    utilized: boolean;
    activePhytochemicals: string[];
    traditionalApplications: string[];
    modernResearchNotes?: string;
    contraindications?: string[];
  };
  ornamental: string[];
  ecologicalBenefits: string[];
}

export interface DiagnosticSymptom {
  symptom: string;
  probableCause: string;
  remedyAction: string;
  preventativeTip: string;
}

export interface BotanicalSpecimen {
  id: string;
  binomialName: string;
  botanicalAuthority?: string;
  commonNames: string[];
  family: string;
  genus: string;
  order: string;
  taxonomicClass: BotanicalClass;
  conservationStatus: 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'EW' | 'EX' | 'NE' | 'DD';
  iucnDescription: string;
  nativeHabitat: string;
  geographicDistribution: string[];
  climateZones: string[];
  primaryImageUrl: string;
  galleryImages: string[];
  overviewMonograph: string;
  morphology: {
    growthHabit: string;
    leafType: string;
    phyllotaxy: string;
    bloomPeriod?: string;
    matureHeight: string;
  };
  toxicity: ToxicityProfile;
  careGuide: CareGuide;
  uses: BotanicalUses;
  diagnosticGuide: DiagnosticSymptom[];
  confidenceScore?: number;
  alternativeMatches?: {
    specimenId: string;
    binomialName: string;
    commonName: string;
    differentiatingNotes: string;
    confidenceScore: number;
  }[];
}

export interface HerbariumEntry {
  entryId: string;
  specimen: BotanicalSpecimen;
  discoveredAt: string; // ISO 8601
  locationName: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  userNotes: string;
  customTags: string[];
  userPhotoUrl?: string;
}

export type ActiveTab = 'scanner' | 'explore' | 'compare' | 'triage' | 'herbarium';
