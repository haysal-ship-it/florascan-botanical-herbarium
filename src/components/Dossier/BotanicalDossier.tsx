import React, { useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  Printer,
  Share2,
  GitCompare,
  Sun,
  Droplets,
  FlaskConical,
  ShieldAlert,
  ShieldCheck,
  MapPin,
  Utensils,
  Sparkles,
  HeartHandshake,
  Check,
  PhoneCall,
} from 'lucide-react';
import { BotanicalSpecimen, HerbariumEntry } from '../../types/botanical';
import { sound } from '../../lib/soundEngine';
import { Button, Badge, Notice, Dialog } from '../ui';

interface BotanicalDossierProps {
  specimen: BotanicalSpecimen;
  onSaveToHerbarium: (entry: Omit<HerbariumEntry, 'entryId'>) => void;
  isSaved: boolean;
  onCompare: (specimen: BotanicalSpecimen) => void;
  onSelectAlternative: (specimenId: string) => void;
}

export const BotanicalDossier: React.FC<BotanicalDossierProps> = ({
  specimen,
  onSaveToHerbarium,
  isSaved,
  onCompare,
  onSelectAlternative,
}) => {
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [userNotes, setUserNotes] = useState('');
  const [locationName, setLocationName] = useState('Home Conservatory');
  const [tagInput, setTagInput] = useState('Field Observation, Living Specimen');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'care' | 'safety' | 'uses'>('overview');

  const handlePrint = () => {
    sound.playTap();
    window.print();
  };

  const handleShare = () => {
    sound.playTap();
    const text = `FloraScan Specimen Monograph: ${specimen.commonNames[0]} (${specimen.binomialName})
Family: ${specimen.family} | Order: ${specimen.order}
Sunlight: ${specimen.careGuide.sunlight} | Watering: ${specimen.careGuide.wateringFrequency}
Toxicity: Cats [${specimen.toxicity.cats.severity}], Dogs [${specimen.toxicity.dogs.severity}]
Overview: ${specimen.overviewMonograph}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccessChime();
    const tags = tagInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    onSaveToHerbarium({
      specimen,
      discoveredAt: new Date().toISOString(),
      locationName: locationName || 'Field Observation',
      userNotes: userNotes || 'Archived in field journal.',
      customTags: tags.length ? tags : ['Field Specimen'],
    });
    setSaveModalOpen(false);
  };

  return (
    <article
      aria-labelledby="specimen-common-name"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 print-monograph"
    >
      {/* 1. Header Banner & Identity */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--color-border-subtle)] pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="clay" size="sm" className="font-mono">
              CURATED MONOGRAPH
            </Badge>
            <Badge variant="outline" size="sm" className="font-mono">
              {specimen.taxonomicClass.toUpperCase()}
            </Badge>
            <span className="text-xs font-mono text-[var(--color-text-secondary)]">
              Ref ID #{specimen.id.replace('specimen-', '')}
            </span>
          </div>

          <h1
            id="specimen-common-name"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight"
          >
            {specimen.commonNames[0]}
          </h1>

          <div className="flex flex-wrap items-baseline gap-2 mt-2">
            <span className="font-serif italic text-xl sm:text-2xl text-[var(--color-text-secondary)]">
              {specimen.binomialName}
            </span>
            {specimen.botanicalAuthority && (
              <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                {specimen.botanicalAuthority}
              </span>
            )}
          </div>

          {specimen.commonNames.length > 1 && (
            <p className="text-xs text-[var(--color-text-secondary)] mt-1.5">
              Also known as: {specimen.commonNames.slice(1).join(', ')}
            </p>
          )}
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto no-print">
          <Button
            variant={isSaved ? 'secondary' : 'primary'}
            size="md"
            onClick={() => {
              if (!isSaved) {
                sound.playTap();
                setSaveModalOpen(true);
              }
            }}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-[var(--color-success)]" />
                <span>Saved in Journal</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span>Save to Journal</span>
              </>
            )}
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={() => onCompare(specimen)}
            title="Compare with another plant"
          >
            <GitCompare className="w-4 h-4" />
            <span>Compare</span>
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={handleShare}
            title="Copy monograph summary"
          >
            {copied ? <Check className="w-4 h-4 text-[var(--color-success)]" /> : <Share2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={handlePrint}
            title="Print botanical plate"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print</span>
          </Button>
        </div>
      </div>

      {/* 2. Primary Layout: Split Image & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Expressive Botanical Photography Plate */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-plate overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-surface)] shadow-tactile-md aspect-[4/5]">
            <img
              src={specimen.primaryImageUrl}
              alt={`${specimen.commonNames[0]} (${specimen.binomialName}) botanical plate`}
              className="w-full h-full object-cover"
            />
            {specimen.conservationStatus && (
              <div className="absolute top-3 left-3">
                <Badge variant="default" size="sm" className="bg-black/70 backdrop-blur-md text-white border-0 font-mono text-[11px]">
                  IUCN {specimen.conservationStatus}
                </Badge>
              </div>
            )}
          </div>

          {/* Taxonomic Hierarchy Strip */}
          <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-action-primary)]">
              Linnaean Taxonomy
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[var(--color-text-secondary)] block">Family:</span>
                <span className="font-semibold text-[var(--color-text-primary)]">{specimen.family}</span>
              </div>
              <div>
                <span className="text-[var(--color-text-secondary)] block">Order:</span>
                <span className="font-semibold text-[var(--color-text-primary)]">{specimen.order}</span>
              </div>
              <div>
                <span className="text-[var(--color-text-secondary)] block">Genus:</span>
                <span className="font-serif italic font-semibold text-[var(--color-text-primary)]">{specimen.genus}</span>
              </div>
              <div>
                <span className="text-[var(--color-text-secondary)] block">Origin:</span>
                <span className="font-semibold text-[var(--color-text-primary)] truncate block">
                  {specimen.geographicDistribution ? specimen.geographicDistribution.join(', ') : 'Global'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Monograph & Navigation Tabs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Quick Care Summary Matrix (Readable text metrics, not empty ornamental gauges) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] mb-1">
                <Sun className="w-4 h-4 text-amber-500" />
                <span className="font-medium">Sunlight</span>
              </div>
              <p className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-2">
                {specimen.careGuide.sunlight}
              </p>
            </div>

            <div className="p-3.5 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] mb-1">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Watering</span>
              </div>
              <p className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-2">
                {specimen.careGuide.wateringFrequency}
              </p>
            </div>

            <div className="p-3.5 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] mb-1">
                <FlaskConical className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Soil pH</span>
              </div>
              <p className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-2">
                pH {specimen.careGuide.soilPh}
              </p>
            </div>

            <div className="p-3.5 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] mb-1">
                <MapPin className="w-4 h-4 text-[var(--color-accent-clay)]" />
                <span className="font-medium">Hardiness</span>
              </div>
              <p className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-2">
                Zones {specimen.careGuide.hardinessZones}
              </p>
            </div>
          </div>

          {/* Navigation Tabs for Deep Information */}
          <div
            role="tablist"
            aria-label="Monograph sections"
            className="flex gap-2 border-b border-[var(--color-border-subtle)] pb-2 overflow-x-auto touch-momentum scrollbar-none w-full max-w-full min-w-0"
          >
            {[
              { id: 'overview', label: 'Overview & Habitat' },
              { id: 'care', label: 'Cultivation & Care' },
              { id: 'safety', label: 'Safety & Toxicity' },
              { id: 'uses', label: 'Uses & Benefits' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => {
                    sound.playTap();
                    setActiveTab(tab.id as typeof activeTab);
                  }}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-control transition-all focus-ring whitespace-nowrap min-h-[44px] ${
                    isActive
                      ? 'bg-[var(--color-surface-elevated)] text-[var(--color-action-primary)] shadow-tactile-sm border border-[var(--color-border-subtle)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab 1: Overview & Habitat */}
          {activeTab === 'overview' && (
            <div id="panel-overview" role="tabpanel" className="space-y-4 leading-relaxed">
              <p className="text-sm sm:text-base text-[var(--color-text-primary)] max-w-[65ch]">
                {specimen.overviewMonograph}
              </p>

              <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-2">
                <h4 className="font-semibold text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-mono">
                  Native Habitat & Ecology
                </h4>
                <p className="text-xs sm:text-sm text-[var(--color-text-primary)]">
                  {specimen.nativeHabitat}
                </p>
              </div>

              {specimen.morphology && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {specimen.morphology.growthHabit && (
                    <Badge variant="default" size="sm">
                      Growth: {specimen.morphology.growthHabit}
                    </Badge>
                  )}
                  {specimen.morphology.leafType && (
                    <Badge variant="default" size="sm">
                      Foliage: {specimen.morphology.leafType}
                    </Badge>
                  )}
                  {specimen.morphology.matureHeight && (
                    <Badge variant="default" size="sm">
                      Height: {specimen.morphology.matureHeight}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Cultivation & Care */}
          {activeTab === 'care' && (
            <div id="panel-care" role="tabpanel" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-1">
                  <h4 className="font-semibold text-xs text-[var(--color-action-primary)] uppercase tracking-wider font-mono">
                    Sunlight Exposure
                  </h4>
                  <p className="text-sm text-[var(--color-text-primary)]">
                    {specimen.careGuide.sunlight} — {specimen.careGuide.sunlightDetails}
                  </p>
                </div>

                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-1">
                  <h4 className="font-semibold text-xs text-[var(--color-action-primary)] uppercase tracking-wider font-mono">
                    Watering Protocol
                  </h4>
                  <p className="text-sm text-[var(--color-text-primary)]">
                    {specimen.careGuide.wateringFrequency} ({specimen.careGuide.wateringMetric} requirement)
                  </p>
                </div>

                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-1">
                  <h4 className="font-semibold text-xs text-[var(--color-action-primary)] uppercase tracking-wider font-mono">
                    Substrate & Soil Mix
                  </h4>
                  <p className="text-sm text-[var(--color-text-primary)]">
                    {specimen.careGuide.soilType} (Optimal pH: {specimen.careGuide.soilPh})
                  </p>
                </div>

                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-1">
                  <h4 className="font-semibold text-xs text-[var(--color-action-primary)] uppercase tracking-wider font-mono">
                    Humidity & Temperature
                  </h4>
                  <p className="text-sm text-[var(--color-text-primary)]">
                    {specimen.careGuide.humidityRequirement || 'Standard indoor humidity (40-60%)'} • {specimen.careGuide.temperatureRange}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Safety & Toxicity */}
          {activeTab === 'safety' && (
            <div id="panel-safety" role="tabpanel" className="space-y-4">
              {/* Pet Safety Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Cats */}
                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase font-mono text-[var(--color-text-primary)]">Feline Safety (Cats)</span>
                    <Badge variant={specimen.toxicity.cats.toxic ? 'danger' : 'success'} size="sm">
                      {specimen.toxicity.cats.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {specimen.toxicity.cats.clinicalSigns.length > 0
                      ? specimen.toxicity.cats.clinicalSigns.join(', ')
                      : 'No reported feline toxic reactions.'}
                  </p>
                </div>

                {/* Dogs */}
                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase font-mono text-[var(--color-text-primary)]">Canine Safety (Dogs)</span>
                    <Badge variant={specimen.toxicity.dogs.toxic ? 'danger' : 'success'} size="sm">
                      {specimen.toxicity.dogs.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {specimen.toxicity.dogs.clinicalSigns.length > 0
                      ? specimen.toxicity.dogs.clinicalSigns.join(', ')
                      : 'No reported canine toxic reactions.'}
                  </p>
                </div>
              </div>

              {/* Toxic Lookalike Hazard Warning */}
              {specimen.toxicity.lookalikeWarning && (
                <Notice
                  type="error"
                  title={`Wild Foraging Hazard: Lookalike ${specimen.toxicity.lookalikeWarning.commonName}`}
                >
                  <p className="mb-2">
                    Carefully distinguish this plant from dangerous lookalike: <strong>{specimen.toxicity.lookalikeWarning.binomialName}</strong>.
                  </p>
                  <p className="text-xs">
                    {specimen.toxicity.lookalikeWarning.warningBanner}
                  </p>
                </Notice>
              )}

              {/* Emergency Hotline Directory */}
              <div className="p-4 rounded-panel bg-[var(--color-surface-muted)] border border-[var(--color-border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[var(--color-error)]" />
                  <span className="font-semibold text-[var(--color-text-primary)]">Poison Ingestion Emergency?</span>
                </div>
                <div className="font-mono text-[11px] text-[var(--color-text-secondary)]">
                  US: 1-800-222-1222 • ASPCA APCC: (888) 426-4435
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Uses & Benefits */}
          {activeTab === 'uses' && (
            <div id="panel-uses" role="tabpanel" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Culinary */}
                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono text-[var(--color-action-primary)]">
                    <Utensils className="w-4 h-4" />
                    <span>Culinary Profile</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-primary)] leading-relaxed">
                    {specimen.uses.culinary.edible ? (
                      <>
                        <strong>Edible Parts:</strong> {specimen.uses.culinary.edibleParts.join(', ')}
                        {specimen.uses.culinary.flavorProfile && (
                          <span className="block mt-1">
                            <strong>Flavor:</strong> {specimen.uses.culinary.flavorProfile}
                          </span>
                        )}
                      </>
                    ) : (
                      'Not conventionally used for culinary consumption.'
                    )}
                  </p>
                </div>

                {/* Medicinal & Ethnobotanical */}
                <div className="p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono text-[var(--color-accent-clay)]">
                    <Sparkles className="w-4 h-4" />
                    <span>Ethnobotanical Applications</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-primary)] leading-relaxed">
                    {specimen.uses.medicinal.utilized ? (
                      <>
                        <strong>Applications:</strong> {specimen.uses.medicinal.traditionalApplications.join(', ')}
                        {specimen.uses.medicinal.activePhytochemicals.length > 0 && (
                          <span className="block mt-1">
                            <strong>Phytochemicals:</strong> {specimen.uses.medicinal.activePhytochemicals.join(', ')}
                          </span>
                        )}
                      </>
                    ) : (
                      'No significant traditional medicinal applications recorded.'
                    )}
                  </p>
                </div>

                {/* Ecological Benefits */}
                <div className="sm:col-span-2 p-4 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono text-emerald-600">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Ecological Advantages & Pollinator Support</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-primary)] leading-relaxed">
                    {specimen.uses.ecologicalBenefits.length > 0
                      ? specimen.uses.ecologicalBenefits.join('. ')
                      : 'Supports local biodiversity, soil stability, and ambient air filtration.'}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Alternative Reference Matches */}
          {specimen.alternativeMatches && specimen.alternativeMatches.length > 0 && (
            <div className="pt-4 border-t border-[var(--color-border-subtle)] space-y-2">
              <span className="text-xs font-mono text-[var(--color-text-secondary)] uppercase tracking-wider block">
                Related Reference Candidates
              </span>
              <div className="flex flex-wrap gap-2">
                {specimen.alternativeMatches.map((alt) => (
                  <button
                    key={alt.specimenId}
                    onClick={() => onSelectAlternative(alt.specimenId)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-panel bg-[var(--color-surface)] hover:bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] text-xs text-left focus-ring transition-colors"
                  >
                    <span className="font-serif italic text-[var(--color-text-primary)]">{alt.binomialName}</span>
                    <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">({alt.differentiatingNotes})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Save Specimen to Journal Dialog */}
      <Dialog
        isOpen={saveModalOpen}
        onClose={() => setSaveModalOpen(false)}
        title="Save to Field Journal"
        description={`Record an observation entry for ${specimen.commonNames[0]} (${specimen.binomialName}) in your personal herbarium.`}
        maxWidth="md"
      >
        <form onSubmit={handleSaveSubmit} className="space-y-4">
          <div>
            <label htmlFor="field-location" className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
              Observation Locality
            </label>
            <input
              id="field-location"
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus-ring"
              placeholder="e.g. Living Room, West Balcony, Kew Glasshouse"
            />
          </div>

          <div>
            <label htmlFor="field-notes" className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
              Field Notes & Condition
            </label>
            <textarea
              id="field-notes"
              rows={3}
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus-ring"
              placeholder="e.g. Optimal growth, new unfurling leaf with strong venation..."
            />
          </div>

          <div>
            <label htmlFor="field-tags" className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
              Custom Tags (Comma Separated)
            </label>
            <input
              id="field-tags"
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus-ring"
              placeholder="e.g. Indoor, High Light, Foraged"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSaveModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              type="submit"
            >
              Confirm & Save
            </Button>
          </div>
        </form>
      </Dialog>

    </article>
  );
};
