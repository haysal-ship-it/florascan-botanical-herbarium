import React, { useState, useEffect } from 'react';
import { Sparkles, Key, Check, ExternalLink, Trash2, AlertCircle } from 'lucide-react';
import { Dialog, Button, Badge } from '../ui';
import { getStoredGeminiKey, setStoredGeminiKey } from '../../lib/geminiPlantService';
import { sound } from '../../lib/soundEngine';

interface AISettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyUpdated: () => void;
}

export const AISettingsModal: React.FC<AISettingsModalProps> = ({
  isOpen,
  onClose,
  onKeyUpdated,
}) => {
  const [apiKey, setApiKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [savedKeyExists, setSavedKeyExists] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const existing = getStoredGeminiKey();
      setSavedKeyExists(Boolean(existing));
      setApiKey(existing || '');
      setIsSaved(false);
    }
  }, [isOpen]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccessChime();
    setStoredGeminiKey(apiKey);
    setSavedKeyExists(Boolean(apiKey.trim()));
    setIsSaved(true);
    onKeyUpdated();
    setTimeout(() => {
      onClose();
    }, 800);
  };

  const handleClear = () => {
    sound.playTap();
    setStoredGeminiKey('');
    setApiKey('');
    setSavedKeyExists(false);
    onKeyUpdated();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Gemini AI Vision Configuration"
      description="Connect Google's Gemini Vision model to identify any live plant or flower directly from your camera lens."
    >
      <form onSubmit={handleSave} className="space-y-5">
        <div className="flex items-center justify-between p-3 rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--color-action-primary)]" />
            <span className="font-medium text-[var(--color-text-primary)]">AI Engine:</span>
            <span className="text-[var(--color-text-secondary)] font-mono">Gemini 2.0 Flash Multimodal</span>
          </div>
          <Badge variant={savedKeyExists ? 'success' : 'caution'} size="sm">
            {savedKeyExists ? 'AI Vision Online' : 'Curated Fallback'}
          </Badge>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="gemini-key-input" className="block text-xs font-semibold text-[var(--color-text-primary)]">
            Google Gemini API Key
          </label>
          <div className="relative">
            <input
              id="gemini-key-input"
              type="password"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setIsSaved(false);
              }}
              placeholder="AIzaSy..."
              className="w-full px-3 py-2 text-sm rounded-control border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] focus-ring font-mono pr-10"
            />
            <div className="absolute right-3 top-2.5 text-[var(--color-text-tertiary)] pointer-events-none">
              <Key className="w-4 h-4" />
            </div>
          </div>
          <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed flex items-center gap-1 mt-1">
            <span>Keys are stored strictly locally in your browser.</span>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-action-primary)] hover:underline inline-flex items-center gap-0.5 font-medium ml-1"
            >
              Get a free API key at Google AI Studio
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

        <div className="p-3 rounded-control bg-amber-500/10 border border-amber-500/20 text-xs text-[var(--color-text-secondary)] space-y-1">
          <div className="flex items-center gap-1.5 font-medium text-amber-700 dark:text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>How it works:</span>
          </div>
          <p className="leading-relaxed">
            With an API key connected, any photo you snap with your camera is sent to Gemini Vision to recognize the exact species, Linnaean taxonomy, ASPCA pet toxicity, and watering needs.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border-subtle)]">
          {savedKeyExists ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-xs text-[var(--color-error)] hover:underline flex items-center gap-1 p-2 focus-ring rounded"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Remove Key</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              {isSaved ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save & Activate</span>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};
