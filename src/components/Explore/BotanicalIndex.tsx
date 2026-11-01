import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldAlert, ShieldCheck, Sun, Droplets, ArrowUpRight, X } from 'lucide-react';
import { BotanicalSpecimen, BotanicalClass } from '../../types/botanical';
import { sound } from '../../lib/soundEngine';
import { Button, Badge, Sheet } from '../ui';

interface BotanicalIndexProps {
  specimens: BotanicalSpecimen[];
  onSelectSpecimen: (specimen: BotanicalSpecimen) => void;
}

export const BotanicalIndex: React.FC<BotanicalIndexProps> = ({
  specimens,
  onSelectSpecimen,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);

  const classes: (string | BotanicalClass)[] = [
    'All',
    'Plant',
    'Flower',
    'Fruit',
    'Herb',
    'Tree',
    'Succulent',
  ];

  const filteredSpecimens = useMemo(() => {
    return specimens.filter((item) => {
      const matchesClass = selectedClass === 'All' || item.taxonomicClass === selectedClass;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.binomialName.toLowerCase().includes(q) ||
        item.commonNames.some((c) => c.toLowerCase().includes(q)) ||
        item.family.toLowerCase().includes(q) ||
        item.genus.toLowerCase().includes(q);
      return matchesClass && matchesQuery;
    });
  }, [specimens, selectedClass, searchQuery]);

  const handleClassClick = (cls: string) => {
    sound.playTap();
    setSelectedClass(cls);
    setFilterSheetOpen(false);
  };

  const handleCardClick = (specimen: BotanicalSpecimen) => {
    sound.playTap();
    onSelectSpecimen(specimen);
  };

  const handleResetFilters = () => {
    sound.playTap();
    setSearchQuery('');
    setSelectedClass('All');
  };

  return (
    <section aria-labelledby="catalog-heading" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. Header & Search Control Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--color-border-subtle)] pb-6">
        <div>
          <Badge variant="clay" size="sm" className="mb-2 font-mono">
            TAXONOMIC ARCHIVE
          </Badge>
          <h1 id="catalog-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Botanical Catalog & Index
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            Browse {filteredSpecimens.length} of {specimens.length} curated botanical monographs with verified care and safety data.
          </p>
        </div>

        {/* Search Bar & Mobile Filter Trigger */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-tertiary)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search common name, binomial, family..."
              className="w-full pl-10 pr-4 py-2.5 min-h-[44px] rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus-ring shadow-tactile-sm"
              aria-label="Search botanical index"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] p-1 focus-ring rounded"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Filter Button (opens accessible filter sheet) */}
          <Button
            variant="outline"
            size="md"
            onClick={() => setFilterSheetOpen(true)}
            className="sm:hidden min-w-[44px] min-h-[44px] shrink-0"
            aria-label="Open category filters"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      {/* 2. Desktop/Tablet Filter Chips (Hidden on small screens, sheet used instead) */}
      <div className="hidden sm:flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono text-[var(--color-text-secondary)] uppercase tracking-wider mr-1">
          Class:
        </span>
        {classes.map((cls) => {
          const isActive = selectedClass === cls;
          return (
            <button
              key={cls}
              onClick={() => handleClassClick(cls)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all focus-ring min-h-[36px] ${
                isActive
                  ? 'bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] shadow-tactile-sm'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]'
              }`}
              aria-pressed={isActive}
            >
              {cls}
            </button>
          );
        })}

        {(selectedClass !== 'All' || searchQuery) && (
          <button
            onClick={handleResetFilters}
            className="text-xs text-[var(--color-accent-clay)] hover:underline ml-2 font-medium focus-ring rounded p-1"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Active Filter Indicator on Mobile */}
      <div className="flex sm:hidden items-center justify-between text-xs text-[var(--color-text-secondary)]">
        <span>Filtered by: <strong>{selectedClass}</strong> ({filteredSpecimens.length} results)</span>
        {selectedClass !== 'All' && (
          <button
            onClick={handleResetFilters}
            className="text-[var(--color-accent-clay)] underline font-medium"
          >
            Clear
          </button>
        )}
      </div>

      {/* 3. Catalog Specimen Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredSpecimens.map((specimen) => {
          const isPetSafe = !specimen.toxicity.cats.toxic && !specimen.toxicity.dogs.toxic;
          return (
            <div
              key={specimen.id}
              onClick={() => handleCardClick(specimen)}
              className="group rounded-panel overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] shadow-tactile-sm hover:shadow-tactile-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between focus-ring"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(specimen);
                }
              }}
              aria-label={`View dossier for ${specimen.commonNames[0]} (${specimen.binomialName})`}
            >
              <div>
                {/* 4:3 Aspect Ratio Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                  <img
                    src={specimen.primaryImageUrl}
                    alt={`${specimen.commonNames[0]} (${specimen.binomialName})`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Class Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" size="sm" className="bg-black/60 text-white border-0 font-mono text-[10px]">
                      {specimen.taxonomicClass}
                    </Badge>
                  </div>

                  {/* Toxicity Badge */}
                  <div className="absolute top-3 right-3">
                    {isPetSafe ? (
                      <Badge variant="success" size="sm" className="bg-emerald-950/80 text-emerald-200 border border-emerald-500/30 text-[10px] font-mono">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Pet Safe</span>
                      </Badge>
                    ) : (
                      <Badge variant="danger" size="sm" className="bg-rose-950/80 text-rose-200 border border-rose-500/30 text-[10px] font-mono">
                        <ShieldAlert className="w-3 h-3 text-rose-400" />
                        <span>Pet Alert</span>
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-1.5">
                  <div className="font-mono text-[10px] text-[var(--color-action-primary)] uppercase tracking-wider font-semibold">
                    {specimen.family}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-action-primary)] transition-colors leading-snug">
                    {specimen.commonNames[0]}
                  </h2>
                  <div className="font-serif italic text-xs text-[var(--color-text-secondary)] truncate">
                    {specimen.binomialName}
                  </div>
                </div>
              </div>

              {/* Card Footer Telemetry & Quick Link */}
              <div className="px-4 sm:px-5 py-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-secondary)] bg-[var(--color-surface)]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1" title={`Sunlight: ${specimen.careGuide.sunlight}`}>
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[11px] font-mono truncate max-w-[80px]">
                      {specimen.careGuide.sunlight.split(' ')[0]}
                    </span>
                  </span>
                  <span className="flex items-center gap-1" title={`Watering: ${specimen.careGuide.wateringFrequency}`}>
                    <Droplets className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-[11px] font-mono">
                      {specimen.careGuide.wateringMetric}
                    </span>
                  </span>
                </div>

                <span className="flex items-center gap-0.5 font-mono text-[11px] font-bold text-[var(--color-action-primary)] group-hover:underline">
                  <span>Dossier</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredSpecimens.length === 0 && (
        <div className="text-center py-16 px-4 space-y-3 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)]">
          <p className="font-serif text-xl font-bold text-[var(--color-text-primary)]">
            No botanical specimens match your query.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
            Try adjusting your search terms or reset the taxonomic category filter.
          </p>
          <div className="pt-2">
            <Button variant="primary" size="sm" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        </div>
      )}

      {/* Accessible Mobile Category Filter Sheet */}
      <Sheet
        isOpen={filterSheetOpen}
        onClose={() => setFilterSheetOpen(false)}
        title="Taxonomic Categories"
        description="Filter specimens by botanical classification."
      >
        <div className="space-y-2 py-2">
          {classes.map((cls) => {
            const isActive = selectedClass === cls;
            return (
              <button
                key={cls}
                onClick={() => handleClassClick(cls)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-control text-sm font-medium transition-colors focus-ring min-h-[44px] ${
                  isActive
                    ? 'bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]'
                    : 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
                }`}
              >
                <span>{cls}</span>
                {isActive && <Badge variant="outline" size="sm" className="bg-white/20 text-white border-0">Selected</Badge>}
              </button>
            );
          })}
        </div>
      </Sheet>

    </section>
  );
};
