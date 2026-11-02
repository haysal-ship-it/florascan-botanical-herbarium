interface VercelApiRequest {
  method?: string;
  body?: any;
}

interface VercelApiResponse {
  status: (code: number) => VercelApiResponse;
  json: (data: any) => void;
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
  "taxonomicClass": "Plant",
  "conservationStatus": "LC",
  "iucnDescription": "Short 1-sentence description of wild conservation status",
  "nativeHabitat": "Indigenous geographical biome and origin regions",
  "geographicDistribution": ["Region 1", "Region 2"],
  "climateZones": ["Tropical", "Subtropical"],
  "overviewMonograph": "Detailed 2-3 paragraph botanical and ecological overview monograph describing foliage, flower structure, ecological role, and cultural significance.",
  "morphology": {
    "growthHabit": "Epiphytic evergreen climber",
    "leafType": "Cordate, fenestrated",
    "phyllotaxy": "Alternate",
    "bloomPeriod": "Late Spring to Mid Summer",
    "matureHeight": "2 - 3 meters"
  },
  "toxicity": {
    "cats": {
      "toxic": false,
      "severity": "Non-Toxic",
      "clinicalSigns": [],
      "targetOrgans": []
    },
    "dogs": {
      "toxic": false,
      "severity": "Non-Toxic",
      "clinicalSigns": [],
      "targetOrgans": []
    },
    "humans": {
      "toxic": false,
      "severity": "Non-Toxic / Edible",
      "safeForChildren": true,
      "contactDermatitisRisk": false,
      "notes": "Safe for children and household handling."
    },
    "toxicCompounds": []
  },
  "careGuide": {
    "sunlight": "Bright Indirect",
    "sunlightDetails": "Prefers bright, filtered light avoiding harsh midday sun",
    "wateringFrequency": "Every 7-10 days",
    "wateringMetric": "Moderate",
    "hygrometerPips": 3,
    "soilType": "Well-draining potting substrate",
    "soilPh": "6.0 - 7.0",
    "temperatureRange": "18°C - 24°C",
    "hardinessZones": "USDA 10-12",
    "humidityRequirement": "50% - 70%",
    "fertilizerRecommendation": "Balanced houseplant fertilizer monthly during spring/summer"
  },
  "uses": {
    "culinary": {
      "edible": false,
      "edibleParts": [],
      "culinaryUses": []
    },
    "medicinal": {
      "utilized": false,
      "activePhytochemicals": [],
      "traditionalApplications": []
    },
    "ornamental": ["Popular specimen plant"],
    "ecologicalBenefits": ["Foliage air exchange"]
  },
  "diagnosticGuide": [
    {
      "symptom": "Yellowing leaves",
      "probableCause": "Overwatering",
      "remedyAction": "Reduce watering frequency",
      "preventativeTip": "Ensure good drainage"
    }
  ],
  "confidenceScore": 95
}
Return valid JSON only without markdown code blocks.`;

export default async function handler(req: VercelApiRequest, res: VercelApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'GEMINI_API_KEY is not configured on the server.',
    });
  }

  const { image } = req.body;
  if (!image || typeof image !== 'string') {
    return res.status(400).json({ error: 'Missing base64 image in request body' });
  }

  let mimeType = 'image/jpeg';
  let base64Data = image;

  const match = image.match(/^data:([^;]+);base64,(.+)$/);
  if (match) {
    mimeType = match[1];
    base64Data = match[2];
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
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
      const err = await response.text();
      return res.status(response.status).json({ error: 'Gemini upstream error', details: err });
    }

    const data = await response.json();
    const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidate) {
      return res.status(502).json({ error: 'No response candidate from Gemini' });
    }

    let jsonStr = candidate.trim();
    if (jsonStr.startsWith('```json')) {
      jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    const parsed = JSON.parse(jsonStr);
    return res.status(200).json(parsed);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: 'Internal processing error', message });
  }
}
