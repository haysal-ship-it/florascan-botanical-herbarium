import React, { useState } from 'react';
import {
  HeartPulse,
  AlertCircle,
  CheckCircle2,
  Info,
  ChevronRight,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { sound } from '../../lib/soundEngine';
import { Button, Badge, Notice } from '../ui';

interface DiagnosticIssue {
  id: string;
  symptom: string;
  category: 'Watering' | 'Foliage' | 'Light / Climate' | 'Pests & Fungi' | 'Nutrient';
  visualCue: string;
  probableCauses: string[];
  remediationProtocol: string[];
  preventativeMeasures: string;
}

export const PlantHealthTriage: React.FC = () => {
  const diagnosticIssues: DiagnosticIssue[] = [
    {
      id: 'yellow-lower-leaves',
      symptom: 'Yellowing lower foliage with moist soil',
      category: 'Watering',
      visualCue: 'Lower leaves turn soft yellow and drop while potting mix remains damp.',
      probableCauses: [
        'Root suffocation from over-irrigation',
        'Dense potting medium lacking aeration amendments (perlite, orchid bark)',
        'Pot standing in persistent drainage runoff in saucers',
      ],
      remediationProtocol: [
        'Withhold watering and allow the top 50% of soil to dry out completely.',
        'Unpot the plant to inspect root system; trim away any dark, mushy roots with sterilized shears.',
        'Repot in fresh, porous substrate amended with 30% perlite or pumice.',
      ],
      preventativeMeasures: 'Always test soil moisture depth before watering.',
    },
    {
      id: 'crispy-brown-tips',
      symptom: 'Crispy brown tips & dry leaf margins',
      category: 'Light / Climate',
      visualCue: 'Leaf tips and margins turn parchment-dry, brown, and brittle.',
      probableCauses: [
        'Low atmospheric humidity (< 40%) from heating or air conditioning',
        'Mineral salt accumulation from hard tap water containing fluoride or chlorine',
        'Direct harsh midday sun scorching delicate foliage',
      ],
      remediationProtocol: [
        'Group plants together or use a humidifier to maintain 50-65% relative humidity.',
        'Flush potting mix with filtered water or rainwater to dissolve accumulated mineral salts.',
        'Move plant 1-2 meters back from hot unshielded southern windows.',
      ],
      preventativeMeasures: 'Mist air around plants and avoid placement directly adjacent to radiators.',
    },
    {
      id: 'white-powdery-mildew',
      symptom: 'White flour-like powdery residue on leaves',
      category: 'Pests & Fungi',
      visualCue: 'Patches of white talc-like fungal spore dusting on upper leaf surfaces.',
      probableCauses: [
        'Powdery mildew fungal spores',
        'Stagnant air circulation combined with shaded conditions',
        'Overhead watering that leaves foliage damp overnight',
      ],
      remediationProtocol: [
        'Wipe affected leaves gently with a diluted organic horticultural or neem oil solution.',
        'Improve ambient airflow with a gentle fan or spacing between pots.',
        'Prune heavily infected leaves and discard in trash (do not compost).',
      ],
      preventativeMeasures: 'Water strictly at soil base in the morning and ensure good ventilation.',
    },
    {
      id: 'spider-mite-webbing',
      symptom: 'Fine silky webbing on leaf undersides & speckled dots',
      category: 'Pests & Fungi',
      visualCue: 'Delicate webbing between stems and petioles with stippled yellow foliage.',
      probableCauses: [
        'Two-spotted spider mites thriving in hot, dry indoor air',
        'Dust accumulation on leaves shielding mite colonies',
      ],
      remediationProtocol: [
        'Isolate plant immediately to protect neighboring houseplants.',
        'Wash foliage thoroughly with a gentle lukewarm water spray in the sink or shower.',
        'Treat weekly with insecticidal soap or pure cold-pressed neem oil emulsion.',
      ],
      preventativeMeasures: 'Wipe leaves clean periodically and maintain humidity above 50%.',
    },
    {
      id: 'interveinal-chlorosis',
      symptom: 'Young leaves turn pale yellow with dark green veins',
      category: 'Nutrient',
      visualCue: 'Vascular vein network stays deep green while leaf tissue bleaches light yellow.',
      probableCauses: [
        'Iron or micronutrient deficiency triggered by high substrate pH (> 7.0)',
        'Impaired root absorption caused by cold, waterlogged soil',
      ],
      remediationProtocol: [
        'Apply a balanced liquid fertilizer formulated with chelated micronutrients.',
        'Check potting mix pH and amend towards neutral/slightly acidic (6.0 - 6.5).',
        'Ensure roots stay warm and avoid ice-cold tap water.',
      ],
      preventativeMeasures: 'Use balanced, gentle organic feeds during spring and summer active growth.',
    },
    {
      id: 'etiolation-stretching',
      symptom: 'Pale, spindly stems stretching with sparse leaves',
      category: 'Light / Climate',
      visualCue: 'Long gaps between leaf nodes, weak leaning stems, and pale small foliage.',
      probableCauses: [
        'Insufficient light intensity causing the plant to stretch toward illumination',
        'Plant positioned too far into room interior away from window light',
      ],
      remediationProtocol: [
        'Gradually transition plant to a brighter location with filtered daylight or LED grow lights.',
        'Prune back weak, leggy stems to encourage compact branching from lower nodes.',
        'Rotate the pot a quarter turn each week to maintain balanced upright symmetry.',
      ],
      preventativeMeasures: 'Match plant light requirements to window exposure before placing.',
    },
  ];

  const [selectedIssueId, setSelectedIssueId] = useState<string>(diagnosticIssues[0].id);

  const selectedIssue =
    diagnosticIssues.find((issue) => issue.id === selectedIssueId) || diagnosticIssues[0];

  const handleSelectIssue = (id: string) => {
    sound.playTap();
    setSelectedIssueId(id);
  };

  return (
    <section aria-labelledby="triage-heading" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
        <div>
          <Badge variant="clay" size="sm" className="mb-2 font-mono">
            CULTURAL CARE TRIAGE
          </Badge>
          <h1 id="triage-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Plant Health & Symptom Guidance
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            Identify common physiological stress symptoms and apply organic horticultural remediation steps.
          </p>
        </div>

        {/* Framing Notice */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-panel bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] self-start md:self-auto max-w-sm">
          <Info className="w-4 h-4 text-[var(--color-action-primary)] shrink-0" />
          <span>Predefined symptom troubleshooting guide based on common indoor & garden cultural issues.</span>
        </div>
      </div>

      {/* Main Split Layout: Symptom Selector List on Left, Remediation Guide on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Symptom Selector List */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] px-1">
            Observed Symptom
          </h2>

          <div
            role="radiogroup"
            aria-label="Common plant symptoms"
            className="space-y-2.5"
          >
            {diagnosticIssues.map((issue) => {
              const isSelected = selectedIssue.id === issue.id;
              return (
                <button
                  key={issue.id}
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleSelectIssue(issue.id)}
                  className={`w-full p-4 rounded-panel border text-left transition-all focus-ring min-h-[56px] flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-[var(--color-action-primary)] ring-2 ring-[var(--color-action-primary)]/20 bg-[var(--color-surface-elevated)] shadow-tactile-md'
                      : 'border-[var(--color-border-subtle)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-action-primary)] block mb-0.5">
                      {issue.category}
                    </span>
                    <span className="text-sm font-semibold text-[var(--color-text-primary)] block leading-snug">
                      {issue.symptom}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[var(--color-action-primary)] translate-x-1' : 'text-[var(--color-text-tertiary)]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: In-Depth Remediation & Action Protocol */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-plate bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] shadow-tactile-md space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="clay" size="sm" className="font-mono">
                  {selectedIssue.category.toUpperCase()}
                </Badge>
                <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                  GUIDANCE PROTOCOL
                </Badge>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                {selectedIssue.symptom}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-2 italic bg-[var(--color-surface)] p-3 rounded-control border border-[var(--color-border-subtle)]">
                <strong>Visual Sign:</strong> {selectedIssue.visualCue}
              </p>
            </div>

            {/* Probable Causes */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-action-primary)]">
                Probable Environmental Causes
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--color-text-primary)] list-disc pl-5">
                {selectedIssue.probableCauses.map((cause, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {cause}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ordered Next Steps */}
            <div className="space-y-3 pt-2 border-t border-[var(--color-border-subtle)]">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-action-primary)]">
                Ordered Remediation Steps
              </h4>
              <ol className="space-y-2.5">
                {selectedIssue.remediationProtocol.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-control bg-[var(--color-surface)] text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Preventative Measures */}
            <div className="p-4 rounded-panel bg-[var(--color-success-bg)]/50 border border-[var(--color-success)]/20 space-y-1">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-success)] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Long-Term Preventative Care</span>
              </h4>
              <p className="text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed">
                {selectedIssue.preventativeMeasures}
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
