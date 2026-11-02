import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ScannerView } from "./components/Scanner/ScannerView";
import { BotanicalDossier } from "./components/Dossier/BotanicalDossier";
import { BotanicalIndex } from "./components/Explore/BotanicalIndex";
import { SpecimenComparator } from "./components/Compare/SpecimenComparator";
import { PlantHealthTriage } from "./components/Triage/PlantHealthTriage";
import { HerbariumJournal } from "./components/Herbarium/HerbariumJournal";
import { MobileNavDock } from "./components/MobileNavDock";
import { Footer } from "./components/Footer";
import { ActiveTab, BotanicalSpecimen, HerbariumEntry } from "./types/botanical";
import { ALL_BOTANICAL_SPECIMENS } from "./data/botanicalDatabase";
import { sound } from "./lib/soundEngine";

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("scanner");
  const [activeSpecimen, setActiveSpecimen] = useState<BotanicalSpecimen | null>(
    ALL_BOTANICAL_SPECIMENS[0] // Default to Monstera deliciosa
  );
  const [activePhotoUrl, setActivePhotoUrl] = useState<string | null>(null);
  const [comparisonSpecimen, setComparisonSpecimen] = useState<BotanicalSpecimen | null>(null);

  // Persistent Herbarium Entries
  const [herbariumEntries, setHerbariumEntries] = useState<HerbariumEntry[]>(() => {
    try {
      const stored = localStorage.getItem("florascan_herbarium_entries");
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Failed to load herbarium storage:", e);
    }
    // Pre-populate with two sample entries so user has immediate rich data
    return [
      {
        entryId: "entry-monstera-001",
        specimen: ALL_BOTANICAL_SPECIMENS[0], // Monstera
        discoveredAt: new Date(Date.now() - 86400000 * 3).toISOString(),
        locationName: "Botanical Conservatory, Glasshouse No. 4",
        userNotes: "Healthy specimen showing 7 deep fenestrations on newest leaf. Soil moisture optimal.",
        customTags: ["Indoor", "Aroid", "Conservatory"],
      },
      {
        entryId: "entry-lavender-002",
        specimen: ALL_BOTANICAL_SPECIMENS[1], // Lavender
        discoveredAt: new Date(Date.now() - 86400000 * 7).toISOString(),
        locationName: "Herbaceous Kitchen Courtyard",
        userNotes: "Profuse floral spikes with intense linalool aroma. Visited by multiple bumblebees.",
        customTags: ["Culinary", "Fragrant", "Pollinator"],
      },
    ];
  });

  // Save entries to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("florascan_herbarium_entries", JSON.stringify(herbariumEntries));
    } catch (e) {
      console.warn("Failed to persist herbarium entries:", e);
    }
  }, [herbariumEntries]);

  // Handler: Specimen identified via Scanner
  const handleSpecimenIdentified = (specimen: BotanicalSpecimen, capturedImage?: string) => {
    setActiveSpecimen(specimen);
    if (capturedImage) {
      setActivePhotoUrl(capturedImage);
    }
    // Smooth scroll down to dossier
    setTimeout(() => {
      const dossierEl = document.getElementById("specimen-dossier-section");
      if (dossierEl) {
        dossierEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  // Handler: Select specimen from Botanical Index
  const handleSelectFromIndex = (specimen: BotanicalSpecimen) => {
    setActiveSpecimen(specimen);
    setActivePhotoUrl(null);
    setActiveTab("scanner");
    setTimeout(() => {
      const dossierEl = document.getElementById("specimen-dossier-section");
      if (dossierEl) {
        dossierEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  // Handler: Save to herbarium
  const handleSaveToHerbarium = (entryData: Omit<HerbariumEntry, "entryId">) => {
    const newEntry: HerbariumEntry = {
      ...entryData,
      entryId: `entry-${Date.now()}`,
    };
    setHerbariumEntries((prev) => [newEntry, ...prev]);
  };

  // Handler: Delete from herbarium
  const handleDeleteHerbariumEntry = (entryId: string) => {
    setHerbariumEntries((prev) => prev.filter((e) => e.entryId !== entryId));
  };

  // Handler: Update notes in herbarium
  const handleUpdateHerbariumNotes = (entryId: string, notes: string) => {
    setHerbariumEntries((prev) =>
      prev.map((e) => (e.entryId === entryId ? { ...e, userNotes: notes } : e))
    );
  };

  // Handler: Compare specimen
  const handleCompare = (specimen: BotanicalSpecimen) => {
    sound.playTap();
    setComparisonSpecimen(specimen);
    setActiveTab("compare");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handler: Switch to alternative match
  const handleSelectAlternative = (specimenId: string) => {
    sound.playTap();
    const match = ALL_BOTANICAL_SPECIMENS.find((s) => s.id === specimenId);
    if (match) {
      setActiveSpecimen(match);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isSpecimenSaved = Boolean(
    activeSpecimen &&
    herbariumEntries.some((e) => e.specimen.id === activeSpecimen.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-canvas)] text-[var(--color-text-primary)] transition-colors w-full min-w-0">
      
      {/* Editorial Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={herbariumEntries.length}
        specimenCount={ALL_BOTANICAL_SPECIMENS.length}
      />

      {/* Main Content Area with bottom dock clearance */}
      <main className="flex-1 pb-24 lg:pb-0 w-full min-w-0">
        
        {/* TAB 1: SCANNER & ACTIVE DOSSIER */}
        {activeTab === "scanner" && (
          <div className="space-y-12">
            <ScannerView
              onSpecimenIdentified={handleSpecimenIdentified}
              activeSpecimen={activeSpecimen}
            />

            {activeSpecimen && (
              <div id="specimen-dossier-section">
                <BotanicalDossier
                  specimen={activeSpecimen}
                  userPhotoUrl={activePhotoUrl}
                  onSaveToHerbarium={handleSaveToHerbarium}
                  isSaved={isSpecimenSaved}
                  onCompare={handleCompare}
                  onSelectAlternative={handleSelectAlternative}
                />
              </div>
            )}
          </div>
        )}

        {/* TAB 2: BOTANICAL INDEX EXPLORER */}
        {activeTab === "explore" && (
          <BotanicalIndex
            specimens={ALL_BOTANICAL_SPECIMENS}
            onSelectSpecimen={handleSelectFromIndex}
          />
        )}

        {/* TAB 3: SPECIMEN COMPARATOR */}
        {activeTab === "compare" && (
          <SpecimenComparator
            specimens={ALL_BOTANICAL_SPECIMENS}
            initialSpecimenA={comparisonSpecimen || activeSpecimen}
            onViewDossier={(specimen) => {
              setActiveSpecimen(specimen);
              setActiveTab("scanner");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

        {/* TAB 4: PLANT HEALTH TRIAGE */}
        {activeTab === "triage" && <PlantHealthTriage />}

        {/* TAB 5: MY HERBARIUM JOURNAL */}
        {activeTab === "herbarium" && (
          <HerbariumJournal
            entries={herbariumEntries}
            onDeleteEntry={handleDeleteHerbariumEntry}
            onUpdateNotes={handleUpdateHerbariumNotes}
            onViewSpecimen={(specimen) => {
              setActiveSpecimen(specimen);
              setActiveTab("scanner");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onNavigateScanner={() => {
              setActiveTab("scanner");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={setActiveTab} />

      {/* Mobile & Tablet Thumb Navigation Dock (Hidden on lg >= 1024px) */}
      <MobileNavDock
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={herbariumEntries.length}
      />

    </div>
  );
};
export default App;
