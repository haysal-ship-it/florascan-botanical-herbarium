import { BotanicalSpecimen } from "../types/botanical";

export const ADDITIONAL_SPECIMENS: BotanicalSpecimen[] = [
  // 26. Epipremnum Aureum (Golden Pothos) - Plant
  {
    id: "specimen-epipremnum-aureum",
    binomialName: "Epipremnum aureum",
    botanicalAuthority: "(Linden & André) G.S.Bunting (1964)",
    commonNames: ["Golden Pothos", "Devil's Ivy", "Money Plant"],
    family: "Araceae",
    genus: "Epipremnum",
    order: "Alismatales",
    taxonomicClass: "Plant",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Moorea, Society Islands)",
    nativeHabitat: "Lowland tropical forests, climbing trees via aerial roots",
    geographicDistribution: ["Society Islands (French Polynesia)", "Global pantropical naturalization"],
    climateZones: ["Tropical Wet (Af)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Epipremnum aureum is one of the world's most resilient house plants, termed 'Devil's Ivy' because it is nearly impossible to kill. Its heart-shaped glossy foliage is variegated with streaks of golden cream.",
    morphology: {
      growthHabit: "Evergreen trailing or climbing root-climbing liana",
      leafType: "Cordate (juvenile) to massive pinnatifid (mature climbing)",
      phyllotaxy: "Alternate",
      matureHeight: "Up to 20m climbing wild trees; 1-3m indoors"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Oral irritation", "Excessive salivation", "Vomiting"],
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
        notes: "Contains microscopic calcium oxalate crystals causing oral stinging."
      },
      toxicCompounds: ["Insoluble Calcium Oxalate Raphides"]
    },
    careGuide: {
      sunlight: "Deep Shade",
      sunlightDetails: "Flourishes across deep low light up to bright indirect light.",
      wateringFrequency: "Allow top 50% of soil to dry before watering.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Standard all-purpose potting soil with perlite",
      soilPh: "6.0 – 7.0",
      temperatureRange: "15°C – 30°C",
      hardinessZones: "USDA 10 – 12",
      humidityRequirement: "40% – 70%",
      fertilizerRecommendation: "Half-strength balanced liquid feed every 4-6 weeks."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible oxalates", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Hanging planters, climbing bookshelf vines, air purifier"],
      ecologicalBenefits: ["Efficient benzene and formaldehyde indoor removal (NASA clean air study)"]
    },
    diagnosticGuide: [
      {
        symptom: "All yellow leaves falling in clusters",
        probableCause: "Root rot from persistent standing water",
        remedyAction: "Allow potting mix to dry completely; verify drainage hole flow.",
        preventativeTip: "Do not leave container sitting in saucer runoff."
      }
    ]
  },

  // 27. Zamioculcas Zamiifolia (ZZ Plant) - Succulent/Plant
  {
    id: "specimen-zamioculcas-zamiifolia",
    binomialName: "Zamioculcas zamiifolia",
    botanicalAuthority: "(Lodd.) Engl. (1905)",
    commonNames: ["ZZ Plant", "Zanzibar Gem", "Eternity Plant", "Aroid Palm"],
    family: "Araceae",
    genus: "Zamioculcas",
    order: "Alismatales",
    taxonomicClass: "Succulent",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to lowland dry forest scrub in eastern Africa)",
    nativeHabitat: "Rocky dry grasslands and lowland forests of Eastern Africa",
    geographicDistribution: ["Kenya", "Tanzania", "Zanzibar", "Mozambique"],
    climateZones: ["Tropical Savanna (Aw)", "Subtropical Dry"],
    primaryImageUrl: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Zamioculcas zamiifolia is a drought-defying marvel featuring mirror-glossy dark green pinnate leaves arising from succulent potato-like underground tubers that store immense water reserves.",
    morphology: {
      growthHabit: "Herbaceous stemless evergreen perennial with underground potato-like tubers",
      leafType: "Pinnately compound with 6–8 pairs of shiny obovate leaflets",
      phyllotaxy: "Basal rosette",
      matureHeight: "0.5m to 1.0m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Hypersalivation", "Oral irritation", "Vomiting"],
        targetOrgans: ["Oral Cavity"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Oral discomfort", "Pawing at face"],
        targetOrgans: ["Oral Cavity"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Contains calcium oxalate raphides; do not ingest."
      },
      toxicCompounds: ["Insoluble Calcium Oxalate"]
    },
    careGuide: {
      sunlight: "Deep Shade",
      sunlightDetails: "Survives in the lowest light offices to bright filtered light.",
      wateringFrequency: "Water once every 3–4 weeks; tubers rot in damp soil.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Porous succulent or cactus mix with coarse perlite",
      soilPh: "6.0 – 7.0",
      temperatureRange: "15°C – 32°C",
      hardinessZones: "USDA 10 – 12",
      humidityRequirement: "Low (30% – 50%)",
      fertilizerRecommendation: "Quarter-strength feed once or twice a year in summer."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible", culinaryUses: [] },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Anthocyanins", "Flavonoids"],
        traditionalApplications: ["Tanzanian traditional poultice for earache."],
        modernResearchNotes: "Studies confirm extreme desiccation tolerance genes."
      },
      ornamental: ["Low-light modern architectural office spaces", "Unkillable apartment plant"],
      ecologicalBenefits: ["Extreme water-use efficiency via nocturnal CAM acid accumulation"]
    },
    diagnosticGuide: [
      {
        symptom: "Lower leaves turning bright translucent yellow and drooping",
        probableCause: "Waterlogging causing subterranean tuber rot",
        remedyAction: "Stop watering immediately; discard mushy tubers and repot in dry grit.",
        preventativeTip: "Ignore the plant for weeks; it thrives on neglect."
      }
    ]
  },

  // 28. Spathiphyllum Wallisii (Peace Lily) - Flower/Plant
  {
    id: "specimen-spathiphyllum-wallisii",
    binomialName: "Spathiphyllum wallisii",
    botanicalAuthority: "Regel (1877)",
    commonNames: ["Peace Lily", "White Sails", "Spathe Flower"],
    family: "Araceae",
    genus: "Spathiphyllum",
    order: "Alismatales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Colombian and Venezuelan rainforest floors)",
    nativeHabitat: "Damp, shaded tropical rainforest understories along streams",
    geographicDistribution: ["Colombia", "Venezuela", "Central America"],
    climateZones: ["Tropical Wet (Af)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Spathiphyllum wallisii is beloved for its glossy deep-green lanceolate leaves and pristine white spathes resembling flags of peace. It acts as an organic living hygrometer, dramatically drooping when thirsty and perking up within an hour of deep watering.",
    morphology: {
      growthHabit: "Acaulescent evergreen perennial herb forming lush clumps",
      leafType: "Glossy, elliptic to lanceolate leaves with sunken veins",
      phyllotaxy: "Basal",
      bloomPeriod: "Spring and periodically throughout year (pure white showy spathe)",
      matureHeight: "0.4m to 0.8m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Excessive drooling", "Pawing at mouth", "Vomiting", "Decreased appetite"],
        targetOrgans: ["Oral Cavity"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Oral discomfort", "Drooling", "Difficulty swallowing"],
        targetOrgans: ["Oral Cavity"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "NOTE: Peace lilies are NOT true lilies (Lilium) and do NOT cause fatal kidney failure in cats, but still contain irritating calcium oxalate crystals."
      },
      toxicCompounds: ["Calcium Oxalate Raphides"]
    },
    careGuide: {
      sunlight: "Deep Shade",
      sunlightDetails: "Deep shade to moderate indirect illumination; direct sun scorches white blooms.",
      wateringFrequency: "Keep potting mix consistently moist; water when foliage slightly wilts.",
      wateringMetric: "Moist",
      hygrometerPips: 4,
      soilType: "Peat-rich, spongy organic mix that holds moisture with good aeration",
      soilPh: "5.8 – 6.5",
      temperatureRange: "18°C – 27°C (Protect from cold below 13°C)",
      hardinessZones: "USDA 11 – 12",
      humidityRequirement: "50% – 80%",
      fertilizerRecommendation: "Half-strength bloom booster in spring and summer."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Serene indoor blossom displays", "Low-light office and bedroom elegance"],
      ecologicalBenefits: ["Top-tier air purification: absorbs acetone, benzene, trichloroethylene (NASA study)"]
    },
    diagnosticGuide: [
      {
        symptom: "Crispy brown edges on leaf tips and browning spathes",
        probableCause: "Fluoride/chlorine sensitivity in tap water or low atmospheric humidity",
        remedyAction: "Switch to filtered or rainwater and mist leaves or group plants.",
        preventativeTip: "Let tap water sit out 24 hours to off-gas chlorine before watering."
      }
    ]
  },

  // 29. Echinacea Purpurea (Purple Coneflower) - Flower
  {
    id: "specimen-echinacea-purpurea",
    binomialName: "Echinacea purpurea",
    botanicalAuthority: "(L.) Moench (1794)",
    commonNames: ["Purple Coneflower", "Eastern Purple Coneflower", "Snakeroot"],
    family: "Asteraceae",
    genus: "Echinacea",
    order: "Asterales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native North American prairie wildflower)",
    nativeHabitat: "Open dry woods, barrens, and prairie glades across Central/Eastern US",
    geographicDistribution: ["United States (Midwest, Southeast)", "Cultivated globally"],
    climateZones: ["Temperate", "Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Echinacea purpurea is a celebrated North American prairie perennial with spiky, iridescent orange-brown central cones surrounded by drooping magenta-purple petals. Highly revered by Indigenous Great Plains tribes for immune defense.",
    morphology: {
      growthHabit: "Herbaceous coarse-textured clumping perennial with stiff stems",
      leafType: "Broad ovate to lanceolate, roughly hispid, serrate margins",
      phyllotaxy: "Alternate",
      bloomPeriod: "Early summer to mid-autumn (long lasting composite flowers)",
      matureHeight: "0.8m to 1.2m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Edible root and petals; produces a characteristic harmless tingling sensation on the tongue."
      },
      toxicCompounds: ["Alkamides", "Cichoric acid", "Polysaccharides"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6–8 hours of direct solar exposure.",
      wateringFrequency: "Once established, highly drought-tolerant with deep taproot.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Well-drained lean garden loam, rocky soil, or prairie clay",
      soilPh: "6.0 – 7.0",
      temperatureRange: "-30°C – 35°C",
      hardinessZones: "USDA 3 – 9",
      humidityRequirement: "Low to Moderate",
      fertilizerRecommendation: "None required; excess fertilizer causes floppy stems."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Petals in salads", "Roots and flowers brewed into herbal tea"],
        flavorProfile: "Sweet, pungent, floral, tongue-tingling tingling sensation",
        culinaryUses: ["Echinacea honey tisane, edible flower salad topper"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Alkamides", "Cichoric acid", "Polysaccharides", "Echinacoside"],
        traditionalApplications: ["Native American remedy for snakebites, wound healing, and winter coughs."],
        modernResearchNotes: "Meta-analyses demonstrate reduced duration of upper respiratory tract viral infections."
      },
      ornamental: ["Prairie restorations, pollinator borders, cut flowers"],
      ecologicalBenefits: ["Magnet for Monarch butterflies, swallowtails, and autumn goldfinches that feed on seed cones"]
    },
    diagnosticGuide: [
      {
        symptom: "Flower petals emerge distorted, greenish, and stunted",
        probableCause: "Aster yellows phytoplasma transmitted by leafhopper insects",
        remedyAction: "Dig up and destroy infected plants immediately; incurable.",
        preventativeTip: "Control leafhopper populations with neem oil."
      }
    ]
  },

  // 30. Ginkgo Biloba (Maidenhair Tree) - Tree
  {
    id: "specimen-ginkgo-biloba",
    binomialName: "Ginkgo biloba",
    botanicalAuthority: "L. (1771)",
    commonNames: ["Ginkgo", "Maidenhair Tree", "Living Fossil"],
    family: "Ginkgoaceae",
    genus: "Ginkgo",
    order: "Ginkgoales",
    taxonomicClass: "Tree",
    conservationStatus: "EN",
    iucnDescription: "Endangered in wild mountain refuges of Zhejiang, China (Cultivated globally)",
    nativeHabitat: "Tianmushan mountain valleys and temperate deciduous forests of Zhejiang, China",
    geographicDistribution: ["China", "Worldwide urban street cultivation"],
    climateZones: ["Temperate", "Humid Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Ginkgo biloba is an awe-inspiring 'living fossil' and the sole surviving member of an ancient division dating back over 270 million years before dinosaurs walked the Earth. Renowned for its fan-shaped leaves that turn luminous butter-yellow in autumn, it famously survived the 1945 atomic blast at Hiroshima.",
    morphology: {
      growthHabit: "Large deciduous gymnosperm tree with angular crown and erratic branching",
      leafType: "Unique fan-shaped, 2-lobed, dichotomously veined leathery leaves",
      phyllotaxy: "Clustered on short spur shoots and alternate on long shoots",
      matureHeight: "20m to 35m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Seizures if fallen fruit/seeds ingested"],
        targetOrgans: ["Neurological (Seed toxicity)"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Tremors", "Neurological distress from ginkgotoxin"],
        targetOrgans: ["Neurological (Seed toxicity)"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: true,
        notes: "Outer fleshy seed coat contains anacardic acids that trigger severe poison ivy-like blistering dermatitis. Seeds contain neurotoxic ginkgotoxin (MPN) and must be thoroughly cooked and eaten in strict moderation (max 5-8 seeds)."
      },
      toxicCompounds: ["Ginkgotoxin (4'-O-methylpyridoxine)", "Anacardic acid", "Bilobol (in outer fruit coat)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs full sun for vigorous symmetrical development.",
      wateringFrequency: "Moderate during youth; mature specimens are extraordinarily drought and pollution resistant.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Deep, fertile, well-draining sandy loam; tolerates compacted urban soils",
      soilPh: "5.0 – 8.0",
      temperatureRange: "-35°C – 38°C",
      hardinessZones: "USDA 3 – 9",
      humidityRequirement: "Highly adaptable",
      fertilizerRecommendation: "Rarely needed."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Boiled or roasted inner kernel (Ginkgo nut / Baiguo)"],
        flavorProfile: "Mildly sweet, starchy, slightly bitter, chewy texture",
        culinaryUses: ["Japanese chawanmushi egg custard, Chinese congee, Korean roasted skewers"],
        preparationWarnings: "Cook thoroughly; do not consume raw seeds or exceed 5-10 nuts per day due to ginkgotoxin."
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Ginkgolides (terpene lactones)", "Bilobalide", "Flavonoid glycosides"],
        traditionalApplications: ["Traditional Chinese medicine for memory, asthma, and respiratory vitality."],
        modernResearchNotes: "Standardized EGb 761 extract researched for peripheral microcirculation and cognitive protection."
      },
      ornamental: ["Legendary urban street tree immune to air pollution, radiant golden autumn foliage"],
      ecologicalBenefits: ["Immense historical evolutionary resilience, carbon sequestration"]
    },
    diagnosticGuide: [
      {
        symptom: "Fallen female fruits emitting an intensely foul smell of butyric acid/vomit",
        probableCause: "Mature female specimen dropping unpollinated ripe fleshy ovules in autumn",
        remedyAction: "Rake up fruit with heavy rubber gloves to avoid skin contact dermatitis.",
        preventativeTip: "Plant strictly male cultivars (e.g., 'Autumn Gold', 'Princeton Sentry') in urban settings."
      }
    ]
  },

  // 31. Ficus Carica (Common Fig) - Fruit/Tree
  {
    id: "specimen-ficus-carica",
    binomialName: "Ficus carica",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Common Fig", "Edible Fig", "Higuera"],
    family: "Moraceae",
    genus: "Ficus",
    order: "Rosales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Foundational Neolithic fruit tree of the Mediterranean)",
    nativeHabitat: "Sunny rocky hillsides, scrub, and canyon washes of the Mediterranean and Western Asia",
    geographicDistribution: ["Mediterranean Basin", "Middle East", "California"],
    climateZones: ["Mediterranean (Csa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1541344999736-83eca872f242?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1541344999736-83eca872f242?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Ficus carica is one of the earliest domesticated crops known to humanity, pre-dating wheat and barley in the Jordan Valley by roughly 1,000 years. Its unique fruit, a syconium, is technically an inverted fleshy flower structure containing hundreds of miniature internal blossoms.",
    morphology: {
      growthHabit: "Deciduous large shrub or small sprawling tree with smooth silver-gray bark",
      leafType: "Large, rough, palmately 3–5 lobed with thick veins, hairy beneath",
      phyllotaxy: "Alternate",
      bloomPeriod: "Internal inflorescence (syconium) maturing mid-summer through autumn",
      matureHeight: "4m to 8m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Hypersalivation", "Vomiting", "Contact dermatitis if milky sap touches skin"],
        targetOrgans: ["Skin", "Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Oral redness", "Drooling", "Vomiting from milky branch latex"],
        targetOrgans: ["Oral Cavity", "Skin"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: true,
        contactDermatitisRisk: true,
        notes: "Milky sap in green branches contains furocoumarins and ficin that cause blistering phytophotodermatitis when skin contacts sunlight."
      },
      toxicCompounds: ["Ficin", "Furocoumarins (psoralens in milky branch sap)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 8 hours direct sunlight for sugar accumulation in figs.",
      wateringFrequency: "Deep watering during fruit ripening; drought-tolerant once established.",
      wateringMetric: "Moderate",
      hygrometerPips: 2,
      soilType: "Well-drained calcareous loamy soil or rocky limestone",
      soilPh: "6.0 – 7.8",
      temperatureRange: "-12°C – 38°C",
      hardinessZones: "USDA 7 – 11",
      humidityRequirement: "Low to Moderate",
      fertilizerRecommendation: "Avoid excess nitrogen, which produces rampant leafy growth and zero fruit."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Ripe syconium fruit", "Dried figs", "Fig leaf infused syrup"],
        flavorProfile: "Rich honey, caramel, jammy sweet with delicate seed crunch",
        culinaryUses: ["Fresh figs with prosciutto and gorgonzola, fig confit, grilled figs with goat cheese"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Ficin", "Pectin", "Benzaldehyde", "Flavonoids"],
        traditionalApplications: ["Natural laxative, digestive soothing, poultice for skin boils."],
        modernResearchNotes: "High dietary fiber and polyphenol content promotes healthy gut motility."
      },
      ornamental: ["Sculptural Mediterranean shade tree, architectural broad leaf texture"],
      ecologicalBenefits: ["Keystone fruit resource for migratory birds and bats in dry ecosystems"]
    },
    diagnosticGuide: [
      {
        symptom: "Severe blistering and red rash on gardener's arms after pruning in midday sun",
        probableCause: "Phytophotodermatitis from fig branch sap furocoumarins reacting with UV light",
        remedyAction: "Wash skin immediately with cool water and soap; apply hydrocortisone and keep covered.",
        preventativeTip: "Wear long sleeves and gloves when pruning or harvesting fig trees."
      }
    ]
  },

  // 32. Rosmarinus Officinalis / Salvia Rosmarinus (already covered) -> 32. Origanum Vulgare (Oregano) - Herb
  {
    id: "specimen-origanum-vulgare",
    binomialName: "Origanum vulgare",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Wild Oregano", "Greek Oregano", "Joy of the Mountain"],
    family: "Lamiaceae",
    genus: "Origanum",
    order: "Lamiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Mediterranean and Eurasian rocky slopes)",
    nativeHabitat: "Sunny limestone hillsides, open pastures, and dry scrublands",
    geographicDistribution: ["Mediterranean Basin", "Southern Europe", "Central Asia"],
    climateZones: ["Mediterranean (Csa)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1515586000433-a5bc1a388f21?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1515586000433-a5bc1a388f21?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Derived from Greek *oros* (mountain) and *ganos* (joy), Origanum vulgare perfumes the sun-baked hillsides of Greece and Italy. Packed with carvacrol and thymol, its pungent, earthy leaves are the culinary heartbeat of pizza and Mediterranean cuisine.",
    morphology: {
      growthHabit: "Woody-based herbaceous perennial forming spreading aromatic mats",
      leafType: "Small, ovate, resinous-glandular hairy leaves",
      phyllotaxy: "Opposite",
      bloomPeriod: "Mid to late summer (clusters of pinkish-purple to white tubular flowers)",
      matureHeight: "0.3m to 0.6m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Mild stomach irritation if large quantities ingested; essential oil is dangerous"],
        targetOrgans: ["Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Mild gastrointestinal upset"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Nutritious and non-toxic culinary herb."
      },
      toxicCompounds: ["Carvacrol", "Thymol"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6+ hours of intense sun for peak essential oil concentration.",
      wateringFrequency: "Water moderately when young; extremely drought tolerant once rooted.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Sandy, rocky, gritty, lean soil with sharp drainage",
      soilPh: "6.5 – 7.5",
      temperatureRange: "-20°C – 35°C",
      hardinessZones: "USDA 4 – 10",
      humidityRequirement: "Low (< 45%)",
      fertilizerRecommendation: "None; poor soils produce far more potent flavors."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Dried or fresh leaves", "Flowering tops"],
        flavorProfile: "Robust, pungent, peppery, warm herbal with slight bitterness",
        culinaryUses: ["Pizza sauce, Greek salads, tomato pasta, chimichurri, za'atar seasoning"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Carvacrol", "Thymol", "Rosmarinic acid", "Terpinene"],
        traditionalApplications: ["Antimicrobial digestive tonic, inhalation for respiratory congestion."],
        modernResearchNotes: "Carvacrol demonstrates potent broad-spectrum antibacterial activity against foodborne pathogens."
      },
      ornamental: ["Rock garden groundcover, herb border edging"],
      ecologicalBenefits: ["Unrivaled butterfly and honeybee magnet in mid-summer"]
    },
    diagnosticGuide: [
      {
        symptom: "Foliage loses pungency and becomes bland and watery",
        probableCause: "Excessive fertilization and excessive irrigation",
        remedyAction: "Withhold fertilizer and allow soil to dry between waterings.",
        preventativeTip: "Treat like a Mediterranean wild plant: lean, sunny, and dry."
      }
    ]
  },

  // 33. Haworthia Attenuata (Zebra Plant) - Succulent
  {
    id: "specimen-haworthiopsis-attenuata",
    binomialName: "Haworthiopsis attenuata",
    botanicalAuthority: "(Haw.) G.D.Rowley (2013)",
    commonNames: ["Zebra Haworthia", "Zebra Plant", "Fairy Wash-board"],
    family: "Asphodelaceae",
    genus: "Haworthiopsis",
    order: "Asparagales",
    taxonomicClass: "Succulent",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Eastern Cape, South Africa)",
    nativeHabitat: "Shaded thickets, rocky crevices, and under thorn bushes in dry river valleys",
    geographicDistribution: ["South Africa (Eastern Cape)"],
    climateZones: ["Semi-arid (BSh)", "Subtropical"],
    primaryImageUrl: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Haworthiopsis attenuata is an adorable compact succulent famous for its dramatic white tubercular bands running horizontally across pointed triangular dark-green leaves, evoking the stripes of a zebra.",
    morphology: {
      growthHabit: "Acaulescent clumping succulent rosette",
      leafType: "Rigid, triangular, dark green with raised white pearly tubercles on both surfaces",
      phyllotaxy: "Dense spiral rosette",
      bloomPeriod: "Spring and summer (delicate white tubular flowers on tall slender stalks)",
      matureHeight: "0.1m to 0.15m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "100% non-toxic to cats, dogs, and children. Safe pet-friendly alternative to toxic Aloes!"
      },
      toxicCompounds: ["None (Non-toxic)"]
    },
    careGuide: {
      sunlight: "Bright Indirect",
      sunlightDetails: "Prefers bright filtered sunlight; unlike cacti, scorching midday sun bleaches its dark green foliage red or brown.",
      wateringFrequency: "Allow soil to dry completely between waterings (every 2-3 weeks).",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Gritty, mineral cactus mix (pumice, perlite, coarse sand)",
      soilPh: "6.0 – 7.2",
      temperatureRange: "12°C – 30°C (Protect from frost)",
      hardinessZones: "USDA 10 – 11",
      humidityRequirement: "Low (30% – 50%)",
      fertilizerRecommendation: "Diluted succulent food once in spring."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Perfect pet-safe desktop succulent", "Minimalist ceramic planters"],
      ecologicalBenefits: ["Drought-tolerant water conservation champion"]
    },
    diagnosticGuide: [
      {
        symptom: "Leaves turn dull reddish-brown and curl tightly inward",
        probableCause: "Sun stress and severe dehydration",
        remedyAction: "Move slightly back from harsh direct sun and provide a deep soak.",
        preventativeTip: "Haworthias prefer bright indirect light rather than scorching direct desert sun."
      }
    ]
  },

  // 34. Strelitzia Reginae (Bird of Paradise) - Flower/Plant
  {
    id: "specimen-strelitzia-reginae",
    binomialName: "Strelitzia reginae",
    botanicalAuthority: "Aiton (1789)",
    commonNames: ["Bird of Paradise", "Crane Flower", "Strelitzia"],
    family: "Strelitziaceae",
    genus: "Strelitzia",
    order: "Zingiberales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to coastal thickets of South Africa)",
    nativeHabitat: "Coastal riverbanks, thickets, and coastal dune forests of KwaZulu-Natal",
    geographicDistribution: ["South Africa", "Cultivated throughout subtropical worlds"],
    climateZones: ["Subtropical Moist (Cfa)", "Warm Temperate"],
    primaryImageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Strelitzia reginae is an exotic botanical masterpiece whose blossoms mirror the flamboyant plumage of a crested crane or bird of paradise. Emerging sequentially from a horizontal boat-like spathe, brilliant orange sepals and electric blue petals create an unforgettable floral spectacle.",
    morphology: {
      growthHabit: "Stemless evergreen perennial forming large clump of paddle-like leaves",
      leafType: "Coriaceous, glaucous grayish-green paddle blades resembling banana leaves",
      phyllotaxy: "Distichous (arranged in two vertical ranks)",
      bloomPeriod: "Late winter through spring and summer",
      matureHeight: "1.2m to 1.8m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Mild nausea", "Vomiting", "Drowsiness"],
        targetOrgans: ["Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Vomiting", "Diarrhea", "Lethargy if seeds chewed"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Seeds and flowers contain trace toxic tannins and alkaloids; causes mild vomiting if ingested."
      },
      toxicCompounds: ["Tannins", "Trace alkaloids"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 4–6 hours of direct sun daily to produce flower spikes.",
      wateringFrequency: "Keep moist in summer; allow top few inches to dry in winter.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Rich, fertile, loamy soil with excellent drainage",
      soilPh: "5.5 – 6.5",
      temperatureRange: "15°C – 28°C (Frost-sensitive, protect below 5°C)",
      hardinessZones: "USDA 9b – 11",
      humidityRequirement: "50% – 70%",
      fertilizerRecommendation: "Organic high-potash feed during spring and summer bloom cycle."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Luxury architectural garden centerpiece, long-lasting high-end cut flowers"],
      ecologicalBenefits: ["Pollinated by sunbirds (*Nectarinia*) landing on the blue petal perch to sip nectar"]
    },
    diagnosticGuide: [
      {
        symptom: "Plant produces vigorous large green leaves for years but never blooms",
        probableCause: "Insufficient direct sunlight or plant is less than 4–5 years old",
        remedyAction: "Relocate to the sunniest exposure possible and provide bloom booster fertilizer.",
        preventativeTip: "Strelitzias must be root-bound and mature before setting profuse flower buds."
      }
    ]
  },

  // 35. Betula Pendula (Silver Birch) - Tree
  {
    id: "specimen-betula-pendula",
    binomialName: "Betula pendula",
    botanicalAuthority: "Roth (1788)",
    commonNames: ["Silver Birch", "Warty Birch", "European White Birch"],
    family: "Betulaceae",
    genus: "Betula",
    order: "Fagales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Foundational pioneer woodland species of Eurasia)",
    nativeHabitat: "Heathlands, open peatlands, hillsides, and pioneer woodlands",
    geographicDistribution: ["Europe", "Siberia", "Asia Minor"],
    climateZones: ["Temperate Oceanic", "Boreal / Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Betula pendula is the ethereal 'Lady of the Woods', distinguished by its gleaming white peeling papery bark and graceful weeping pendulous twigs that flutter in the breeze. A pioneer species, it rapidly colonizes open ground following forest fires.",
    morphology: {
      growthHabit: "Medium deciduous tree with slender trunk and weeping branches",
      leafType: "Deltoid to rhombic, doubly serrate, bright green turning golden yellow in autumn",
      phyllotaxy: "Alternate",
      bloomPeriod: "Early spring (pendulous male catkins and erect female catkins)",
      matureHeight: "15m to 25m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Bark, leaves, and spring sap are non-toxic. Pollen is a significant seasonal allergen."
      },
      toxicCompounds: ["Betulin", "Betulinic acid"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs open full sun; pioneer species intolerant of heavy shade.",
      wateringFrequency: "Requires regular moisture; shallow root system vulnerable to severe drought.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Sandy, acidic, well-drained soil; tolerates poor sandy gravel",
      soilPh: "5.0 – 6.5",
      temperatureRange: "-40°C – 28°C (Extreme boreal frost hardiness)",
      hardinessZones: "USDA 2 – 7",
      humidityRequirement: "Adaptable",
      fertilizerRecommendation: "None required."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Spring birch sap tapped from trunk", "Inner bark dried for flour in famine eras"],
        flavorProfile: "Mildly sweet, woodsy, refreshing mineral water taste",
        culinaryUses: ["Fermented birch sap wine, birch syrup reduction"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Betulin", "Betulinic acid", "Flavonoids", "Salicylates"],
        traditionalApplications: ["Birch leaf tea used as a diuretic and for urinary tract cleansing."],
        modernResearchNotes: "Betulinic acid from white bark has demonstrated potent anticancer and antiviral activities in preclinical research."
      },
      ornamental: ["Striking winter bark contrast, landscape groupings, light dappled shade canopy"],
      ecologicalBenefits: ["Supports over 300 insect species, host for Fly Agaric (*Amanita muscaria*) mycorrhizae"]
    },
    diagnosticGuide: [
      {
        symptom: "Dieback of the upper crown with D-shaped exit holes in white bark",
        probableCause: "Bronze birch borer (Agrilus anxius) beetle larvae boring under bark",
        remedyAction: "Water during drought to bolster tree natural defenses; apply systemic insecticide if caught early.",
        preventativeTip: "Plant only in cool climate regions; birch borers attack drought-stressed trees in hot summers."
      }
    ]
  },

  // 36. Persea Americana (Avocado) - Fruit/Tree
  {
    id: "specimen-persea-americana",
    binomialName: "Persea americana",
    botanicalAuthority: "Mill. (1768)",
    commonNames: ["Avocado", "Alligator Pear", "Aguacate"],
    family: "Lauraceae",
    genus: "Persea",
    order: "Laurales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to highlands of south-central Mexico and Guatemala)",
    nativeHabitat: "Montane cloud forests and subtropical slopes of Mesoamerica",
    geographicDistribution: ["Mexico", "Central America", "California", "Chile", "Israel"],
    climateZones: ["Humid Subtropical (Cfa)", "Tropical Wet-and-Dry"],
    primaryImageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Persea americana is a treasure of Mesoamerican agriculture, cultivated for over 9,000 years. An evolutionary anachronism, its large single seed was once dispersed by extinct Pleistocene megafauna such as giant ground sloths (*Megatherium*). It is renowned for its buttery, monounsaturated fat-rich fruit pulp.",
    morphology: {
      growthHabit: "Medium to large evergreen tree with dense spreading canopy",
      leafType: "Coriaceous, elliptic-lanceolate, glossy dark green with subtle anise scent in Mexican varieties",
      phyllotaxy: "Spiral alternate",
      bloomPeriod: "Winter to early spring (protogynous synchronous dichogamous yellowish-green flowers)",
      matureHeight: "8m to 15m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Feline pancreatitis from high fat content"],
        targetOrgans: ["Gastrointestinal", "Myocardium"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Foreign body obstruction risk from large seed pit"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Avocado flesh is a nutrient superfood for humans. NOTE: Leaves, bark, skin, and pit contain persin, which is DEADLY to pet birds, rabbits, horses, and goats."
      },
      toxicCompounds: ["Persin (fungicidal fatty acid derivative lethal to avian/livestock species)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6–8 hours direct sunlight.",
      wateringFrequency: "Deep watering every 7–10 days; roots are shallow and hypersensitive to root rot in poorly draining clay.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Well-drained sandy loam or decomposed granite; dislikes heavy clay",
      soilPh: "6.0 – 6.5",
      temperatureRange: "-2°C – 35°C (Mexican varieties hardier than West Indian)",
      hardinessZones: "USDA 9b – 11",
      humidityRequirement: "45% – 65%",
      fertilizerRecommendation: "Citrus/avocado fertilizer high in nitrogen and zinc."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Creamy fruit mesocarp flesh", "Cold-pressed avocado oil"],
        flavorProfile: "Rich, nutty, velvety, buttery",
        culinaryUses: ["Guacamole, avocado toast, California sushi rolls, artisanal dressings"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Oleic acid", "Lutein", "Beta-sitosterol", "Tocopherols"],
        traditionalApplications: ["Avocado seed tea used in folk medicine for intestinal parasites."],
        modernResearchNotes: "High monounsaturated fat and phytosterols significantly enhance HDL to LDL ratios."
      },
      ornamental: ["Subtropical orchard tree, lush green shade canopy"],
      ecologicalBenefits: ["High floral nectar output supporting honeybees and native solitary bees"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapid wilting, leaf drop, and black rotting roots",
        probableCause: "Phytophthora cinnamomi root rot from waterlogged non-draining soil",
        remedyAction: "Apply phosphite fungicide drench, build mounds to elevate root ball, and cease excess water.",
        preventativeTip: "Plant on sloping mounds in porous soil; never let water pool around the root flare."
      }
    ]
  },

  // 37. Vaccinium Corymbosum (Highbush Blueberry) - Fruit
  {
    id: "specimen-vaccinium-corymbosum",
    binomialName: "Vaccinium corymbosum",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Highbush Blueberry", "Swamp Blueberry"],
    family: "Ericaceae",
    genus: "Vaccinium",
    order: "Ericales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to eastern North American wetlands)",
    nativeHabitat: "Sphagnum bogs, peaty swamps, and moist acidic woodlands",
    geographicDistribution: ["Eastern North America", "Worldwide commercial berry orchards"],
    climateZones: ["Temperate", "Humid Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Vaccinium corymbosum is a magnificent deciduous shrub producing sweet, dusty-blue berries blanketed in a silvery protective epicuticular wax termed 'bloom'. Famous for requiring strictly acidic soil and rewarding gardeners with radiant scarlet foliage in autumn.",
    morphology: {
      growthHabit: "Upright multi-stemmed deciduous crown shrub",
      leafType: "Elliptic to ovate, glossy green turning flaming crimson in autumn",
      phyllotaxy: "Alternate",
      bloomPeriod: "Mid spring (delicate white to pale pink bell-shaped urn flowers)",
      matureHeight: "1.5m to 2.5m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Antioxidant-dense superfood non-toxic to all humans and pets."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6+ hours sun for maximum berry sugar synthesis.",
      wateringFrequency: "Keep root zone consistently moist; shallow roots dry quickly.",
      wateringMetric: "High",
      hygrometerPips: 4,
      soilType: "Acidic, peat-heavy, sandy organic soil with pine bark mulch",
      soilPh: "4.5 – 5.2 (STRICT requirement; will suffer chlorosis and perish above 5.5)",
      temperatureRange: "-25°C – 30°C (Requires 400–800 winter chilling hours)",
      hardinessZones: "USDA 4 – 8",
      humidityRequirement: "Moderate to High",
      fertilizerRecommendation: "Acid-forming ammonium sulfate or organic cottonseed meal; avoid nitrates."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh berries"],
        flavorProfile: "Sweet, tangy, juicy with delicate floral finish",
        culinaryUses: ["Fresh snacking, blueberry pies, pancakes, artisanal berry jams"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Anthocyanins", "Pterostilbene", "Resveratrol", "Ellagic acid"],
        traditionalApplications: ["Native American tonic for blood vitality and childhood diarrhea."],
        modernResearchNotes: "Anthocyanins demonstrate extraordinary neuroprotective, retinal microvascular, and anti-aging benefits."
      },
      ornamental: ["Spectacular four-season interest: spring bells, summer fruit, autumn scarlet fire, winter red stems"],
      ecologicalBenefits: ["Buzz-pollinated by native bumblebees (*Bombus*), berries sustain migratory songbirds"]
    },
    diagnosticGuide: [
      {
        symptom: "Leaves turn bright yellow with sharp dark green veins (chlorosis) and growth halts",
        probableCause: "Soil pH is too alkaline (> 5.5), locking up essential iron",
        remedyAction: "Amend soil immediately with elemental sulfur or acidic peat and drench with chelated iron.",
        preventativeTip: "Test soil pH annually and mulch only with acidic pine needles or pine bark."
      }
    ]
  },

  // 38. Eucalyptus Globulus (Blue Gum) - Tree
  {
    id: "specimen-eucalyptus-globulus",
    binomialName: "Eucalyptus globulus",
    botanicalAuthority: "Labill. (1799)",
    commonNames: ["Tasmanian Blue Gum", "Southern Blue Gum", "Fever Tree"],
    family: "Myrtaceae",
    genus: "Eucalyptus",
    order: "Myrtales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to southeastern Australia and Tasmania)",
    nativeHabitat: "Montane forests, coastal ranges, and river valleys of Tasmania and Victoria",
    geographicDistribution: ["Australia", "Naturalized in California, Portugal, Chile"],
    climateZones: ["Temperate Oceanic (Cfb)", "Mediterranean (Csb)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Eucalyptus globulus is an Australian titan capable of soaring beyond 70 meters. Its juvenile foliage is glaucous silvery-blue and rounded, transforming into long sickle-shaped adult leaves infused with cineole essential oils that perfume the air after rain.",
    morphology: {
      growthHabit: "Massive evergreen tree with smooth peeling ribbons of bark",
      leafType: "Dimorphic: juvenile foliage glaucous blue and opposite; adult leaves falcate dark green",
      phyllotaxy: "Juvenile opposite, adult alternate",
      bloomPeriod: "Winter into spring (large cream solitary flowers with blue operculum)",
      matureHeight: "30m to 70m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Salivation", "Vomiting", "Diarrhea", "Lethargy", "Ataxia from eucalyptol"],
        targetOrgans: ["Gastrointestinal", "Neurological"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Weakness", "Excessive drooling"],
        targetOrgans: ["Gastrointestinal", "Neurological"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Leaves brewed as mild tea are traditional; undiluted essential eucalyptus oil is POISONOUS if swallowed and can cause seizures in small children."
      },
      toxicCompounds: ["Eucalyptol (1,8-cineole)", "Terpenes", "Cyanogenic glycosides"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Demands full unfiltered sunlight.",
      wateringFrequency: "Very drought-tolerant once established with deep taproot.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Adaptable to most soils provided drainage is good",
      soilPh: "5.5 – 7.5",
      temperatureRange: "-6°C – 35°C",
      hardinessZones: "USDA 9 – 11",
      humidityRequirement: "Low to Moderate",
      fertilizerRecommendation: "None required."
    },
    uses: {
      culinary: {
        edible: false,
        edibleParts: [],
        flavorProfile: "Toxic cineole",
        culinaryUses: []
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["1,8-cineole (eucalyptol)", "Alpha-pinene", "Flavonoids"],
        traditionalApplications: ["Inhalation steam for respiratory congestion, bronchitis, and antiseptic vapor."],
        modernResearchNotes: "Eucalyptol acts as a potent mucolytic and bronchodilator in clinical pulmonary trials."
      },
      ornamental: ["Cut foliage in high-end floral design, large rural windbreaks"],
      ecologicalBenefits: ["Massive winter nectar source for honeyeaters and bees; sole food source for wild Koalas"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapid shedding of bark ribbons littering ground with explosive fire risk",
        probableCause: "Natural decorticating bark adaptation that fuels pyrophytic fire cycles",
        remedyAction: "Rake and clear dry bark away from building structures in fire-prone zones.",
        preventativeTip: "Do not plant close to residences in wildfire interfaces."
      }
    ]
  },

  // 39. Schlumbergera Bridgesii (Christmas Cactus) - Succulent
  {
    id: "specimen-schlumbergera-bridgesii",
    binomialName: "Schlumbergera x buckleyi",
    botanicalAuthority: "(T.Moore) Tjaden (1969) [syn. S. bridgesii]",
    commonNames: ["Christmas Cactus", "Holiday Cactus"],
    family: "Cactaceae",
    genus: "Schlumbergera",
    order: "Caryophyllales",
    taxonomicClass: "Succulent",
    conservationStatus: "NE",
    iucnDescription: "Not Evaluated (Cultivated Brazilian epiphyte hybrid)",
    nativeHabitat: "Coastal mountain rainforests of southeastern Brazil, growing on mossy tree branches",
    geographicDistribution: ["Brazil (Serra dos Órgãos)", "Worldwide indoor cultivation"],
    climateZones: ["Tropical Montane", "Humid Subtropical"],
    primaryImageUrl: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Unlike desert cacti, Schlumbergera is a spineless rainforest epiphyte that nestles in tree crotches amidst orchids and bromeliads. It features segmented flat leaf-like cladodes and blooms lavishly with multi-tiered fuchsia blossoms around the winter holidays.",
    morphology: {
      growthHabit: "Epiphytic branching succulent forming arching weeping clusters",
      leafType: "Leaves reduced to flattened, scallop-edged green stem segments (cladodes)",
      phyllotaxy: "Articulated segments",
      bloomPeriod: "Late autumn through mid-winter (exotic tiered zygomorphic flowers)",
      matureHeight: "0.3m to 0.5m with arching spread"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "100% non-toxic to dogs, cats, and humans. Perfectly safe holiday plant!"
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Bright Indirect",
      sunlightDetails: "Dappled filtered sunlight; scorching sun reddens and burns cladodes.",
      wateringFrequency: "Water when the top third of the soil feels dry; do not treat like a desert cactus.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Porous, rich, aerated potting mix (peat, perlite, and fine orchid bark)",
      soilPh: "5.5 – 6.2",
      temperatureRange: "15°C – 22°C (Requires cool night temperatures ~12°C in autumn to set flower buds)",
      hardinessZones: "USDA 10 – 12",
      humidityRequirement: "50% – 70%",
      fertilizerRecommendation: "High-potassium feed monthly through summer until autumn bud set."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Heirloom indoor winter holiday flowering centerpiece; can live for over 80 years"],
      ecologicalBenefits: ["Rainforest canopy epiphyte pollinated by hummingbirds (*Trochilidae*)"]
    },
    diagnosticGuide: [
      {
        symptom: "All flower buds drop to the floor right before opening",
        probableCause: "Sudden temperature fluctuation, draft, or relocating the plant after buds set",
        remedyAction: "Keep container in an undisturbed stable location once buds develop.",
        preventativeTip: "Do not move or rotate pot once flower buds are visible."
      }
    ]
  },

  // 40. Papaver Somniferum (Opium Poppy) - Flower
  {
    id: "specimen-papaver-somniferum",
    binomialName: "Papaver somniferum",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Opium Poppy", "Breadseed Poppy"],
    family: "Papaveraceae",
    genus: "Papaver",
    order: "Ranunculales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Ancient domesticated crop originating in the Mediterranean)",
    nativeHabitat: "Agricultural fields, disturbed roadsides, and limestone river terraces",
    geographicDistribution: ["Mediterranean Basin", "Central Asia", "Global cultivation"],
    climateZones: ["Temperate", "Mediterranean"],
    primaryImageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Papaver somniferum produces exquisite, crinkled tissue-paper blooms in shades of lilac, white, and crimson, crowned by a prominent capsule. It has played a momentous role in human history as the botanical source of both culinary poppy seeds and foundational analgesic opiates.",
    morphology: {
      growthHabit: "Glaucous annual herb with erect leafy stems",
      leafType: "Clasping, irregularly toothed or lobed, chalky grayish-green",
      phyllotaxy: "Alternate clasping",
      bloomPeriod: "Early to mid-summer (short-lived paper-like flowers)",
      matureHeight: "0.8m to 1.2m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Critical / Life-Threatening",
        clinicalSigns: ["Severe lethargy", "Pupil dilation", "Respiratory depression", "Coma", "Ataxia"],
        targetOrgans: ["Central Nervous System", "Respiratory"]
      },
      dogs: {
        toxic: true,
        severity: "Critical / Life-Threatening",
        clinicalSigns: ["Pinpoint pupils", "Sedation", "Slow shallow breathing", "Vomiting", "Collapse"],
        targetOrgans: ["Central Nervous System", "Respiratory"]
      },
      humans: {
        toxic: true,
        severity: "Highly Toxic / Ingestion Danger",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Ripe washed seeds used in baking are non-narcotic. The unripened green seed pod latex contains potent morphine and codeine alkaloids that can cause fatal respiratory arrest if consumed."
      },
      toxicCompounds: ["Morphine", "Codeine", "Thebaine", "Papaverine"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6+ hours sun.",
      wateringFrequency: "Keep moist during seedling stage; drought-tolerant once established.",
      wateringMetric: "Low",
      hygrometerPips: 2,
      soilType: "Well-drained, fertile garden loam or sandy loam",
      soilPh: "6.0 – 7.5",
      temperatureRange: "10°C – 28°C",
      hardinessZones: "USDA 3 – 9 (Annual)",
      humidityRequirement: "Low to Moderate",
      fertilizerRecommendation: "Light compost dressing in spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Mature dry culinary seeds (Poppy seeds)"],
        flavorProfile: "Nutty, rich, slightly sweet with crisp texture",
        culinaryUses: ["Lemon poppy seed muffins, Polish makowiec poppy seed roll, Jewish hamantaschen filling"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Morphine", "Codeine", "Noscapine", "Papaverine"],
        traditionalApplications: ["Historic narcotic analgesic and sleep draught."],
        modernResearchNotes: "Foundation of modern clinical pain medicine; regulated strictly under international treaties."
      },
      ornamental: ["Heirloom cottage garden flowers, ornamental dried pods"],
      ecologicalBenefits: ["Massive early summer pollen resource for honeybees and bumblebees"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapid wilting of young seedlings at soil level",
        probableCause: "Damping off fungal pathogens in waterlogged cold soil",
        remedyAction: "Sow seeds directly in well-drained sunny ground; do not transplant poppies.",
        preventativeTip: "Thin seedlings to allow rapid air drying around stem collars."
      }
    ]
  }
];
