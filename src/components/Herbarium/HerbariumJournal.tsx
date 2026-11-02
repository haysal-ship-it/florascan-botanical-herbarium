import React, { useState } from 'react';
import {
  Bookmark,
  Download,
  Printer,
  Trash2,
  Edit3,
  MapPin,
  Calendar,
  Tag,
  ArrowUpRight,
  PlusCircle,
  AlertTriangle,
} from 'lucide-react';
import { HerbariumEntry, BotanicalSpecimen } from '../../types/botanical';
import { sound } from '../../lib/soundEngine';
import { Button, Badge, Dialog } from '../ui';

interface HerbariumJournalProps {
  entries: HerbariumEntry[];
  onDeleteEntry: (entryId: string) => void;
  onUpdateNotes: (entryId: string, notes: string) => void;
  onViewSpecimen: (specimen: BotanicalSpecimen) => void;
  onNavigateScanner: () => void;
}

export const HerbariumJournal: React.FC<HerbariumJournalProps> = ({
  entries,
  onDeleteEntry,
  onUpdateNotes,
  onViewSpecimen,
  onNavigateScanner,
}) => {
  const [editingEntry, setEditingEntry] = useState<HerbariumEntry | null>(null);
  const [editNotesText, setEditNotesText] = useState<string>('');
  const [deletingEntry, setDeletingEntry] = useState<HerbariumEntry | null>(null);

  const handleStartEdit = (entry: HerbariumEntry) => {
    sound.playTap();
    setEditingEntry(entry);
    setEditNotesText(entry.userNotes);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEntry) return;
    sound.playSuccessChime();
    onUpdateNotes(editingEntry.entryId, editNotesText);
    setEditingEntry(null);
  };

  const handleConfirmDelete = () => {
    if (!deletingEntry) return;
    sound.playTap();
    onDeleteEntry(deletingEntry.entryId);
    setDeletingEntry(null);
  };

  const handleExportJSON = () => {
    sound.playSuccessChime();
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(entries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute(
      'download',
      `florascan-journal-${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrintJournal = () => {
    sound.playTap();
    window.print();
  };

  return (
    <section aria-labelledby="herbarium-heading" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 print-monograph">
      
      {/* Header with Title and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[var(--color-border-subtle)] pb-6">
        <div>
          <Badge variant="clay" size="sm" className="mb-2 font-mono">
            PERSONAL ARCHIVE
          </Badge>
          <h1 id="herbarium-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Field Herbarium Journal
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            {entries.length} preserved botanical observation{entries.length === 1 ? '' : 's'} with field notes and habitat logs.
          </p>
        </div>

        {entries.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 no-print">
            <Button
              variant="outline"
              size="md"
              onClick={handleExportJSON}
              title="Download JSON backup"
            >
              <Download className="w-4 h-4 text-[var(--color-action-primary)]" />
              <span>Export JSON</span>
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handlePrintJournal}
              title="Print herbarium sheet"
            >
              <Printer className="w-4 h-4" />
              <span>Print Collection Sheet</span>
            </Button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {entries.length === 0 && (
        <div className="text-center py-16 sm:py-20 px-6 rounded-plate bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-tactile-sm space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-[var(--color-action-primary)]/15 border border-[var(--color-action-primary)]/20 flex items-center justify-center text-[var(--color-action-primary)] mx-auto">
            <Bookmark className="w-8 h-8" />
          </div>

          <h2 className="font-serif text-2xl font-bold text-[var(--color-text-primary)]">
            Your Herbarium is Empty
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md mx-auto">
            Scan living plants with your camera or explore the botanical catalog to save observation records into your personal field notebook.
          </p>

          <div className="pt-2">
            <Button variant="primary" size="lg" onClick={onNavigateScanner}>
              <PlusCircle className="w-5 h-5 mr-1" />
              <span>Scan Your First Specimen</span>
            </Button>
          </div>
        </div>
      )}

      {/* Populated Entries Grid */}
      {entries.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map((entry) => (
            <div
              key={entry.entryId}
              className="rounded-panel overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] shadow-tactile-sm flex flex-col justify-between"
            >
              <div>
                {/* Entry Header: Image + Essential Metadata */}
                <div className="flex items-start gap-4 p-5 border-b border-[var(--color-border-subtle)]">
                  <div
                    onClick={() => onViewSpecimen(entry.specimen)}
                    className="relative w-20 h-20 rounded-panel overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shrink-0 cursor-pointer group"
                    title="View full monograph"
                  >
                    <img
                      src={entry.userPhotoUrl || entry.specimen.primaryImageUrl}
                      alt={entry.specimen.commonNames[0]}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {entry.userPhotoUrl && (
                      <div className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] font-mono text-center text-emerald-300 py-0.5">
                        CAPTURE
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] text-[var(--color-action-primary)] uppercase font-bold tracking-wider">
                        {entry.specimen.taxonomicClass}
                      </span>
                      <button
                        onClick={() => onViewSpecimen(entry.specimen)}
                        className="text-xs font-mono text-[var(--color-action-primary)] hover:underline flex items-center gap-0.5 focus-ring rounded"
                      >
                        <span>Dossier</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>

                    <h2
                      onClick={() => onViewSpecimen(entry.specimen)}
                      className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] hover:text-[var(--color-action-primary)] transition-colors cursor-pointer leading-snug truncate"
                    >
                      {entry.specimen.commonNames[0]}
                    </h2>

                    <div className="font-serif italic text-xs text-[var(--color-text-secondary)] truncate">
                      {entry.specimen.binomialName}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-[var(--color-text-tertiary)] mt-2">
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(entry.discoveredAt).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center gap-1 truncate max-w-[150px]">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{entry.locationName}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Entry Field Notes */}
                <div className="p-5 space-y-3">
                  <div className="text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed bg-[var(--color-surface)] p-3.5 rounded-control border border-[var(--color-border-subtle)]">
                    <p className="line-clamp-3 italic">"{entry.userNotes}"</p>
                  </div>

                  {/* Custom Tags */}
                  {entry.customTags && entry.customTags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <Tag className="w-3 h-3 text-[var(--color-text-tertiary)] mr-0.5" />
                      {entry.customTags.map((tag, idx) => (
                        <Badge key={idx} variant="default" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Entry Footer Controls */}
              <div className="px-5 py-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)] flex items-center justify-between gap-2 no-print">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleStartEdit(entry)}
                  aria-label={`Edit field notes for ${entry.specimen.commonNames[0]}`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Notes</span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDeletingEntry(entry)}
                  className="text-[var(--color-error)] hover:bg-[var(--color-error-bg)]"
                  aria-label={`Remove ${entry.specimen.commonNames[0]} from herbarium`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Notes Dialog */}
      <Dialog
        isOpen={Boolean(editingEntry)}
        onClose={() => setEditingEntry(null)}
        title="Edit Field Notes"
        description={editingEntry ? `Update observation records for ${editingEntry.specimen.commonNames[0]}.` : undefined}
        maxWidth="md"
      >
        {editingEntry && (
          <form onSubmit={handleSaveEdit} className="space-y-4">
            <div>
              <label htmlFor="edit-notes-input" className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                Field Observation Notes
              </label>
              <textarea
                id="edit-notes-input"
                rows={4}
                value={editNotesText}
                onChange={(e) => setEditNotesText(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-control bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus-ring"
                required
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditingEntry(null)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                type="submit"
              >
                Save Notes
              </Button>
            </div>
          </form>
        )}
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        isOpen={Boolean(deletingEntry)}
        onClose={() => setDeletingEntry(null)}
        title="Remove Specimen Record?"
        description={
          deletingEntry
            ? `Are you sure you want to remove ${deletingEntry.specimen.commonNames[0]} from your field herbarium? This action cannot be undone.`
            : undefined
        }
        maxWidth="sm"
      >
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3 p-3 rounded-control bg-[var(--color-error-bg)] text-[var(--color-error)] text-xs">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Field notes and observation dates for this entry will be deleted from local storage.</span>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDeletingEntry(null)}
            >
              Keep Entry
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={handleConfirmDelete}
            >
              Delete Entry
            </Button>
          </div>
        </div>
      </Dialog>

    </section>
  );
};
