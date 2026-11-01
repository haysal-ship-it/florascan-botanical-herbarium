import { BotanicalSpecimen } from "../types/botanical";
import { ADDITIONAL_SPECIMENS } from "./moreBotanicalSpecimens";
import { EXTRA_SPECIMENS } from "./extraSpecimensBatch";

export const BOTANICAL_SPECIMENS: BotanicalSpecimen[] = [
  // 1. Monstera Deliciosa (Laboratory Specimen 1)
  {
    id: "specimen-monstera-deliciosa",
    binomialName: "Monstera deliciosa",
    botanicalAuthority: "Liebm. (1849)",
    commonNames: ["Swiss Cheese Plant", "Split-Leaf Philodendron", "Ceriman", "Mexican Breadfruit"],
    family: "Araceae",
    genus: "Monstera",
    order: "Alismatales",
    taxonomicClass: "Plant",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Wild populations in Chiapas & Oaxaca secure)",
    nativeHabitat: "Tropical rainforest understory, climbing tree trunks as an epiphyte",
    geographicDistribution: ["Southern Mexico", "Guatemala", "Costa Rica", "Panama"],
    climateZones: ["Tropical Wet (Af)", "Tropical Monsoon (Am)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Monstera deliciosa is a quintessential tropical epiphyte famed for its large cordate leaves featuring natural perforations termed fenestrations. These adaptations permit dappled rainforest sunlight to penetrate to lower foliage while allowing hurricane-force winds to pass through without tearing the laminae. When cultivated in optimal warm conditions, mature plants bear an elongated cone-like syncarp fruit that, upon full ripeness, exhibits an exquisite tropical bouquet reminiscent of pineapple, banana, and mango.",
    morphology: {
      growthHabit: "Hemi-epiphytic woody vine with thick aerial adventitious roots",
      leafType: "Pinnatifid fenestrated ovate-cordate coriaceous leaf",
      phyllotaxy: "Distichous to spiral alternate arrangement",
      bloomPeriod: "Mid-summer (cream-colored spadix enclosed by white spathe)",
      matureHeight: "Up to 20m in wild canopy; 2-3m indoors"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Hypersalivation", "Pawing at mouth", "Oral edema", "Vomiting", "Dysphagia"],
        targetOrgans: ["Oral Mucosa", "Upper Gastrointestinal Tract"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Oral pain", "Excessive drooling", "Head shaking", "Loss of appetite"],
        targetOrgans: ["Oral Mucosa"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: true,
        notes: "Cellular idioblasts contain needle-sharp insoluble calcium oxalate raphides that mechanically penetrate mucosal membranes upon mastication."
      },
      toxicCompounds: ["Insoluble Calcium Oxalate Raphides", "Proteolytic enzymes"]
    },
    careGuide: {
      sunlight: "Bright Indirect",
      sunlightDetails: "Thrives in filtered indirect illumination (1,000–2,500 Lux). Direct midday sun scorches fenestrated foliage.",
      wateringFrequency: "Allow top 5cm (2 inches) of soil substrate to dry thoroughly before deep soak.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Chunky, aerated aroid blend (35% orchid bark, 25% perlite, 25% coco coir, 15% worm castings)",
      soilPh: "5.5 – 7.0 (Slightly acidic to neutral)",
      temperatureRange: "18°C – 30°C (65°F – 86°F). Protect from drafts below 12°C.",
      hardinessZones: "USDA 10b – 12",
      humidityRequirement: "60% – 80% Relative Humidity",
      fertilizerRecommendation: "Balanced 20-20-20 water-soluble formulation diluted to half strength monthly during vegetative flush."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Ripe syncarp fruit spadix only"],
        flavorProfile: "Tropical fruit salad blend: sweet pineapple, passionfruit, and creamy banana",
        culinaryUses: ["Fresh fruit dessert", "Infused syrups", "Tropical compotes"],
        preparationWarnings: "UNRIPE FRUIT IS HIGHLY TOXIC. Consume strictly when outer green hexagonal scales detach naturally, revealing creamy inner pulp."
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Sterols", "Triterpenoids", "Flavonoid glycosides"],
        traditionalApplications: ["In Mayan ethnobotany, root infusions were brewed to soothe joint inflammation and snakebites."],
        modernResearchNotes: "Studies focus on antioxidant properties of fruit pulp and antimicrobial bark extracts."
      },
      ornamental: ["Stately focal indoor specimen", "Biophilic architectural living wall centerpiece"],
      ecologicalBenefits: ["Canopy microhabitat host", "Aerial root moisture sequestration", "Air particulate filtration"]
    },
    diagnosticGuide: [
      {
        symptom: "Yellowing lower foliage with moist potting mix",
        probableCause: "Anaerobic root suffocation caused by overwatering or dense soil",
        remedyAction: "Cease irrigation immediately. Unpot and inspect for darkened mushy roots. Repot into chunky porous bark medium.",
        preventativeTip: "Employ a wooden moisture skewer or hygrometer before adding water."
      },
      {
        symptom: "Brown crispy edges on fenestrated margins",
        probableCause: "Atmospheric humidity deficit below 40% or chemical mineral burn from tap water",
        remedyAction: "Install a cool-mist ultrasonic humidifier nearby and switch to distilled or rainwater.",
        preventativeTip: "Group with other tropical plants to establish a localized microclimate."
      }
    ],
    confidenceScore: 98.7,
    alternativeMatches: [
      {
        specimenId: "specimen-rhaphidophora-tetrasperma",
        binomialName: "Rhaphidophora tetrasperma",
        commonName: "Mini Monstera / Ginny",
        differentiatingNotes: "Significantly smaller foliage (12-20cm), distinct open split notches without inner circular fenestrations.",
        confidenceScore: 84.2
      },
      {
        specimenId: "specimen-philodendron-bipinnatifidum",
        binomialName: "Thaumatophyllum bipinnatifidum",
        commonName: "Split-leaf Thaumatophyllum",
        differentiatingNotes: "Deeply lacerated ruffled margins radiating from distinct central spine; self-heading growth habit.",
        confidenceScore: 71.5
      }
    ]
  },

  // 2. Lavandula Angustifolia (Laboratory Specimen 2)
  {
    id: "specimen-lavandula-angustifolia",
    binomialName: "Lavandula angustifolia",
    botanicalAuthority: "Mill. (1768)",
    commonNames: ["English Lavender", "True Lavender", "Common Lavender", "Garden Lavender"],
    family: "Lamiaceae",
    genus: "Lavandula",
    order: "Lamiales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native Mediterranean karst hillsides)",
    nativeHabitat: "Dry rocky Mediterranean hillsides, calcareous scrublands (garrigue)",
    geographicDistribution: ["France (Provence)", "Spain", "Italy", "Croatia", "Slovenia"],
    climateZones: ["Mediterranean (Csa)", "Semi-arid (BSh)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Lavandula angustifolia is an iconic aromatic subshrub revered across millennia for its soothing celestial violet floral spikes and high concentration of calming monoterpenes. Indigenous to the sun-baked calcareous slopes of the Mediterranean, it has evolved narrow linear leaves coated in stellate trichomes that reflect fierce sunlight and dramatically conserve vital moisture.",
    morphology: {
      growthHabit: "Compact evergreen woody subshrub forming rounded mounds",
      leafType: "Linear to lanceolate, revolute margin, tomentose grayish-green",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Late spring through mid-summer",
      matureHeight: "0.6m to 1.0m height with equal spread"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Nausea", "Vomiting", "Inappetence", "Lethargy", "Ataxia if concentrated oil ingested"],
        targetOrgans: ["Hepatic", "Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Mild gastrointestinal upset", "Vomiting if massive quantities of foliage consumed"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Generally recognized as safe (GRAS). Essential oils must be diluted prior to dermal contact."
      },
      toxicCompounds: ["Linalool", "Linalyl acetate", "Camphor (trace)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Demands minimum 6–8 hours of direct unfiltered solar radiation daily for vigorous terpene synthesis.",
      wateringFrequency: "Extremely drought-tolerant. Irrigate only when soil is parched; root rot ensues in saturated substrate.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Sandy, gravelly, low-fertility mineral loam with rapid drainage",
      soilPh: "6.7 – 7.8 (Neutral to alkaline / calcareous)",
      temperatureRange: "-15°C – 35°C (Cold-hardy down to -20°C in well-drained soils)",
      hardinessZones: "USDA 5a – 9b",
      humidityRequirement: "Low to Moderate (< 50% preferred to avoid fungal blight)",
      fertilizerRecommendation: "Avoid heavy nitrogen feeding. A light dressing of crushed oyster shell or limestone meal in spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Dried flower buds", "Young tender spring leaves"],
        flavorProfile: "Floral, sweet herbaceous notes with light camphor undertones and citrus hints",
        culinaryUses: ["Herbes de Provence seasoning", "Lavender shortbread", "Infused honey", "Artisanal gin botanical"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Linalool", "Linalyl acetate", "Lavandulyl acetate", "Rosmarinic acid"],
        traditionalApplications: ["Inhalation of vapors for nervous tension, anxiety alleviation, and deep REM sleep induction."],
        modernResearchNotes: "Clinical trials validate Silexan (standardized lavender oil) in reducing generalized anxiety symptoms."
      },
      ornamental: ["Formal knot gardens", "Pollinator meadow borders", "Sensory aromatherapy plantings"],
      ecologicalBenefits: ["Premier nectar resource for Bombus bumblebees, honeybees, and Papilio swallowtail butterflies"]
    },
    diagnosticGuide: [
      {
        symptom: "Blackened stem bases with wilting gray foliage",
        probableCause: "Phytophthora root and crown rot triggered by standing water and heavy clay",
        remedyAction: "Excavate affected plants immediately. Amend soil with 40% coarse pea gravel or relocate to elevated rockery.",
        preventativeTip: "Mulch with light pea gravel rather than organic wood mulch to prevent crown moisture entrapment."
      }
    ],
    confidenceScore: 99.1,
    alternativeMatches: [
      {
        specimenId: "specimen-lavandula-stoechas",
        binomialName: "Lavandula stoechas",
        commonName: "French / Spanish Lavender",
        differentiatingNotes: "Conspicuous rabbit-ear purple bracts crowning each flower head; higher camphor content.",
        confidenceScore: 78.4
      }
    ]
  },

  // 3. Punica Granatum (Laboratory Specimen 3)
  {
    id: "specimen-punica-granatum",
    binomialName: "Punica granatum",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Pomegranate", "Granada", "Anar", "Carthaginian Apple"],
    family: "Lythraceae",
    genus: "Punica",
    order: "Myrtales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Cultivated worldwide since antiquity)",
    nativeHabitat: "Scrublands, rocky foothills, and river terraces across the Iranian Plateau",
    geographicDistribution: ["Iran", "Caucasus", "Afghanistan", "Mediterranean Basin", "California Central Valley"],
    climateZones: ["Mediterranean (Csa)", "Hot Semi-arid (BSh)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1541344999736-83eca872f242?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541344999736-83eca872f242?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Punica granatum, the legendary pomegranate, is an ancient sacred fruiting shrub celebrated throughout Persian, Greco-Roman, and Ayurvedic heritage. Revered as an emblem of fertility and prosperity, it produces thick-skinned balustine berries packed with gem-like ruby arils, each enclosing an edible seed surrounded by tart, polyphenol-dense nectar.",
    morphology: {
      growthHabit: "Multi-stemmed deciduous large shrub or small rounded tree",
      leafType: "Glossy narrow oblong-lanceolate leaves with entire margins",
      phyllotaxy: "Opposite or sub-opposite, often clustered on spiny short spurs",
      bloomPeriod: "Late spring into mid-summer (vivid vermilion crepe-like blossoms)",
      matureHeight: "4m to 7m in orchard cultivation"
    },
    toxicity: {
      cats: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: [],
        targetOrgans: []
      },
      dogs: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Mild stomach upset possible only if whole rinds consumed in bulk due to intense tannins"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Bark, stem, and root contain pelletierine alkaloids that have toxicological actions; fruit and arils are entirely non-toxic."
      },
      toxicCompounds: ["Punicalagins (beneficial ellagitannins in aril)", "Pelletierine (found strictly in root bark)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Requires intense, uninterrupted full sun (minimum 8 hours) to set vibrant blooms and ripen sugar-rich fruit.",
      wateringFrequency: "Once established, thrives with deep infrequent soaking every 2 to 3 weeks during summer drought.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Adaptable to heavy clay, calcareous limestone, or sandy loam, provided drainage is swift",
      soilPh: "5.5 – 7.8 (Exceptional tolerance to calcareous alkaline soils)",
      temperatureRange: "-10°C – 45°C (Withstands winter freezes down to USDA Zone 7)",
      hardinessZones: "USDA 7b – 11",
      humidityRequirement: "Arid to semi-arid preferred. High coastal humidity can provoke rind splitting.",
      fertilizerRecommendation: "Organic compost dressing or balanced 10-10-10 feed applied in early spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Ruby seed arils", "Fresh cold-pressed juice", "Reduced molasses"],
        flavorProfile: "Richly tart, astringently sweet, crisp and refreshing burst",
        culinaryUses: ["Fesenjan Persian walnut pomegranate stew", "Muhammara roasted pepper dip", "Salad jewel garnish", "Artisanal grenadine"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Punicalagins", "Ellagic acid", "Anthocyanins", "Punicic acid (rare omega-5 conjugated fatty acid)"],
        traditionalApplications: ["Ayurvedic tonic for cardiac vitality and digestive parasite elimination."],
        modernResearchNotes: "Extensively researched for cardiovascular arterial endothelial preservation and nitric oxide promotion."
      },
      ornamental: ["Spectacular scarlet blossom display", "Autumn golden foliage", "Architectural orchard specimen"],
      ecologicalBenefits: ["Drought-resilient xeriscaping", "High-pollen blossom magnet for solitary native bees"]
    },
    diagnosticGuide: [
      {
        symptom: "Fruit splitting open prematurely on branches",
        probableCause: "Irregular moisture flux: heavy rain or overwatering following extended dry periods",
        remedyAction: "Maintain consistent deep drip irrigation cycle through late summer fruit development.",
        preventativeTip: "Mulch base with 7cm coarse wood chips to buffer soil moisture swings."
      }
    ],
    confidenceScore: 97.8,
    alternativeMatches: []
  },

  // 4. Echinocactus Grusonii (Laboratory Specimen 4)
  {
    id: "specimen-echinocactus-grusonii",
    binomialName: "Echinocactus grusonii",
    botanicalAuthority: "Hildm. (1891)",
    commonNames: ["Golden Barrel Cactus", "Mother-in-Law's Cushion", "Golden Ball"],
    family: "Cactaceae",
    genus: "Echinocactus",
    order: "Caryophyllales",
    taxonomicClass: "Succulent",
    conservationStatus: "EN",
    iucnDescription: "Endangered (Critically depleted in native Rio Moctezuma canyon due to reservoir damming)",
    nativeHabitat: "Volcanic steep canyon ledges and basalt cliffs in central Mexico",
    geographicDistribution: ["Queretaro (Mexico)", "Hidalgo (Mexico)"],
    climateZones: ["Hot Desert (BWh)", "Semi-arid (BSh)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Echinocactus grusonii is one of the most recognizable cacti on Earth, sporting a gleaming globe clad in radiant golden-yellow radial spines. Although cultivated in botanical gardens across the globe, wild populations are critically endangered due to habitat destruction from hydroelectric projects in Queretaro.",
    morphology: {
      growthHabit: "Solitary globose succulent stem, slowly elongating into a barrel column with age",
      leafType: "Leaves modified into sharp, ribbed recurved golden spines",
      phyllotaxy: "Prominent 20–35 acute ribs arranged vertically",
      bloomPeriod: "Mid-summer on mature specimens (> 20 years old)",
      matureHeight: "0.8m to 1.3m diameter, up to 1m height"
    },
    toxicity: {
      cats: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Mechanical puncture wounds and mouth irritation from spines, but zero biochemical toxins"],
        targetOrgans: ["Dermal / Mechanical Trauma"]
      },
      dogs: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Physical puncture injury"],
        targetOrgans: ["Dermal / Mechanical Trauma"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Strict physical hazard: sharp rigid spines can cause deep puncture wounds and secondary bacterial infection if mishandled."
      },
      toxicCompounds: ["None (Non-toxic chemically)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Direct intense sunlight (6–10 hours). Insufficient light causes irreversible columnar stretching (etiolation).",
      wateringFrequency: "Soak and dry method: water deeply once every 3–4 weeks in summer; withhold water entirely through winter dormancy.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Mineral-heavy cactus potting grit (70% pumice/perlite/coarse sand, 30% organic peat)",
      soilPh: "6.0 – 7.5",
      temperatureRange: "10°C – 40°C. Protect from frost (< 5°C).",
      hardinessZones: "USDA 9a – 11b",
      humidityRequirement: "Ultra-low (< 30%). Humid stagnant air promotes fungal stem rot.",
      fertilizerRecommendation: "Low-nitrogen cactus fertilizer (5-10-10) applied twice during peak summer growth."
    },
    uses: {
      culinary: {
        edible: false,
        edibleParts: [],
        flavorProfile: "Inedible fibrous mucilage",
        culinaryUses: []
      },
      medicinal: {
        utilized: false,
        activePhytochemicals: ["Mucilage polysaccharides", "Trace betalain pigments"],
        traditionalApplications: []
      },
      ornamental: ["Sculptural desert rockery focal point", "Architectural minimalist container centerpiece"],
      ecologicalBenefits: ["Extreme drought tolerance", "Water conservation champion", "Provides desert songbirds perches"]
    },
    diagnosticGuide: [
      {
        symptom: "Stem turns soft, translucent, and yellow at the soil line",
        probableCause: "Fatal basal stem rot from overwatering in cold, non-draining substrate",
        remedyAction: "Immediate unpotting. If rot has reached the vascular core, the specimen cannot be saved. Let healthy tissue callous.",
        preventativeTip: "Ensure drainage holes are unobstructed and never leave pots in standing saucers."
      }
    ],
    confidenceScore: 99.4,
    alternativeMatches: [
      {
        specimenId: "specimen-ferocactus-wislizeni",
        binomialName: "Ferocactus wislizeni",
        commonName: "Fishhook Barrel Cactus",
        differentiatingNotes: "Prominent hooked central spine tips with reddish-gray tint rather than bright golden yellow.",
        confidenceScore: 82.0
      }
    ]
  },

  // 5. Ocimum Basilicum (Laboratory Specimen 5)
  {
    id: "specimen-ocimum-basilicum",
    binomialName: "Ocimum basilicum",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Sweet Basil", "Genovese Basil", "Great Basil", "Saint Joseph's Wort"],
    family: "Lamiaceae",
    genus: "Ocimum",
    order: "Lamiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Widely cultivated culinary staple worldwide)",
    nativeHabitat: "Tropical riverbanks, moist clearings, and forest borders across South Asia and Central Africa",
    geographicDistribution: ["India", "Southeast Asia", "Mediterranean Basin", "Worldwide cultivation"],
    climateZones: ["Tropical Wet (Af)", "Humid Subtropical (Cfa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Ocimum basilicum is the cornerstone of Mediterranean and Southeast Asian culinary tradition. Revered in ancient Greece as 'basilikon' (the kingly herb), it yields glossy aromatic ovate leaves infused with eugenol, linalool, and methyl chavicol, conferring an unmistakable sweet, warm, clove-pepper bouquet.",
    morphology: {
      growthHabit: "Tender annual herbaceous aromatic plant with quadrangular branching stems",
      leafType: "Silky, ovate, entire to slightly dentate leaves",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Mid to late summer (small white/purple bilabiate flowers in terminal spikes)",
      matureHeight: "0.3m to 0.6m"
    },
    toxicity: {
      cats: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: [],
        targetOrgans: []
      },
      dogs: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: [],
        targetOrgans: []
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Completely safe and nutritious for humans of all ages."
      },
      toxicCompounds: ["None (Non-toxic. Contains beneficial essential oils)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6–8 hours of warm sun. Highly sensitive to cold and frost.",
      wateringFrequency: "Keep potting substrate consistently moist, watering when surface begins to dry.",
      wateringMetric: "Moist",
      hygrometerPips: 4,
      soilType: "Rich, loamy organic potting mix amended with compost and perlite",
      soilPh: "6.0 – 7.0",
      temperatureRange: "18°C – 32°C (Below 10°C foliage darkens and decays)",
      hardinessZones: "USDA 10 – 12 (Grown as tender annual elsewhere)",
      humidityRequirement: "Moderate (40% – 60%)",
      fertilizerRecommendation: "Organic fish emulsion or seaweed extract every two weeks."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh tender leaves", "Flower buds"],
        flavorProfile: "Sweet anise, peppery clove, warm herbal undertones",
        culinaryUses: ["Classic Genovese Pesto alla Genovese", "Caprese salad with buffalo mozzarella", "Margherita pizza"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Eugenol", "Rosmarinic acid", "Linalool", "Apigenin"],
        traditionalApplications: ["Carminative tea for gastrointestinal spasm and stress reduction."],
        modernResearchNotes: "Eugenol demonstrates potent anti-inflammatory and COX-2 inhibiting properties."
      },
      ornamental: ["Kitchen herb garden pots", "Raised sensory edible borders"],
      ecologicalBenefits: ["Companion plant repellent for tomato hornworms", "Attracts solitary pollinators when in flower"]
    },
    diagnosticGuide: [
      {
        symptom: "Sudden wilting with dark brown striping down green stems",
        probableCause: "Fusarium wilt (Fusarium oxysporum f. sp. basilicum) fungal infection",
        remedyAction: "Discard infected plants and soil; do not compost. Clean containers thoroughly.",
        preventativeTip: "Utilize certified disease-resistant seeds and avoid overhead leaf sprinkling."
      }
    ],
    confidenceScore: 98.2,
    alternativeMatches: [
      {
        specimenId: "specimen-ocimum-tenuiflorum",
        binomialName: "Ocimum tenuiflorum",
        commonName: "Holy Basil / Tulsi",
        differentiatingNotes: "Hairy purple stems, distinctly toothed leaf margins, pungent medicinal clove aroma.",
        confidenceScore: 76.5
      }
    ]
  },

  // 6. Passiflora Caerulea (Laboratory Specimen 6)
  {
    id: "specimen-passiflora-caerulea",
    binomialName: "Passiflora caerulea",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Blue Passionflower", "Bluecrown Passionflower", "Flower of the Five Wounds"],
    family: "Passifloraceae",
    genus: "Passiflora",
    order: "Malpighiales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to South American riparian zones)",
    nativeHabitat: "River edges, thickets, and gallery forest margins in Argentina and Brazil",
    geographicDistribution: ["Argentina", "Brazil", "Paraguay", "Uruguay"],
    climateZones: ["Humid Subtropical (Cfa)", "Warm Temperate"],
    primaryImageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Passiflora caerulea produces some of the most geometrically complex, otherworldly blossoms in the plant kingdom. Its corona of multi-tiered blue and purple filaments surrounding prominent stamens and tripartite stigmas was historically interpreted by Spanish missionaries as symbolic allegory of the Passion of Christ.",
    morphology: {
      growthHabit: "Vigorous woody tendril climber",
      leafType: "Palmately 5-lobed (occasionally 3 to 7-lobed) lustrous green leaves",
      phyllotaxy: "Alternate, accompanied by unbranched axillary tendrils",
      bloomPeriod: "Mid-summer to early autumn (complex 10cm wide solitary blossoms)",
      matureHeight: "Up to 10m climbing height"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Lethargy", "Cyanide toxicity symptoms if foliage ingested in volume"],
        targetOrgans: ["Respiratory", "Cellular Respiration"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Salivation", "Gastrointestinal distress", "Dilated pupils"],
        targetOrgans: ["Gastrointestinal", "Neurological"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Leaves and unripened fruit contain cyanogenic glycosides that metabolize into trace hydrogen cyanide. Ripe orange fruit pulp is edible but bland."
      },
      toxicCompounds: ["Cyanogenic glycosides (gynocardin)", "Harmala alkaloids (trace)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Abundant direct solar radiation promotes profuse bud initiation.",
      wateringFrequency: "Generous watering during summer vegetative surge; reduce in winter.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Moist, fertile, well-draining loamy garden soil",
      soilPh: "6.1 – 7.5",
      temperatureRange: "-10°C – 32°C (Remarkably cold-hardy for a passionflower, root-hardy down to -12°C)",
      hardinessZones: "USDA 7 – 10",
      humidityRequirement: "50% – 75%",
      fertilizerRecommendation: "High-potash tomato feed applied bi-weekly to encourage flowering rather than runaway vine growth."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fully ripe deep-orange egg-shaped fruit arils only"],
        flavorProfile: "Mildly sweet with subtle blackberry notes (far less acidic than Passiflora edulis)",
        culinaryUses: ["Fresh fruit snacking", "Jellies"],
        preparationWarnings: "NEVER consume green unripened fruits or foliage due to toxic cyanogenic glycoside content."
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Chrysin", "Vitexin", "Passiflorine"],
        traditionalApplications: ["Herbal tea infusions prepared from leaves for nervous restlessness and insomnia."],
        modernResearchNotes: "Flavonoid chrysin acts as a mild partial agonist at GABA-A benzodiazepine receptors."
      },
      ornamental: ["Trellis, arbor, and pergola cover", "Sensory garden specimen"],
      ecologicalBenefits: ["Primary larval host plant for Gulf Fritillary (Dione incarnata) and Zebra Longwing butterflies"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapid chewing damage on tender vine tips with striped caterpillars",
        probableCause: "Gulf Fritillary butterfly caterpillars feeding on host foliage",
        remedyAction: "Ecologically beneficial native butterfly larvae. Avoid chemical pesticides.",
        preventativeTip: "Vigorous vines readily outgrow caterpillar feeding in mature specimens."
      }
    ],
    confidenceScore: 98.9,
    alternativeMatches: [
      {
        specimenId: "specimen-passiflora-edulis",
        binomialName: "Passiflora edulis",
        commonName: "Purple Granadilla / Passionfruit",
        differentiatingNotes: "3-lobed serrated leaves rather than 5-lobed; produces renowned purple puckered edible fruit.",
        confidenceScore: 79.1
      }
    ]
  },

  // 7. Ficus Lyrata (Laboratory Specimen 7)
  {
    id: "specimen-ficus-lyrata",
    binomialName: "Ficus lyrata",
    botanicalAuthority: "Warb. (1894)",
    commonNames: ["Fiddle Leaf Fig", "Banjo Fig"],
    family: "Moraceae",
    genus: "Ficus",
    order: "Rosales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native West African lowland tropical rainforests)",
    nativeHabitat: "Lowland tropical rainforests from Cameroon to Sierra Leone",
    geographicDistribution: ["West Africa (Sierra Leone, Liberia, Côte d'Ivoire, Cameroon)"],
    climateZones: ["Tropical Wet (Af)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Ficus lyrata is a towering tropical tree that begins life high in the rainforest canopy as an epiphyte before sending aerial roots to ground. Named for its massive, violin-shaped (lyrate) coriaceous leaves with prominent palmate-pinnate venation, it has achieved legendary status in contemporary interior architecture.",
    morphology: {
      growthHabit: "Upright columnar evergreen banyan tree with gray bark",
      leafType: "Heavily coriaceous, fiddle-shaped, undulating margin, glossy dark emerald",
      phyllotaxy: "Spiral alternate",
      bloomPeriod: "Concealed syconia figs borne on mature specimens",
      matureHeight: "12m to 15m in nature; 2m to 3m indoors"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Oral irritation", "Excessive salivation", "Vomiting", "Contact dermatitis around mouth"],
        targetOrgans: ["Oral Cavity", "Skin"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Hypersalivation", "Paw scratching at face", "Vomiting"],
        targetOrgans: ["Oral Cavity", "Skin"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: true,
        notes: "Milky white sap contains proteolytic enzyme ficin and furocoumarins that induce cutaneous phytophotodermatitis upon sun exposure."
      },
      toxicCompounds: ["Ficin (proteolytic enzyme)", "Furocoumarins", "Insoluble calcium oxalates"]
    },
    careGuide: {
      sunlight: "Bright Indirect",
      sunlightDetails: "Requires copious bright indirect sunlight (2,000–4,000 Lux) near an east or unobstructed south window.",
      wateringFrequency: "Allow top 50% of the soil column to dry before watering deeply until liquid drains from container base.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Well-aerated fast-draining potting medium (peat, pine bark, perlite)",
      soilPh: "6.0 – 7.0",
      temperatureRange: "18°C – 28°C (Highly sensitive to cold drafts and sudden drops below 15°C)",
      hardinessZones: "USDA 10 – 12",
      humidityRequirement: "50% – 70%",
      fertilizerRecommendation: "High-nitrogen 3:1:2 foliage fertilizer applied monthly from March through October."
    },
    uses: {
      culinary: {
        edible: false,
        edibleParts: [],
        flavorProfile: "Inedible latex sap",
        culinaryUses: []
      },
      medicinal: {
        utilized: false,
        activePhytochemicals: ["Ficin", "Triterpenoids"],
        traditionalApplications: []
      },
      ornamental: ["High-impact architectural indoor tree", "Luxury lobby and gallery statement specimen"],
      ecologicalBenefits: ["Rainforest canopy shelter", "Efficient indoor particulate and VOC absorber"]
    },
    diagnosticGuide: [
      {
        symptom: "Dark brown necrotic patches starting in leaf centers and dropping lower foliage",
        probableCause: "Edema and fungal root rot triggered by chronic overwatering and inadequate light",
        remedyAction: "Prune affected roots, aerate soil, and relocate closer to bright light window.",
        preventativeTip: "Never allow container to sit in standing saucer drainage water."
      }
    ],
    confidenceScore: 97.4,
    alternativeMatches: [
      {
        specimenId: "specimen-ficus-elastica",
        binomialName: "Ficus elastica",
        commonName: "Rubber Tree / Burgundy Fig",
        differentiatingNotes: "Elliptic leaves with prominent central pinkish-red midrib and smooth tapering tip, lacking fiddle waist.",
        confidenceScore: 81.3
      }
    ]
  },

  // 8. Aloe Vera (Laboratory Specimen 8)
  {
    id: "specimen-aloe-vera",
    binomialName: "Aloe vera",
    botanicalAuthority: "(L.) Burm.f. (1768)",
    commonNames: ["True Aloe", "Barbados Aloe", "Burn Plant", "Medicine Plant"],
    family: "Asphodelaceae",
    genus: "Aloe",
    order: "Asparagales",
    taxonomicClass: "Succulent",
    conservationStatus: "NE",
    iucnDescription: "Not Evaluated (Extensively cultivated for over 4,000 years)",
    nativeHabitat: "Arid slopes and scrublands of the Arabian Peninsula",
    geographicDistribution: ["Oman", "Yemen", "Saudi Arabia", "Naturalized worldwide in subtropical belts"],
    climateZones: ["Hot Desert (BWh)", "Semi-arid (BSh)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Aloe vera is arguably humanity's most revered medicinal succulent. Its thick, fleshy, lanceolate leaves contain two distinct substances: a crystal-clear soothing polysaccharide gel located in the central parenchyma, and a yellow, bitter latex layer rich in anthraquinones directly beneath the outer dermis.",
    morphology: {
      growthHabit: "Acaulescent or very short-stemmed succulent clumping rosette",
      leafType: "Thick, succulent lanceolate leaves with white toothed margins",
      phyllotaxy: "Dense spiral rosette",
      bloomPeriod: "Early spring (yellow pendulous tubular flowers on 90cm spikes)",
      matureHeight: "0.6m to 1.0m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Severe diarrhea", "Lethargy", "Anorexia", "Tremors", "Red discoloration of urine"],
        targetOrgans: ["Gastrointestinal", "Renal"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Lethargy", "Central nervous system depression"],
        targetOrgans: ["Gastrointestinal", "Renal"]
      },
      humans: {
        toxic: false,
        severity: "Mild Contact Irritant",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Inner clear gel is benign and therapeutic. Yellow aloin latex lining the skin is a potent stimulant laxative and banned in OTC laxatives due to safety concerns."
      },
      toxicCompounds: ["Aloin (anthraquinone glycoside)", "Barbaloin"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Bright direct to strong filtered sunlight (minimum 6 hours daily).",
      wateringFrequency: "Allow root ball to dry out 100% between thorough waterings (every 3 to 4 weeks).",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Porous succulent grit blend (perlite, decomposed granite, coarse sand)",
      soilPh: "7.0 – 8.5 (Tolerates alkaline substrates well)",
      temperatureRange: "13°C – 35°C (Not frost tolerant; protect below 8°C)",
      hardinessZones: "USDA 9 – 11",
      humidityRequirement: "Low (< 40%)",
      fertilizerRecommendation: "Dilute 10-40-10 succulent fertilizer applied once in spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Thoroughly washed inner transparent fillet gel"],
        flavorProfile: "Mildly refreshing, water-dense, slight cucumber note",
        culinaryUses: ["Aloe beverage cubes", "Fruit smoothies", "Korean dessert jellies"],
        preparationWarnings: "Peel outer green rind completely and rinse away all bitter yellow aloin latex before culinary use."
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Acemannan", "Glucomannan", "Bradykinase", "Anthraquinones"],
        traditionalApplications: ["Topical application on thermal burns, sunburns, abrasions, and skin hydration."],
        modernResearchNotes: "Acemannan stimulates macrophage activity and accelerates collagen synthesis in cutaneous wound repair."
      },
      ornamental: ["Xeriscape garden accents", "Bright kitchen window planters"],
      ecologicalBenefits: ["CAM photosynthesis water conservation", "Nectar resource for sunbirds and bees"]
    },
    diagnosticGuide: [
      {
        symptom: "Fleshy leaves become mushy, brown, and collapse inward",
        probableCause: "Vascular root rot caused by watering during cold or low-light conditions",
        remedyAction: "Cease watering immediately. Remove soft rotten leaves and repot in dry gritty mineral soil.",
        preventativeTip: "Always pot in terracotta clay containers that permit sidewall moisture evaporation."
      }
    ],
    confidenceScore: 99.2,
    alternativeMatches: [
      {
        specimenId: "specimen-agave-americana",
        binomialName: "Agave americana",
        commonName: "Century Plant",
        differentiatingNotes: "Much larger, fibrous leaves with sharp lethal terminal spine; contains calcium oxalate needle sap.",
        confidenceScore: 74.8
      }
    ]
  },

  // 9. Citrus x Meyeri (Laboratory Specimen 9)
  {
    id: "specimen-citrus-meyeri",
    binomialName: "Citrus x meyeri",
    botanicalAuthority: "Yu.Tanaka (1946)",
    commonNames: ["Meyer Lemon", "Valley Lemon"],
    family: "Rutaceae",
    genus: "Citrus",
    order: "Sapindales",
    taxonomicClass: "Fruit",
    conservationStatus: "NE",
    iucnDescription: "Not Evaluated (Naturally occurring hybrid of citron and mandarin/pomelo origin)",
    nativeHabitat: "Subtropical river valleys and garden orchards of China",
    geographicDistribution: ["China", "California", "Florida", "Mediterranean basin"],
    climateZones: ["Humid Subtropical (Cfa)", "Mediterranean (Csa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Introduced to the West in 1908 by botanical explorer Frank Meyer, the Meyer Lemon is a prized hybrid between a true lemon (*Citrus limon*) and a sweet mandarin (*Citrus reticulata*). It bears thin-skinned, rounded golden fruits that lack the biting sourness of commercial Eureka lemons, carrying a bouquet reminiscent of floral orange blossom and thyme.",
    morphology: {
      growthHabit: "Compact evergreen dwarf citrus tree or large shrub",
      leafType: "Glossy, dark green, elliptical with slightly winged petioles",
      phyllotaxy: "Alternate",
      bloomPeriod: "Recurrent year-round (highly fragrant white flowers with purple base)",
      matureHeight: "2m to 3m (easily maintained at 1.5m in containers)"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Depression", "Photosensitivity if essential peel oil ingested"],
        targetOrgans: ["Gastrointestinal", "Hepatic"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Gastrointestinal irritation", "Tremors if large peel quantities consumed"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Fruit and zest are delicious and safe. Peel oil contains psoralens that may cause mild phototoxicity on sensitive skin if exposed to direct sun."
      },
      toxicCompounds: ["Limonene", "Linalool", "Psoralens (in rind oil)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Requires 8–10 hours of bright unfiltered sunlight. Supplemental LED grow light beneficial indoors in winter.",
      wateringFrequency: "Keep soil moderately moist, allowing the top 4cm to dry before watering until runoff occurs.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Acidic, sandy-loam citrus mix with excellent drainage",
      soilPh: "5.5 – 6.5 (Strictly slightly acidic to avert iron chlorosis)",
      temperatureRange: "15°C – 32°C (Hardier than standard lemons, tolerating brief dips to -3°C)",
      hardinessZones: "USDA 9 – 11",
      humidityRequirement: "50% – 70%",
      fertilizerRecommendation: "Citrus-specific formulation fortified with iron, zinc, and magnesium every 4 weeks during growth."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Juice", "Zest", "Whole thin rind"],
        flavorProfile: "Sweet-tart citrus with subtle herbal mandarin and honey nuances",
        culinaryUses: ["Meyer lemon meringue pie", "Lemon curd", "Roast chicken pan jus", "Preserved Meyer lemons"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Ascorbic acid (Vitamin C)", "Hesperidin", "Eriocitrin", "D-limonene"],
        traditionalApplications: ["Antiscorbutic tonic and digestive stimulant."],
        modernResearchNotes: "Citrus flavonoids demonstrate significant vascular protection and lipid peroxidation inhibition."
      },
      ornamental: ["Patio container tree with year-round blossom fragrance and golden fruit"],
      ecologicalBenefits: ["High nectar flow for honeybees and swallowtail butterfly larvae"]
    },
    diagnosticGuide: [
      {
        symptom: "Young leaves emerge pale yellow with distinct green veins (interveinal chlorosis)",
        probableCause: "Iron or micronutrient deficiency triggered by alkaline substrate pH (> 7.0)",
        remedyAction: "Apply chelated iron foliar spray and amend soil with elemental sulfur to lower pH.",
        preventativeTip: "Avoid irrigating with hard, mineral-heavy alkaline tap water."
      }
    ],
    confidenceScore: 98.6,
    alternativeMatches: [
      {
        specimenId: "specimen-citrus-limon",
        binomialName: "Citrus limon",
        commonName: "Eureka Lemon",
        differentiatingNotes: "Thicker bumpy yellow rind, sharply pointed fruit tip, intensely acidic pulp lacking mandarin sweetness.",
        confidenceScore: 82.5
      }
    ]
  },

  // 10. Chamaemelum Nobile (Laboratory Specimen 10)
  {
    id: "specimen-chamaemelum-nobile",
    binomialName: "Chamaemelum nobile",
    botanicalAuthority: "(L.) All. (1785)",
    commonNames: ["Roman Chamomile", "English Chamomile", "Garden Chamomile", "Lawn Chamomile"],
    family: "Asteraceae",
    genus: "Chamaemelum",
    order: "Asterales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Western Europe grasslands)",
    nativeHabitat: "Dry commons, damp pastures, and gravelly heaths across Western Europe",
    geographicDistribution: ["United Kingdom", "France", "Spain", "Portugal", "North Africa"],
    climateZones: ["Temperate Oceanic (Cfb)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Chamaemelum nobile is a low-growing, creeping perennial herb celebrated for its apple-scented, feathery bipinnate leaves and charming daisy-like solitary flower heads. In Elizabethan England, it was cultivated as a fragrant, resilient 'chamomile lawn' that released soothing aromas when trodden underfoot.",
    morphology: {
      growthHabit: "Prostrate spreading stoloniferous evergreen perennial herb",
      leafType: "Finely dissected 2-3 pinnatisect downy leaves with sweet apple fragrance",
      phyllotaxy: "Alternate",
      bloomPeriod: "Early summer to mid-autumn (white ray florets with solid yellow conical disc)",
      matureHeight: "0.1m to 0.3m height, spreading 0.5m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Vomiting", "Diarrhea", "Contact allergic dermatitis", "Anorexia with chronic ingestion"],
        targetOrgans: ["Gastrointestinal", "Dermal"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Gastrointestinal upset", "Allergic reaction in sensitive canines"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Safe for most humans. Individuals with severe ragweed/Asteraceae pollen allergies may experience mild cross-reactive contact dermatitis."
      },
      toxicCompounds: ["Bisabolol", "Chamazulene", "Anthemic acid", "Tannins"],
      lookalikeWarning: {
        id: "lookalike-anthemis-cotula",
        binomialName: "Anthemis cotula",
        commonName: "Stinking Mayweed / Dog Chamomile",
        toxicityTier: "Moderate Systemic Danger",
        fatalHazard: false,
        lethalToxin: "Anthecotulid (potent contact sesquiterpene lactone allergen)",
        primaryDistinguishingFeatures: {
          stem: "Erect branching stem lacking creeping stolons",
          foliage: "Foul, acrid, nauseating odor when crushed (vs sweet fresh green-apple scent of true chamomile)",
          root: "Slender annual taproot rather than fibrous perennial stolons",
          flowers: "Receptacle is solid and scaly; causes blistering on lips if brewed"
        },
        warningBanner: "FORAGING HAZARD: Avoid plants emitting a pungent/fetid odor. True chamomile MUST smell distinctly of fresh sweet apple."
      }
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Thrives in full sun to very light dappled shade (minimum 5 hours sun).",
      wateringFrequency: "Moderate during establishment; drought tolerant once roots establish in soil.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Light, sandy, well-draining soil with low fertility (excess nitrogen reduces fragrance)",
      soilPh: "5.5 – 7.0",
      temperatureRange: "-20°C – 30°C (Fully frost-hardy down to USDA Zone 4)",
      hardinessZones: "USDA 4 – 9",
      humidityRequirement: "Adaptable (30% – 60%)",
      fertilizerRecommendation: "Minimal feeding; light compost topdressing in spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Dried daisy-like flower heads"],
        flavorProfile: "Sweet floral notes with mild green apple and honey warmth",
        culinaryUses: ["Classic herbal tisane", "Chamomile syrup for cocktails", "Infused panna cotta"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Chamazulene", "Apigenin", "Alpha-bisabolol", "Flavonoids"],
        traditionalApplications: ["Sedative tea for insomnia, mild digestive calmative, anti-spasmodic."],
        modernResearchNotes: "Apigenin binds to benzodiazepine receptors in the brain, exerting anxiolytic effects."
      },
      ornamental: ["Fragrant chamomile lawn pathway", "Rock garden edging"],
      ecologicalBenefits: ["Attracts hoverflies, predatory wasps, and ladybirds that consume garden aphids"]
    },
    diagnosticGuide: [
      {
        symptom: "Foliage becomes thin, pale, and leggy with sparse flowers",
        probableCause: "Excessive shade or over-fertilization with nitrogen-rich feed",
        remedyAction: "Relocate to an open, sunny exposure and cease all synthetic fertilizer additions.",
        preventativeTip: "Mow or shear flower stalks after bloom to encourage dense stoloniferous branching."
      }
    ],
    confidenceScore: 98.4,
    alternativeMatches: [
      {
        specimenId: "specimen-matricaria-chamomilla",
        binomialName: "Matricaria chamomilla",
        commonName: "German Chamomile",
        differentiatingNotes: "Upright annual with hollow yellow flower receptacle; higher chamazulene concentration.",
        confidenceScore: 88.0
      }
    ]
  },

  // 11. Sansevieria Trifasciata (Laboratory Specimen 11)
  {
    id: "specimen-dracaena-trifasciata",
    binomialName: "Dracaena trifasciata",
    botanicalAuthority: "(Prain) Mabb. (2017) [syn. Sansevieria trifasciata]",
    commonNames: ["Snake Plant", "Mother-in-Law's Tongue", "Viper's Bowstring Hemp", "Saint George's Sword"],
    family: "Asparagaceae",
    genus: "Dracaena",
    order: "Asparagales",
    taxonomicClass: "Succulent",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to West African tropical scrub)",
    nativeHabitat: "Dry rocky scrub and arid tropical forests from Nigeria to the Congo",
    geographicDistribution: ["Nigeria", "Democratic Republic of the Congo", "Tropical West Africa"],
    climateZones: ["Tropical Savanna (Aw)", "Semi-arid (BSh)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1599598425947-63098d5c3162?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1599598425947-63098d5c3162?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Dracaena trifasciata (historically classified as Sansevieria) is an indestructible succulent famous for its rigid, sword-like vertical leaves patterned with undulating gray-green transverse bands. In its native Nigeria, strong bast fibers extracted from the foliage were historically utilized to manufacture ultra-resilient bowstrings and fishing cords.",
    morphology: {
      growthHabit: "Stemless evergreen perennial spreading via subterranean rhizomes",
      leafType: "Erect, rigid, sword-shaped succulent foliage with sharp point",
      phyllotaxy: "Basal rosette with tight vertical habit",
      bloomPeriod: "Occasional (fragrant greenish-white night-blooming racemes)",
      matureHeight: "0.7m to 1.2m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Hypersalivation", "Nausea", "Vomiting", "Diarrhea", "Depression"],
        targetOrgans: ["Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Abdominal pain", "Lethargy"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Contains saponins that induce gastrointestinal irritation and nausea if chewed."
      },
      toxicCompounds: ["Saponins", "Organic acids"]
    },
    careGuide: {
      sunlight: "Deep Shade",
      sunlightDetails: "Incredibly adaptable: flourishes from deep dim shade (200 Lux) up to full blazing sun.",
      wateringFrequency: "Allow potting substrate to become bone dry throughout the entire pot depth before watering.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Porous mineral-rich succulent cactus substrate",
      soilPh: "5.5 – 7.5",
      temperatureRange: "15°C – 35°C (Avoid temperatures below 10°C)",
      hardinessZones: "USDA 10 – 12",
      humidityRequirement: "Tolerates dry interior heating air exceptionally well (< 30%)",
      fertilizerRecommendation: "Light half-strength feeding once in late spring; none needed in winter."
    },
    uses: {
      culinary: {
        edible: false,
        edibleParts: [],
        flavorProfile: "Toxic saponin foliage",
        culinaryUses: []
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Steroidal saponins", "Flavonoids"],
        traditionalApplications: ["Poultice applied to snakebites in traditional Nigerian folk medicine."],
        modernResearchNotes: "Studies evaluate antioxidant and antimicrobial properties of leaf extracts."
      },
      ornamental: ["Architectural low-maintenance interior foliage", "Clean-line modern offices"],
      ecologicalBenefits: ["NASA clean air research highlighted night-time oxygen release via CAM metabolism", "Formaldehyde absorption"]
    },
    diagnosticGuide: [
      {
        symptom: "Leaves turn wrinkled, wrinkled, soft and collapse near soil level with foul smell",
        probableCause: "Bacterial soft rot (Erwinia) from overwatering in dense, non-draining soil",
        remedyAction: "Excavate undamaged rhizomes, prune away mushy tissue, air dry, and repot in dry grit.",
        preventativeTip: "When in doubt, wait an extra week before watering; drought never kills this plant."
      }
    ],
    confidenceScore: 99.5,
    alternativeMatches: [
      {
        specimenId: "specimen-dracaena-cylindrica",
        binomialName: "Dracaena cylindrica",
        commonName: "Cylindrical Snake Plant",
        differentiatingNotes: "Thick round tubular foliage like arching green rods without flat blades.",
        confidenceScore: 84.1
      }
    ]
  },

  // 12. Fragaria Vesca (Laboratory Specimen 12)
  {
    id: "specimen-fragaria-vesca",
    binomialName: "Fragaria vesca",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Wild Strawberry", "Woodland Strawberry", "Alpine Strawberry", "Fraises des Bois"],
    family: "Rosaceae",
    genus: "Fragaria",
    order: "Rosales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Widespread in northern hemisphere woodlands)",
    nativeHabitat: "Forest edges, mountain glades, light woodlands, and railway embankments",
    geographicDistribution: ["Eurasia", "North America", "Temperate worldwide naturalization"],
    climateZones: ["Temperate Oceanic (Cfb)", "Continental (Dfb)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1543157148-f815da353577?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1543157148-f815da353577?auto=format&fit=crop&w=800&q=80"
    ],
    overviewMonograph: "Fragaria vesca, the wild woodland strawberry, has delighted foragers since the Neolithic era. Although its petite scarlet berries are diminutive compared to modern garden hybrids (*Fragaria x ananassa*), its aromatic intensity is unmatched—exploding with concentrated floral sweetness that perfumed medieval royal banquets across Europe.",
    morphology: {
      growthHabit: "Herbaceous stoloniferous perennial groundcover",
      leafType: "Trifoliate with strongly serrated ovate leaflets, silkily hairy beneath",
      phyllotaxy: "Basal rosette",
      bloomPeriod: "Spring to mid-summer (5-petaled pure white blossoms with yellow center)",
      matureHeight: "0.15m to 0.25m height, spreading via runners"
    },
    toxicity: {
      cats: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: [],
        targetOrgans: []
      },
      dogs: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: [],
        targetOrgans: []
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Edible and nutritious. Contains high vitamin C and ellagic acid antioxidants."
      },
      toxicCompounds: ["None (Non-toxic)"],
      lookalikeWarning: {
        id: "lookalike-potentilla-indica",
        binomialName: "Potentilla indica",
        commonName: "Indian Strawberry / Mock Strawberry",
        toxicityTier: "Mild Oral/GI Irritant",
        fatalHazard: false,
        lethalToxin: "Low toxicity saponins; non-lethal but provokes stomach ache",
        primaryDistinguishingFeatures: {
          stem: "Similar creeping stolons",
          foliage: "Coarser, darker wrinkled leaflets",
          root: "Fibrous crown",
          flowers: "BRIGHT YELLOW FLOWERS (True wild strawberry blossoms are ALWAYS pure white) and bumpy fruit pointing straight upward with zero sweet flavor"
        },
        warningBanner: "FORAGING COMPARISON: True Wild Strawberry always bears PURE WHITE PETALS and fragrant sweet drooping fruit. If flowers are yellow, it is Mock Strawberry."
      }
    },
    careGuide: {
      sunlight: "Partial Shade / Dappled",
      sunlightDetails: "Morning sun with filtered woodland shade during harsh afternoon heat.",
      wateringFrequency: "Keep root zone consistently moist; strawberries have shallow fibrous roots.",
      wateringMetric: "Moist",
      hygrometerPips: 4,
      soilType: "Rich humus-rich woodland loam amended with leaf mold and compost",
      soilPh: "5.8 – 6.8",
      temperatureRange: "-30°C – 28°C (Extreme cold hardiness down to USDA Zone 3)",
      hardinessZones: "USDA 3 – 9",
      humidityRequirement: "Moderate to high (45% – 70%)",
      fertilizerRecommendation: "Organic compost tea or high-potash organic berry fertilizer."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Ripe berries", "Young dried leaves for tea"],
        flavorProfile: "Concentrated floral perfume, intense wild strawberry sugar, delicate acidity",
        culinaryUses: ["Fresh foraging delicacies", "French fraises des bois tarts", "Wild strawberry confiture"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Fragarin", "Ellagitannins", "Flavonoids", "Vitamin C"],
        traditionalApplications: ["Leaf tea used as a mild astringent gargle for sore throats and mild diarrhea."],
        modernResearchNotes: "High concentrations of ellagitannins exhibit potent anti-inflammatory properties."
      },
      ornamental: ["Edible groundcover in dappled orchard understories", "Alpine rockery borders"],
      ecologicalBenefits: ["Early season pollen for bumblebees", "Food source for woodland birds and small mammals"]
    },
    diagnosticGuide: [
      {
        symptom: "White powdery dusting covering upper leaf surfaces with curling leaf edges",
        probableCause: "Powdery mildew (Podosphaera aphanis) fungal spore outbreak in humid stagnant air",
        remedyAction: "Improve air circulation; apply organic potassium bicarbonate or diluted milk spray (1:9).",
        preventativeTip: "Space plants adequately and irrigate at soil base to keep leaves dry."
      }
    ],
    confidenceScore: 99.0,
    alternativeMatches: [
      {
        specimenId: "specimen-fragaria-chiloensis",
        binomialName: "Fragaria chiloensis",
        commonName: "Beach Strawberry",
        differentiatingNotes: "Thicker leathery leaves with dense white silky hairs beneath; adapted to coastal dunes.",
        confidenceScore: 79.4
      }
    ]
  },

  // 13. Rosmarinus Officinalis (Salvia rosmarinus)
  {
    id: "specimen-salvia-rosmarinus",
    binomialName: "Salvia rosmarinus",
    botanicalAuthority: "Spenn. (1835) [syn. Rosmarinus officinalis]",
    commonNames: ["Rosemary", "Dew of the Sea", "Compass Plant"],
    family: "Lamiaceae",
    genus: "Salvia",
    order: "Lamiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native Mediterranean coastal scrub)",
    nativeHabitat: "Coastal cliffs, rocky limestone terraces, and maritime dunes",
    geographicDistribution: ["Mediterranean Basin", "Southern Europe", "Levant"],
    climateZones: ["Mediterranean (Csa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1515586000433-a5bc1a388f21?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1515586000433-a5bc1a388f21?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Salvia rosmarinus is an aromatic evergreen shrub with dark green needle-like foliage and azure blossoms. Revered since antiquity as a botanical symbol of memory and fidelity, its resinous foliage is loaded with carnosic acid and rosmarinic acid.",
    morphology: {
      growthHabit: "Woody evergreen shrub with ascending or sprawling branches",
      leafType: "Linear, revolute needle-like leaves with white down beneath",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Spring through autumn (two-lipped pale blue to violet flowers)",
      matureHeight: "0.8m to 1.5m"
    },
    toxicity: {
      cats: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: [],
        targetOrgans: []
      },
      dogs: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Safe in moderation as culinary seasoning"],
        targetOrgans: []
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Culinary foliage is non-toxic. Undiluted essential rosemary oil must not be ingested."
      },
      toxicCompounds: ["Carnosic acid", "Rosmarinic acid", "Camphor (in concentrated essential oil)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6–8 hours direct sunlight.",
      wateringFrequency: "Allow soil to dry thoroughly between waterings.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Sandy, rocky, gritty soil with excellent drainage",
      soilPh: "6.0 – 7.5",
      temperatureRange: "-10°C – 35°C",
      hardinessZones: "USDA 7 – 10",
      humidityRequirement: "Low (< 45%)",
      fertilizerRecommendation: "Rarely needs fertilizer. Light compost in spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh or dried leaves", "Blue edible flowers"],
        flavorProfile: "Pungent pine, camphor, woodsy citrus notes",
        culinaryUses: ["Roast lamb, potatoes, focaccia bread, infused olive oils"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Carnosic acid", "Rosmarinic acid", "1,8-cineole"],
        traditionalApplications: ["Cognitive clarity, scalp circulation tonic."],
        modernResearchNotes: "Carnosic acid provides neuroprotective and powerful lipid antioxidant benefits."
      },
      ornamental: ["Mediterranean drought-tolerant borders", "Maritime topiary"],
      ecologicalBenefits: ["Early season nectar for native honeybees and bumblebees"]
    },
    diagnosticGuide: [
      {
        symptom: "White webbing with tiny speckled yellow leaf dots",
        probableCause: "Spider mites in dry dusty conditions",
        remedyAction: "Spray forcefully with water or horticultural insecticidal soap.",
        preventativeTip: "Increase airflow and avoid severe drought stress."
      }
    ]
  },

  // 14. Helianthus Annuus
  {
    id: "specimen-helianthus-annuus",
    binomialName: "Helianthus annuus",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Common Sunflower", "Girasol", "Mirabilis"],
    family: "Asteraceae",
    genus: "Helianthus",
    order: "Asterales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native North American prairie flora)",
    nativeHabitat: "Plains, open prairies, and disturbed roadsides across North America",
    geographicDistribution: ["North America", "Extensively cultivated worldwide"],
    climateZones: ["Temperate", "Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Helianthus annuus is famous for heliotropism in immature flower buds tracking the path of the sun. The colossal composite flower heads feature hundreds of disc florets arranged in interlocking Fibonacci spirals.",
    morphology: {
      growthHabit: "Tall, erect, coarse, rough-hairy annual herb",
      leafType: "Broad ovate to cordate, coarsely serrate leaves with rough hispid hairs",
      phyllotaxy: "Alternate (lower leaves opposite)",
      bloomPeriod: "Mid to late summer",
      matureHeight: "1.5m to 3.5m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Nutrient-rich seeds and edible golden petals."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Demands uninterrupted direct solar exposure (7–9 hours).",
      wateringFrequency: "Regular deep watering during rapid vertical growth.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Deep, fertile, well-draining loamy garden soil",
      soilPh: "6.0 – 7.5",
      temperatureRange: "18°C – 35°C",
      hardinessZones: "USDA 2 – 11 (Annual)",
      humidityRequirement: "40% – 60%",
      fertilizerRecommendation: "Phosphorus-rich organic feed as flower bud begins setting."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Roasted seeds", "Cold-pressed oil", "Young flower petals"],
        flavorProfile: "Nutty, rich, buttery",
        culinaryUses: ["Sunflower seed butter, artisanal breads, salad seed crunch"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Vitamin E (alpha-tocopherol)", "Phytosterols", "Linoleic acid"],
        traditionalApplications: ["Native American seeds used for stamina and pulmonary health."],
        modernResearchNotes: "High vitamin E and phytosterol content supports cardiovascular lipid balance."
      },
      ornamental: ["Cottage gardens, cut flower displays, living garden walls"],
      ecologicalBenefits: ["Massive nectar and pollen source; seed heads sustain winter wild birds"]
    },
    diagnosticGuide: [
      {
        symptom: "Stems bent over with snapped hollow bases",
        probableCause: "High wind damage without supportive staking",
        remedyAction: "Stake stems securely when plants reach 1 meter tall.",
        preventativeTip: "Plant in groups to create mutually sheltered windbreaks."
      }
    ]
  },

  // 15. Quercus Robur (English Oak)
  {
    id: "specimen-quercus-robur",
    binomialName: "Quercus robur",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Pedunculate Oak", "English Oak", "French Oak"],
    family: "Fagaceae",
    genus: "Quercus",
    order: "Fagales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Keystone European woodland climax species)",
    nativeHabitat: "Lowland deciduous woodlands and river floodplains across Europe",
    geographicDistribution: ["Europe", "Anatolia", "Caucasus"],
    climateZones: ["Temperate Oceanic (Cfb)", "Continental (Dfb)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Quercus robur is the legendary sovereign of European forests, capable of living over 1,000 years. A keystone ecological anchor, a single mature English oak supports over 2,300 species of birds, insects, lichens, and fungi.",
    morphology: {
      growthHabit: "Massive deciduous broadleaf tree with rugged deeply fissured bark",
      leafType: "Obovate, pinnately lobed with 4–7 pairs of rounded lobes and auriculate base",
      phyllotaxy: "Alternate clustered at twig ends",
      bloomPeriod: "Mid spring (catkins appearing with young leaves)",
      matureHeight: "20m to 40m with wide spreading crown"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Vomiting", "Lethargy if acorns chewed in quantity"],
        targetOrgans: ["Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Abdominal pain", "Vomiting", "Diarrhea", "Kidney stress if raw green acorns ingested"],
        targetOrgans: ["Gastrointestinal", "Renal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Raw acorns contain high astringent gallotannins; must be hot-water leached prior to consumption."
      },
      toxicCompounds: ["Gallotannins", "Ellagitannins (in raw green acorns)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Requires open full sun canopy.",
      wateringFrequency: "Self-sufficient once established with deep taproot.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Deep, rich, moisture-retentive clay-loam",
      soilPh: "5.5 – 7.5",
      temperatureRange: "-25°C – 35°C",
      hardinessZones: "USDA 4 – 8",
      humidityRequirement: "40% – 70%",
      fertilizerRecommendation: "None required in native ground."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Leached acorn nutmeat"],
        flavorProfile: "Rich nutty, earthy flavor once tannins leached",
        culinaryUses: ["Acorn flour flatbreads, Korean dotorimuk acorn jelly"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Quercetin", "Catechins", "Ellagic acid", "Tannins"],
        traditionalApplications: ["Oak bark decoctions used for astringent wound washes and gum health."],
        modernResearchNotes: "High tannin content provides antiseptic and vascular astringent properties."
      },
      ornamental: ["Majestic parkland specimen", "Generational heritage tree"],
      ecologicalBenefits: ["Apex biodiversity anchor supporting over 2,300 species", "Massive carbon sequestration"]
    },
    diagnosticGuide: [
      {
        symptom: "Foliage covered in fine white mildew coating in late summer",
        probableCause: "Oak powdery mildew (Erysiphe alphitoides)",
        remedyAction: "Generally cosmetic on mature trees; rarely warrants chemical intervention.",
        preventativeTip: "Ensure open spacing and adequate soil moisture during summer."
      }
    ]
  },

  // 16. Mentha x Piperita (Peppermint)
  {
    id: "specimen-mentha-piperita",
    binomialName: "Mentha x piperita",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Peppermint", "Brandy Mint", "Balm Mint"],
    family: "Lamiaceae",
    genus: "Mentha",
    order: "Lamiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Sterile hybrid of spearmint and watermint)",
    nativeHabitat: "Damp stream banks, drainage swales, and moist meadows",
    geographicDistribution: ["Europe", "Cultivated globally"],
    climateZones: ["Temperate", "Subtropical"],
    primaryImageUrl: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "A sterile hybrid of watermint (*Mentha aquatica*) and spearmint (*Mentha spicata*), peppermint is famous for its high menthol content that activates TRPM8 cold-sensitive receptors in mammals, producing an icy cooling sensation.",
    morphology: {
      growthHabit: "Herbaceous stoloniferous perennial with square reddish-purple stems",
      leafType: "Lanceolate, serrate, dark green leaves with prominent veins",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Mid to late summer (purple whorled spikes)",
      matureHeight: "0.3m to 0.9m, spreading aggressively"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Vomiting", "Diarrhea if large quantities of foliage consumed"],
        targetOrgans: ["Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Mild stomach upset with excessive ingestion"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Safe for food and teas. Pure menthol oil should not be applied to faces of infants."
      },
      toxicCompounds: ["Menthol", "Menthone", "Pulegone (in trace quantities)"]
    },
    careGuide: {
      sunlight: "Partial Shade / Dappled",
      sunlightDetails: "Prefers morning sun and afternoon shade.",
      wateringFrequency: "Keep soil consistently damp; does not tolerate drying out.",
      wateringMetric: "High",
      hygrometerPips: 4,
      soilType: "Rich, moist, organic loam",
      soilPh: "6.0 – 7.0",
      temperatureRange: "-20°C – 30°C",
      hardinessZones: "USDA 3 – 11",
      humidityRequirement: "50% – 80%",
      fertilizerRecommendation: "Organic compost; vigorous grower that requires no heavy feeding."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh or dried leaves"],
        flavorProfile: "Cool, crisp menthol with sweet peppery warmth",
        culinaryUses: ["Moroccan mint tea, chocolate mint desserts, mojitos, lamb sauces"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Menthol", "Menthone", "Rosmarinic acid", "Limonene"],
        traditionalApplications: ["Antispasmodic for digestive cramps, IBS symptom relief, tension headache soothing."],
        modernResearchNotes: "Enteric-coated peppermint oil is clinically proven to relax gastrointestinal smooth muscle."
      },
      ornamental: ["Container herb, pollinator border"],
      ecologicalBenefits: ["Attracts beneficial hoverflies and honeybees; strong scent deters garden rodents"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapidly invading adjacent garden beds and crowding out other plants",
        probableCause: "Unchecked subterranean stolon spread",
        remedyAction: "Grow strictly in isolated containers or sunken buried tubs.",
        preventativeTip: "Cut back before runners escape potting edges."
      }
    ]
  },

  // 17. Crassula Ovata (Jade Plant)
  {
    id: "specimen-crassula-ovata",
    binomialName: "Crassula ovata",
    botanicalAuthority: "(Mill.) Druce (1917)",
    commonNames: ["Jade Plant", "Money Tree", "Lucky Plant", "Friendship Tree"],
    family: "Crassulaceae",
    genus: "Crassula",
    order: "Saxifragales",
    taxonomicClass: "Succulent",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to rocky slopes of South Africa)",
    nativeHabitat: "Valley thickets and rocky quartzite slopes of the Eastern Cape",
    geographicDistribution: ["South Africa", "Mozambique"],
    climateZones: ["Semi-arid (BSh)", "Subtropical"],
    primaryImageUrl: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Crassula ovata is a cherished succulent with thick, fleshy, jade-green obovate leaves that develop a red rim in bright sun. Known in Feng Shui as a bearer of financial prosperity, it can grow into a magnificent bonsai-like miniature tree spanning decades.",
    morphology: {
      growthHabit: "Succulent evergreen branched subshrub with thick woody stems",
      leafType: "Obovate, fleshy, glabrous jade-green leaves, sometimes red-margined",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Winter (star-shaped white to pink clusters)",
      matureHeight: "1m to 2.5m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Depression", "Ataxia", "Slow heart rate (bradycardia)"],
        targetOrgans: ["Gastrointestinal", "Neurological"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Lethargy", "Incoordination"],
        targetOrgans: ["Gastrointestinal", "Neurological"]
      },
      humans: {
        toxic: false,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: true,
        notes: "Mildly toxic if ingested in quantity. Sap may cause slight skin irritation."
      },
      toxicCompounds: ["Unknown toxic principle (potentially bufadienolide-like glycosides)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 4–6 hours of direct solar radiation.",
      wateringFrequency: "Allow soil to completely dry between waterings.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Fast-draining gritty cactus mix with pumice",
      soilPh: "6.0 – 6.8",
      temperatureRange: "10°C – 32°C (Not frost-hardy, keep above 5°C)",
      hardinessZones: "USDA 10 – 11",
      humidityRequirement: "Low (30% – 50%)",
      fertilizerRecommendation: "Dilute succulent feed once in late spring."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible", culinaryUses: [] },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Polysaccharides", "Phenolic acids"],
        traditionalApplications: ["Khoi and San folk remedy for corns and diarrhea."],
        modernResearchNotes: "Preliminary studies on antioxidant leaf extracts."
      },
      ornamental: ["Classic indoor bonsai specimen", "Rockery succulent display"],
      ecologicalBenefits: ["Drought-tolerant water-saving CAM metabolism"]
    },
    diagnosticGuide: [
      {
        symptom: "Plump leaves drop easily with slight touch",
        probableCause: "Waterlogging at the root zone causing leaf abscission",
        remedyAction: "Withhold water until potting soil is completely dry.",
        preventativeTip: "Plant in unglazed clay terracotta containers."
      }
    ]
  },

  // 18. Salvia Officinalis (Common Sage)
  {
    id: "specimen-salvia-officinalis",
    binomialName: "Salvia officinalis",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Common Sage", "Garden Sage", "Culinary Sage"],
    family: "Lamiaceae",
    genus: "Salvia",
    order: "Lamiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to northern Mediterranean basin)",
    nativeHabitat: "Dry rocky scrub and limestone slopes of the Adriatic",
    geographicDistribution: ["Balkan Peninsula", "Italy", "Southern Europe"],
    climateZones: ["Mediterranean (Csa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Salvia officinalis has been cultivated since antiquity for its culinary depth and medicinal esteem. Its species name *officinalis* denotes its historical status in monastic apothecary formularies as a supreme healing herb.",
    morphology: {
      growthHabit: "Woody evergreen subshrub with grayish-green wrinkled leaves",
      leafType: "Oblong, rugose, velvet-textured with fine woolly hairs",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Early summer (whorls of purple-blue flowers)",
      matureHeight: "0.5m to 0.8m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Edible culinary herb. Excessive consumption of concentrated essential oil over extended periods should be avoided due to thujone content."
      },
      toxicCompounds: ["Thujone (in concentrated oil)", "Cineole", "Camphor"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Thrives in 6–8 hours of hot sun.",
      wateringFrequency: "Let dry between waterings; extremely drought tolerant.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Lean, well-drained sandy or limestone gravel soil",
      soilPh: "6.5 – 7.5",
      temperatureRange: "-15°C – 35°C",
      hardinessZones: "USDA 4 – 8",
      humidityRequirement: "Low (< 50%)",
      fertilizerRecommendation: "Avoid excess nitrogen to preserve pungent essential oils."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Velvety leaves", "Flowers"],
        flavorProfile: "Earthy, peppery, camphor-like with savory depth",
        culinaryUses: ["Brown butter sage sauce for gnocchi, poultry seasoning, saltimbocca"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Rosmarinic acid", "Carnosic acid", "Salvin", "Thujone"],
        traditionalApplications: ["Antiseptic throat gargle, memory tonic, hot flash alleviation."],
        modernResearchNotes: "Rosmarinic acid exerts potent free radical scavenging and cognitive enhancement."
      },
      ornamental: ["Silver-gray border foliage", "Sensory herb garden"],
      ecologicalBenefits: ["High nectar flow attracts bees and beneficial insects"]
    },
    diagnosticGuide: [
      {
        symptom: "Foliage turns black and stems collapse during wet spring",
        probableCause: "Excess soil moisture causing root suffocation",
        remedyAction: "Improve soil drainage with gravel and plant on raised mounds.",
        preventativeTip: "Cut back old woody stems in spring to stimulate fresh airflow."
      }
    ]
  },

  // 19. Rosa Damascena (Damask Rose)
  {
    id: "specimen-rosa-damascena",
    binomialName: "Rosa x damascena",
    botanicalAuthority: "Herrm. (1762)",
    commonNames: ["Damask Rose", "Rose of Castile", "Attar Rose"],
    family: "Rosaceae",
    genus: "Rosa",
    order: "Rosales",
    taxonomicClass: "Flower",
    conservationStatus: "NE",
    iucnDescription: "Not Evaluated (Historic hybrid rose cultivated for attar of roses)",
    nativeHabitat: "Cultivated valley terraces of Bulgaria, Turkey, and Iran",
    geographicDistribution: ["Bulgaria (Rose Valley)", "Turkey (Isparta)", "Iran (Kashan)"],
    climateZones: ["Temperate", "Mediterranean"],
    primaryImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Rosa x damascena is renowned as the ultimate perfume rose, distilled for centuries to produce precious 'Attar of Roses' and rose water. Its intensely fragrant, double-petaled pink blooms are harvested by hand at dawn before the midday sun dissipates their volatile aromatic oils.",
    morphology: {
      growthHabit: "Deciduous thorny sprawling shrub",
      leafType: "Pinnate with 5–7 ovate serrate leaflets, glandular beneath",
      phyllotaxy: "Alternate",
      bloomPeriod: "Early summer for 4-5 weeks of profuse bloom",
      matureHeight: "1.5m to 2.2m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Petals and hips are completely non-toxic and prized for food and drinks."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs at least 6 hours of full direct sun.",
      wateringFrequency: "Deep watering at the base once a week.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Rich, fertile, humus-heavy loamy garden soil with clay subsoil",
      soilPh: "6.0 – 6.8",
      temperatureRange: "-20°C – 32°C",
      hardinessZones: "USDA 5 – 9",
      humidityRequirement: "40% – 60%",
      fertilizerRecommendation: "Organic compost and rose fertilizer applied in early spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Rose petals", "Rose water distillate", "Autumn rose hips"],
        flavorProfile: "Intensely floral, sweet, intoxicating perfume",
        culinaryUses: ["Persian saffron rose ice cream (Bastani), Turkish Delight, baklava, rose hip jam"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Geraniol", "Citronellol", "Phenethyl alcohol", "Anthocyanins"],
        traditionalApplications: ["Rose water used for skin toning, emotional uplift, ocular wash."],
        modernResearchNotes: "Essential rose oil volatile components demonstrate anti-anxiety and analgesic properties."
      },
      ornamental: ["Heirloom rose gardens, fragrant hedges"],
      ecologicalBenefits: ["Pollen provider for wild solitary bees; hips provide winter bird sustenance"]
    },
    diagnosticGuide: [
      {
        symptom: "Circular black spots with feathery margins on foliage followed by yellowing",
        probableCause: "Black spot fungus (Diplocarpon rosae) in damp conditions",
        remedyAction: "Remove infected fallen leaves; avoid overhead watering; apply organic copper fungicide.",
        preventativeTip: "Ensure open spacing that allows rapid leaf drying after morning dew."
      }
    ]
  },

  // 20. Olea Europaea (Olive Tree)
  {
    id: "specimen-olea-europaea",
    binomialName: "Olea europaea",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Olive Tree", "European Olive", "Aceituno"],
    family: "Oleaceae",
    genus: "Olea",
    order: "Lamiales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Foundational agricultural tree of the Mediterranean basin)",
    nativeHabitat: "Dry rocky hillsides, coastal cliffs, and terraces across the Mediterranean",
    geographicDistribution: ["Mediterranean Basin", "California", "Australia", "South Africa"],
    climateZones: ["Mediterranean (Csa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Olea europaea is the sacred symbol of peace, endurance, and Mediterranean agrarian life. Its gnarled, sculptural trunk and silvery lanceolate leaves can endure harsh summer drought and withstand centuries of cultivation, yielding antioxidant-dense olives and golden olive oil.",
    morphology: {
      growthHabit: "Slow-growing evergreen tree with twisted, fluted, sculptural trunk",
      leafType: "Coriaceous, narrowly lanceolate, dark green above, silvery-silky beneath",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Late spring (small feathery cream-white flowers)",
      matureHeight: "6m to 12m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Raw olives contain intensely bitter oleuropein that must be salt/water cured before eating."
      },
      toxicCompounds: ["Oleuropein (bitter polyphenol in fresh fruit)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Uncompromised full direct sun (8+ hours).",
      wateringFrequency: "Once established, thrives on natural rainfall with occasional deep summer soak.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Well-drained rocky, calcareous, gravelly soil",
      soilPh: "6.5 – 8.5",
      temperatureRange: "-7°C – 40°C (Requires 200–400 chilling hours below 7°C for fruit set)",
      hardinessZones: "USDA 8 – 11",
      humidityRequirement: "Low to Moderate (< 50%)",
      fertilizerRecommendation: "Light balanced organic feed in early spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Cured fruit", "Cold-pressed extra virgin oil"],
        flavorProfile: "Rich, fruity, peppery, grassy",
        culinaryUses: ["Extra virgin olive oil dressing, tapenade, table olives, artisanal bread dip"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Oleuropein", "Hydroxytyrosol", "Oleic acid (monounsaturated)", "Squalene"],
        traditionalApplications: ["Olive leaf tea for hypertension and immune support."],
        modernResearchNotes: "Hydroxytyrosol is one of nature's most potent antioxidant scavengers of LDL cholesterol."
      },
      ornamental: ["Sculptural focal landscape tree", "Patio container tree in sunny courtyards"],
      ecologicalBenefits: ["Drought-resilient xeriscaping", "Soil erosion control on steep rocky hillsides"]
    },
    diagnosticGuide: [
      {
        symptom: "Circular brown ring spots on leaves with pale yellow halo",
        probableCause: "Olive leaf spot (Spilocaea oleagina) fungal infection in humid rainy conditions",
        remedyAction: "Apply organic copper spray in autumn and prune inner canopy for sunlight penetration.",
        preventativeTip: "Thin interior branches to permit rapid wind drying."
      }
    ]
  },

  // 21. Adiantum Raddianum (Delta Maidenhair Fern)
  {
    id: "specimen-adiantum-raddianum",
    binomialName: "Adiantum raddianum",
    botanicalAuthority: "C.Presl (1836)",
    commonNames: ["Delta Maidenhair Fern", "Maidenhair"],
    family: "Pteridaceae",
    genus: "Adiantum",
    order: "Polypodiales",
    taxonomicClass: "Plant",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to tropical South America)",
    nativeHabitat: "Damp mossy limestone cliffs, waterfall grottos, and moist riverbanks",
    geographicDistribution: ["South America", "West Indies", "Naturalized worldwide in humid grottos"],
    climateZones: ["Tropical Wet", "Subtropical Moist"],
    primaryImageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Adiantum raddianum is the archetype of botanical grace, bearing ethereal fan-shaped leaflets suspended from wiry, jet-black stipes. Its Greek name *adiantos* ('unwetted') refers to the miraculous ability of its fronds to shed raindrops without becoming wet.",
    morphology: {
      growthHabit: "Delicate creeping rhizomatous fern forming dense weeping tufts",
      leafType: "3-4 pinnate fronds with delicate fan-shaped papery pinnules",
      phyllotaxy: "Arching from short creeping rhizome",
      bloomPeriod: "Non-flowering (produces marginal sori protected by false indusia)",
      matureHeight: "0.3m to 0.5m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Non-toxic to humans and household animals."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Deep Shade",
      sunlightDetails: "Filtered indirect light; direct sunlight shrivels delicate fronds instantly.",
      wateringFrequency: "Keep potting substrate perpetually moist; never permit to dry out.",
      wateringMetric: "High",
      hygrometerPips: 5,
      soilType: "Peat-rich, moisture-retentive humus mix with perlite and limestone grit",
      soilPh: "6.0 – 7.5",
      temperatureRange: "16°C – 24°C (Protect from cold drafts below 12°C)",
      hardinessZones: "USDA 10 – 11",
      humidityRequirement: "60% – 90% (Thrives in terrariums and humid bathrooms)",
      fertilizerRecommendation: "Quarter-strength balanced fern fertilizer once monthly in summer."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible fronds", culinaryUses: [] },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Flavonoids", "Triterpenoids", "Coumarins"],
        traditionalApplications: ["Traditional pectoral syrups (Capillaire) for bronchitis and coughs."],
        modernResearchNotes: "Exhibits mild antimicrobial and anti-inflammatory properties."
      },
      ornamental: ["Terrarium centerpiece", "Humid bathroom elegance", "Dappled shade conservatory display"],
      ecologicalBenefits: ["Microclimate indicator species for pristine humidity levels"]
    },
    diagnosticGuide: [
      {
        symptom: "Foliage shrivels and turns crispy brown overnight",
        probableCause: "Sudden drop in atmospheric humidity or dry root ball",
        remedyAction: "Submerge container in lukewarm water for 15 minutes; place under glass cloche or humidifier.",
        preventativeTip: "Do not position near heating ducts or air conditioners."
      }
    ]
  },

  // 22. Thymus Vulgaris (Common Thyme)
  {
    id: "specimen-thymus-vulgaris",
    binomialName: "Thymus vulgaris",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Common Thyme", "Garden Thyme", "English Thyme"],
    family: "Lamiaceae",
    genus: "Thymus",
    order: "Lamiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to western Mediterranean hills)",
    nativeHabitat: "Sunny limestone garrigues, dry rocky slopes, and maquis",
    geographicDistribution: ["Southern Europe", "Mediterranean Basin"],
    climateZones: ["Mediterranean (Csa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Thymus vulgaris is a low-growing woody subshrub with tiny aromatic leaves that have sustained Mediterranean culinary culture since ancient Egypt, where it was utilized in embalming, and ancient Greece, where burning thyme incense symbolized courage (*thymos*).",
    morphology: {
      growthHabit: "Dwarf, compact, bushy aromatic woody evergreen subshrub",
      leafType: "Small, linear to ovate, rolled margins, glandular-dotted beneath",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Late spring to mid-summer (tiny lilac to pink flowers in dense whorls)",
      matureHeight: "0.15m to 0.3m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Completely safe culinary herb for all ages."
      },
      toxicCompounds: ["Thymol", "Carvacrol"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6+ hours of intense solar radiation.",
      wateringFrequency: "Allow soil to completely dry between waterings.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Sandy, rocky, mineral-rich soil with rapid drainage",
      soilPh: "6.0 – 8.0",
      temperatureRange: "-20°C – 35°C",
      hardinessZones: "USDA 5 – 9",
      humidityRequirement: "Low (< 45%)",
      fertilizerRecommendation: "Avoid heavy fertilizer to retain intense concentration of essential thymol."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Tiny leaves", "Flowering sprigs"],
        flavorProfile: "Pungent, herbaceous, warm clove, earthy and slightly minty",
        culinaryUses: ["Bouquet garni, roasted vegetables, stews, compound herb butters"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Thymol", "Carvacrol", "Linalool", "Rosmarinic acid"],
        traditionalApplications: ["Antiseptic inhalations for respiratory infections, sore throat gargles."],
        modernResearchNotes: "Thymol is an FDA-recognized antiseptic active ingredient in antimicrobial mouthwashes."
      },
      ornamental: ["Rock garden border, herb spiral groundcover, stepping stone filler"],
      ecologicalBenefits: ["Premier honeybee nectar plant in dry Mediterranean regions"]
    },
    diagnosticGuide: [
      {
        symptom: "Center of plant becomes woody, hollow, and bare",
        probableCause: "Natural aging without regular seasonal pruning",
        remedyAction: "Trim back top growth by one-third after blooming to promote bushy lateral growth.",
        preventativeTip: "Do not prune hard into old leafless wood."
      }
    ]
  },

  // 23. Monstera Adansonii (Monkey Mask)
  {
    id: "specimen-monstera-adansonii",
    binomialName: "Monstera adansonii",
    botanicalAuthority: "Schott (1830)",
    commonNames: ["Monkey Mask", "Swiss Cheese Vine", "Adanson's Monstera"],
    family: "Araceae",
    genus: "Monstera",
    order: "Alismatales",
    taxonomicClass: "Plant",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Central and South American rainforests)",
    nativeHabitat: "Humid lowland rainforest understories climbing host trees",
    geographicDistribution: ["Central America", "South America", "West Indies"],
    climateZones: ["Tropical Wet"],
    primaryImageUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Monstera adansonii is a charming trailing or climbing aroid whose leaves possess fully enclosed elliptical fenestrations (windows) that remain intact rather than splitting to the margin like its cousin *Monstera deliciosa*.",
    morphology: {
      growthHabit: "Hemi-epiphytic trailing or climbing vine",
      leafType: "Ovate to elliptical, perforated with 5-15 enclosed holes",
      phyllotaxy: "Distichous alternate",
      bloomPeriod: "Rare indoors (pale spadix with creamy spathe)",
      matureHeight: "2m to 4m trailing or climbing a moss pole"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Oral irritation", "Excessive drooling", "Vomiting"],
        targetOrgans: ["Oral Cavity"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Hypersalivation", "Oral pain"],
        targetOrgans: ["Oral Cavity"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Contains microscopic calcium oxalate raphides that cause intense mouth burning if masticated."
      },
      toxicCompounds: ["Insoluble Calcium Oxalate Raphides"]
    },
    careGuide: {
      sunlight: "Bright Indirect",
      sunlightDetails: "Bright filtered illumination; direct midday sun scorches delicate leaf perforations.",
      wateringFrequency: "Allow top 3–4cm of soil to dry before watering thoroughly.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Porous aroid blend (orchid bark, perlite, peat, coco chunks)",
      soilPh: "5.5 – 6.5",
      temperatureRange: "18°C – 28°C",
      hardinessZones: "USDA 10b – 12",
      humidityRequirement: "60% – 85%",
      fertilizerRecommendation: "Diluted liquid foliage feed every 3 weeks in active growth."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible toxic calcium oxalates", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Trailing hanging baskets, moss-pole climbing specimens"],
      ecologicalBenefits: ["Rainforest understory microhabitat builder"]
    },
    diagnosticGuide: [
      {
        symptom: "Small, stunted leaves emerging without holes",
        probableCause: "Inadequate light or lack of vertical support to climb",
        remedyAction: "Relocate closer to a bright window and affix vine to a moist sphagnum moss totem.",
        preventativeTip: "Climbing stimulates mature fenestrated leaf size."
      }
    ]
  },

  // 24. Acer Palmatum (Japanese Maple)
  {
    id: "specimen-acer-palmatum",
    binomialName: "Acer palmatum",
    botanicalAuthority: "Thunb. (1784)",
    commonNames: ["Japanese Maple", "Smooth Japanese Maple", "Momiji"],
    family: "Sapindaceae",
    genus: "Acer",
    order: "Sapindales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to temperate woodlands of East Asia)",
    nativeHabitat: "Understory deciduous woodlands and mountain streamsides",
    geographicDistribution: ["Japan", "Korea", "China", "Taiwan"],
    climateZones: ["Temperate Oceanic", "Humid Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Acer palmatum is an artistic icon of Japanese horticultural landscape design, celebrated for its delicate palmately lobed leaves that transform into blazing spectacles of crimson, scarlet, and gold in autumn. Known in Japan as *momiji*, it has inspired poetry and contemplation for over a millennium.",
    morphology: {
      growthHabit: "Graceful deciduous small tree or large multi-stemmed shrub",
      leafType: "Palmately 5–9 lobed with deep serrated clefts",
      phyllotaxy: "Opposite",
      bloomPeriod: "Mid spring (small purplish red corymbs followed by winged samaras)",
      matureHeight: "4m to 10m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Non-toxic to humans. Tender autumn leaves are traditionally fried as tempura in Mino, Osaka."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Partial Shade / Dappled",
      sunlightDetails: "Sheltered dappled sunlight; hot afternoon sun can scorch leaf tips.",
      wateringFrequency: "Keep root zone consistently moist; sensitive to both drought and standing water.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Rich, acidic to neutral, moist, well-drained loamy soil with organic mulch",
      soilPh: "5.5 – 6.8",
      temperatureRange: "-20°C – 30°C",
      hardinessZones: "USDA 5 – 8",
      humidityRequirement: "50% – 75%",
      fertilizerRecommendation: "Slow-release organic tree feed in early spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Salt-cured autumn leaves fried in tempura batter (*Momiji tempura*)"],
        flavorProfile: "Crisp, sweet, slightly herbal tempura delicacy",
        culinaryUses: ["Artisanal Mino maple leaf tempura snack"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Anthocyanins", "Flavonols", "Tannins"],
        traditionalApplications: ["Traditional cooling eyewash infusions."],
        modernResearchNotes: "Rich source of potent antioxidant anthocyanins."
      },
      ornamental: ["Crown jewel of Zen and stroll gardens, premier classical bonsai specimen"],
      ecologicalBenefits: ["Understory wildlife shelter, spring bee nectar resource"]
    },
    diagnosticGuide: [
      {
        symptom: "Leaf margins turn curled, crispy, and bleach pale brown in mid-summer",
        probableCause: "Leaf scorch caused by dry soil, intense afternoon sun, or hot dry winds",
        remedyAction: "Erect temporary afternoon shade cloth and apply thick mulch over root zone.",
        preventativeTip: "Plant in an east-facing location sheltered from harsh westerly winds."
      }
    ]
  },

  // 25. Malus Domestica (Apple Tree)
  {
    id: "specimen-malus-domestica",
    binomialName: "Malus domestica",
    botanicalAuthority: "Borkh. (1803)",
    commonNames: ["Orchard Apple", "Domestic Apple", "Pomme"],
    family: "Rosaceae",
    genus: "Malus",
    order: "Rosales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Descendant of wild Malus sieversii from Tian Shan mountains)",
    nativeHabitat: "Temperate river valleys and mountain foothills of Central Asia",
    geographicDistribution: ["Origin: Central Asia (Kazakhstan)", "Cultivated globally in temperate zones"],
    climateZones: ["Temperate", "Humid Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Malus domestica is the quintessential temperate fruit tree, domesticated thousands of years ago from wild *Malus sieversii* forests along the ancient Silk Road in Kazakhstan. Today thousands of heirloom cultivars are prized for their crisp flesh, cider potential, and celestial spring blossoms.",
    morphology: {
      growthHabit: "Small to medium deciduous tree with rounded spreading canopy",
      leafType: "Simple, alternate, ovate with serrate margins, downy beneath",
      phyllotaxy: "Alternate",
      bloomPeriod: "Mid spring (5-petaled white flowers tinged with pink)",
      matureHeight: "4m to 9m (smaller on dwarfing rootstocks)"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Mild distress if large quantities of seeds chewed; fruit flesh is completely safe"],
        targetOrgans: ["Cellular Respiration (Seeds only)"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Seed core contains cyanogenic glycosides; flesh is healthy treat"],
        targetOrgans: ["Cellular Respiration (Seeds only)"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Fruit flesh is highly nutritious. Apple seeds contain amygdalin; accidental swallowing of whole seeds passes harmlessly through digestive tract."
      },
      toxicCompounds: ["Amygdalin (strictly in crushed seed kernels)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6–8 hours of unfiltered sunlight.",
      wateringFrequency: "Regular deep watering during fruit development.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Deep, well-drained, fertile loamy soil",
      soilPh: "6.0 – 7.0",
      temperatureRange: "-25°C – 32°C (Requires 500–1000 winter chilling hours below 7°C)",
      hardinessZones: "USDA 4 – 8",
      humidityRequirement: "40% – 60%",
      fertilizerRecommendation: "Balanced organic compost topdressing in late winter."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh fruit", "Juice / Cider", "Pectin"],
        flavorProfile: "Crisp, sweet, floral, refreshingly acidic",
        culinaryUses: ["Fresh eating, heirloom hard cider, apple tarte tatin, apple butter"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Quercetin", "Procyanidins", "Pectin (soluble fiber)", "Vitamin C"],
        traditionalApplications: ["Digestive regulator, blood sugar moderation."],
        modernResearchNotes: "Pectin binds bile acids to assist in healthy cholesterol regulation."
      },
      ornamental: ["Spring blossom canopy, traditional orchard garden aesthetics"],
      ecologicalBenefits: ["Tremendous early nectar resource for honeybees, bumblebees, and mason bees"]
    },
    diagnosticGuide: [
      {
        symptom: "Velvety olive-green to black scabby lesions on leaves and fruit",
        probableCause: "Apple scab (Venturia inaequalis) fungal infection in rainy spring weather",
        remedyAction: "Rake and compost fallen leaves; prune for internal canopy airflow; apply sulfur spray.",
        preventativeTip: "Select scab-resistant cultivars such as Liberty or Enterprise."
      }
    ]
  }
];

export const ALL_BOTANICAL_SPECIMENS: BotanicalSpecimen[] = [
  ...BOTANICAL_SPECIMENS,
  ...ADDITIONAL_SPECIMENS,
  ...EXTRA_SPECIMENS,
];

export const SAMPLE_LABORATORY_SPECIMENS = ALL_BOTANICAL_SPECIMENS.slice(0, 12);
