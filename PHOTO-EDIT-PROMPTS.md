# Prompts Édition Photo — Interiorista Barcelona (Nano Banana 3 Pro)

Prompts pour **éditer des photos réelles** de projets d'intérieur avec **Nano Banana 3 Pro** (`gemini-3-pro-image-preview`). Contrairement à `MIDJOURNEY-PROMPTS.md` qui génère from scratch, ce fichier transforme des photos existantes pour leur donner un style éditorial cohérent avec les 3 projets du site.

---

## Guide rapide — Édition de photos existantes

### Comment ça marche

1. **Uploader la photo** dans Google AI Studio ou via l'API (champ `inline_data`)
2. **Coller le prompt master** du projet correspondant
3. **Affiner en mode conversationnel** avec les prompts bonus (section 4)

### Différences édition vs génération

| | Génération (MIDJOURNEY-PROMPTS.md) | Édition (ce fichier) |
|---|---|---|
| Input | Texte seul | Photo uploadée + texte |
| Objectif | Créer une image from scratch | Transformer une photo existante |
| Prompt | Décrit tout (espace, meubles, lumière…) | Décrit CE QUI CHANGE + directives de préservation |
| Risque | Incohérence entre images | Artefacts si trop de modifications |

### Règles d'or pour l'édition

1. **Toujours inclure des directives de préservation** — "Preserve the existing room layout, architectural proportions, and camera perspective" doit être dans chaque prompt
2. **Être explicite sur ce qui change ET ce qui reste** — Le modèle ne devine pas vos intentions
3. **Éditer de manière incrémentale** — Un gros changement à la fois, pas tout d'un coup. Commencer par les matériaux/couleurs, puis affiner la lumière, puis le staging
4. **Utiliser le mode multi-tour** — Après le prompt master, affiner avec les prompts bonus en conversation
5. **Ne pas changer radicalement la lumière** — Passer d'un intérieur sombre à une pièce inondée de soleil crée des artefacts. Préférer des ajustements subtils

### Configuration API

| Paramètre | Valeur | Notes |
|-----------|--------|-------|
| Modèle | `gemini-3-pro-image-preview` | Nano Banana 3 Pro |
| `response_modalities` | `["IMAGE"]` | Image seule |
| Image input | Upload via `inline_data` ou Google AI Studio | La photo à éditer |

---

## Projet 1 — Restaurante Born (Méditerranéen chaleureux)

**Style cible :** Restaurant méditerranéen chaleureux et artisanal, digne d'Architectural Digest.
**Palette :** Bois d'olivier miel, pierre calcaire crème, céramique terre cuite, lin écru, blanc cassé.
**Matériaux clés :** Madera de olivo recuperada, piedra calcárea, cerámica artesanal, lino natural, mármol blanc.

### Prompt master — Born

> Coller ce prompt avec la photo uploadée. Fonctionne pour n'importe quelle photo du projet restaurant.

```
Transform this photograph into a polished editorial interior image worthy of Architectural Digest, following a warm Mediterranean restaurant aesthetic in Barcelona's Born district.

PRESERVE: Keep the existing room layout, architectural proportions, camera angle, and perspective exactly as they are. Do not alter the spatial structure or move walls, doors, or windows.

MATERIALS AND SURFACES: Enhance or replace visible surfaces to feature reclaimed olive wood with rich natural grain patterns, cream limestone flooring, and artisanal hand-painted ceramic tile accents in earth tones and Mediterranean blue. Any fabric elements should appear as natural linen in ecru or cream tones. Counter or bar surfaces should read as polished white marble with subtle grey veining.

COLOR PALETTE: Shift the overall palette toward warm terracotta, honey wood, and cream tones. Walls should be warm white or light sandstone. Remove any cool-toned or industrial-looking elements.

LIGHTING: Apply warm, layered editorial lighting — soft golden ambient light as the base, with warm pendant lamps and wall sconces creating pools of focused light. The atmosphere should feel inviting and intimate, like golden hour indoors. Enhance existing light sources rather than adding new ones.

STAGING: If the space appears empty or under-furnished, add solid oak dining tables, upholstered banquette seating in natural fabric, and simple ceramic tableware. Keep staging minimal and authentic — no clutter.

STYLE: The final image should look like a professional architectural photograph — clean, composed, with attention to material textures and light quality. Photographed with a Canon EOS R5, photorealistic, ultra-detailed, 8K resolution.

EXCLUDE: No people, no visible text, no watermarks, no logos, no brand names, no digital overlays.
```

---

## Projet 2 — Reforma Eixample (Moderniste patrimoine)

**Style cible :** Appartement moderniste rénové, patrimoine + contemporain, lumineux et élégant.
**Palette :** Blanc des moulures, motifs colorés des sols hydrauliques, chêne naturel clair, marbre de Carrare veiné, laiton vieilli, murs blancs/gris très clair.
**Matériaux clés :** Suelos hidráulicos originaux, molduras restauradas, roble natural, mármol de Carrara, latón envejecido.

### Prompt master — Eixample

> Coller ce prompt avec la photo uploadée. Fonctionne pour n'importe quelle photo du projet appartement Eixample.

```
Transform this photograph into a polished editorial interior image worthy of Architectural Digest, following a renovated modernist apartment aesthetic in Barcelona's Eixample district. The design language is heritage meets contemporary — classic architectural details preserved alongside clean modern furnishings.

PRESERVE: Keep the existing room layout, architectural proportions, camera angle, and perspective exactly as they are. Do not alter the spatial structure or move walls, doors, or windows. If original architectural details like ceiling moldings or hydraulic floor tiles are visible, preserve and enhance them.

MATERIALS AND SURFACES: Enhance or introduce the following materials where appropriate: original colorful hydraulic cement floor tiles with geometric patterns (preserve existing patterns if visible, or add subtle ones), ornate white restored ceiling moldings, natural oak woodwork and furniture, Carrara marble surfaces with subtle grey veining, and aged brass fixtures and hardware. Walls should be clean white or very light grey.

COLOR PALETTE: The overall palette should be bright and airy — white walls and ceilings contrasting with the colorful geometric floor tiles. Natural oak adds warmth, Carrara marble adds luxury, and aged brass accents provide character. Remove any dark, heavy, or overly modern industrial elements.

LIGHTING: Maximize the sense of bright natural daylight streaming through tall windows. The space should feel luminous and serene. Enhance natural light direction and add soft warm tones in shadowed areas. Any artificial lighting should come from aged brass fixtures — pendant lamps or wall sconces.

STAGING: If the space appears empty or under-furnished, add contemporary furniture that complements the classic architecture — a natural oak dining table with clean-lined chairs, simple white or neutral upholstery, and minimal decorative objects. The contrast between old architectural details and modern furniture is key.

STYLE: The final image should look like a professional architectural photograph — bright, clean, and composed, celebrating the dialogue between heritage details and contemporary design. Photographed with a Canon EOS R5, photorealistic, ultra-detailed, 8K resolution.

EXCLUDE: No people, no visible text, no watermarks, no logos, no brand names, no digital overlays.
```

---

## Projet 3 — Ático Sarrià (Minimalisme luxe)

**Style cible :** Penthouse minimaliste chaleureux avec mobilier de luxe et vues panoramiques.
**Palette :** Blanc cassé, beige, gris clair, bois clair naturel, pierre naturelle, noir mat en accent subtil.
**Matériaux clés :** Hormigón pulido (polished concrete), piedra natural, roble natural, mármol. Mobilier : B&B Italia, Flos, Carl Hansen.

### Prompt master — Sarrià

> Coller ce prompt avec la photo uploadée. Fonctionne pour n'importe quelle photo du projet penthouse Sarrià.

```
Transform this photograph into a polished editorial interior image worthy of Architectural Digest, following a warm minimalist luxury penthouse aesthetic in Barcelona's Sarrià district. The design language is refined minimalism with warmth — clean architectural lines, high-end designer furniture, and a serene neutral palette.

PRESERVE: Keep the existing room layout, architectural proportions, camera angle, and perspective exactly as they are. Do not alter the spatial structure, ceiling height, or window placement. If panoramic views are visible through windows, preserve and enhance them.

MATERIALS AND SURFACES: Enhance or introduce the following materials where appropriate: polished concrete flooring with a soft light-grey tone, natural stone accent walls or surfaces, natural oak wood elements, and marble details. All surfaces should look refined and high-quality with visible texture. Hardware and small accents should be matte black or brushed metal.

COLOR PALETTE: Apply a warm neutral palette — off-white walls, beige and light grey tones, natural wood warmth, and occasional matte black accents. The overall feeling should be calm, sophisticated, and warm. Remove any overly colorful, busy, or cold elements.

LIGHTING: Create a sense of abundant natural light flooding the space, enhanced by the warm neutral palette. The light should feel soft and diffused with gentle shadows. If artificial lighting is present, it should resemble high-end designer fixtures — think Flos-style clean geometric forms. The overall mood is serene and luminous.

STAGING: If the space appears empty or under-furnished, add high-end minimalist furniture: a large modular sofa in neutral cream fabric, a sculptural floor lamp, a shell-style accent chair in natural oak, and a large neutral rug on the concrete floor. Keep staging sparse and intentional — every piece should look like a deliberate design choice. No clutter, no small decorative objects.

STYLE: The final image should look like a luxury real estate or Architectural Digest photograph — spacious, serene, and meticulously composed. Emphasize the quality of materials and the interplay of natural light with neutral surfaces. Photographed with a Canon EOS R5, photorealistic, ultra-detailed, 8K resolution.

EXCLUDE: No people, no visible text, no watermarks, no logos, no brand names, no digital overlays.
```

---

## Prompts bonus — Retouche fine (mode conversationnel)

Après avoir appliqué le prompt master, utiliser ces prompts courts en **multi-tour** pour affiner le résultat. Coller directement dans la conversation sans ré-uploader la photo.

### Ajuster la lumière

```
Adjust the lighting to feel warmer and more golden, as if the space is bathed in late afternoon sunlight. Preserve everything else — layout, materials, furniture, and camera angle.
```

```
Make the overall lighting brighter and more even, as if it were a sunny midday. Reduce harsh shadows. Preserve everything else — layout, materials, furniture, and camera angle.
```

```
Add subtle warm accent lighting — as if small hidden light sources are washing the walls with a soft glow. Preserve everything else.
```

### Changer un matériau spécifique

```
Replace the floor material with [polished concrete / original hydraulic cement tiles with geometric patterns / cream limestone / natural oak hardwood]. Preserve everything else — layout, furniture, lighting, and camera angle.
```

```
Replace the wall finish with [warm white plaster / natural stone cladding / reclaimed olive wood paneling / smooth light grey concrete]. Preserve everything else.
```

```
Change the countertop material to [Carrara marble with subtle grey veining / natural oak / polished concrete / cream limestone]. Preserve everything else.
```

### Ajouter du mobilier

```
Add a [natural oak dining table with clean-lined chairs / modular cream sofa / sculptural floor lamp / upholstered banquette in natural linen] to the empty area in the [center / left side / right side / background] of the room. Match the style and material palette of the existing space. Preserve everything else.
```

```
Place a large neutral-toned area rug beneath the main seating area. It should complement the existing flooring and furniture. Preserve everything else.
```

### Supprimer des éléments indésirables

```
Remove [the object / furniture piece / clutter / cables / stain] visible in the [center / left / right / foreground / background] of the image. Fill the area naturally with the surrounding floor, wall, or surface material. Preserve everything else.
```

```
Clean up the space by removing any clutter, loose objects, or construction materials. Keep all architectural elements, permanent fixtures, and intentional furniture. Fill removed areas with the appropriate surrounding surface.
```

### Changer l'ambiance globale

```
Shift the overall mood to feel more [warm and intimate / bright and airy / serene and minimal / dramatic with deeper shadows]. Preserve the layout, materials, and furniture — only adjust the lighting, color temperature, and contrast.
```

---

## Workflow recommandé

1. **Trier les photos** — Sélectionner les meilleures photos par pièce (cadrage, lumière naturelle, pas de personnes)
2. **Appliquer le prompt master** — Un prompt par photo, correspondant au bon projet
3. **Évaluer le résultat** — Vérifier que le layout et la perspective sont préservés
4. **Affiner en multi-tour** — Utiliser les prompts bonus pour corriger lumière, matériaux, staging
5. **Itérer** — Si le résultat est trop éloigné, recommencer avec une photo de meilleure qualité ou un angle différent
6. **Post-production** — Lightroom pour la cohérence couleur entre toutes les images du projet
7. **Compression** — TinyPNG ou Squoosh, target < 200KB par image, format WebP

### Tips pour de meilleurs résultats

- **Photos bien cadrées** — Le modèle préserve mieux la perspective si la photo originale est bien composée
- **Lumière naturelle** — Les photos prises avec une bonne lumière naturelle donnent les meilleurs résultats
- **Pas trop sombre** — Éviter les photos très sombres, le modèle a du mal à "inventer" la lumière manquante
- **Un changement à la fois** — En multi-tour, ne demander qu'un ajustement par message
- **Être spécifique** — "Replace the floor with polished concrete" > "Change the floor"
