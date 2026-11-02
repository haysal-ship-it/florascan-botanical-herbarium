import { BotanicalSpecimen } from '../types/botanical';
import { SAMPLE_LABORATORY_SPECIMENS } from '../data/botanicalDatabase';

const STORAGE_KEY = 'florascan_gemini_api_key';

export function getStoredGeminiKey(): string | null {
  if (typeof window === 'undefined') return null;
  const envKey = (import.meta as { env?: Record<string, string> }).env?.VITE_GEMINI_API_KEY;
  return (
    localStorage.getItem(STORAGE_KEY) ||
    envKey ||
    null
  );
}

export function setStoredGeminiKey(key: string): void {
  if (typeof window === 'undefined') return;
  if (key.trim()) {
    localStorage.setItem(STORAGE_KEY, key.trim());
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function isAIVisionConfigured(): boolean {
  return Boolean(getStoredGeminiKey());
}

/**
 * Strip metadata header from data URL to get raw base64 and mime type
 */
function parseDataUrl(dataUrl: string): { base64Data: string; mimeType: string } {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (match) {
    return { mimeType: match[1], base64Data: match[2] };
  }
  return { mimeType: 'image/jpeg', base64Data: dataUrl };
}

const BOTANICAL_ANALYSIS_PROMPT = `You are a world-renowned botanical taxonomist, horticulturalist, and veterinary toxicologist.
Analyze this plant, flower, fruit, succulent, tree, or herb image with maximum scientific precision.
Identify the specimen down to its exact common and botanical binomial name.

You must respond ONLY with a valid, parseable JSON object adhering strictly to this structure:
{
  "id": "ai-discovered-[kebab-case-scientific-name]",
  "binomialName": "Scientific Binomial Name in italics form (e.g. Monstera deliciosa)",
  "botanicalAuthority": "Botanical naming authority abbreviation (e.g. Liebm., L., Miller)",
  "commonNames": ["Primary Common Name", "Alternative Common Name 1", "Alternative 2"],
  "family": "Botanical Family (e.g. Araceae, Lamiaceae, Rosaceae)",
  "genus": "Genus",
  "order": "Botanical Order (e.g. Alismatales, Lamiales)",
  "taxonomicClass": "Plant" | "Flower" | "Fruit" | "Herb" | "Tree" | "Succulent",
  "conservationStatus": "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX" | "NE" | "DD",
  "iucnDescription": "Short 1-sentence description of wild conservation status",
  "nativeHabitat": "Indigenous geographical biome and origin regions",
  "geographicDistribution": ["Region 1", "Region 2", "Region 3"],
  "climateZones": ["Tropical", "Subtropical", etc],
  "overviewMonograph": "Detailed 2-3 paragraph botanical and ecological overview monograph describing foliage, flower structure, ecological role, and cultural significance.",
  "morphology": {
    "growthHabit": "e.g. Epiphytic evergreen climber, Herbaceous perennial",
    "leafType": "e.g. Cordate, fenestrated, lanceolate",
    "phyllotaxy": "e.g. Alternate, opposite, spiral",
    "bloomPeriod": "e.g. Late Spring to Mid Summer",
    "matureHeight": "e.g. 2 - 3 meters indoor; up to 15m wild"
  },
  "toxicity": {
    "cats": {
      "toxic": boolean,
      "severity": "Non-Toxic" | "Mild Oral/GI Irritant" | "Moderate Systemic Danger" | "Critical / Life-Threatening",
      "clinicalSigns": ["Sign 1", "Sign 2"],
      "targetOrgans": ["Oral mucosa", "Kidneys", etc]
    },
    "dogs": {
      "toxic": boolean,
      "severity": "Non-Toxic" | "Mild Oral/GI Irritant" | "Moderate Systemic Danger" | "Critical / Life-Threatening",
      "clinicalSigns": ["Sign 1", "Sign 2"],
      "targetOrgans": ["Stomach", "Liver", etc]
    },
    "humans": {
      "toxic": boolean,
      "severity": "Non-Toxic / Edible" | "Mild Contact Irritant" | "Moderate Poisonous" | "Highly Toxic / Ingestion Danger",
      "safeForChildren": boolean,
      "contactDermatitisRisk": boolean,
      "notes": "Clear human toxicity and child safety overview"
    },
    "toxicCompounds": ["Insoluble calcium oxalate crystals", "Alkaloids", etc]
  },
  "careGuide": {
    "sunlight": "Deep Shade" | "Partial Shade / Dappled" | "Bright Indirect" | "Full Sun",
    "sunlightDetails": "Detailed light requirements explanation",
    "wateringFrequency": "e.g. Every 7-10 days; allow top 5cm to dry",
    "wateringMetric": "Low" | "Moderate" | "High" | "Moist",
    "hygrometerPips": 3,
    "soilType": "Substrate requirements, e.g. Chunky, well-draining aroid mix with orchid bark and perlite",
    "soilPh": "e.g. 5.5 - 6.5 (Slightly Acidic)",
    "temperatureRange": "e.g. 18°C - 27°C (65°F - 80°F)",
    "hardinessZones": "e.g. USDA 10a - 12b",
    "humidityRequirement": "e.g. 60% - 80% relative humidity",
    "fertilizerRecommendation": "e.g. Balanced 20-20-20 liquid fertilizer diluted to half strength monthly during active growing season"
  },
  "uses": {
    "culinary": {
      "edible": boolean,
      "edibleParts": ["Ripe fruit", "Leaves", etc] or [],
      "flavorProfile": "Flavor notes if edible",
      "culinaryUses": ["Use 1", "Use 2"],
      "preparationWarnings": "Safety preparation warnings"
    },
    "medicinal": {
      "utilized": boolean,
      "activePhytochemicals": ["Phytochemical 1", "Phytochemical 2"],
      "traditionalApplications": ["Traditional application 1"],
      "modernResearchNotes": "Modern botanical research notes",
      "contraindications": ["Contraindication 1"]
    },
    "ornamental": ["Popular houseplant", "Architectural indoor focal specimen"],
    "ecologicalBenefits": ["Attracts pollinators", "Air filtration"]
  },
  "diagnosticGuide": [
    {
      "symptom": "Yellowing Foliage (Chlorosis)",
      "probableCause": "Overwatering or nitrogen deficiency",
      "remedyAction": "Allow substrate to dry out between waterings and test soil drainage.",
      "preventativeTip": "Ensure nursery pot has ample drainage perforations."
    },
    {
      "symptom": "Brown Crispy Leaf Margins",
      "probableCause": "Low ambient humidity or tap water mineral accumulation",
      "remedyAction": "Mist foliage, run an ultrasonic humidifier, and irrigate with filtered rainwater.",
      "preventativeTip": "Keep away from active heating ducts and air conditioners."
    }
  ],
  "confidenceScore": 96
}
Do not enclose in markdown ticks if possible, or use standard \`\`\`json markdown blocks. Return valid JSON only.`;

/**
 * Execute real AI identification on a captured image
 */
export async function identifyPlantWithAI(
  capturedDataUrl: string
): Promise<BotanicalSpecimen> {
  const apiKey = getStoredGeminiKey();

  // 1. Try Vercel Serverless Function first if deployed
  try {
    const apiRes = await fetch('/api/identify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: capturedDataUrl }),
    });

    if (apiRes.ok) {
      const data = await apiRes.json();
      if (data && data.binomialName) {
        return {
          ...data,
          primaryImageUrl: capturedDataUrl,
          galleryImages: [capturedDataUrl, ...(data.galleryImages || [])],
        };
      }
    }
  } catch {
    // Fall through to direct client-side Gemini API call
  }

  // 2. Direct client-side Gemini 2.0 / 1.5 Flash Vision API
  if (apiKey) {
    const { base64Data, mimeType } = parseDataUrl(capturedDataUrl);

    // Try Gemini 2.0 Flash first, then fallback to 1.5 Flash
    const models = ['gemini-2.0-flash', 'gemini-1.5-flash'];
    let lastError: Error | null = null;

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: BOTANICAL_ANALYSIS_PROMPT },
                  {
                    inline_data: {
                      mime_type: mimeType,
                      data: base64Data,
                    },
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              response_mime_type: 'application/json',
            },
          }),
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Gemini API returned ${response.status}: ${errText}`);
        }

        const resJson = await response.json();
        const candidate = resJson.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!candidate) {
          throw new Error('No candidate content received from Gemini model');
        }

        // Clean JSON text if wrapped in markdown
        let jsonStr = candidate.trim();
        if (jsonStr.startsWith('```json')) {
          jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (jsonStr.startsWith('```')) {
          jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }

        const parsed = JSON.parse(jsonStr) as BotanicalSpecimen;

        // Ensure primaryImageUrl and galleryImages showcase the user's real captured photo
        return {
          ...parsed,
          id: parsed.id || `ai-${Date.now()}`,
          primaryImageUrl: capturedDataUrl,
          galleryImages: [capturedDataUrl, ...(parsed.galleryImages || [])],
          confidenceScore: parsed.confidenceScore || 94,
        };
      } catch (err) {
        console.warn(`Failed with model ${model}:`, err);
        lastError = err as Error;
      }
    }

    if (lastError) {
      throw lastError;
    }
  }

  // 3. Fallback when no API key is provided
  throw new Error('NO_API_KEY');
}
