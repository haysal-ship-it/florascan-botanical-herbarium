import React, { useState } from 'react';
import {
  GitCompare,
  Sun,
  Droplets,
  FlaskConical,
  ShieldAlert,
  ShieldCheck,
  Utensils,
  MapPin,
  ArrowRightLeft,
  ArrowUpRight,
} from 'lucide-react';
import { BotanicalSpecimen } from '../../types/botanical';
import { sound } from '../../lib/soundEngine';
import { Button, Badge } from '../ui';

interface SpecimenComparatorProps {
  specimens: BotanicalSpecimen[];
  initialSpecimenA?: BotanicalSpecimen | null;
  onViewDossier: (specimen: BotanicalSpecimen) => void;
}

export const SpecimenComparator: React.FC<SpecimenComparatorProps> = ({
  specimens,
  initialSpecimenA,
  onViewDossier,
}) => {
  const [selectedAId, setSelectedAId] = useState<string>(
    initialSpecimenA?.id || specimens[0]?.id || ''
  );
  const [selectedBId, setSelectedBId] = useState<string>(
    specimens[1]?.id || specimens[0]?.id || ''
  );

  const specimenA = specimens.find((s) => s.id === selectedAId) || specimens[0];
  const specimenB = specimens.find((s) => s.id === selectedBId) || specimens[1];

  const handleSwap = () => {
    sound.playTap();
    const temp = selectedAId;
    setSelectedAId(selectedBId);
    setSelectedBId(temp);
  };

  const attributes = [
    {
      id: 'taxonomy',
      label: 'Family & Order',
      valA: `${specimenA.family} (${specimenA.order})`,
      valB: `${specimenB.family} (${specimenB.order})`,
    },
    {
      id: 'sunlight',
      label: 'Sunlight Exposure',
      icon: <Sun className="w-4 h-4 text-amber-500 shrink-0" />,
      valA: specimenA.careGuide.sunlight,
      valB: specimenB.careGuide.sunlight,
    },
    {
      id: 'watering',
      label: 'Watering Frequency',
      icon: <Droplets className="w-4 h-4 text-blue-500 shrink-0" />,
      valA: specimenA.careGuide.wateringFrequency,
      valB: specimenB.careGuide.wateringFrequency,
    },
    {
      id: 'soil',
      label: 'Soil Mix & pH',
      icon: <FlaskConical className="w-4 h-4 text-emerald-500 shrink-0" />,
      valA: `pH ${specimenA.careGuide.soilPh} • ${specimenA.careGuide.soilType}`,
      valB: `pH ${specimenB.careGuide.soilPh} • ${specimenB.careGuide.soilType}`,
    },
    {
      id: 'hardiness',
      label: 'USDA Hardiness Zones',
      icon: <MapPin className="w-4 h-4 text-[var(--color-accent-clay)] shrink-0" />,
      valA: `Zone ${specimenA.careGuide.hardinessZones}`,
      valB: `Zone ${specimenB.careGuide.hardinessZones}`,
    },
    {
      id: 'cats_toxicity',
      label: 'Feline Safety (Cats)',
      valA: (
        <Badge variant={specimenA.toxicity.cats.toxic ? 'danger' : 'success'} size="sm">
          {specimenA.toxicity.cats.severity}
        </Badge>
      ),
      valB: (
        <Badge variant={specimenB.toxicity.cats.toxic ? 'danger' : 'success'} size="sm">
          {specimenB.toxicity.cats.severity}
        </Badge>
      ),
    },
    {
      id: 'dogs_toxicity',
      label: 'Canine Safety (Dogs)',
      valA: (
        <Badge variant={specimenA.toxicity.dogs.toxic ? 'danger' : 'success'} size="sm">
          {specimenA.toxicity.dogs.severity}
        </Badge>
      ),
      valB: (
        <Badge variant={specimenB.toxicity.dogs.toxic ? 'danger' : 'success'} size="sm">
          {specimenB.toxicity.dogs.severity}
        </Badge>
      ),
    },
    {
      id: 'culinary',
      label: 'Culinary Utility',
      icon: <Utensils className="w-4 h-4 text-[var(--color-action-primary)] shrink-0" />,
      valA: specimenA.uses.culinary.edible
        ? `Edible (${specimenA.uses.culinary.edibleParts.join(', ')})`
        : 'Non-culinary',
      valB: specimenB.uses.culinary.edible
        ? `Edible (${specimenB.uses.culinary.edibleParts.join(', ')})`
        : 'Non-culinary',
    },
    {
      id: 'origin',
      label: 'Native Habitat',
      valA: specimenA.nativeHabitat || '— Not recorded',
      valB: specimenB.nativeHabitat || '— Not recorded',
    },
  ];

  return (
    <section aria-labelledby="comparator-heading" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
        <div>
          <Badge variant="clay" size="sm" className="mb-2 font-mono">
            TAXONOMIC ANALYSIS
          </Badge>
          <h1 id="comparator-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Specimen Comparator
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            Compare physiological cultivation needs, pet safety profiles, and ecological traits side-by-side.
          </p>
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={handleSwap}
          className="self-start sm:self-auto"
          aria-label="Swap Primary and Comparative specimen positions"
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>Swap (A ⇄ B)</span>
        </Button>
      </div>

      {/* Selectors and Specimen Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Specimen A Card */}
        <div className="p-5 rounded-panel bg-[var(--color-surface-elevated)] border-2 border-[var(--color-action-primary)]/40 shadow-tactile-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-action-primary)]">
              Specimen A (Primary)
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onViewDossier(specimenA)}
              className="text-xs text-[var(--color-action-primary)]"
            >
              <span>View Dossier</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <label htmlFor="specimen-a-select" className="sr-only">
            Select Specimen A
          </label>
          <select
            id="specimen-a-select"
            value={selectedAId}
            onChange={(e) => {
              sound.playTap();
              setSelectedAId(e.target.value);
            }}
            className="w-full p-2.5 rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-sm font-semibold text-[var(--color-text-primary)] focus-ring"
          >
            {specimens.map((s) => (
              <option key={s.id} value={s.id}>
                {s.commonNames[0]} ({s.binomialName})
              </option>
            ))}
          </select>

          <div className="flex items-center gap-4 pt-1">
            <div className="w-20 h-20 rounded-panel overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shrink-0">
              <img
                src={specimenA.primaryImageUrl}
                alt={specimenA.commonNames[0]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif italic text-lg font-bold text-[var(--color-text-primary)] truncate">
                {specimenA.binomialName}
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] truncate">
                {specimenA.commonNames[0]}
              </p>
              <Badge variant="outline" size="sm" className="mt-2 font-mono text-[10px]">
                {specimenA.taxonomicClass}
              </Badge>
            </div>
          </div>
        </div>

        {/* Specimen B Card */}
        <div className="p-5 rounded-panel bg-[var(--color-surface-elevated)] border-2 border-[var(--color-accent-clay)]/40 shadow-tactile-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-accent-clay)]">
              Specimen B (Comparative)
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onViewDossier(specimenB)}
              className="text-xs text-[var(--color-accent-clay)]"
            >
              <span>View Dossier</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <label htmlFor="specimen-b-select" className="sr-only">
            Select Specimen B
          </label>
          <select
            id="specimen-b-select"
            value={selectedBId}
            onChange={(e) => {
              sound.playTap();
              setSelectedBId(e.target.value);
            }}
            className="w-full p-2.5 rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-sm font-semibold text-[var(--color-text-primary)] focus-ring"
          >
            {specimens.map((s) => (
              <option key={s.id} value={s.id}>
                {s.commonNames[0]} ({s.binomialName})
              </option>
            ))}
          </select>

          <div className="flex items-center gap-4 pt-1">
            <div className="w-20 h-20 rounded-panel overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shrink-0">
              <img
                src={specimenB.primaryImageUrl}
                alt={specimenB.commonNames[0]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif italic text-lg font-bold text-[var(--color-text-primary)] truncate">
                {specimenB.binomialName}
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] truncate">
                {specimenB.commonNames[0]}
              </p>
              <Badge variant="outline" size="sm" className="mt-2 font-mono text-[10px]">
                {specimenB.taxonomicClass}
              </Badge>
            </div>
          </div>
        </div>

      </div>

      {/* Comparison Layout */}
      <div>
        
        {/* Desktop View: Aligned Table Matrix (>= md) */}
        <div className="hidden md:block rounded-panel border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] overflow-hidden shadow-tactile-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-surface)] border-b border-[var(--color-border-subtle)]">
                <th className="py-3.5 px-5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] w-1/3">
                  Attribute
                </th>
                <th className="py-3.5 px-5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-action-primary)] w-1/3">
                  {specimenA.commonNames[0]} (A)
                </th>
                <th className="py-3.5 px-5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-accent-clay)] w-1/3">
                  {specimenB.commonNames[0]} (B)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {attributes.map((attr) => (
                <tr key={attr.id} className="hover:bg-[var(--color-surface)]/50 transition-colors">
                  <td className="py-3 px-5 font-medium text-[var(--color-text-primary)]">
                    <div className="flex items-center gap-2">
                      {attr.icon}
                      <span>{attr.label}</span>
                    </div>
                  </td>
                  <td className="py-3 px-5 text-[var(--color-text-primary)]">
                    {attr.valA}
                  </td>
                  <td className="py-3 px-5 text-[var(--color-text-primary)]">
                    {attr.valB}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Grouped Attribute Cards with both values paired together (< md) */}
        <div className="md:hidden space-y-3">
          {attributes.map((attr) => (
            <div
              key={attr.id}
              className="p-4 rounded-panel bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] shadow-tactile-sm space-y-2.5"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[var(--color-text-secondary)]">
                {attr.icon}
                <span>{attr.label}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[var(--color-border-subtle)]/60 text-xs">
                {/* Value A */}
                <div className="p-2.5 rounded-control bg-[var(--color-surface)] border-l-2 border-[var(--color-action-primary)] space-y-1">
                  <span className="font-mono text-[10px] text-[var(--color-action-primary)] font-bold block truncate">
                    A: {specimenA.commonNames[0]}
                  </span>
                  <div className="text-[var(--color-text-primary)] font-medium leading-relaxed">
                    {attr.valA}
                  </div>
                </div>

                {/* Value B */}
                <div className="p-2.5 rounded-control bg-[var(--color-surface)] border-l-2 border-[var(--color-accent-clay)] space-y-1">
                  <span className="font-mono text-[10px] text-[var(--color-accent-clay)] font-bold block truncate">
                    B: {specimenB.commonNames[0]}
                  </span>
                  <div className="text-[var(--color-text-primary)] font-medium leading-relaxed">
                    {attr.valB}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
