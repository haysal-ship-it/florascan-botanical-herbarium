import { BotanicalSpecimen } from "../types/botanical";

export const EXTRA_SPECIMENS: BotanicalSpecimen[] = [
  // 41. Calathea Orbifolia - Plant
  {
    id: "specimen-calathea-orbifolia",
    binomialName: "Goeppertia orbifolia",
    botanicalAuthority: "(Linden) Borchs. & S.Suárez (2012) [syn. Calathea orbifolia]",
    commonNames: ["Orbifolia Prayer Plant", "Calathea Orbifolia"],
    family: "Marantaceae",
    genus: "Goeppertia",
    order: "Zingiberales",
    taxonomicClass: "Plant",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Bolivian tropical rainforests)",
    nativeHabitat: "Damp, shaded tropical rainforest understory",
    geographicDistribution: ["Bolivia", "Amazon Basin"],
    climateZones: ["Tropical Wet (Af)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Goeppertia orbifolia is celebrated for its oversized, rounded leaves patterned with subtle metallic silver-green bands along the lateral veins. Like all prayer plants, its foliage folds upright at night via a pulvinus joint at the base of the blade.",
    morphology: {
      growthHabit: "Herbaceous evergreen rhizomatous perennial forming rounded clumps",
      leafType: "Orbicular, broad coriaceous leaves with alternating silver and green stripes",
      phyllotaxy: "Basal",
      bloomPeriod: "Rare indoors (pale yellow to white inflorescence)",
      matureHeight: "0.6m to 1.0m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "100% pet-safe and child-safe. Perfect for pet-friendly households!"
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Deep Shade",
      sunlightDetails: "Medium to bright indirect light; direct sun bleaches and curls silver stripes.",
      wateringFrequency: "Keep potting substrate evenly moist; sensitive to mineral salts.",
      wateringMetric: "Moist",
      hygrometerPips: 4,
      soilType: "Spongy, peat-rich aroid or calathea mix (peat, perlite, vermiculite)",
      soilPh: "6.0 – 6.5",
      temperatureRange: "18°C – 26°C (Avoid temperatures below 15°C)",
      hardinessZones: "USDA 11 – 12",
      humidityRequirement: "65% – 85% (Requires high atmospheric moisture)",
      fertilizerRecommendation: "Quarter-strength organic balanced feed monthly in summer."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Luxury statement indoor foliage", "Pet-friendly modern interior styling"],
      ecologicalBenefits: ["Rainforest understory microclimate humidity moderation"]
    },
    diagnosticGuide: [
      {
        symptom: "Foliage curls tightly inward into tubular straws",
        probableCause: "Low atmospheric humidity (< 50%) or dry soil root stress",
        remedyAction: "Place near a cool-mist humidifier and water thoroughly with distilled water.",
        preventativeTip: "Never use mineral-laden hard tap water containing fluoride or chlorine."
      }
    ]
  },

  // 42. Hydrangea Macrophylla (Bigleaf Hydrangea) - Flower
  {
    id: "specimen-hydrangea-macrophylla",
    binomialName: "Hydrangea macrophylla",
    botanicalAuthority: "(Thunb.) Ser. (1830)",
    commonNames: ["Bigleaf Hydrangea", "French Hydrangea", "Hortensia", "Mophead Hydrangea"],
    family: "Hydrangeaceae",
    genus: "Hydrangea",
    order: "Cornales",
    taxonomicClass: "Flower",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Japanese coastal seaside scrub)",
    nativeHabitat: "Coastal cliffs, sea bluffs, and maritime woodlands of Honshu, Japan",
    geographicDistribution: ["Japan", "Cultivated throughout temperate world"],
    climateZones: ["Temperate Oceanic", "Humid Subtropical"],
    primaryImageUrl: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Hydrangea macrophylla is famous for its natural pH-dependent floral chromatic shift: acidic soils with free aluminum ions produce sky-blue mophead blooms, while neutral or alkaline soils yield vibrant pink to red blossoms.",
    morphology: {
      growthHabit: "Deciduous rounded broadleaf shrub",
      leafType: "Broad ovate, coarsely serrate, lustrous green",
      phyllotaxy: "Opposite decussate",
      bloomPeriod: "Early summer to autumn (large terminal corymbs)",
      matureHeight: "1.2m to 2.0m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Diarrhea", "Lethargy", "Stomach pain from cyanogenic hydrangin"],
        targetOrgans: ["Gastrointestinal", "Cellular Respiration"]
      },
      dogs: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Depression", "Anorexia"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: true,
        severity: "Mild Contact Irritant",
        safeForChildren: false,
        contactDermatitisRisk: false,
        notes: "Leaves, buds, and flowers contain cyanogenic glycoside hydrangin; ingestion can produce nausea and gastrointestinal upset."
      },
      toxicCompounds: ["Hydrangin (cyanogenic glycoside)"]
    },
    careGuide: {
      sunlight: "Partial Shade / Dappled",
      sunlightDetails: "Gentle morning sun with dappled shade during hot afternoon hours.",
      wateringFrequency: "Requires abundant moisture; soil must never dry out completely.",
      wateringMetric: "High",
      hygrometerPips: 4,
      soilType: "Rich, fertile, moisture-retentive loamy soil",
      soilPh: "5.2 – 5.5 (Blue flowers) or 6.5 – 7.2 (Pink flowers)",
      temperatureRange: "-15°C – 28°C",
      hardinessZones: "USDA 5 – 9",
      humidityRequirement: "50% – 70%",
      fertilizerRecommendation: "Aluminum sulfate for blue blossoms; high phosphorus for pink."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Inedible cyanogenic glycosides", culinaryUses: [] },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Hydrangin", "Febrifugine", "Secoiridoids"],
        traditionalApplications: ["Root decoction historically used by Cherokee for kidney gravel and stones."],
        modernResearchNotes: "Febrifugine derivatives under investigation as potential antimalarial compounds."
      },
      ornamental: ["Cottage garden borders, seaside gardens, long-lasting cut flowers"],
      ecologicalBenefits: ["Attracts hoverflies and pollinators in late summer"]
    },
    diagnosticGuide: [
      {
        symptom: "Severe mid-afternoon wilting of foliage on sunny days",
        probableCause: "Rapid transpiration exceeding root water absorption",
        remedyAction: "Water deeply in morning and apply 5cm wood mulch over root zone.",
        preventativeTip: "Plant in an east-facing spot sheltered from harsh western afternoon rays."
      }
    ]
  },

  // 43. Coriandrum Sativum (Cilantro / Coriander) - Herb
  {
    id: "specimen-coriandrum-sativum",
    binomialName: "Coriandrum sativum",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Cilantro", "Coriander", "Chinese Parsley", "Dhania"],
    family: "Apiaceae",
    genus: "Coriandrum",
    order: "Apiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to Southern Europe, North Africa, and Southwest Asia)",
    nativeHabitat: "Agricultural fields, sandy river meadows, and Mediterranean scrub",
    geographicDistribution: ["Southern Europe", "Middle East", "Worldwide culinary cultivation"],
    climateZones: ["Mediterranean", "Temperate"],
    primaryImageUrl: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Coriandrum sativum is a dual-purpose herb whose pungent fresh leaves (cilantro) and warm citrusy dried seeds (coriander) have seasoned human food since Egyptian pharaonic tombs. Leaf perception is famously genetic: individuals with the OR6A2 olfactory receptor gene perceive a soapy taste due to aldehyde sensitivity.",
    morphology: {
      growthHabit: "Slender, glabrous, aromatic annual herb",
      leafType: "Dimorphic: lower leaves broad lobed; upper leaves finely dissected linear segments",
      phyllotaxy: "Alternate",
      bloomPeriod: "Late spring into summer (compound umbels of small white to pale pink flowers)",
      matureHeight: "0.4m to 0.6m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Nutrient-rich, vitamin-dense, completely non-toxic culinary herb."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Full sun in cool spring; dappled afternoon shade prevents premature bolting in summer heat.",
      wateringFrequency: "Keep soil moderately moist; dry stress triggers immediate seed bolting.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Well-drained, rich, friable garden soil",
      soilPh: "6.2 – 6.8",
      temperatureRange: "10°C – 24°C (Bolts to seed rapidly above 26°C)",
      hardinessZones: "USDA 2 – 11 (Annual)",
      humidityRequirement: "40% – 60%",
      fertilizerRecommendation: "Organic compost tea; avoid heavy nitrogen."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh leaves (cilantro)", "Seeds (coriander)", "Flavorful taproots"],
        flavorProfile: "Leaves: citrusy, herbal, pungent. Seeds: warm citrus, nutty, floral coriander notes",
        culinaryUses: ["Fresh salsa verde, Thai green curry paste, Mexican tacos, garam masala spice blends"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Linalool", "Quercetin", "Decanal", "Coriandrol"],
        traditionalApplications: ["Carminative for indigestion, natural heavy metal chelation support."],
        modernResearchNotes: "Linalool in seeds demonstrates significant spasmolytic and antioxidant activity."
      },
      ornamental: ["Kitchen edible containers, raised herb beds"],
      ecologicalBenefits: ["Umbelliferous flowers attract hoverflies, predatory lacewings, and parasitic wasps"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapid vertical stretching, flowering, and leaf flavor loss in warm weather",
        probableCause: "Bolting triggered by long daylight hours and temperatures above 25°C",
        remedyAction: "Harvest leaves immediately; allow plant to produce delicious coriander seeds.",
        preventativeTip: "Sow seeds every 2-3 weeks in early spring and late summer for continuous harvest."
      }
    ]
  },

  // 44. Mangifera Indica (Mango Tree) - Fruit/Tree
  {
    id: "specimen-mangifera-indica",
    binomialName: "Mangifera indica",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Mango", "King of Fruits", "Aam"],
    family: "Anacardiaceae",
    genus: "Mangifera",
    order: "Sapindales",
    taxonomicClass: "Fruit",
    conservationStatus: "DD",
    iucnDescription: "Data Deficient in wild; extensively cultivated worldwide",
    nativeHabitat: "Tropical rainforest river valleys of South and Southeast Asia",
    geographicDistribution: ["India", "Myanmar", "Thailand", "Pantropical belts"],
    climateZones: ["Tropical Wet-and-Dry (Aw)", "Tropical Monsoon (Am)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Mangifera indica, hailed across India as the 'King of Fruits', has been cultivated for over 4,000 years. A member of the cashew family (*Anacardiaceae*), its sweet, golden, juicy drupes are renowned worldwide for their luscious tropical fragrance.",
    morphology: {
      growthHabit: "Large, long-lived evergreen tree with dense dome-shaped canopy",
      leafType: "Coriaceous, lanceolate, coppery-red when young, maturing dark glossy green",
      phyllotaxy: "Spiral alternate",
      bloomPeriod: "Winter (thousands of tiny fragrant yellowish flowers in terminal panicles)",
      matureHeight: "15m to 30m"
    },
    toxicity: {
      cats: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Pulp is safe; pit is a severe intestinal choking hazard"],
        targetOrgans: []
      },
      dogs: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Flesh is safe; pit contains trace cyanide and poses intestinal obstruction"],
        targetOrgans: []
      },
      humans: {
        toxic: false,
        severity: "Mild Contact Irritant",
        safeForChildren: true,
        contactDermatitisRisk: true,
        notes: "Mango peel and sap contain urushiol (the same allergen in poison ivy); peeling fruit prevents perioral contact dermatitis in sensitive individuals."
      },
      toxicCompounds: ["Urushiol (in skin and stem sap)", "Mangiferin"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs full blazing tropical sunlight (8+ hours).",
      wateringFrequency: "Deep watering during flower set and fruit growth; withhold water in late autumn to stimulate bloom.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Deep, well-draining sandy loam or alluvial soil",
      soilPh: "5.5 – 7.5",
      temperatureRange: "15°C – 42°C (Sensitive to freezing; young trees perish at 0°C)",
      hardinessZones: "USDA 10 – 12",
      humidityRequirement: "50% – 85%",
      fertilizerRecommendation: "Organic potassium-rich fruit fertilizer applied after harvest."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Ripe pulp", "Green unripe mango", "Dried amchur powder"],
        flavorProfile: "Rich tropical sweetness, peach-pine aroma, honeyed citrus notes",
        culinaryUses: ["Mango lassi, green mango chutney, sticky rice with mango, fresh ceviche"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Mangiferin", "Beta-carotene", "Vitamin C", "Quercetin"],
        traditionalApplications: ["Ayurvedic cardiac and digestive restorative."],
        modernResearchNotes: "Mangiferin is a potent natural xanthonoid with documented anti-diabetic and antioxidant actions."
      },
      ornamental: ["Majestic tropical shade tree with coppery young foliage"],
      ecologicalBenefits: ["Massive tropical canopy shade, high nectar resource for fruit bats and pollinators"]
    },
    diagnosticGuide: [
      {
        symptom: "Black sunken spots on flowers and developing fruit causing blossom drop",
        probableCause: "Anthracnose (Colletotrichum gloeosporioides) fungal infection in rainy weather",
        remedyAction: "Apply organic copper spray during flower panicle emergence.",
        preventativeTip: "Prune canopy to promote rapid sun and wind drying."
      }
    ]
  },

  // 45. Pinus Sylvestris (Scots Pine) - Tree
  {
    id: "specimen-pinus-sylvestris",
    binomialName: "Pinus sylvestris",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Scots Pine", "Scotch Pine", "Forest Pine"],
    family: "Pinaceae",
    genus: "Pinus",
    order: "Pinales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Vast boreal pine distribution across Eurasia)",
    nativeHabitat: "Boreal taiga forests, sandy dunes, granite outcrops, and peat bogs",
    geographicDistribution: ["Eurasia", "Scotland", "Scandinavia", "Siberia"],
    climateZones: ["Boreal / Taiga (Dfc)", "Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Pinus sylvestris is the classic pine of the Eurasian boreal taiga, recognizable by its striking warm coppery-orange bark in the upper canopy. Capable of enduring arctic winters down to -60°C, it is an ecological pillar of northern coniferous forests.",
    morphology: {
      growthHabit: "Large coniferous evergreen tree with straight trunk and umbrella-like flat crown",
      leafType: "Needles in pairs (fascicles of 2), twisted, glaucous blue-green",
      phyllotaxy: "Spiral fascicles",
      bloomPeriod: "Late spring (yellow male pollen cones and pinkish female seed cones)",
      matureHeight: "20m to 35m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Gastrointestinal upset from pine needles; pine oil can stress feline livers"],
        targetOrgans: ["Gastrointestinal", "Hepatic"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Mild stomach irritation from swallowing sharp needles"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Needles brewed into pine needle tea are a famous historical cure for scurvy (rich in vitamin C)."
      },
      toxicCompounds: ["Terpenes", "Abietic acid (in sticky pine resin)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Demands full solar exposure; pioneer conifer intolerant of shade.",
      wateringFrequency: "Very drought-tolerant once established; hates waterlogged soil.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "Sandy, rocky, acidic poor soil; thrives where other trees struggle",
      soilPh: "4.5 – 6.5",
      temperatureRange: "-60°C – 30°C (Unrivaled boreal frost hardiness)",
      hardinessZones: "USDA 2 – 7",
      humidityRequirement: "Low to Moderate",
      fertilizerRecommendation: "None required."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Young tender green spring shoots (pine tips)", "Needles for vitamin C tea"],
        flavorProfile: "Resinous, citrusy, piney, refreshing balsamic notes",
        culinaryUses: ["Pine tip infused syrup, Nordic pine salt, pine-smoked salmon"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Alpha-pinene", "Beta-pinene", "Ascorbic acid (Vitamin C)", "Pycnogenol"],
        traditionalApplications: ["Antiseptic steam inhalations for chest coughs and sore joints."],
        modernResearchNotes: "Pine bark proanthocyanidins (Pycnogenol) provide premier endothelial vascular support."
      },
      ornamental: ["Sculptural landscape evergreen with glowing orange upper bark"],
      ecologicalBenefits: ["Keystone taiga species; seeds sustain crossbills, red squirrels, and capercaillie"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapid needle browning from bottom upward with black banding",
        probableCause: "Dothistroma needle blight fungal infection in damp crowded plantings",
        remedyAction: "Improve spacing for wind airflow and apply copper fungicide in early summer.",
        preventativeTip: "Plant on well-drained sunny sites with excellent air movement."
      }
    ]
  },

  // 46. Lithops Optica (Living Stones) - Succulent
  {
    id: "specimen-lithops-optica",
    binomialName: "Lithops optica",
    botanicalAuthority: "(Marloth) N.E.Br. (1922)",
    commonNames: ["Living Stones", "Pebble Plants", "Ruby of the Desert"],
    family: "Aizoaceae",
    genus: "Lithops",
    order: "Caryophyllales",
    taxonomicClass: "Succulent",
    conservationStatus: "NT",
    iucnDescription: "Near Threatened (Restricted to coastal diamond gravels of Namibia)",
    nativeHabitat: "Arid coastal gravel plains and quartz sand flats in the Namib Desert",
    geographicDistribution: ["Namibia (Lüderitz region)"],
    climateZones: ["Hot Desert (BWh)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Lithops optica is nature's supreme master of camouflage (mimicry). Consisting of just two fused succulent leaves with a fissure between them, they blend seamlessly into surrounding desert quartzite stones to escape detection by thirsty desert animals.",
    morphology: {
      growthHabit: "Acaulescent dwarf mimicry succulent consisting of a single pair of fused leaves",
      leafType: "Cylindrical fleshy pair with translucent apical 'window' cells",
      phyllotaxy: "Opposite pair",
      bloomPeriod: "Late autumn (daisy-like white flower emerging from central fissure)",
      matureHeight: "0.02m to 0.04m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "100% non-toxic. Indigenous Namib desert peoples historically chewed wild Lithops for moisture."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 4–5 hours of direct morning sun; protect from boiling glass in midday summer heat.",
      wateringFrequency: "WATER ONLY 3-4 TIMES PER YEAR! Zero water in winter or during spring leaf regeneration.",
      wateringMetric: "Low",
      hygrometerPips: 1,
      soilType: "90% mineral grit (pumice, decomposed granite, coarse sand) with 10% organic soil",
      soilPh: "6.5 – 7.5",
      temperatureRange: "10°C – 35°C (Protect from frost)",
      hardinessZones: "USDA 10 – 11",
      humidityRequirement: "Ultra-low (< 30%)",
      fertilizerRecommendation: "None required."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Watery mucilage", culinaryUses: [] },
      medicinal: { utilized: false, activePhytochemicals: [], traditionalApplications: [] },
      ornamental: ["Botanical curiosity display in miniature dish gardens", "Masterclass succulent collector specimen"],
      ecologicalBenefits: ["Extreme evolutionary adaptation to survive on coastal sea fogs alone"]
    },
    diagnosticGuide: [
      {
        symptom: "Plant splits open into mushy brown liquid overnight",
        probableCause: "Watering during the dormant shedding cycle or organic potting mix",
        remedyAction: "Unsalvageable once cellular rot occurs; discard mushy specimen.",
        preventativeTip: "When the old pair of leaves is shriveling to feed the new pair, NEVER add water."
      }
    ]
  },

  // 47. Rubus Idaeus (Red Raspberry) - Fruit
  {
    id: "specimen-rubus-idaeus",
    binomialName: "Rubus idaeus",
    botanicalAuthority: "L. (1753)",
    commonNames: ["European Red Raspberry", "Wild Raspberry", "Framboise"],
    family: "Rosaceae",
    genus: "Rubus",
    order: "Rosales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Abundant across temperate Eurasia)",
    nativeHabitat: "Forest clearings, sunny woodland borders, and scree slopes",
    geographicDistribution: ["Eurasia", "North America", "Worldwide berry orchards"],
    climateZones: ["Temperate Oceanic", "Continental"],
    primaryImageUrl: "https://images.unsplash.com/photo-1543157148-f815da353577?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1543157148-f815da353577?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Rubus idaeus is named after Mount Ida in Greece, where ancient mythology recorded nymphs gathering wild raspberries for infant Zeus. Its aggregate fruit detaches cleanly from its central receptacle torus, leaving a distinctive hollow cup.",
    morphology: {
      growthHabit: "Biennial cane-producing perennial suckering subshrub with fine prickles",
      leafType: "Pinnately 3–5 foliate with sharply serrate ovate leaflets, silvery beneath",
      phyllotaxy: "Alternate",
      bloomPeriod: "Late spring (delicate white flowers)",
      matureHeight: "1.2m to 2.0m"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Edible and nutritious fruit and leaves."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 6+ hours sun for high sugar development in berries.",
      wateringFrequency: "Keep root zone evenly moist; shallow roots need mulch.",
      wateringMetric: "Moderate",
      hygrometerPips: 3,
      soilType: "Rich, fertile, moisture-retentive, well-draining acidic loam",
      soilPh: "5.8 – 6.5",
      temperatureRange: "-30°C – 28°C",
      hardinessZones: "USDA 3 – 8",
      humidityRequirement: "Moderate",
      fertilizerRecommendation: "Organic compost and balanced berry fertilizer in early spring."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh aggregate berries", "Young dried leaves for tea"],
        flavorProfile: "Sweet, tangy, aromatic, floral with bright acidity",
        culinaryUses: ["Fresh berries, raspberry coulis, framboise tarts, artisanal jams"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Ellagic acid", "Anthocyanins", "Fragarine", "Quercetin"],
        traditionalApplications: ["Red raspberry leaf tea used across centuries for uterine tone in late pregnancy."],
        modernResearchNotes: "High ellagic acid content provides potent antioxidant and anti-inflammatory properties."
      },
      ornamental: ["Fruit garden trellises, edible landscaping hedges"],
      ecologicalBenefits: ["High nectar flow for bumblebees, fruit sustains woodland thrushes and bears"]
    },
    diagnosticGuide: [
      {
        symptom: "Leaves turn mottled yellow with distorted crinkled edges",
        probableCause: "Raspberry mosaic virus transmitted by aphids",
        remedyAction: "Dig up and burn infected canes; control aphid vectors with organic soap.",
        preventativeTip: "Plant certified virus-free canes."
      }
    ]
  },

  // 48. Petroselinum Crispum (Parsley) - Herb
  {
    id: "specimen-petroselinum-crispum",
    binomialName: "Petroselinum crispum",
    botanicalAuthority: "(Mill.) Fuss (1866)",
    commonNames: ["Garden Parsley", "Flat-Leaf Italian Parsley", "Curly Parsley"],
    family: "Apiaceae",
    genus: "Petroselinum",
    order: "Apiales",
    taxonomicClass: "Herb",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to southern Mediterranean rocky cliffs)",
    nativeHabitat: "Sunny limestone rocks, stream banks, and pastures across the Mediterranean",
    geographicDistribution: ["Southern Europe", "Mediterranean Basin", "Worldwide cultivation"],
    climateZones: ["Mediterranean", "Temperate"],
    primaryImageUrl: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Petroselinum crispum is a cornerstone culinary herb of European, Middle Eastern, and American cuisines. In ancient Greece, wild parsley (*rock celery*) crowned victorious athletes at the Isthmian Games; today its bright emerald leaves provide crisp herbal freshness and breath-cleansing chlorophyll.",
    morphology: {
      growthHabit: "Biennial herbaceous aromatic plant with deep fleshy taproot",
      leafType: "Tripinnate, either flat and deeply dissected (var. neapolitanum) or tightly curled (var. crispum)",
      phyllotaxy: "Basal rosette in first year",
      bloomPeriod: "Second year summer (compound umbels of tiny yellow-green flowers)",
      matureHeight: "0.3m to 0.6m"
    },
    toxicity: {
      cats: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Curly parsley is safe; toxic 'spring parsley' (Cymopterus) is a different plant"],
        targetOrgans: []
      },
      dogs: {
        toxic: false,
        severity: "Non-Toxic",
        clinicalSigns: ["Safe in moderation; freshening breath dog treats"],
        targetOrgans: []
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Nutrient powerhouse rich in vitamins C, K, and folate."
      },
      toxicCompounds: ["Apiol", "Myristicin (in seeds only)"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Full sun to partial light shade.",
      wateringFrequency: "Keep soil evenly moist; do not allow taproot to dry out completely.",
      wateringMetric: "Moist",
      hygrometerPips: 3,
      soilType: "Deep, rich, moist, fertile garden loam",
      soilPh: "6.0 – 7.0",
      temperatureRange: "-10°C – 28°C",
      hardinessZones: "USDA 4 – 9 (Biennial)",
      humidityRequirement: "45% – 65%",
      fertilizerRecommendation: "Organic liquid kelp or fish emulsion every 4 weeks."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Fresh leaves", "Tender stems", "Taproots"],
        flavorProfile: "Crisp, peppery, grassy, bright herbal freshness",
        culinaryUses: ["Tabbouleh salad, persillade, gremolata, chimichurri, bouquet garni"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Apigenin", "Luteolin", "Vitamin K", "Myristicin"],
        traditionalApplications: ["Natural breath freshener, mild diuretic, digestive stimulant."],
        modernResearchNotes: "Apigenin demonstrates significant anti-inflammatory and cellular longevity actions."
      },
      ornamental: ["Neat edible border edging, herb garden companion"],
      ecologicalBenefits: ["Primary larval host plant for Black Swallowtail (*Papilio polyxenes*) caterpillars"]
    },
    diagnosticGuide: [
      {
        symptom: "Rapid leaf loss caused by plump green caterpillars with black stripes and orange spots",
        probableCause: "Black Swallowtail butterfly larvae feeding on their favorite host plant",
        remedyAction: "Celebrate native biodiversity; caterpillars will pupate into gorgeous swallowtail butterflies.",
        preventativeTip: "Plant extra parsley specifically dedicated for butterfly caterpillars."
      }
    ]
  },

  // 49. Musa Acuminata (Dwarf Cavendish Banana) - Fruit/Plant
  {
    id: "specimen-musa-acuminata",
    binomialName: "Musa acuminata",
    botanicalAuthority: "Colla (1820)",
    commonNames: ["Dwarf Cavendish Banana", "Wild Banana", "Canary Banana"],
    family: "Musaceae",
    genus: "Musa",
    order: "Zingiberales",
    taxonomicClass: "Fruit",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Wild ancestor native to Southeast Asian rainforests)",
    nativeHabitat: "Tropical rainforest clearings, riverbanks, and secondary forests",
    geographicDistribution: ["Southeast Asia", "Pantropical cultivation"],
    climateZones: ["Tropical Wet (Af)"],
    primaryImageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Botanically speaking, the banana is not a tree but the world's largest perennial herbaceous plant. Its 'trunk' is a pseudostem composed of tightly wrapped leaf sheaths, and each golden fruit is technically a berry enclosing minute aborted seeds.",
    morphology: {
      growthHabit: "Colossal monocotyledonous evergreen herb with underground corm",
      leafType: "Massive oblong leaves with prominent midrib that easily fray in wind",
      phyllotaxy: "Spiral",
      bloomPeriod: "Large pendulous inflorescence with deep purple bracts enclosing floral tiers",
      matureHeight: "2m to 3m (Dwarf Cavendish)"
    },
    toxicity: {
      cats: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      dogs: { toxic: false, severity: "Non-Toxic", clinicalSigns: [] },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Nutritious, potassium-dense, completely non-toxic fruit."
      },
      toxicCompounds: []
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs 8+ hours direct sunlight.",
      wateringFrequency: "Massive water requirement; keep soil consistently damp.",
      wateringMetric: "High",
      hygrometerPips: 5,
      soilType: "Rich, deep, heavily amended organic loam with compost",
      soilPh: "5.5 – 6.5",
      temperatureRange: "20°C – 35°C (Growth halts below 15°C; leaves suffer frost damage at 0°C)",
      hardinessZones: "USDA 9b – 11",
      humidityRequirement: "60% – 90%",
      fertilizerRecommendation: "Heavy feeder: high potassium organic fertilizer applied every 2 weeks."
    },
    uses: {
      culinary: {
        edible: true,
        edibleParts: ["Sweet ripe fruit", "Green cooking bananas", "Purple banana heart flower", "Leaves as wrapping"],
        flavorProfile: "Sweet, creamy, rich tropical honey fragrance",
        culinaryUses: ["Fresh fruit, banana bread, grilled banana leaf packets for fish, banana flower curry"]
      },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Potassium", "Vitamin B6", "Dopamine", "Resistant starch"],
        traditionalApplications: ["Digestive soothing and natural antacid."],
        modernResearchNotes: "High potassium assists in cardiovascular blood pressure regulation."
      },
      ornamental: ["Lush tropical oasis aesthetic, large paddle architectural foliage"],
      ecologicalBenefits: ["High biomass accumulator, wildlife forage in tropical forest edges"]
    },
    diagnosticGuide: [
      {
        symptom: "Huge leaves shredding into tatters and ribbons",
        probableCause: "Strong wind tearing along natural leaf cleavage lines",
        remedyAction: "Relocate container to a sheltered courtyard protected from gusts.",
        preventativeTip: "Shredding is a natural evolutionary design to prevent gale winds from uprooting the plant."
      }
    ]
  },

  // 50. Salix Babylonica (Weeping Willow) - Tree
  {
    id: "specimen-salix-babylonica",
    binomialName: "Salix babylonica",
    botanicalAuthority: "L. (1753)",
    commonNames: ["Weeping Willow", "Babylon Willow", "Peking Willow"],
    family: "Salicaceae",
    genus: "Salix",
    order: "Malpighiales",
    taxonomicClass: "Tree",
    conservationStatus: "LC",
    iucnDescription: "Least Concern (Native to dry river valleys of northern China)",
    nativeHabitat: "Riverbanks, lake shores, and wetland floodplains",
    geographicDistribution: ["China", "Worldwide waterside cultivation"],
    climateZones: ["Temperate", "Humid Subtropical"],
    primaryImageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: ["https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"],
    overviewMonograph: "Salix babylonica is an enchanting waterside tree whose long, slender pendulous branches sweep gracefully down to touch the surface of ponds and streams. Its bark is the historic natural source of salicin, the active botanical precursor synthesized into modern aspirin.",
    morphology: {
      growthHabit: "Medium to large deciduous tree with weeping arching branches",
      leafType: "Narrow, lanceolate, finely serrate, light green above, glaucous beneath",
      phyllotaxy: "Spiral alternate",
      bloomPeriod: "Early spring (slender yellow catkins emerging with leaves)",
      matureHeight: "10m to 15m"
    },
    toxicity: {
      cats: {
        toxic: true,
        severity: "Moderate Systemic Danger",
        clinicalSigns: ["Vomiting", "Salicylate poisoning if bark chewed; cats cannot metabolize aspirin"],
        targetOrgans: ["Hepatic", "Gastrointestinal"]
      },
      dogs: {
        toxic: true,
        severity: "Mild Oral/GI Irritant",
        clinicalSigns: ["Gastrointestinal upset from chewing bark"],
        targetOrgans: ["Gastrointestinal"]
      },
      humans: {
        toxic: false,
        severity: "Non-Toxic / Edible",
        safeForChildren: true,
        contactDermatitisRisk: false,
        notes: "Bark contains salicin; historically chewed for headache and fever relief."
      },
      toxicCompounds: ["Salicin", "Salicylates", "Tannins"]
    },
    careGuide: {
      sunlight: "Full Sun",
      sunlightDetails: "Needs full sun for vigorous arching branch form.",
      wateringFrequency: "Extremely thirsty; thrives right at the water's edge in boggy soils.",
      wateringMetric: "High",
      hygrometerPips: 5,
      soilType: "Deep, moist to wet alluvial soil; tolerates standing water",
      soilPh: "5.5 – 7.5",
      temperatureRange: "-20°C – 35°C",
      hardinessZones: "USDA 6 – 9",
      humidityRequirement: "Moderate to High",
      fertilizerRecommendation: "None required."
    },
    uses: {
      culinary: { edible: false, edibleParts: [], flavorProfile: "Bitter salicin bark", culinaryUses: [] },
      medicinal: {
        utilized: true,
        activePhytochemicals: ["Salicin", "Salicortin", "Flavonoids", "Tannins"],
        traditionalApplications: ["Willow bark decoction used by Hippocrates and Galen for fevers and pain."],
        modernResearchNotes: "Salicin was the chemical template for the 1897 synthesis of acetylsalicylic acid (Aspirin)."
      },
      ornamental: ["Romantic waterside landscaping, pond focal point"],
      ecologicalBenefits: ["Unrivaled riverbank soil stabilization, early spring bee forage"]
    },
    diagnosticGuide: [
      {
        symptom: "Aggressive roots infiltrating underground sewer and plumbing pipes",
        probableCause: "Water-seeking invasive root system spreading toward pipe moisture",
        remedyAction: "Never plant weeping willows within 15 meters of septic tanks, foundations, or pipes.",
        preventativeTip: "Plant strictly along natural riverbanks, ponds, or rural lakes."
      }
    ]
  }
];
