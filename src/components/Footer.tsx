import React from 'react';
import { Leaf, ShieldAlert, Heart } from 'lucide-react';
import { ActiveTab } from '../types/botanical';
import { sound } from '../lib/soundEngine';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: ActiveTab) => {
    sound.playTap();
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[var(--color-surface)] border-t border-[var(--color-border-subtle)] mt-20 no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="sm:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-emerald-200" />
              </div>
              <span className="font-serif font-bold text-lg text-[var(--color-text-primary)] tracking-tight">
                FloraScan
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] max-w-md leading-relaxed">
              A modern botanical field journal and plant identification archive pairing classical herbarium monographs with rapid optical scanning, toxicological safety guidance, and personal collection logging.
            </p>
            <div className="text-xs font-mono text-[var(--color-text-tertiary)]">
              50+ Curated Botanical Taxa • Educational Demonstration Model
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="space-y-2.5">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-action-primary)]">
              Field Destinations
            </h3>
            <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)] font-medium">
              <li>
                <button
                  onClick={() => handleNav('scanner')}
                  className="hover:text-[var(--color-text-primary)] focus-ring rounded transition-colors text-left py-1"
                >
                  Scanner & Camera Lens
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('explore')}
                  className="hover:text-[var(--color-text-primary)] focus-ring rounded transition-colors text-left py-1"
                >
                  Botanical Catalog Index
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('compare')}
                  className="hover:text-[var(--color-text-primary)] focus-ring rounded transition-colors text-left py-1"
                >
                  Specimen Comparator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('triage')}
                  className="hover:text-[var(--color-text-primary)] focus-ring rounded transition-colors text-left py-1"
                >
                  Plant Health Guidance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('herbarium')}
                  className="hover:text-[var(--color-text-primary)] focus-ring rounded transition-colors text-left py-1"
                >
                  Personal Field Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency Safety Directory */}
          <div className="space-y-2.5">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-error)] flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Poison Control & Safety</span>
            </div>
            <ul className="space-y-1 text-xs text-[var(--color-text-secondary)] font-mono">
              <li>US Poison Help: <strong className="text-[var(--color-text-primary)]">1-800-222-1222</strong></li>
              <li>UK NHS 24/7: <strong className="text-[var(--color-text-primary)]">111 / 999</strong></li>
              <li>ASPCA Animal Poison: <strong className="text-[var(--color-text-primary)]">(888) 426-4435</strong></li>
              <li>Pet Poison Helpline: <strong className="text-[var(--color-text-primary)]">(855) 764-7661</strong></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-tertiary)]">
          <p>
            © {new Date().getFullYear()} FloraScan. Botanical data is provided for educational and gardening reference. Never consume wild plants based solely on simulated recognition.
          </p>
          <div className="flex items-center gap-1">
            <span>Crafted with botanical care</span>
            <Heart className="w-3.5 h-3.5 text-[var(--color-accent-clay)] fill-[var(--color-accent-clay)] inline" />
            <span>for naturalists.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
