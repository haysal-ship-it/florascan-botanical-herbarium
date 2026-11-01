import React from 'react';
import { Camera, Compass, GitCompare, HeartPulse, Bookmark } from 'lucide-react';
import { sound } from '../lib/soundEngine';
import { ActiveTab } from '../types/botanical';

interface MobileNavDockProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  savedCount: number;
}

export const MobileNavDock: React.FC<MobileNavDockProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
}) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'scanner', label: 'Scanner', icon: <Camera className="w-5 h-5" /> },
    { id: 'explore', label: 'Explore', icon: <Compass className="w-5 h-5" /> },
    { id: 'compare', label: 'Compare', icon: <GitCompare className="w-5 h-5" /> },
    { id: 'triage', label: 'Health', icon: <HeartPulse className="w-5 h-5" /> },
    { id: 'herbarium', label: 'Journal', icon: <Bookmark className="w-5 h-5" />, badge: savedCount },
  ];

  const handleTabClick = (tab: ActiveTab) => {
    sound.playTap();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Mobile Navigation Dock"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[var(--color-surface-elevated)]/95 backdrop-blur-xl border-t border-[var(--color-border-subtle)] shadow-[0_-4px_20px_rgba(23,32,27,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center justify-around h-16 max-w-xl mx-auto px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`relative flex flex-col items-center justify-center flex-1 h-full min-h-[48px] py-1 transition-all select-none focus-ring rounded-control ${
                isActive
                  ? 'text-[var(--color-action-primary)] font-bold'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium'
              }`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={item.label}
            >
              {/* Active Dot Pip */}
              {isActive && (
                <span className="absolute top-1 w-1.5 h-1.5 rounded-full bg-[var(--color-action-primary)] shadow-sm" />
              )}

              {/* Icon Container with Badge */}
              <div className="relative mt-1">
                {item.icon}
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-[var(--color-error)] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-sm">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </div>

              {/* Text Label */}
              <span
                className={`text-[11px] tracking-wide mt-1 leading-none ${
                  isActive ? 'font-semibold text-[var(--color-action-primary)]' : 'font-normal'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
