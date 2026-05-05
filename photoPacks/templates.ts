
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * NB2 STRUCTURED JSON TEMPLATE (GRID)
 * Plantilla para cuadrículas de alta precisión.
 */
export const NB2_STRUCTURED_JSON_TEMPLATE = {
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photorealistic_multi_panel_grid",
      "version": "v1.0",
      "priority": "high"
    },
    "references": {
      "character_reference_image": "UPLOAD_YOUR_CHARACTER_REFERENCE (REQUIRED)",
      "reference_rules": {
        "preserve_uploaded_character_identity": true,
        "identity_lock_strength": 0.99,
        "use_reference_for": ["face", "skin_tone", "facial_proportions", "hair", "body_proportions"],
        "do_not_copy_any_other_identity": true
      }
    },
    "output_settings": {
      "layout": {
        "type": "3x3_grid",
        "border": "thin_white_gutter",
        "frame_consistency_rule": "same_person_same_outfit_same_room_same_lighting"
      },
      "aspect_ratio": "{aspectRatio}",
      "resolution": "ultra_high_res",
      "render_style": "flash_film_candid",
      "sharpness": "high",
      "film_grain": "medium_subtle"
    },
    "creative_prompt": {
      "scene_summary": "[DESCRIBIR ESCENA AQUÍ]",
      "subject": {
        "identity_rule": "MUST_MATCH_UPLOADED_CHARACTER_REFERENCE (STRICT FACE LOCK)",
        "expression": "[EXPRESIONES]",
        "hair": "[ESTILO DE PELO]"
      },
      "wardrobe": {
        "outfit": "[DESCRIPCIÓN DE VESTUARIO]"
      },
      "prop": {
        "main_prop": "[OBJETOS CLAVE]"
      },
      "environment": {
        "location": "[UBICACIÓN]",
        "background": "[FONDO]"
      },
      "lighting_and_camera": {
        "lighting": "direct on-camera flash, high contrast",
        "camera": "point-and-shoot film vibe",
        "lens": "35mm equivalent"
      },
      "tile_actions": [
        { "tile": 1, "action": "[ACCIÓN 1]" },
        { "tile": 2, "action": "[ACCIÓN 2]" },
        { "tile": 3, "action": "[ACCIÓN 3]" },
        { "tile": 4, "action": "[ACCIÓN 4]" },
        { "tile": 5, "action": "[ACCIÓN 5]" },
        { "tile": 6, "action": "[ACCIÓN 6]" },
        { "tile": 7, "action": "[ACCIÓN 7]" },
        { "tile": 8, "action": "[ACCIÓN 8]" },
        { "tile": 9, "action": "[ACCIÓN 9]" }
      ],
      "strict_rules": [
        "NO text",
        "NO logos",
        "NO watermark",
        "single subject only",
        "consistent look across all tiles"
      ]
    },
    "negative_prompt": [
      "text", "logo", "watermark", "identity change", "over-smoothed skin"
    ]
  }
};

/**
 * NB2 PORTRAIT JSON TEMPLATE (SINGLE FRAME)
 * Plantilla para retratos cinematográficos de alta fidelidad.
 */
export const NB2_PORTRAIT_JSON_TEMPLATE = {
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "hyperrealistic_cinematic_portrait",
      "version": "v1.0"
    },
    "references": {
      "character_reference_image": "UPLOAD_YOUR_CHARACTER_REFERENCE (REQUIRED)",
      "reference_rules": {
        "preserve_uploaded_character_identity": true,
        "identity_lock_strength": 0.99,
        "use_reference_for": ["face", "skin_tone", "facial_proportions", "hair", "body_proportions"],
        "do_not_copy_any_other_identity": true
      }
    },
    "output_settings": {
      "layout": { "type": "single_cinematic_frame" },
      "aspect_ratio": "{aspectRatio}",
      "resolution": "ultra_high_res",
      "render_style": "cinematic_noir_portrait"
    },
    "creative_prompt": {
      "scene_summary": "[SUMMARY]",
      "subject": {
        "identity_rule": "MUST_MATCH_UPLOADED_CHARACTER_REFERENCE (STRICT FACE LOCK)",
        "expression": "[EXPRESSION]",
        "posture": "[POSTURE]"
      },
      "wardrobe": { "outfit": "[OUTFIT]", "accessories": "[ACCESSORIES]" },
      "prop": { "item": "[ITEM]" },
      "environment": { "location": "[LOCATION]", "background": "[BACKGROUND]" },
      "lighting_and_camera": { "lighting": "[LIGHTING]", "camera": "[CAMERA_SPECS]" }
    }
  }
};

/**
 * NB2 SURGICAL FORENSIC ANALYSIS TEMPLATE
 * Plantilla de análisis que genera un NB2_REQUEST listo para usar en el campo optimizado.
 */
export const NB2_FORENSIC_ANALYSIS_TEMPLATE = `SYSTEM ROLE: SURGICAL VISUAL ANALYST & MASTER PHOTOGRAPHER.

**INPUT PROTOCOL:**
- PHOTO 1: [IDENTITY]
- PHOTO 2: [MECHANICS/ACTION]

**MISSION:**
1. Execute a internal deep scan of Photo 2's manual and physical mechanics.
2. In the 'forensic_prompt_optimized' field, you MUST output a complete, valid JSON object following the **NB2_GENERATION_STRUCTURE**. 
3. **CRITICAL RULE:** This object must be a clean, standalone generation request. NO mention of "Photo 1", "Photo 2", or "The analysis". Describe the subject as "the subject" or "the person". Re-write the findings of the analysis as direct visual instructions.

**OUTPUT REPORT (JSON):**
\`\`\`json
{
"internal_analysis": {
  "manual_mechanics": "Detailed breakdown of what EACH hand is doing (holding, lifting, pulling)",
  "fabric_physics": "How the clothing interacts with the hands and body",
  "attitude_vibe": "The exact personality and expression detected"
},
"forensic_prompt_optimized": {
  "generation_request": {
    "meta_data": { "tool": "NanoBanana Pro 2.0", "task": "Surgical Synthesis" },
    "output_settings": { "render_style": "photorealistic_cinematic", "aspect_ratio": "{aspectRatio}" },
    "creative_prompt": {
      "scene_summary": "A clean visual description combining Photo 1 identity with Photo 2 action.",
      "subject": { "identity_rule": "STRICT_IDENTITY_LOCK", "action": "Direct description of the pose (e.g. 'Subject is lifting the shirt with left hand')", "expression": "The detected expression" },
      "wardrobe": { "description": "The exact outfit from Photo 2" },
      "environment": { "description": "The setting from Photo 2" }
    }
  }
}
}
\`\`\`

[PRESERVE_IDENTITY_PROMPT]`;

/**
 * NB2 ANALOG FORENSIC MISSION TEMPLATE
 * Template especializado en fusionar biomecánica precisa con DNA de cámara analógica nostálgica.
 */
export const NB2_ANALOG_FORENSIC_TEMPLATE = {
  "mission": "ANALOG_BIOMECHANICAL_SYNTHESIS",
  "directives": {
    "identity_protocol": "STRICT_FACE_LOCK_FROM_PHOTO_1",
    "mechanical_blueprint": "REPLICATE_MANUAL_INTERACTION_OF_PHOTO_2",
    "aesthetic_dna": "NOSTALGIC_ANALOG_POINT_AND_SHOOT"
  },
  "anatomical_reconstruction": {
    "static_limb": "Identify hand holding the device. Detail accessories like pearls or charms dangling from it.",
    "active_limb": "Identify hand lifting or pulling clothing. Describe the grip on the fabric hem and the specific area of skin/abdomen revealed.",
    "torso_mechanics": "Describe abdominal definition, visible navel, and fabric tension around the lift point.",
    "attitude": "Detect playful attitude, smirk, wink, or mischievous gaze."
  },
  "camera_dna_settings": {
    "optics": "35mm prime lens simulation, slight barrel distortion, soft edges.",
    "lighting": "Harsh, direct compact-camera flash. High-key highlights on skin, pitch-black drop shadows behind the subject.",
    "film_stock": "Kodak Portra 400 feel, warm nostalgic tint, heavy organic film grain.",
    "artifacts": "Mild chromatic aberration, lens flare from mirror reflection, vintage date stamp in bottom corner."
  },
  "output_rule": "GENERATE_IMAGE_AND_JSON_REPORT"
};
