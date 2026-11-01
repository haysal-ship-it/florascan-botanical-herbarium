import React, { useState, useEffect } from 'react';
import {
  Camera,
  Compass,
  GitCompare,
  HeartPulse,
  Bookmark,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Leaf,
  Menu,
  X,
} from 'lucide-react';
import { sound } from '../lib/soundEngine';
import { ActiveTab } from '../types/botanical';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  savedCount: number;
  specimenCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  specimenCount,
}) => {
  const [isMuted, setIsMuted] = useState(sound.getIsMuted());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tabletMenuOpen, setTabletMenuOpen] = useState(false);

  // Initialize theme from storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('florascan_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
  }, []);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const toggleTheme = () => {
    sound.playTap();
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    document.documentElement.setAttribute('data-theme', nextDark ? 'dark' : 'light');
    localStorage.setItem('florascan_theme', nextDark ? 'dark' : 'light');
  };

  const handleTabClick = (tab: ActiveTab) => {
    sound.playTap();
    setActiveTab(tab);
    setTabletMenuOpen(false);
  };

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'scanner', label: 'Scanner', icon: <Camera className="w-4 h-4" /> },
    { id: 'explore', label: 'Explore', icon: <Compass className="w-4 h-4" /> },
    { id: 'compare', label: 'Compare', icon: <GitCompare className="w-4 h-4" /> },
    { id: 'triage', label: 'Health', icon: <HeartPulse className="w-4 h-4" /> },
    { id: 'herbarium', label: 'Journal', icon: <Bookmark className="w-4 h-4" />, badge: savedCount },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--color-canvas)]/90 border-b border-[var(--color-border-subtle)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Brand Identity */}
          <button
            onClick={() => handleTabClick('scanner')}
            className="flex items-center gap-2.5 text-left focus-ring rounded-lg p-1 group min-w-0 shrink"
            aria-label="FloraScan Home - Botanical Field Journal"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] flex items-center justify-center shadow-tactile-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-lg sm:text-2xl tracking-tight text-[var(--color-text-primary)] truncate">
                  FloraScan
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono px-1.5 py-0.5 rounded-full bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)] font-medium shrink-0 hidden xs:inline-block">
                  {specimenCount}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] hidden sm:block truncate">
                Botanical Field Journal & Identification
              </p>
            </div>
          </button>

          {/* Desktop Navigation (Visible at lg >= 1024px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-[var(--color-surface)] p-1 rounded-control border border-[var(--color-border-subtle)] shrink-0"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-control text-xs font-semibold tracking-wide transition-all focus-ring ${
                    isActive
                      ? 'bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] shadow-tactile-sm'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Controls: Audio FX & Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={isMuted ? 'Enable sound effects' : 'Mute sound effects'}
              aria-label={isMuted ? 'Enable sound effects' : 'Mute sound effects'}
              className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] p-2 rounded-control border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)] focus-ring transition-colors flex items-center justify-center"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[var(--color-action-primary)]" />}
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] p-2 rounded-control border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)] focus-ring transition-colors flex items-center justify-center"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[var(--color-text-primary)]" />}
            </button>

            {/* Tablet Menu Toggle (Only on md to lg screens where bottom dock is not the primary focus) */}
            <button
              onClick={() => setTabletMenuOpen(!tabletMenuOpen)}
              aria-label={tabletMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={tabletMenuOpen}
              className="hidden md:flex lg:hidden min-w-[40px] min-h-[40px] p-2 rounded-control border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-primary)] items-center justify-center focus-ring"
            >
              {tabletMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Dropdown Menu for Tablet */}
        {tabletMenuOpen && (
          <div className="hidden md:flex lg:hidden py-3 border-t border-[var(--color-border-subtle)] flex-col gap-1.5 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 min-h-[44px] rounded-control text-sm font-medium transition-colors focus-ring ${
                    isActive
                      ? 'bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]'
                      : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-black/20 text-white font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
};
