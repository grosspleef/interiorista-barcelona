# Prompts Image Services — Interiorista Barcelona (Nano Banana 3 Pro)

Prompts pour générer les photos réalistes pour les pages de services du site, avec **Nano Banana 3 Pro** (`gemini-3-pro-image-preview`). Même format narratif que `MIDJOURNEY-PROMPTS-V2.md`.

---

## Configuration API / Google AI Studio

| Paramètre | Valeur | Notes |
|-----------|--------|-------|
| Modèle | `gemini-3-pro-image-preview` | Nano Banana 3 Pro |
| `aspect_ratio` | `16:9` | Toutes les images en 16:9 |
| `image_size` | `4K` | Toujours en majuscule (`1K` pour tester) |
| `response_modalities` | `["IMAGE"]` | Image seule |

### Tips pour le photoréalisme architectural

- **Phrases narratives > mots-clés** — "A wide-angle photograph of a bright living room with natural oak floors" fonctionne mieux que "wide-angle, bright, living room, oak floors"
- **Préciser caméra et objectif** — "photographed with a Canon EOS R5 and a 24mm wide-angle lens"
- **Décrire la lumière** — "warm natural daylight streaming through tall windows"
- **Décrire les matériaux avec précision** — "reclaimed olive wood with visible natural grain"
- **Exclure en langage naturel** — "The space is empty with no people, no visible text, no watermarks, and no logos."

---

## Page : Diseño de Interiores (`/diseno-interiores/`)

**Contexte :** Page de service principale pour le diseño de interiores à Barcelona. Décrit le processus en 3 étapes (visita consejo → estudio del proyecto → seguimiento de obra) + section tarifas. Les 4 images doivent illustrer chaque étape du processus et une image d'ambiance pour la section pricing. Styles variés pour montrer la diversité des projets barcelonais.

---

### DI-1 — Visita consejo (étape 1) — Piso modernista Eixample
**Ratio :** `16:9` · **Fichier SEO :** `visita-consejo-interiorista-piso-eixample-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Visita consejo con tu diseñador de interiores"`

```
A warm editorial photograph of an initial design consultation taking place in a 120-square-meter modernist apartment in Barcelona's Eixample district, shot for Architectural Digest. The scene is captured from the doorway of the main living room, looking inward. The apartment features original ornate white ceiling moldings with intricate floral plasterwork, and stunning original hydraulic cement floor tiles with geometric patterns in warm reds, ochres, and cream. Two tall shuttered windows on the far wall are fully open, flooding the room with golden afternoon Mediterranean light that casts long shadows from the window frames across the tiled floor. In the center of the room, a large unfolded architectural floor plan is spread across a makeshift surface — two sawhorses supporting a wooden board — alongside a measuring tape, a leather notebook, a mechanical pencil, and fabric swatches in neutral tones fanned out. A professional laser distance measurer sits on the windowsill. The room is partially empty, suggesting a space in transition — one wall shows traces of removed wallpaper revealing patches of original plaster, and a few cardboard moving boxes are stacked in the corner. A vintage chandelier hangs from a central ceiling medallion, still functional. The atmosphere conveys potential and possibility — a beautiful heritage space waiting to be reimagined. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text on the plans, no watermarks, and no logos.
```

---

### DI-2 — Estudio del proyecto (étape 2) — Atelier d'architecte d'intérieur
**Ratio :** `16:9` · **Fichier SEO :** `estudio-proyecto-diseno-interiores-barcelona-planos.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Estudio del proyecto de diseño de interiores"`

```
An editorial overhead-angle photograph of an interior designer's workspace in a bright Barcelona studio, captured for Architectural Digest. A large natural oak drafting table is the centerpiece, covered with the tools of a design project in progress. Detailed architectural floor plans and elevation drawings are spread across the surface, held down at the corners by small brass weights. Beside the plans, a collection of material samples is carefully arranged: squares of natural stone (Carrara marble, travertine, limestone), wood veneer samples in oak and walnut, ceramic tile chips in Mediterranean blues and terracottas, and fabric swatches in linen and velvet pinned to a small mood board. A professional scale ruler, a set of fine-tip pens in a leather roll, and tracing paper with pencil sketches of a kitchen layout are layered over the main plans. A laptop showing a 3D rendering of a living room is open to one side, its screen glowing softly. A ceramic mug of coffee and a small potted succulent in a terracotta pot sit at the corner of the desk. In the background, slightly out of focus, floor-to-ceiling shelves hold architecture books, rolled-up plans in labeled tubes, material sample boxes, and a small architectural model of a Barcelona apartment. Warm natural light streams in from a large window on the left, creating soft directional shadows across the plans and samples. Photographed with a Canon EOS R5 and a 35mm lens with shallow depth of field, photorealistic, ultra-detailed, 8K resolution. The studio is empty with no people, no readable text on plans or screen, no watermarks, and no logos.
```

---

### DI-3 — Seguimiento de obra (étape 3) — Chantier en cours de rénovation
**Ratio :** `16:9` · **Fichier SEO :** `seguimiento-obra-reforma-integral-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Seguimiento de obra y coordinación de gremios"`

```
An editorial photograph of an apartment renovation in progress in a Barcelona building, shot for Architectural Digest to illustrate the construction supervision phase of an interior design project. The scene shows a 100-square-meter apartment mid-renovation with the structural work nearly complete. New partition walls in clean white plasterboard have been erected, defining the new room layout, while one original stone wall remains exposed showing beautiful aged Mediterranean masonry. Fresh electrical conduits in corrugated orange tubing run along the upper walls, neatly organized before being plastered over. The new plumbing in copper pipes is visible in what will become the kitchen area. On the floor, stacks of new materials await installation: boxes of premium large-format porcelain tiles, bundles of natural oak flooring planks wrapped in protective plastic, and a pallet of bags of leveling compound. Professional construction tools are organized on a portable workbench: a laser level projecting a green line across the wall, a cordless drill, a spirit level, safety goggles, and work gloves. Architectural plans are pinned to a temporary plywood board on the wall, with colored sticky notes marking completed phases. Through a newly enlarged doorway, a second room is visible with freshly plastered walls drying to a soft white. A large window without its final frame lets in bright natural daylight, illuminating dust particles floating in the air and casting dramatic shadows. The atmosphere is one of transformation — organized progress, professional craftsmanship, and a space taking shape. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no readable text, no watermarks, and no logos.
```

---

### DI-4 — PricingBlock (tarifas) — Salon contemporain méditerranéen (résultat final)
**Ratio :** `16:9` · **Fichier SEO :** `diseno-interiores-salon-contemporaneo-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A stunning wide-angle editorial photograph of a beautifully finished contemporary Mediterranean living room in a renovated Barcelona apartment, shot for Architectural Digest as the "after" result of a complete interior design project. The spacious open-plan living and dining area features polished micro-cement floors in warm light grey that reflect the abundant natural light. A contemporary modular sofa in natural linen fabric in a warm sand color is arranged in an L-shape, adorned with textured cushions in cream, terracotta, and sage green. A round coffee table in natural travertine stone with visible fossil patterns sits on a large handwoven jute rug. The dining area beyond features a natural oak table for six with sculptural chairs in warm cognac leather. A cluster of three handmade ceramic pendant lights in matte white hang above the dining table. The walls are finished in smooth lime plaster in warm white, with one accent wall featuring vertical fluted natural oak paneling. Built-in oak shelving in a niche displays curated objects: ceramic vases in earth tones, architecture books, a small bronze sculpture, and trailing pothos plants. Floor-to-ceiling windows with slim black steel frames open onto a small balcony with wrought-iron railings, through which the tree-lined boulevard of an Eixample street is visible. Sheer white linen curtains are gently pulled to the sides. The warm late-afternoon Barcelona sun bathes the entire space in golden light, highlighting the textures of the micro-cement, travertine, oak, and linen. The space feels serene, sophisticated, and unmistakably Mediterranean. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Diseño de Interiores

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| DI-1 | Visita consejo (étape 1) | Piso modernista Eixample — moulures, suelos hidráulicos, lumière naturelle | `visita-consejo-interiorista-piso-eixample-barcelona.jpg` |
| DI-2 | Estudio proyecto (étape 2) | Atelier d'architecte — plans, échantillons matériaux, maquettes | `estudio-proyecto-diseno-interiores-barcelona-planos.jpg` |
| DI-3 | Seguimiento obra (étape 3) | Chantier en cours — rénovation, matériaux posés, structure visible | `seguimiento-obra-reforma-integral-barcelona.jpg` |
| DI-4 | PricingBlock (tarifas) | Salon contemporain méditerranéen — résultat final lumineux | `diseno-interiores-salon-contemporaneo-barcelona.jpg` |

---

## Page : Decoración de Interiores (`/decoracion-interiores/`)

**Contexte :** Page de service pour la decoración de interiores à Barcelona. Contrairement à la page diseño de interiores (qui montre le processus), ici les 4 images montrent uniquement des **projets terminés et meublés** — focus sur le mobilier, les textiles, l'éclairage et les objets décoratifs. Chaque image présente un espace différent, un quartier différent et un style différent pour illustrer la diversité des projets de décoration.

---

### DC-1 — Visita consejo (étape 1) — Salon + salle à manger Sarrià

**Ratio :** `16:9` · **Fichier SEO :** `decoracion-salon-mediterraneo-sarria-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Visita consejo de decoración" image={{ src: imageWhiteboard }}`

```
A warm editorial photograph of a beautifully finished contemporary Mediterranean living and dining room in a spacious 150-square-meter apartment in Barcelona's Sarrià district, shot for Architectural Digest. The open-plan space seamlessly connects a generous living area with a formal dining zone. The living area features a deep, inviting sofa upholstered in natural washed linen in a warm sand color, paired with two sculptural armchairs in solid natural oak with loose cushions in oatmeal linen. A large round coffee table in aged olive wood with a beautiful natural grain sits on an oversized handwoven wool rug in cream with subtle geometric patterns. The dining area beyond features a long farmhouse-style table in reclaimed elm wood, set with eight linen-upholstered chairs in a soft sage green. A striking artisanal ceramic chandelier in warm terracotta hangs low over the dining table, its organic shapes casting intricate shadow patterns. The walls are finished in warm lime wash plaster in a soft ivory tone, with one wall displaying a curated gallery of framed botanical prints in thin oak frames. Floor-to-ceiling French doors with traditional wooden shutters painted in soft white open onto a lush private garden visible beyond, where mature olive trees and bougainvillea create a green backdrop. The original terracotta floor tiles in warm honey tones ground the entire space. Woven rattan baskets, ceramic vases with dried eucalyptus branches, linen throw blankets draped over chair arms, and stacked art books on the coffee table complete the layered, lived-in feeling. Warm golden late-afternoon Mediterranean sunlight floods through the open doors, casting long soft shadows and highlighting the textures of wood, linen, and ceramic throughout the space. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

### DC-2 — Proyecto de decoración (étape 2) — Chambre principale Born

**Ratio :** `16:9` · **Fichier SEO :** `decoracion-dormitorio-minimalista-born-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `title="Proyecto de decoración" image={{ src: imageLaptop, shape: 1 }}`

```
A serene editorial photograph of a beautifully finished minimalist organic bedroom in a renovated apartment in Barcelona's El Born district, shot for Architectural Digest. The master bedroom occupies a quiet room with high ceilings and one tall window with interior wooden shutters half-open, filtering soft morning light into the space. The bed is a low-profile platform frame in solid pale ash wood with a wide headboard that extends as a floating shelf on both sides, holding a small ceramic oil lamp and a single stem of dried pampas grass in a handmade stoneware vase. The bedding is composed of layers of washed linen in warm neutral tones — an ivory duvet, a terracotta linen flat sheet folded back at the top, and two oversized pillows in natural undyed linen. A handwoven wool throw blanket in a muted clay color is draped casually across the foot of the bed. On the polished concrete floor in warm grey, a large round jute rug in natural fibers anchors the bed area. A simple oak stool serves as a bedside table on one side, holding a ceramic cup and a small stack of art books. Against the opposite wall, a vintage terracotta-toned linen armchair with a rounded back sits beside a slender brass floor lamp with a linen drum shade. The walls are finished in smooth clay plaster in a warm off-white with the faintest blush undertone. A single large-format abstract artwork in earthy tones — ochre, burnt sienna, and cream — in a thin natural oak frame hangs above the headboard. Two small handmade ceramic vessels in speckled terracotta and cream sit on the extended headboard shelf. The atmosphere is calm, tactile, and deeply restful — every element chosen with intention. Photographed with a Canon EOS R5 and a 35mm lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

### DC-3 — Instalación y styling (étape 3) — Restaurant Eixample

**Ratio :** `16:9` · **Fichier SEO :** `decoracion-restaurante-eixample-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `title="Instalación y styling final" image={{ src: imageMeeting, shape: 2 }}`

```
A striking editorial photograph of a beautifully finished boutique restaurant interior in a ground-floor commercial space in Barcelona's Eixample district, shot for Architectural Digest. The intimate dining room seats approximately 30 guests across a mix of seating arrangements. Along the left wall, a continuous curved banquette upholstered in deep forest-green velvet runs the length of the space, with individual round marble-topped bistro tables and brass-legged dining chairs in cognac leather placed opposite. The right side features a long communal table in dark-stained solid walnut with bench seating on one side and individual chairs on the other. The ceiling is the showpiece — the original Eixample vaulted ceiling with exposed brick arches has been carefully restored, and a series of statement pendant lights in hand-blown amber glass with brass fittings hang at varying heights, casting warm pools of golden light. The back wall features floor-to-ceiling open shelving in blackened steel displaying a curated collection of artisanal ceramics — handmade plates, bowls, and serving vessels in warm earth tones of terracotta, cream, and deep blue — alongside wine bottles and stacked linen napkins. The floor is original encaustic cement tiles in a geometric pattern of deep burgundy, cream, and black, beautifully preserved. A long brass rail runs along the banquette wall at picture-rail height, holding a row of small framed vintage botanical prints. Each table is set with a small handmade ceramic bud vase holding a single dried thistle, artisanal stoneware plates, and linen napkins in warm grey. The overall atmosphere is sophisticated yet welcoming — modern European gastronomy meets Barcelona heritage. Warm ambient lighting from the pendants and concealed LED strips along the shelving creates a rich, layered glow. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no visible text on menus or signs, no watermarks, and no logos.
```

---

### DC-4 — PricingBlock (tarifas) — Cuisine ouverte Gràcia

**Ratio :** `16:9` · **Fichier SEO :** `decoracion-cocina-abierta-gracia-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A bright editorial photograph of a beautifully finished Scandinavian-Mediterranean open kitchen in a renovated apartment in Barcelona's Gràcia neighborhood, shot for Architectural Digest. The generous kitchen opens directly onto the living area, separated by a long island counter in natural birch plywood with a thick countertop in honed white Carrara marble with soft grey veining. Three woven rattan counter stools with natural linen seat cushions are tucked under the island on the living-room side. The kitchen cabinetry is a mix of matte white lacquer lower cabinets and open upper shelving in natural birch plywood, displaying a curated collection of handmade ceramic dishes in warm white and pale blue, glass storage jars with cork lids, cookbooks stacked horizontally, and small potted herbs — rosemary, basil, and thyme — in matching terracotta pots. The backsplash is composed of handmade zellige tiles in a soft warm white with the characteristic irregular surface that catches light beautifully. Integrated under-cabinet LED lighting casts a warm glow on the zellige tiles. A professional-style matte black faucet arches over a deep farmhouse sink in white fireclay. On the marble countertop, a wooden cutting board in olive wood, a ceramic fruit bowl with lemons and oranges, and a matte black kettle create a lived-in vignette. The floor is light natural oak in wide planks with a matte finish. Above the island, two simple pendant lights with handmade ceramic shades in warm white hang from thin brass rods. Through a window above the sink, the leafy canopy of a Gràcia plaza with its characteristic platanus trees is visible, dappled sunlight filtering through. A trailing pothos plant cascades from the top shelf, adding organic life to the space. The atmosphere is fresh, functional, and warmly inviting — Nordic simplicity infused with Mediterranean soul. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The kitchen is empty with no people, no visible text or brand names on appliances, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Decoración de Interiores

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| DC-1 | Visita consejo (étape 1) | Salon + salle à manger Sarrià — méditerranéen contemporain, bois naturel + lin, lumière dorée | `decoracion-salon-mediterraneo-sarria-barcelona.jpg` |
| DC-2 | Proyecto decoración (étape 2) | Chambre principale Born — minimaliste organique, tons neutres + terracotta, textiles artisanaux | `decoracion-dormitorio-minimalista-born-barcelona.jpg` |
| DC-3 | Instalación styling (étape 3) | Restaurant Eixample — banquettes velours, luminaires statement, céramique artisanale | `decoracion-restaurante-eixample-barcelona.jpg` |
| DC-4 | PricingBlock (tarifas) | Cuisine ouverte Gràcia — scandinave-méditerranéen, bois clair + zellige + plantes | `decoracion-cocina-abierta-gracia-barcelona.jpg` |

---

## Page : Asesoría de Compra de Vivienda (`/asesoria-compra-vivienda/`)

**Contexte :** Page de service pour l'accompagnement à l'achat immobilier à Barcelona. Contrairement aux pages diseño et decoración (qui montrent des résultats décoratifs), ici les 4 images illustrent le **processus d'évaluation immobilière** — un appartement brut à évaluer, un workspace technique avec rapport et estimations, un résultat post-rénovation aspirationnel, et une vue terrasse lifestyle. L'objectif est de montrer la progression avant/pendant/après qui justifie le service d'accompagnement technique.

---

### AC-1 — Contravisita del inmueble (étape 1) — Piso modernista à rénover Eixample

**Ratio :** `16:9` · **Fichier SEO :** `contravisita-piso-reformar-eixample-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Contravisita del inmueble con tu interiorista" image={{ src: imageWhiteboard }}`

```
A dramatic editorial photograph of an empty unrenovated modernist apartment in Barcelona's Eixample district, shot for Architectural Digest to illustrate a property assessment visit. The scene captures a large 120-square-meter living room in its raw state, full of visible potential. The ceiling features original ornate plaster moldings and a central rosette, slightly yellowed with age but beautifully preserved. The floor is covered in original hydraulic cement tiles with geometric patterns in faded reds, ochres, and cream — some tiles cracked, others perfectly intact, revealing decades of history underfoot. Two tall double-height windows with traditional wooden shutters are wide open, flooding the empty room with dramatic late-afternoon Mediterranean sunlight that creates long golden rectangles on the tiled floor. The walls show layers of history — patches of stripped wallpaper revealing original plaster underneath, a section of exposed brick where a non-load-bearing wall was partially removed, and traces of old electrical conduits running along the baseboards. Through an arched doorway, a second room is visible with similar original features and a balcony beyond. A professional laser distance measurer sits on the windowsill next to a clipboard with architectural notes, suggesting a recent technical evaluation. The overall atmosphere is one of potential and discovery — a heritage space with extraordinary bones waiting to be transformed. The light is the protagonist, revealing every texture, crack, and detail of the space. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The apartment is completely empty with no people, no furniture, no readable text, no watermarks, and no logos.
```

---

### AC-2 — Informe técnico y estimación de costes (étape 2) — Bureau d'expertise

**Ratio :** `16:9` · **Fichier SEO :** `informe-tecnico-asesoria-compra-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Informe técnico y estimación de costes" image={{ src: imageLaptop, shape: 1 }}`

```
An editorial overhead-angle photograph of a professional interior designer's desk during the preparation of a technical property assessment report, shot for Architectural Digest. A large natural oak desk is covered with the organized tools of a thorough building evaluation. At the center, detailed architectural floor plans of a Barcelona apartment are spread out, showing room dimensions, wall thicknesses, and annotations in pencil marking structural elements and proposed modifications. Beside the plans, a bound technical report with a clean cover page lies open to a page showing a breakdown table of renovation costs by category — demolition, masonry, electrical, plumbing, carpentry, painting, materials. A collection of material samples is arranged methodically: squares of natural stone tiles, ceramic samples in Mediterranean whites and warm terracottas, wood flooring samples in natural oak and walnut, and small paint chips in neutral tones fanned out. Professional measurement tools are scattered purposefully — a laser distance measurer, a retractable steel measuring tape partially extended, a spirit level, and a moisture meter. A laptop to one side shows a split screen with a 3D floor plan visualization and a spreadsheet with cost columns. A mechanical pencil and a red pen for annotations rest on the open report. A ceramic mug of coffee and a small potted cactus in a concrete pot sit at the desk corner. Warm natural light from a window on the left creates soft directional shadows across the plans and samples, giving depth to the materials. Photographed with a Canon EOS R5 and a 35mm lens with moderate depth of field, photorealistic, ultra-detailed, 8K resolution. The desk scene has no people, no readable text on plans or screen, no brand names, no watermarks, and no logos.
```

---

### AC-3 — Acompañamiento post-compra (étape 3) — Salon rénové Born

**Ratio :** `16:9` · **Fichier SEO :** `resultado-reforma-integral-born-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Acompañamiento post-compra" image={{ src: imageMeeting, shape: 2 }}`

```
A stunning wide-angle editorial photograph of a beautifully finished renovated apartment in Barcelona's El Born district, shot for Architectural Digest as the aspirational "after" result of a complete purchase advisory and renovation project. The spacious open-plan living room showcases the transformation from raw space to refined home. The floors are polished natural oak in wide planks with a warm honey tone and a matte finish. A contemporary L-shaped sofa in natural linen fabric in a soft warm grey is arranged facing the windows, adorned with textured cushions in cream, olive green, and burnt ochre. A sculptural coffee table in honed travertine with rounded edges sits on a large handwoven wool rug in cream and sand tones. The dining area flows naturally from the living space, featuring a round table in solid walnut for four with elegant cane-backed chairs. Above, a cluster of two artisanal ceramic pendant lights in matte warm white hang at different heights. The walls are finished in smooth lime plaster in a luminous warm white. One accent wall features the apartment's original exposed stone masonry — carefully cleaned and sealed during renovation — creating a striking contrast between heritage and contemporary design. Built-in floor-to-ceiling shelving in natural oak frames a reading nook with a linen-upholstered bench. Tall windows with slim black metal frames open onto a narrow Born street, with warm afternoon light streaming in and casting geometric shadows across the oak floor. Sheer linen curtains in natural white soften the light. A few trailing pothos plants on the shelves and a large fiddle-leaf fig in a woven basket near the window add organic life. The atmosphere radiates the satisfaction of a successful transformation — a space that was once raw potential now realized as a warm, sophisticated Barcelona home. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

### AC-4 — PricingBlock (tarifas) — Terrasse ático avec vue Barcelona

**Ratio :** `16:9` · **Fichier SEO :** `terraza-atico-vista-barcelona-asesoria.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A breathtaking wide-angle editorial photograph of a beautifully designed rooftop terrace of a penthouse apartment in Barcelona's Eixample district during golden hour, shot for Architectural Digest. The generous terrace of approximately 40 square meters features a carefully designed outdoor living area. The floor is finished in large-format natural sandstone tiles in a warm cream tone with subtle texture. A low contemporary outdoor sofa in powder-coated dark grey aluminum with deep cushions in outdoor fabric in a warm natural linen color is arranged in an L-shape, complemented by two sculptural lounge chairs in teak wood with woven rope backs. A low rectangular coffee table in natural teak with a honed grey stone top anchors the seating area. Along the perimeter, a series of large terracotta planters in varying sizes hold Mediterranean plants — a mature olive tree in the corner, lavender bushes in full bloom, trailing rosemary, bougainvillea climbing a minimalist steel trellis, and ornamental grasses swaying gently. A small outdoor dining table for four in teak with ceramic-top sits near the kitchen access, set with linen placemats and ceramic plates. The star of the scene is the panoramic view beyond the glass and steel railing: the iconic rooftops of the Eixample district stretch toward the horizon, with the unmistakable silhouette of the Sagrada Familia rising in the middle distance, its spires catching the last golden light of the setting sun. Closer, the characteristic chamfered-corner buildings of the Eixample create their rhythmic pattern, with other terraces and rooftop gardens visible. The sky is a warm gradient from deep golden orange near the horizon through soft pink to pale blue overhead, with a few wispy clouds catching the warm light. Integrated LED strip lighting along the planter edges begins to glow softly as evening approaches. The atmosphere captures the ultimate Barcelona lifestyle — the reward of finding the right property with expert guidance. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The terrace is empty with no people, no visible text, no brand names, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Asesoría de Compra de Vivienda

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| AC-1 | Contravisita inmueble (étape 1) | Piso modernista Eixample brut — moulures, suelos hidráulicos, lumière dramatique, potentiel visible | `contravisita-piso-reformar-eixample-barcelona.jpg` |
| AC-2 | Informe técnico (étape 2) | Bureau d'expertise — plans, rapport technique, échantillons matériaux, outils de mesure | `informe-tecnico-asesoria-compra-barcelona.jpg` |
| AC-3 | Acompañamiento post-compra (étape 3) | Salon rénové Born — résultat aspirationnel, chêne + lin + pierre, pierre apparente restaurée | `resultado-reforma-integral-born-barcelona.jpg` |
| AC-4 | PricingBlock (tarifas) | Terrasse ático Eixample — vue Sagrada Familia, golden hour, plantes méditerranéennes | `terraza-atico-vista-barcelona-asesoria.jpg` |

---

## Workflow recommandé

1. **Tester en `1K`** — Générer en basse résolution pour valider composition et ambiance
2. **Commencer par DI-4 (résultat final)** — C'est l'image d'ambiance qui donne le ton
3. **Continuer avec DI-1, DI-2, DI-3** — Les étapes du processus, dans l'ordre narratif
4. **Qualité finale en `4K`** — Relancer les prompts validés en résolution max
5. **Post-production** — Lightroom pour la cohérence couleur entre les 4 images
6. **Compression** — TinyPNG ou Squoosh, target < 200KB par image, format WebP
