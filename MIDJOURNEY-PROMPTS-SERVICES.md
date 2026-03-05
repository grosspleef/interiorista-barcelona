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

> **⚠️ Note sur la variation stylistique**
>
> Pour éviter la monotonie visuelle entre les pages de services, **varier systématiquement** les éléments suivants entre chaque prompt :
> - **Angles de prise de vue** — alterner wide-angle, eye-level, overhead, detail shot, contre-plongée
> - **Focales** — ne pas rester sur le 24mm ; utiliser aussi 16mm, 28mm, 35mm, 50mm, 85mm
> - **Palettes de couleurs** — éviter la dominance terracotta + sage + cream ; explorer béton brut, acier Corten, micro-ciment anthracite, brique, laiton, noir mat
> - **Types de lumière** — varier entre lumière dorée late-afternoon, lumière fraîche matinale, zénithale, blue hour, latérale avec ombres portées
> - **Plantes et accessoires** — ne pas répéter pothos, fiddle-leaf fig et pampas grass ; utiliser eucalyptus, oliviers, romarin, plantes grasses, herbes aromatiques
> - **Types de pièces et espaces** — alterner salons, chambres, cuisines, salles de bain, terrasses, façades, chantiers, bureaux

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

## Page : Compra Sobre Plano (`/compra-sobre-plano/`)

**Contexte :** Page de service pour l'accompagnement à l'achat sur plan (obra nueva) à Barcelona. Les 4 images illustrent le **processus d'accompagnement** — du showroom du promoteur à la sélection des finitions, en passant par l'inspection pré-livraison, jusqu'au résultat final d'un appartement livré et personnalisé. L'objectif est de montrer la valeur ajoutée d'un interiorista lors de l'achat d'un bien en VEFA (vente en état futur d'achèvement).

---

### CSP-1 — Asesoramiento inicial y revisión de planos (étape 1) — Showroom promoteur Diagonal Mar

**Ratio :** `16:9` · **Fichier SEO :** `revision-planos-obra-nueva-diagonal-mar-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Asesoramiento inicial y revisión de planos" image={{ src: imageWhiteboard }}`

```
A warm editorial photograph of a new-build developer's showroom in Barcelona's Diagonal Mar district, shot for Architectural Digest. The scene captures a sleek presentation table in white lacquer where large-format architectural floor plans of a new apartment are spread open, showing room layouts with precise dimensions and structural elements marked in pencil. Beside the plans, a developer's marketing brochure with premium paper shows exterior renders of a modern residential tower. A collection of finish samples is arranged methodically on the table: large-format porcelain tile squares in warm greige and cool white, engineered oak flooring samples in three tones from light natural to warm walnut, kitchen door front samples in matte lacquer and wood veneer, and small squares of quartz countertop material in white and grey veining. A professional laser distance measurer and a retractable steel tape measure rest on the plans. A tablet device shows a digital floor plan with colored overlay annotations. Through the floor-to-ceiling windows of the showroom, the modern Diagonal Mar skyline is visible — contemporary residential towers, landscaped boulevards, and a glimpse of the Mediterranean sea in the far distance under a clear blue sky. The showroom has polished concrete floors, minimalist white walls, and track lighting that illuminates the table surface with clean, even light. A large architectural scale model of the residential development sits on a pedestal in the background, slightly out of focus. The atmosphere is professional, contemporary, and full of possibility — the starting point of a personalization journey. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no readable text on plans or brochures, no watermarks, and no logos.
```

---

### CSP-2 — Estudio de personalización y selección de acabados (étape 2) — Atelier sélection matériaux

**Ratio :** `16:9` · **Fichier SEO :** `seleccion-acabados-obra-nueva-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Estudio de personalización y selección de acabados" image={{ src: imageLaptop, shape: 1 }}`

```
An editorial overhead-angle photograph of an interior designer's workspace during a new-build apartment finish selection session, shot for Architectural Digest. A large natural oak table is covered with a carefully curated selection of premium materials for a new-construction apartment in Barcelona. At the center, optimized floor plans showing a proposed kitchen redistribution are spread out, with pencil annotations comparing the developer's original layout to the improved version. Surrounding the plans, material samples are grouped by room: for the kitchen — matte lacquer cabinet door samples in warm greige and deep sage green, quartz countertop samples with subtle veining, and brushed brass hardware pulls. For the bathrooms — handmade zellige tiles in soft white, large-format marble-effect porcelain in Calacatta tones, and matte black tapware samples. For the living areas — wide-plank engineered oak flooring samples in three warm tones, skirting board profiles in natural oak, and paint chips fanned out in warm neutral shades from soft linen to warm clay. A laptop screen shows a photorealistic 3D rendering of the personalized kitchen with the new layout, island counter, and selected finishes. A mood board pinned to a small easel shows the design direction — warm contemporary Mediterranean with natural materials. A mechanical pencil, a brass ruler, and sticky notes in pastel colors are scattered purposefully. A ceramic cup of coffee and a small branch of dried eucalyptus in a stoneware vase sit at the corner. Warm afternoon light from a large window creates soft shadows across the materials, highlighting the textures of wood grain, stone veining, and ceramic glaze. Photographed with a Canon EOS R5 and a 35mm lens with moderate depth of field, photorealistic, ultra-detailed, 8K resolution. The workspace has no people, no readable text on plans or screen, no brand names, no watermarks, and no logos.
```

---

### CSP-3 — Seguimiento de obra y verificación de entrega (étape 3) — Inspección pre-entrega Poblenou

**Ratio :** `16:9` · **Fichier SEO :** `inspeccion-pre-entrega-obra-nueva-poblenou-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Seguimiento de obra y verificación de entrega" image={{ src: imageMeeting, shape: 2 }}`

```
A dramatic editorial photograph of a brand-new apartment during a pre-delivery inspection in a modern residential building in Barcelona's Poblenou district, shot for Architectural Digest. The scene captures a freshly completed 100-square-meter apartment that has never been lived in — everything is pristine and new. The open-plan living area features perfectly laid large-format porcelain floor tiles in warm light grey with minimal grout lines. The walls are freshly painted in luminous white with crisp edges at every corner and junction. A modern open kitchen is visible in the background with newly installed matte white lacquer cabinets, a quartz countertop in soft grey veining, and a stainless steel sink — everything spotless and untouched. Through the large sliding glass doors with slim aluminum frames, a private balcony overlooks the contemporary Poblenou neighborhood — converted industrial buildings, modern residential blocks, and cranes of ongoing development visible in the distance. On the kitchen island, a professional inspection clipboard with a checklist is laid out alongside a laser distance measurer, a spirit level, a professional moisture meter, and a high-powered flashlight — the tools of a thorough pre-delivery inspection. Small colored adhesive dots — blue and red — are placed on two spots on the wall and one on a window frame, marking minor defects for the developer to address. The natural light flooding through the large windows is bright and clean, typical of a new building with generous glazing and good orientation. The atmosphere is one of meticulous verification — the critical final step before accepting a new home. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The apartment is empty with no people, no furniture, no readable text on the clipboard, no watermarks, and no logos.
```

---

### CSP-4 — PricingBlock (tarifas) — Salon livré et personnalisé Eixample

**Ratio :** `16:9` · **Fichier SEO :** `piso-obra-nueva-personalizado-eixample-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A stunning wide-angle editorial photograph of a beautifully personalized new-build apartment living room in Barcelona's Eixample district, shot for Architectural Digest as the aspirational result of a complete off-plan purchase advisory project. The spacious open-plan living and dining area showcases the quality achievable when finishes are chosen before delivery. The floors are premium large-format porcelain tiles in warm cream with a subtle stone texture and minimal grout lines — a finish selected during the construction phase. A contemporary modular sofa in natural linen fabric in warm sand is arranged facing the windows, with textured cushions in cream, terracotta, and soft olive. A sculptural coffee table in light travertine with organic rounded edges sits on a large handwoven wool rug in natural cream tones. The open kitchen beyond features a generous island with a waterfall quartz countertop in soft white with delicate grey veining, custom matte sage-green lacquer cabinets that were specified during the personalization phase, integrated appliances, and pendant lights in hand-blown opal glass with brushed brass fittings. The dining area between kitchen and living room has a round natural oak table for six with cane-backed chairs in warm honey tones. Floor-to-ceiling windows with slim aluminum frames and motorized roller blinds in sheer white linen fill the space with abundant natural light. Through the windows, the characteristic grid of Eixample streets is visible — tree-lined boulevards and elegant stone facades. The walls are finished in smooth warm white with one accent wall in the living area featuring vertical fluted oak panels — a custom upgrade requested from the developer. Built-in storage with oak-fronted cabinets flanks the entrance hallway, visible through a wide doorway. The entire space radiates contemporary Mediterranean warmth — the result of thoughtful personalization during the construction phase, with every finish, fixture, and detail chosen with professional guidance. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Compra Sobre Plano

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| CSP-1 | Asesoramiento inicial (étape 1) | Showroom promoteur Diagonal Mar — plans, échantillons, maquette | `revision-planos-obra-nueva-diagonal-mar-barcelona.jpg` |
| CSP-2 | Personalización acabados (étape 2) | Atelier sélection matériaux — mood board, 3D render, échantillons par pièce | `seleccion-acabados-obra-nueva-barcelona.jpg` |
| CSP-3 | Seguimiento obra (étape 3) | Inspección pre-entrega Poblenou — appart neuf vide, outils inspection, pastilles défauts | `inspeccion-pre-entrega-obra-nueva-poblenou-barcelona.jpg` |
| CSP-4 | PricingBlock (tarifas) | Salon livré personnalisé Eixample — cuisine ouverte, finitions premium, résultat aspirationnel | `piso-obra-nueva-personalizado-eixample-barcelona.jpg` |

---

## Page : Home Staging (`/home-staging/`)

**Contexte :** Page de service pour le home staging à Barcelona. Les 4 images illustrent le **processus complet de mise en valeur d'un bien pour la vente** — du diagnostic initial (état « avant ») à la mise en scène, au shooting photo professionnel, et enfin une chambre stagée premium pour la section tarifas. Chaque image montre un quartier différent (Gràcia, Eixample, Born, Sarrià) et un espace différent pour illustrer la diversité des projets.

---

### HS-1 — Diagnóstico y plan de staging (étape 1) — Piso à préparer Gràcia

**Ratio :** `16:9` · **Fichier SEO :** `diagnostico-home-staging-piso-gracia-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Diagnóstico y plan de staging" image={{ src: imageWhiteboard }}`

```
A warm editorial photograph of a 90-square-meter apartment living room in Barcelona's Gràcia neighborhood being assessed for a home staging project, shot for Architectural Digest. The room is in its current lived-in state — not messy but clearly personal and over-furnished. A large dark leather sofa dominates the space, flanked by mismatched side tables with family photos in various frames. Bookshelves overflow with paperbacks, magazines, and personal memorabilia. A bulky entertainment center with visible cables sits against one wall. The curtains are heavy dark fabric that blocks much of the natural light. However, the apartment's exceptional bones are clearly visible — original hydraulic cement floor tiles in a beautiful geometric pattern of warm blues and creams peek out from under a worn area rug, high ceilings with simple classical moldings, and two tall windows with traditional wooden shutters that promise abundant Mediterranean light when properly revealed. On the coffee table, a professional staging assessment is underway: a clipboard with a room-by-room checklist, a laser distance measurer, a retractable steel tape measure, fabric swatches in light neutral tones suggesting the future direction, and a tablet showing before-and-after staging reference photos of a similar apartment. A floor plan of the apartment with pencil annotations indicating furniture to remove, pieces to reposition, and areas to highlight is spread beside the clipboard. The contrast between the room's current cluttered state and its visible architectural potential tells the story of the staging opportunity. Warm afternoon light filters through the partially open shutters, casting striped shadows that hint at the brightness possible once the space is properly staged. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room has no people, no readable text on documents, no watermarks, and no logos.
```

---

### HS-2 — Puesta en escena del inmueble (étape 2) — Salon stagé Eixample

**Ratio :** `16:9` · **Fichier SEO :** `home-staging-salon-eixample-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Puesta en escena del inmueble" image={{ src: imageLaptop, shape: 1 }}`

```
A striking editorial photograph of a beautifully staged modernist apartment living room in Barcelona's Eixample district, prepared for sale by a professional home staging team, shot for Architectural Digest. The 100-square-meter space has been transformed into a buyer's dream — every element carefully chosen to maximize appeal. A streamlined contemporary sofa in natural linen fabric in warm cream is positioned to face the tall double windows, paired with a single sculptural armchair in soft oatmeal bouclé. A round coffee table in light natural oak with slender legs sits on a large jute rug in natural tones that defines the living area. The dining zone beyond features a simple oval table in white-washed ash for four with elegant wishbone-style chairs in natural beech and woven cord seats. The walls are freshly painted in a luminous warm white that maximizes the sense of space and light. The original ornate ceiling moldings and central rosette have been highlighted by the fresh paint, drawing the eye upward to the generous ceiling height. Strategic styling details create warmth without clutter: a single large ceramic vase in matte warm white with dried pampas grass on the dining table, a neat stack of three oversized coffee-table books on design and architecture on the coffee table, two textured linen cushions in soft sage green and warm clay on the sofa, and a lightweight cotton throw in natural cream draped over one arm. A large round mirror in a thin brass frame on the wall opposite the windows doubles the natural light. The original hydraulic cement floor tiles in subtle geometric patterns of cream and soft grey have been professionally cleaned and sealed, their beauty now a selling point rather than hidden under rugs. Sheer white linen curtains frame the tall windows, through which the leafy canopy of an Eixample boulevard is visible. The entire space feels aspirational yet attainable — a home buyers can immediately envision themselves living in. Photographed with a Canon EOS R5 and a 35mm lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

### HS-3 — Reportaje fotográfico y entrega (étape 3) — Shooting photo appartement Born

**Ratio :** `16:9` · **Fichier SEO :** `reportaje-fotografico-home-staging-born-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Reportaje fotográfico y entrega" image={{ src: imageMeeting, shape: 2 }}`

```
A dramatic editorial photograph of a professionally staged apartment in Barcelona's El Born district during a real estate photography session, shot for Architectural Digest. The scene captures a beautifully staged open-plan living and dining area from a wide angle, with professional photography equipment visible in the foreground — a sturdy carbon-fiber tripod supporting a professional camera with a wide-angle lens, positioned at the optimal height for architectural photography. A portable LED panel light on a light stand with a large softbox diffuser is set up to one side, providing fill light that eliminates harsh shadows. The staged apartment beyond the equipment is immaculate: a contemporary sofa in warm grey linen faces exposed stone walls — original medieval masonry carefully restored and sealed — with a modern glass-and-oak coffee table, a woven wool rug in cream tones, and carefully placed accessories including ceramic vessels, a small olive branch in a stoneware vase, and design books. The dining area features a reclaimed elm wood table with four linen-upholstered chairs in soft warm grey. Through a tall arched window with original stone surrounds, the narrow cobblestone street of El Born is visible with characteristic wrought-iron balconies on the building opposite. On a small side table near the tripod, a laptop shows a tethered shooting preview — the live camera feed displaying the staged room from the camera's perspective, demonstrating the professional workflow. A reflector disc in silver-white leans against the wall nearby. The natural light from the windows combines with the professional lighting to create the bright, inviting atmosphere that drives real estate listings to stand out on Idealista and Fotocasa. The atmosphere conveys professional precision — the final step that transforms staging into compelling marketing imagery. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space has no people, no readable text on the laptop screen, no watermarks, and no logos.
```

---

### HS-4 — PricingBlock (tarifas) — Chambre principale stagée Sarrià

**Ratio :** `16:9` · **Fichier SEO :** `home-staging-dormitorio-premium-sarria-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A serene wide-angle editorial photograph of a beautifully staged master bedroom in a premium apartment in Barcelona's Sarrià district, prepared for sale by a professional home staging team, shot for Architectural Digest. The generous bedroom showcases the transformative power of expert staging. A king-size bed with a simple upholstered headboard in natural oatmeal linen is the centerpiece, dressed in layers of premium bedding — crisp white cotton sheets, a lightweight linen duvet cover in warm sand, a folded wool throw blanket in soft terracotta at the foot, and four oversized pillows in white and natural linen. Two matching bedside tables in light natural oak with rounded edges each hold a handmade ceramic table lamp with a linen shade in warm cream — their soft glow suggesting warmth. A large handwoven wool rug in cream and soft grey with a subtle textural pattern anchors the bed on polished natural oak floors in wide planks with a warm honey tone. At the foot of the bed, a simple upholstered bench in bouclé fabric in warm ivory provides a styling surface — a neatly folded cashmere throw and a small tray with a ceramic cup and a single design book. Against the opposite wall, a simple oak dresser with brass knob hardware displays a curated vignette: a large round mirror in brushed brass leaning against the wall, a tall ceramic vase in matte off-white with a single branch of dried cotton flowers, and a small stack of linen-bound notebooks. Floor-to-ceiling curtains in heavyweight natural linen in warm white frame two tall windows, one slightly open, through which the lush tree canopy of a quiet Sarrià street is visible — mature plane trees and Mediterranean pines creating a green, private backdrop. The afternoon light is soft and diffused through the linen curtains, creating a luminous, restful atmosphere. A trailing string-of-pearls plant cascades from a small wall-mounted shelf in natural oak near the window. Every element has been chosen to appeal to the widest range of premium buyers — neutral, warm, sophisticated, and aspirational. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no brand names, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Home Staging

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| HS-1 | Diagnóstico y plan (étape 1) | Piso Gràcia avant staging — encombré mais beau potentiel, outils diagnostic, suelos hidráulicos | `diagnostico-home-staging-piso-gracia-barcelona.jpg` |
| HS-2 | Puesta en escena (étape 2) | Salon stagé Eixample — mobilier épuré, textiles neutres, moulures mises en valeur | `home-staging-salon-eixample-barcelona.jpg` |
| HS-3 | Reportaje fotográfico (étape 3) | Shooting photo Born — trépied, éclairage pro, appartement stagé prêt pour Idealista | `reportaje-fotografico-home-staging-born-barcelona.jpg` |
| HS-4 | PricingBlock (tarifas) | Chambre stagée premium Sarrià — literie haut de gamme, textiles naturels, lumière douce | `home-staging-dormitorio-premium-sarria-barcelona.jpg` |

---

## Page : Interiorismo Accesible

4 prompts pour la page `/interiorismo-accesible/` — Code **IA-**.

Quartiers : Born, Eixample, Sarrià, Poblenou.

---

### IA-1 — Visita de evaluación de accesibilidad (étape 1) — Appartement avec barrières Born

**Ratio :** `16:9` · **Fichier SEO :** `evaluacion-accesibilidad-piso-born-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Visita de evaluación de accesibilidad" image={{ src: imageWhiteboard }}`

Scène : un appartement ancien dans le Born montrant les barrières architecturales typiques — seuils de porte surélevés, couloir étroit, salle de bain avec baignoire haute. Outils d'évaluation posés (mètre laser, checklist, niveau). L'image raconte le diagnostic initial d'accessibilité — les problèmes sont visibles mais le potentiel du lieu aussi.

```
A warm editorial photograph of a 85-square-meter apartment hallway and bathroom entrance in Barcelona's El Born district being assessed for an accessibility renovation, shot for Architectural Digest. The scene captures the typical architectural barriers found in historic Barcelona buildings. A narrow hallway approximately 90 centimeters wide with original terracotta floor tiles leads to a bathroom with a raised door threshold of several centimeters — a clear obstacle for wheelchair access. The bathroom beyond is visible through the open door: a traditional high-sided cast-iron bathtub with claw feet, old ceramic floor tiles with no anti-slip properties, a pedestal sink too high and without wheelchair clearance underneath, and a light switch positioned too high on the wall. Despite the barriers, the apartment has beautiful character — exposed stone walls in the hallway with warm Mediterranean tones, high vaulted ceilings with original wooden beams, and warm natural light filtering through a window at the end of the corridor. On a small console table in the hallway, professional accessibility assessment tools are laid out: a clipboard with a room-by-room barrier checklist, a laser distance measurer showing a measurement, a retractable steel tape measure partially extended, a spirit level, and a folder with printed accessibility regulation references. A door-width measuring stick leans against the bathroom doorframe, highlighting the insufficient width. Colored adhesive dots — red for barriers, green for compliant elements — are placed on the doorframe and threshold. The contrast between the apartment's architectural charm and its accessibility deficiencies tells the story of the evaluation visit — identifying every barrier that needs to be addressed. Warm afternoon light streams through the corridor window, casting a golden glow that emphasizes both the beauty and the challenges of the space. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space has no people, no readable text on documents, no watermarks, and no logos.
```

---

### IA-2 — Estudio del proyecto de adaptación (étape 2) — Plans techniques accessibilité Eixample

**Ratio :** `16:9` · **Fichier SEO :** `proyecto-adaptacion-accesible-eixample-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Estudio del proyecto de adaptación" image={{ src: imageLaptop, shape: 1 }}`

Scène : un bureau d'interioriste avec les plans techniques d'un projet d'adaptation accessibilité — plans annotés avec les rayons de giro (150 cm), largeurs de portes (80 cm), hauteurs d'interrupteurs. Échantillons de matériaux spécifiques accessibilité : barres d'appui, carrelage antidérapant, robinetterie thermostatique. Tablette montrant un rendu 3D de salle de bain accessible.

```
An editorial overhead-angle photograph of an interior designer's workspace during the planning phase of an accessibility renovation project for a modernist apartment in Barcelona's Eixample district, shot for Architectural Digest. A large natural oak desk is covered with the specialized tools of an accessible design project. At the center, detailed architectural floor plans of a Barcelona apartment are spread out, showing the proposed accessible layout with pencil annotations marking critical accessibility dimensions — turning radius circles in the bathroom and kitchen areas, door widths, corridor widths, and switch heights. Beside the main plans, a bathroom elevation drawing shows a level-access shower area with a fold-down seat, grab bars at specific heights, and a thermostatic mixer valve. A collection of accessibility-specific material samples is arranged methodically: large anti-slip ceramic floor tile samples in warm neutral tones with visible textured surfaces, stainless steel grab bar sections in two finishes — brushed stainless and matte white — showing how they integrate aesthetically, thermostatic tap hardware samples, and a small hinge mechanism for a fold-down shower seat. A tablet device shows a photorealistic 3D rendering of a beautifully designed accessible bathroom — modern, warm, and elegant with no clinical appearance — featuring a curbless shower, floating vanity with wheelchair clearance underneath, and strategically placed grab bars that double as towel rails. A small mood board pinned to a desk easel shows the design direction: warm natural materials, matte finishes, and discreet accessibility features that blend with the interior design. Professional tools include a mechanical pencil, a brass architect's scale ruler, and a printed reference sheet of CTE DB SUA 9 dimensional requirements. A ceramic mug of coffee and a small potted succulent in a terracotta pot sit at the desk corner. Warm natural light from a window on the left creates soft directional shadows across the plans and materials. Photographed with a Canon EOS R5 and a 35mm lens with moderate depth of field, photorealistic, ultra-detailed, 8K resolution. The workspace has no people, no readable text on plans or screen, no brand names, no watermarks, and no logos.
```

---

### IA-3 — Seguimiento de obra y entrega (étape 3) — Salle de bain accessible design Sarrià

**Ratio :** `16:9` · **Fichier SEO :** `bano-accesible-diseno-sarria-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Seguimiento de obra y entrega" image={{ src: imageMeeting, shape: 2 }}`

Scène : une salle de bain accessible terminée dans un appartement à Sarrià — douche à l'italienne avec siège rabattable, barres d'appui design en inox, vasque suspendue avec passage fauteuil, carrelage antidérapant. L'image montre que l'accessibilité peut être belle — aucun aspect clinique, design contemporain chaleureux.

```
A stunning editorial photograph of a beautifully finished accessible bathroom in a premium apartment in Barcelona's Sarrià district, shot for Architectural Digest to showcase how accessibility and design excellence coexist. The generous bathroom of approximately 8 square meters demonstrates that accessible design can be visually stunning. The centerpiece is a spacious curbless walk-in shower area with a gentle slope toward a linear drain in brushed stainless steel — the transition from bathroom floor to shower is seamless. Inside the shower, a fold-down teak wood seat with stainless steel hinges is mounted at the perfect height, currently folded down and ready for use. Two grab bars in matte white powder-coated stainless steel are mounted at strategic heights — their sleek, minimal design makes them appear as intentional design elements rather than medical aids. A premium thermostatic rain shower system with a hand-held shower on an adjustable height rail in brushed stainless steel is mounted on the wall. The floating vanity is a custom piece in natural oak with a thick honed Carrara marble countertop and an integrated shallow basin — mounted at wheelchair-accessible height with ample clearance underneath for a wheelchair to roll under. A large frameless mirror above extends down to the vanity level, usable from both standing and seated positions. The floor throughout is covered in large-format porcelain tiles in warm cream with a certified anti-slip surface — the texture is subtle enough to be elegant but effective for wet conditions. The walls are finished in large-format rectified tiles in soft warm white with minimal grout lines, creating a clean, spacious feeling. Warm elements soften the space: a woven basket with rolled towels in natural cotton, a small teak bath mat outside the shower, and a trailing pothos plant on a wall-mounted oak shelf. A tall window with frosted glass in the lower half and clear glass above lets in soft natural light while maintaining privacy. The overall atmosphere is warm, spa-like, and sophisticated — proof that accessible design enhances rather than compromises interior beauty. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The bathroom is empty with no people, no visible text, no brand names, no watermarks, and no logos.
```

---

### IA-4 — PricingBlock (tarifas) — Salon accessible moderne Poblenou

**Ratio :** `16:9` · **Fichier SEO :** `salon-accesible-moderno-poblenou-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

Scène : un salon accessible dans un appartement moderne à Poblenou — espaces de circulation larges, mobilier bas et ergonomique, domótica visible (interrupteurs à bonne hauteur, interface vocale), seuils nuls, lumière naturelle abondante. Image aspirationnelle montrant un résultat final accessible et beau.

```
A bright wide-angle editorial photograph of a beautifully designed accessible living room in a modern apartment in Barcelona's Poblenou district, shot for Architectural Digest as the aspirational result of a complete accessibility renovation. The spacious open-plan living area of approximately 50 square meters showcases thoughtful accessible design that is indistinguishable from high-end contemporary interior design. The layout features generous circulation paths — wide clear zones between furniture groupings that allow easy wheelchair navigation without feeling sparse or institutional. A contemporary low-profile sofa in natural linen fabric in warm sand with wide, firm seat cushions at an ergonomic transfer height is arranged facing large floor-to-ceiling windows with sliding panels that open onto a private terrace. Two armchairs with supportive backs and armrests in soft bouclé fabric in warm cream are positioned at comfortable conversation distance. A round coffee table in light travertine with smooth rounded edges — no sharp corners — sits on a large flat-weave rug in natural cotton in cream and soft grey that lies completely flat without trip hazards. The floors are polished micro-cement in warm light grey — perfectly smooth, level throughout with zero thresholds at every doorway visible in the background. Smart home elements are subtly integrated: sleek touch panels mounted at accessible height on the walls in brushed aluminum, a small smart speaker on a side table for voice control of lighting, blinds, and climate. All light switches and electrical outlets are positioned at wheelchair-accessible heights. The open kitchen visible in the background features a lowered section of countertop in white quartz, pull-out drawers instead of lower cabinets, and a side-opening oven at an ergonomic height. A fiddle-leaf fig in a large ceramic planter and trailing pothos on a floating oak shelf add organic warmth. Through the generous windows, the contemporary Poblenou skyline is visible — converted industrial buildings and modern architecture under a clear Mediterranean sky. Abundant natural light floods the space, highlighting the warm textures of linen, travertine, and micro-cement. The entire space radiates warmth, sophistication, and effortless accessibility — a home designed for full autonomy without any compromise on style. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no brand names, no watermarks, and no logos.
```

---

### Récapitulatif — 4 images Interiorismo Accesible

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| IA-1 | Visita evaluación (étape 1) | Appart Born avec barrières — couloir étroit, baignoire haute, outils évaluation, pastilles colorées | `evaluacion-accesibilidad-piso-born-barcelona.jpg` |
| IA-2 | Estudio proyecto (étape 2) | Bureau plans accessibilité — rayons de giro, barres appui, carrelage antidérapant, rendu 3D sdb | `proyecto-adaptacion-accesible-eixample-barcelona.jpg` |
| IA-3 | Seguimiento y entrega (étape 3) | Salle de bain accessible design Sarrià — douche italienne, barres design, vasque PMR, spa-like | `bano-accesible-diseno-sarria-barcelona.jpg` |
| IA-4 | PricingBlock (tarifas) | Salon accessible Poblenou — circulation large, domótica, zéro seuil, design contemporain | `salon-accesible-moderno-poblenou-barcelona.jpg` |

---

## Page : Arquitecto (`/arquitecto/`)

**Contexte :** Page de service pour l'architecture à Barcelona. 5 étapes + PricingBlock = 6 images. Le processus couvre de la visite conseil jusqu'à la réception de l'œuvre, en passant par l'anteproyecto, la licencia de obras, la licitación et la dirección de obra. **Variation stylistique maximale** : aucun overhead desk shot, palettes différentes de terracotta/sage/cream, focales variées (16mm à 85mm), 6 quartiers différents.

---

### ARQ-1 — Visita consejo y estudio de viabilidad (étape 1) — Façade maison rénovée Sarrià

**Ratio :** `16:9` · **Fichier SEO :** `visita-viabilidad-arquitecto-sarria-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Visita consejo y estudio de viabilidad" image={{ src: imageWhiteboard }}`

```
A warm editorial photograph of a recently renovated detached house facade in Barcelona's Sarrià district, captured at eye level with a 35mm lens from the garden path leading to the entrance, shot for Architectural Digest. The two-story house combines original golden sandstone masonry walls with a contemporary dark-stained timber extension on the upper level. The main entrance features a tall pivot door in dark walnut with a vertical brass handle. To the left, a large fixed window with slim black steel frames reveals a glimpse of the interior hallway — polished concrete floors and a floating oak staircase visible beyond. The original stone facade has been carefully cleaned and repointed, its warm honey tones glowing in the cool directional morning light that rakes across the textured surface from the east. Mature Mediterranean garden flanks the path: a sculpted olive tree with silvery-green leaves, low rosemary hedges releasing their scent, and white gravel groundcover. A low stone boundary wall with integrated planters of lavender frames the property. On the entrance steps, professional assessment tools suggest a recent architect's visit: a rolled-up set of architectural plans in a cardboard tube, a hardback survey notebook with a mechanical pencil clipped to it, and a laser distance measurer. The morning light creates crisp directional shadows from the olive tree branches across the stone facade, emphasizing the texture contrast between original stonework and contemporary timber cladding. The sky is clear pale blue with soft morning luminosity. Photographed with a Canon EOS R5 and a 35mm lens at eye level, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no readable text, no watermarks, and no logos.
```

---

### ARQ-2 — Estudio de viabilidad y anteproyecto (étape 2) — Maquette architecturale Gràcia

**Ratio :** `16:9` · **Fichier SEO :** `anteproyecto-maqueta-arquitecto-gracia-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Estudio de viabilidad y anteproyecto" image={{ src: imageLaptop, shape: 1 }}`

```
A refined editorial photograph of an architectural model on a clean white presentation table in a bright architect's studio in Barcelona's Gràcia district, captured at eye level with a 50mm lens and shallow depth of field, shot for Architectural Digest. The detailed scale model in white museum board and balsa wood shows a three-story residential building with a rooftop terrace, miniature landscaping in dried moss and tiny wire trees, and removable floor plates revealing the interior layout. The model sits on a base of thin grey cardboard with contour lines suggesting the terrain. Around the maquette on the table: a set of technical drawings printed on thick matte paper showing floor plans with pencil dimension annotations, a tracing paper overlay with alternative layout sketches in graphite, an architect's scale ruler in brushed aluminum, a mechanical pencil, and a small brass compass. Behind the model, slightly out of focus, a large monitor mounted on the wall displays a 3D BIM rendering of the same building in warm daylight visualization — the digital twin of the physical maquette. The studio has raw concrete walls with a single large steel-framed window on the left through which zenithal light pours down from a glass rooflight above, creating clean downward illumination with minimal shadows — the characteristic light of a top-lit atelier. A narrow shelf on the back wall holds rolled plans in labeled tubes and architecture reference books. The palette is restrained: raw concrete grey, white model board, light oak table, black monitor frame, and graphite pencil marks. Photographed with a Canon EOS R5 and a 50mm lens with f/2.8 depth of field, photorealistic, ultra-detailed, 8K resolution. The studio has no people, no readable text on plans or screen, no watermarks, and no logos.
```

---

### ARQ-3 — Licencia de obras y tramitación urbanística (étape 3) — Façade loft Poblenou au crépuscule

**Ratio :** `16:9` · **Fichier SEO :** `licencia-obras-fachada-loft-poblenou-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Licencia de obras y tramitación urbanística" image={{ src: imageMeeting, shape: 2 }}`

```
A dramatic editorial photograph of the facade of a converted industrial loft building in Barcelona's Poblenou district during blue hour, captured from the street with a 24mm wide-angle lens looking from the exterior toward the illuminated interior, shot for Architectural Digest. The four-story former factory features a striking combination of original red brick masonry — carefully restored with visible texture and patina — and new Corten steel cladding panels on an added penthouse level, their rust-orange surface contrasting with the aged brick below. The ground floor has been opened with a massive floor-to-ceiling glass wall in black steel industrial frames, through which the renovated interior is fully visible: a double-height living space with polished concrete floors, a floating steel-and-oak mezzanine with industrial cable railings, and warm interior lighting from exposed filament pendant lights that cast golden pools. An architect's drafting table with plans is visible inside near the glass wall, suggesting the design process. The original industrial loading dock entrance with its steel lintel and stone threshold has been preserved as the main entry. Outside, the narrow Poblenou street is paved in grey granite setts, with a single mature jacaranda tree in the foreground, its branches framing the upper floors. The blue hour sky is a deep gradient from navy overhead to a warm indigo-purple at the horizon, with the last traces of warm light on the western-facing brick wall creating a beautiful warm-cool contrast. Interior light spills onto the pavement through the glass facade, creating warm reflections on the stone. The overall atmosphere captures the essence of Poblenou's industrial transformation — heritage preserved, reimagined through contemporary architecture. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no readable text, no watermarks, and no logos.
```

---

### ARQ-4 — Consulta a empresas y licitación de obras (étape 4) — Plans techniques Eixample

**Ratio :** `16:9` · **Fichier SEO :** `licitacion-planos-tecnicos-eixample-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Consulta a empresas y licitación de obras" image={{ src: imageWhiteboard, shape: 1 }}`

```
A precise editorial detail photograph of architectural construction drawings spread across a drafting surface, captured with an 85mm lens at close range with beautiful bokeh on the background, shot for Architectural Digest. The sharp focus plane falls on a large-format technical blueprint showing a detailed cross-section of a modernist Eixample apartment rehabilitation: structural elements marked in bold black lines, new steel I-beams annotated with load calculations, partition walls in dashed lines, and plumbing and electrical runs in colored pencil — blue for water, red for electrical, green for drainage. A translucent tracing paper overlay partially covers the main drawing, showing a hand-sketched detail of a steel-to-masonry connection node with dimension annotations in graphite. Around the focal area, slightly soft: a T-square in brushed aluminum rests at an angle, a set of technical pens in 0.1mm to 0.8mm widths arranged in a leather pen roll, a brass architect's scale ruler with engraved graduations, and small wood samples — dark wenge and light maple — clipped to the drawing edge with binder clips for material reference. The surface is a weathered oak drafting board with visible grain and minor ink stains from years of use. Strong lateral window light from the right side creates crisp, defined shadows from the pens and ruler across the paper surface, with the tracing paper edges catching the light translucently. The background dissolves into a warm bokeh of what appears to be additional rolled plans and the oak shelving of an architect's office. The palette is graphic and restrained: white and cream paper, graphite grey, ink black, warm oak wood, and the subtle colored pencil annotations. Photographed with a Canon EOS R5 and an 85mm f/1.4 lens with shallow depth of field, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no readable text or numbers, no watermarks, and no logos.
```

---

### ARQ-5 — Dirección de obra y recepción (étape 5) — Chantier structurel Born

**Ratio :** `16:9` · **Fichier SEO :** `direccion-obra-chantier-structural-born-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Dirección de obra y recepción" image={{ src: imageLaptop, shape: 2 }}`

```
A dramatic editorial photograph of a structural renovation in progress inside a historic building in Barcelona's El Born district, captured with a 16mm ultra-wide-angle lens in a slight low-angle perspective looking upward, shot for Architectural Digest. The scene shows a critical construction phase: a new steel IPN beam has just been installed to create a large open-plan living area by removing a load-bearing wall. The fresh steel beam — dark matte grey with visible weld marks — spans the full width of the room approximately four meters, supported at each end by reinforced concrete pilasters poured against the original stone masonry walls. Below the beam, the former wall has been entirely removed, opening a dramatic sight line through two rooms into a third space beyond where a tall arched window with original stone surrounds floods the sequence of spaces with bright zenithal light from above. The raw construction state is visible: exposed stone walls in warm golden Mediterranean limestone, new reinforcement bars protruding from the pilaster tops awaiting the next pour, construction dust settled on the original terracotta floor tiles, steel acrow props and temporary shoring timbers still in place supporting the floor above. Professional construction equipment is organized to one side: a mobile scaffolding tower, coiled electrical cables in orange conduit, a professional rotary hammer drill, and safety equipment — hard hats, high-vis vests, and protective goggles hung on a temporary hook board. Pinned to a plywood panel on the wall, architectural section drawings show the beam detail and load path with pencil annotations. The dramatic overhead light from the arched window creates strong contrasts — bright pools and deep shadows — emphasizing the raw materiality of stone, steel, and concrete. Photographed with a Canon EOS R5 and a 16mm ultra-wide-angle lens, slight upward angle, photorealistic, ultra-detailed, 8K resolution. The space has no people, no readable text on plans, no watermarks, and no logos.
```

---

### ARQ-6 — PricingBlock (tarifas) — Double hauteur villa Pedralbes

**Ratio :** `16:9` · **Fichier SEO :** `villa-contemporanea-doble-altura-pedralbes-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A stunning editorial photograph of a contemporary villa interior with a dramatic double-height living space in Barcelona's Pedralbes district, captured with a 28mm lens from the midpoint of a floating design staircase looking down into the living area, shot for Architectural Digest. The double-height space rises approximately six meters, with the upper level visible as a cantilevered mezzanine with a minimalist glass and brushed steel railing. The staircase from which the photo is taken features floating treads in solid oiled oak anchored to a micro-cement wall with concealed steel brackets — each tread casting a precise horizontal shadow line on the wall below. The living area below is expansive: floors in polished micro-cement in deep anthracite grey that reflects the abundant natural light. A contemporary low-profile sectional sofa in charcoal wool fabric is arranged around a monolithic coffee table in honed black marble with subtle white veining. Two accent armchairs in warm cognac leather with brass-finished legs provide contrast. The far wall is floor-to-ceiling glazing — minimal-frame sliding panels in anthracite aluminum — opening onto a landscaped garden with a rectangular infinity-edge lap pool reflecting the sky. The material palette is sophisticated and deliberately different from Mediterranean clichés: anthracite micro-cement, black marble, warm oiled oak, brushed brass accents, and the cognac leather providing warmth. A tall indoor tree — a mature Ficus lyrata replaced by a sculptural Strelitzia nicolai with dramatic paddle-shaped leaves — rises from a large raw-concrete planter near the glass wall, its leaves reaching toward the upper level. Integrated architectural lighting is subtle: recessed linear LED strips along the mezzanine edge wash the double-height wall, and two large minimalist pendant lights in brushed brass with opal glass diffusers hang at staggered heights in the void. Abundant natural light pours through the glazed wall, clean and bright, illuminating the space evenly with the characteristic clarity of a well-oriented contemporary villa. The overall atmosphere is one of architectural ambition realized — a premium result that justifies professional architectural guidance. Photographed with a Canon EOS R5 and a 28mm lens from the staircase, photorealistic, ultra-detailed, 8K resolution. The space has no people, no visible text, no watermarks, and no logos.
```

---

## Récapitulatif — 6 images Arquitecto

| # | Section page | Style | Quartier | Fichier SEO |
|---|-------------|-------|----------|-------------|
| ARQ-1 | Visita consejo (étape 1) | Façade maison rénovée — pierre dorée + bois sombre, lumière matinale, 35mm eye-level | Sarrià | `visita-viabilidad-arquitecto-sarria-barcelona.jpg` |
| ARQ-2 | Anteproyecto (étape 2) | Maquette architecturale — béton brut + chêne clair + noir mat, lumière zénithale verrière, 50mm shallow DoF | Gràcia | `anteproyecto-maqueta-arquitecto-gracia-barcelona.jpg` |
| ARQ-3 | Licencia de obras (étape 3) | Façade loft industriel — brique + acier Corten + verre, blue hour/crépuscule, 24mm extérieur | Poblenou | `licencia-obras-fachada-loft-poblenou-barcelona.jpg` |
| ARQ-4 | Licitación (étape 4) | Plans techniques detail — papier + calque + graphite + bois, lumière latérale ombres nettes, 85mm bokeh | Eixample | `licitacion-planos-tecnicos-eixample-barcelona.jpg` |
| ARQ-5 | Dirección de obra (étape 5) | Chantier structurel — béton + acier noir + pierre, lumière zénithale dramatique, 16mm ultra-wide contre-plongée | Born | `direccion-obra-chantier-structural-born-barcelona.jpg` |
| ARQ-6 | PricingBlock (tarifas) | Villa double hauteur — micro-ciment anthracite + chêne + laiton, lumière naturelle abondante, 28mm depuis escalier | Pedralbes | `villa-contemporanea-doble-altura-pedralbes-barcelona.jpg` |

---

## Page : Ampliación de Vivienda (`/ampliacion-vivienda/`)

**Contexte :** Page de service pour l'ampliación de vivienda à Barcelona. Les 4 images illustrent le **processus d'extension de logement** — de l'étude de viabilité urbanistique au résultat final, en passant par le projet technique et l'exécution de chantier. Chaque image montre un **type d'ampliación différent** (cerramiento de terraza, unión de pisos, altillo, verrière) et un **quartier jamais utilisé** (Sant Gervasi, Les Corts, Poble Sec, Horta-Guinardó). Palettes et focales inédites pour maximiser la variation stylistique.

---

### AMP-1 — Estudio de viabilidad urbanística (étape 1) — Terrasse ático Sant Gervasi

**Ratio :** `16:9` · **Fichier SEO :** `estudio-viabilidad-terraza-atico-sant-gervasi-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Estudio de viabilidad urbanística" image={{ src: imageWhiteboard }}`

```
A dramatic editorial photograph of a rooftop terrace of a penthouse apartment in Barcelona's Sant Gervasi district, captured from the terrace looking inward toward the apartment interior through open French doors, shot for Architectural Digest to illustrate a feasibility assessment for a terrace enclosure project. The 35-square-meter terrace features weathered grey-blue cement floor tiles with a subtle herringbone pattern, an ornamental wrought-iron railing with Art Nouveau curves painted in matte black, and a low stone parapet wall. The terrace is currently open-air and unfurnished, clearly in its raw state awaiting transformation. Through the open French doors with peeling white paint, the existing apartment interior is partially visible — high ceilings with simple classical moldings and warm terracotta floor tiles. On the terrace floor, professional assessment tools suggest a recent architect's visit: a rolled-up set of architectural plans partially unfurled showing the terrace footprint with pencil dimension annotations, a laser distance measurer pointed at the railing, a retractable steel tape measure extended along the parapet wall, and a hardback survey notebook with a mechanical pencil. Small colored adhesive markers — blue for structural elements, yellow for regulatory boundaries — are placed on the railing posts and parapet corners. The morning Mediterranean light is frank and directional, streaming from the east and casting crisp shadows from the wrought-iron railing across the blue-grey tiles. In the background beyond the railing, the rooftops of Sant Gervasi climb gently uphill toward Tibidabo — terracotta roof tiles, church bell towers, and mature Mediterranean pine trees visible against a clear pale blue sky. The atmosphere conveys assessment and potential — a generous outdoor space that could become a luminous year-round living area. Photographed with a Canon EOS R5 and a 28mm lens from the terrace toward the interior, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no readable text on plans, no watermarks, and no logos.
```

---

### AMP-2 — Proyecto técnico y licencias (étape 2) — Coupe structurelle unión de pisos Les Corts

**Ratio :** `16:9` · **Fichier SEO :** `proyecto-tecnico-union-pisos-les-corts-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Proyecto técnico y licencias" image={{ src: imageLaptop, shape: 1 }}`

```
A precise editorial photograph of a technical workspace in an architect's office in Barcelona's Les Corts district during the preparation of a structural project for joining two apartments vertically, shot for Architectural Digest. The scene is captured at eye level with a 45mm lens, showing a large drafting table in natural birch plywood covered with kraft paper and technical documents. At the center, a detailed architectural cross-section drawing on thick matte paper shows a two-story apartment union — the existing concrete floor slab partially opened, new steel reinforcement beams annotated with load calculations in blue engineering pencil, a new internal staircase drawn in precise ink lines, and structural connection nodes circled in red pencil for special attention. A translucent tracing paper overlay shows an alternative staircase configuration sketched in soft graphite. Around the main drawing: a structural engineer's calculation booklet with a plain grey cover lies open to a page of formulas, a set of technical pens in graduated widths arranged in a brushed aluminum pen tray, a brass architect's scale ruler with engraved graduations, and a steel T-square resting at an angle. Material reference samples are clipped to the drawing edge with binder clips: a small section of steel I-beam profile in dark matte grey, a concrete core sample cylinder, and a piece of engineered oak flooring showing the warm grain. A professional calculator and a ceramic mug of coffee sit at the corner. The light is diffuse and cool, coming from a large north-facing window on the left — typical of a technical studio — creating even illumination across the paper surfaces with minimal shadows. The palette is restrained and technical: kraft brown, engineering blue, graphite grey, birch plywood, and steel accents. Photographed with a Canon EOS R5 and a 45mm lens at eye level, photorealistic, ultra-detailed, 8K resolution. The workspace has no people, no readable text or numbers on plans, no brand names, no watermarks, and no logos.
```

---

### AMP-3 — Ejecución de obra y entrega (étape 3) — Chantier altillo loft Poble Sec

**Ratio :** `16:9` · **Fichier SEO :** `chantier-altillo-loft-poble-sec-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Ejecución de obra y entrega" image={{ src: imageMeeting, shape: 2 }}`

```
A dramatic editorial photograph of a mezzanine construction in progress inside a converted industrial loft in Barcelona's Poble Sec district, captured with a 20mm ultra-wide-angle lens from the mezzanine level looking slightly downward, shot for Architectural Digest. The double-height space rises approximately 5 meters with a characteristic industrial shed roof featuring a north-facing sawtooth glass rooflight that floods the space with bright zenithal industrial light from above, illuminating dust particles floating in the air. The mezzanine structure is mid-construction: raw steel IPE beams in dark matte grey span the width of the space, supported by slender steel columns bolted to concrete base plates on the original industrial floor below. OSB panels in their characteristic warm golden-brown with visible wood chip texture form the mezzanine deck, partially laid — some beams still exposed showing the structural skeleton. Temporary steel acrow props brace the structure during construction. Along one edge, raw formwork-finished concrete block walls in light grey define a future bedroom on the mezzanine. Below, the ground floor is visible through the open section of the mezzanine: the original industrial concrete floor with patched repairs, exposed brick walls in warm terracotta tones with whitewash traces, and new electrical conduits in orange corrugated tubing running along the walls. Construction materials are organized on the ground floor: stacked OSB panels, bundles of steel angle brackets, boxes of heavy-duty structural screws, and a portable welding station with a welding helmet hung on its handle. A custom-designed steel staircase in raw unfinished state — angular treads welded to a single central stringer — rises from ground floor to mezzanine, its industrial aesthetic intentional rather than temporary. Architectural section drawings are pinned to a plywood board leaning against the brick wall, showing the mezzanine detail and height clearances. The atmosphere is one of active construction — raw materials being transformed into habitable space, the industrial heritage of Poble Sec meeting contemporary residential design. Photographed with a Canon EOS R5 and a 20mm ultra-wide-angle lens from the mezzanine, slight downward angle, photorealistic, ultra-detailed, 8K resolution. The space has no people, no readable text on plans, no watermarks, and no logos.
```

---

### AMP-4 — PricingBlock (tarifas) — Verrière terrasse Horta-Guinardó

**Ratio :** `16:9` · **Fichier SEO :** `verriere-terraza-habitable-horta-guinardo-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A stunning editorial photograph of a beautifully finished enclosed terrace transformed into a luminous year-round living space in an apartment in Barcelona's Horta-Guinardó district, captured with a 35mm lens on a diagonal from the living room looking into the new verrière extension, shot for Architectural Digest as the aspirational result of a terrace enclosure project. The former 30-square-meter terrace has been enclosed with a contemporary glass and brushed aluminum structure — floor-to-ceiling fixed glass panels with slim aluminum mullions in a warm silver tone, topped by a glass roof with integrated motorized exterior blinds in light grey fabric, currently half-retracted. Two large sliding glass panels are partially open, blurring the boundary between interior and the new enclosed space. The enclosed terrace floor is finished in bleached oak wide planks with a matte finish, creating a warm contrast with the original apartment's polished concrete floor visible in the foreground. Inside the verrière, a comfortable reading area is arranged: a deep armchair in natural linen fabric in soft sage green with a matching ottoman, a slender side table in brushed aluminum with a ceramic mug and a small stack of books, and a low bookshelf in bleached oak running along the base of the glass wall. Lush green plants thrive in the glass enclosure's greenhouse-like conditions: a tall Strelitzia nicolai with dramatic paddle-shaped leaves, cascading trailing ferns hung from discrete aluminum hooks on the glass structure, and potted herbs — rosemary and mint — in handmade stoneware pots on the floor. The golden hour lateral light streams through the west-facing glass panels, casting long warm shadows from the aluminum mullions across the oak floor and creating a beautiful interplay of light and shadow. Through the glass walls, the green hillside of Horta-Guinardó rises in the background — terraced gardens, mature Mediterranean pines, and the characteristic low-rise residential architecture of the neighborhood visible under a warm amber sky. The atmosphere captures the reward of a successful terrace enclosure — a space that seamlessly extends the home into a light-filled garden room usable year-round. Photographed with a Canon EOS R5 and a 35mm lens on a diagonal composition, photorealistic, ultra-detailed, 8K resolution. The space has no people, no visible text, no brand names, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Ampliación de Vivienda

| # | Section page | Style | Quartier | Fichier SEO |
|---|-------------|-------|----------|-------------|
| AMP-1 | Estudio viabilidad (étape 1) | Terrasse ático avant cerramiento — carreaux gris-bleu + fer forgé, lumière matinale franche, 28mm depuis terrasse | Sant Gervasi | `estudio-viabilidad-terraza-atico-sant-gervasi-barcelona.jpg` |
| AMP-2 | Proyecto técnico (étape 2) | Coupe structurelle unión pisos — kraft + bleu ingénieur + acier, lumière diffuse nord, 45mm eye-level | Les Corts | `proyecto-tecnico-union-pisos-les-corts-barcelona.jpg` |
| AMP-3 | Ejecución obra (étape 3) | Chantier altillo loft — acier brut + OSB + béton coffré, lumière zénithale industrielle verrière shed, 20mm ultra-wide plongée | Poble Sec | `chantier-altillo-loft-poble-sec-barcelona.jpg` |
| AMP-4 | PricingBlock (tarifas) | Verrière terrasse résultat final — verre + aluminium brossé + chêne blanchi + vert, golden hour latérale, 35mm diagonale | Horta-Guinardó | `verriere-terraza-habitable-horta-guinardo-barcelona.jpg` |

---

## Page : Interiorismo Comercial (`/interiorismo-comercial/`)

**Contexte :** Page de service pour l'interiorismo comercial à Barcelona. Les 4 images montrent des **projets commerciaux terminés** — restaurant, hôtel, retail, café — pour illustrer la diversité des espaces commerciaux réalisés par le collectif. Chaque image présente un type d'espace commercial différent, un quartier différent, et des focales/éclairages variés. L'objectif est de démontrer l'expertise en design commercial avec des résultats photographiés à la manière d'un reportage Architectural Digest.

---

### IC-1 — Visita al local y briefing comercial (étape 1) — Restaurant gastronómico terminé Born

**Ratio :** `16:9` · **Fichier SEO :** `interiorismo-restaurante-gastronomico-born-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Visita al local y briefing comercial" image={{ src: imageWhiteboard }}`

```
A warm editorial photograph of a beautifully finished gastronomic restaurant interior in a ground-floor commercial space in Barcelona's El Born district, shot for Architectural Digest. The intimate dining room of approximately 80 square meters occupies a former medieval warehouse with stunning original stone barrel-vaulted ceilings — the aged Mediterranean limestone arches rising three meters overhead, their rough-hewn surface carefully cleaned and sealed to reveal warm golden and honey tones with centuries of patina. The open kitchen concept is the centerpiece: a long bar counter in honed black Zimbabwe granite with a thick waterfall edge separates the dining room from the working kitchen beyond, where stainless steel surfaces, copper pots hanging from a ceiling rack, and the warm glow of professional kitchen lighting are visible. Six high stools in dark-stained solid walnut with saddle leather seats in rich cognac line the counter. The main dining area features eight round tables in blackened reclaimed oak with cast-iron pedestal bases, each surrounded by three to four chairs upholstered in deep charcoal wool with exposed oak frames. Along the ancient stone wall, a continuous bench in natural linen fabric in warm taupe runs the length of the space, with small cushions in muted burgundy and ochre. The lighting design is dramatic: a series of handmade ceramic pendant lights in matte charcoal with brass interior reflectors hang at varying heights over the counter, casting focused warm pools of light on the granite surface. Recessed spotlights in adjustable brass fixtures wash the stone vaults with golden uplighting, emphasizing their textural depth. Each table has a single beeswax taper candle in a hand-forged iron holder. The floor is original reclaimed terracotta tiles in warm earthy tones, irregular and beautiful, sealed to a soft matte finish. A curated wine display in a floor-to-ceiling blackened steel rack with brass accents occupies one arched niche in the stone wall. Golden afternoon Mediterranean light streams through the tall arched entrance doorway, its iron-framed glass doors propped open, creating a warm gradient from the sunlit entrance to the atmospheric candlelit depth of the vaulted space. The atmosphere is sophisticated, intimate, and deeply rooted in Barcelona's gastronomic heritage. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The restaurant is empty with no people, no visible text on menus or signs, no watermarks, and no logos.
```

---

### IC-2 — Diseño del proyecto comercial (étape 2) — Boutique hotel lobby Eixample moderniste

**Ratio :** `16:9` · **Fichier SEO :** `interiorismo-boutique-hotel-lobby-eixample-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `title="Diseño del proyecto comercial" image={{ src: imageLaptop, shape: 1 }}`

```
A striking editorial photograph of a beautifully finished boutique hotel lobby and reception area in a rehabilitated modernist building in Barcelona's Eixample district, shot for Architectural Digest. The ground-floor lobby of approximately 120 square meters occupies a former principal apartment of a landmark Eixample building, its original architectural splendor carefully restored and reinterpreted. The ceiling is the showpiece — ornate modernist plasterwork in flowing organic patterns inspired by Catalan Art Nouveau, painstakingly restored and painted in soft warm white that highlights every curve and relief, with a central medallion from which a contemporary chandelier descends: a large sculptural piece in hand-blown frosted glass spheres suspended from thin brass rods at staggered heights, its modern geometry contrasting beautifully with the historic plasterwork above. The original hydraulic cement floor tiles in an intricate geometric pattern of deep teal, cream, and terracotta have been professionally restored — their vivid colors and crisp patterns a testament to Catalan craftsmanship, now protected under a matte sealant. The reception desk is a custom piece: a curved counter in dark green marble with prominent white veining — Verde Guatemala — with a brass-trimmed edge, behind which a wall of vintage-style open shelving in natural oak and brass displays room keys on leather fobs, rolled linen towels, and small ceramic vessels. Two generous seating areas flank the lobby: on one side, a pair of deep armchairs in dusty pink velvet with polished brass legs face a low coffee table in Verde Guatemala marble matching the reception desk; on the other, a curved sofa in rich navy blue bouclé fabric with brass feet anchors a reading corner with a floor lamp in articulated brass with a cream linen shade. The walls are finished in smooth lime plaster in warm ivory, with one feature wall displaying a collection of framed vintage photographs of Barcelona — architectural details, street scenes, and building facades — in thin brass frames of varying sizes. Through the tall double-height windows with their original ornate ironwork balconies visible from inside, the tree-lined Eixample boulevard is bathed in crisp morning light that streams across the lobby, illuminating the restored floor tiles and casting delicate shadows from the ironwork onto the plaster walls. A large potted Kentia palm in a ceramic planter in matte forest green adds tropical elegance near the entrance. The atmosphere is one of cultivated luxury — modernist heritage meets contemporary hospitality design. Photographed with a Canon EOS R5 and a 35mm lens, photorealistic, ultra-detailed, 8K resolution. The lobby is empty with no people, no readable text, no watermarks, and no logos.
```

---

### IC-3 — Dirección de obra y apertura (étape 3) — Flagship store Passeig de Gràcia

**Ratio :** `16:9` · **Fichier SEO :** `interiorismo-flagship-store-passeig-gracia-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `title="Dirección de obra y apertura" image={{ src: imageMeeting, shape: 2 }}`

```
A dramatic editorial photograph of a beautifully finished contemporary fashion flagship store interior on Barcelona's Passeig de Gràcia, shot for Architectural Digest. The 200-square-meter retail space occupies the ground floor and mezzanine of a prestigious Eixample building, with an imposing 5-meter ceiling height on the ground level. The storefront is a single sheet of floor-to-ceiling ultra-clear glass in a minimal black steel frame, through which the entire ground floor is visible from the street — the ultimate vitrine. Inside, the spatial design creates a curated customer journey. The entrance zone features a dramatic focal point: a monolithic reception counter in brushed Corten steel — its warm rust-orange patina providing the only color accent — floating on a concealed steel base against a backdrop wall clad in micro-cement in deep charcoal. From this point, the customer path flows organically through a series of display environments. Clothing is presented on minimal fixtures: wall-mounted brass rails with leather strap supports, freestanding garment racks in blackened steel with brass finials, and low display tables in honed black basalt stone with recessed lighting underneath that creates a floating effect. The floor is polished concrete in a cool pale grey, its smooth surface reflecting the carefully designed lighting scheme: a grid of recessed adjustable LED spotlights in the ceiling — each precisely aimed to illuminate individual garments and display areas with museum-quality precision, creating dramatic pools of light against the darker background. A sculptural staircase in folded black steel plate with open risers and a minimal brass handrail leads to the mezzanine level, where the railing in thin black steel rods allows a view down to the ground floor. The walls alternate between sections of raw micro-cement in dark anthracite and panels of warm vertical oak slats in natural tone, creating rhythm and texture. In a niche, a curated vignette: a vintage Barcelona chair in cognac leather and chrome on a small Berber rug beside a brass floor lamp, suggesting a living-room moment within the retail space. Track-mounted spot lighting in adjustable brass housings provides accent illumination on key display areas, the warm brass contrasting with the cool concrete and steel. The overall atmosphere is authoritative, refined, and architectural — a space where fashion and interior design achieve equal status. Photographed with a Canon EOS R5 and a 20mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The store is empty with no people, no visible text or brand names on clothing or signage, no watermarks, and no logos.
```

---

### IC-4 — PricingBlock (tarifas) — Café-boulangerie artisanale Gràcia

**Ratio :** `16:9` · **Fichier SEO :** `interiorismo-cafe-panaderia-artesanal-gracia-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A warm editorial photograph of a beautifully finished artisanal café-bakery interior in a corner commercial space in Barcelona's Gràcia neighborhood, shot for Architectural Digest. The 70-square-meter space radiates warmth and artisanal character. The bakery counter is the centerpiece: a long L-shaped display in natural light oak with a thick countertop in honed white Carrara marble with soft grey veining, behind which a glass vitrine showcases an array of freshly baked pastries, sourdough loaves, and viennoiseries on wooden display boards and brass wire baskets. Behind the counter, the wall is covered in handmade zellige tiles in a warm blush pink with the characteristic irregular glazed surface that catches and scatters light beautifully. Open shelving in natural birch plywood above the zellige displays stacked ceramic bowls, glass jars of coffee beans and dried ingredients, and small potted herbs — rosemary and basil — in glazed stoneware pots. The coffee station features a professional espresso machine in brushed stainless steel and brass accents. The seating area is a mix of intimate arrangements: small round marble-topped bistro tables with delicate cast-iron bases, paired with bentwood café chairs in natural beech with woven cane seats. A continuous built-in bench in natural oak with linen cushions in warm cream runs along the window wall. The floor is original encaustic cement tiles in a geometric pattern of warm terracotta, cream, and soft blue — beautifully preserved from the space's previous incarnation. Three pendant lights in hand-blown glass with visible bubbles and imperfections hang from twisted fabric cords over the counter, their warm incandescent glow creating soft pools of amber light on the marble surface. The corner location offers two walls of tall windows with original wooden frames painted in matte sage green, flooding the space with warm pendant lighting mixed with the soft diffused light of a cloudy Mediterranean afternoon. Through the windows, the characteristic leafy plaza of Gràcia with its plane trees and outdoor café terraces is visible. A small chalkboard menu frame — empty, with no text — leans against the zellige wall behind the counter. The atmosphere is artisanal, intimate, and irresistibly inviting — the kind of neighborhood café that becomes a daily ritual. Photographed with a Canon EOS R5 and a 28mm lens, photorealistic, ultra-detailed, 8K resolution. The café is empty with no people, no readable text on the chalkboard or any surface, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Interiorismo Comercial

| # | Section page | Style | Quartier | Fichier SEO |
|---|-------------|-------|----------|-------------|
| IC-1 | Visita al local (étape 1) | Restaurant gastronómico — voûtes pierre, barra granite noir, éclairage dramatique pendants céramique, lumière dorée après-midi, 24mm | Born | `interiorismo-restaurante-gastronomico-born-barcelona.jpg` |
| IC-2 | Diseño proyecto (étape 2) | Boutique hotel lobby moderniste — plafonds ornés, mosaïque hydraulique teal, marbre vert Guatemala, lumière matinale fraîche, 35mm | Eixample | `interiorismo-boutique-hotel-lobby-eixample-barcelona.jpg` |
| IC-3 | Dirección obra (étape 3) | Flagship store mode — micro-ciment anthracite + Corten + laiton, éclairage spot track muséal, 20mm grand angle | Passeig de Gràcia | `interiorismo-flagship-store-passeig-gracia-barcelona.jpg` |
| IC-4 | PricingBlock (tarifas) | Café-boulangerie artisanale — zellige blush + chêne + marbre Carrara, pendants verre soufflé, lumière chaude, 28mm | Gràcia | `interiorismo-cafe-panaderia-artesanal-gracia-barcelona.jpg` |

---

## Page : Reforma de Oficinas (`/reforma-oficinas/`)

**Contexte :** Page de service pour la reforma de oficinas à Barcelona. Les 4 images montrent des **projets de bureaux terminés** — startup tech, cabinet d'avocats, coworking, siège PME — pour illustrer la diversité des espaces de travail réalisés par le collectif. Chaque image présente un type d'espace professionnel différent, un quartier différent, et des focales/éclairages variés. L'objectif est de démontrer l'expertise en aménagement de bureaux avec des résultats qui montrent comment le design impacte la productivité et le bien-être au travail.

---

### RO-1 — Visita y análisis del espacio de trabajo (étape 1) — Open space startup tech 22@

**Ratio :** `16:9` · **Fichier SEO :** `reforma-oficina-startup-tech-22-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Visita y análisis del espacio de trabajo" image={{ src: imageWhiteboard }}`

```
A bright editorial photograph of a beautifully finished open-plan tech startup office in a converted industrial building in Barcelona's 22@ innovation district, shot for Architectural Digest. The 250-square-meter space occupies a former textile factory floor with generous 4-meter ceiling heights, exposed concrete ceiling beams, and visible industrial ductwork painted in matte white that adds character without feeling raw. The layout demonstrates agile workspace design: clusters of sit-stand desks in natural birch plywood with white powder-coated steel frames are arranged in pods of four to six, each cluster slightly angled to create organic pathways rather than rigid rows. Ergonomic mesh task chairs in light grey populate the workstations, each desk equipped with a slim monitor arm and cable management trays in white steel. Between the desk clusters, breakout zones are defined by changes in flooring — the main circulation paths are polished concrete in light warm grey, while collaborative pods sit on large carpet tiles in muted teal and warm grey geometric patterns. Two glass-walled phone booths in natural birch plywood with acoustic felt panels in deep forest green stand near the window wall, their minimal proportions and warm wood finish making them architectural objects rather than afterthoughts — inside each, a small oak shelf, an upholstered stool in charcoal fabric, and a wall-mounted LED light panel are visible through the glass. A generous kitchen-social area in the background features a long island counter in white terrazzo with brass aggregate specks, open shelving in birch plywood with stacked ceramic mugs, a professional coffee machine, and high stools in powder-coated sage green steel with cork seats. The feature wall behind the kitchen is finished in acoustic cork panels in their natural warm brown tone, creating a large pinboard surface. Floor-to-ceiling industrial steel-framed windows run the full length of one wall, flooding the space with abundant zenithal natural light from the north-facing orientation — clean, even, and shadow-free, ideal for screen work. Through the windows, the contemporary 22@ neighborhood is visible — converted factories, modern glass office buildings, and young street trees along a wide boulevard. Plants are integrated throughout: trailing pothos cascading from high shelves, a cluster of snake plants in concrete planters defining a zone boundary, and small pots of herbs on the kitchen counter. The atmosphere is energetic yet focused — a workspace designed for both deep concentration and spontaneous collaboration. Photographed with a Canon EOS R5 and a 20mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The office is empty with no people, no readable text on screens or whiteboards, no brand names, no watermarks, and no logos.
```

---

### RO-2 — Proyecto de reforma de oficina (étape 2) — Despacho abogados Eixample

**Ratio :** `16:9` · **Fichier SEO :** `reforma-despacho-abogados-eixample-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `title="Proyecto de reforma de oficina" image={{ src: imageLaptop, shape: 1 }}`

```
A refined editorial photograph of a beautifully finished law firm meeting room and reception area in a prestigious modernist building in Barcelona's Eixample district, shot for Architectural Digest. The 180-square-meter office occupies the principal floor of an 1890s Eixample building, where original architectural grandeur has been carefully married with contemporary professional elegance. The main conference room is the focal point: a long rectangular table in dark-stained solid walnut with a satin finish seats twelve, surrounded by executive chairs upholstered in rich navy blue leather with polished chrome armrests and swivel bases. The table surface reflects the overhead lighting — a linear pendant in brushed gunmetal steel with an integrated LED strip that casts even, warm downward light along the full length of the table. The ceiling above features original ornate classical plaster moldings meticulously restored, painted in warm white that highlights the relief of acanthus scrolls and dentil cornices — the juxtaposition of heritage ceiling and contemporary furniture creating a powerful impression of established authority. The walls are finished in smooth lime plaster in a warm pearl grey — sophisticated and neutral. One wall features floor-to-ceiling built-in bookshelves in dark walnut matching the table, filled with leather-bound legal volumes, art books, and discrete storage boxes in navy linen. The original hardwood parquet floor in herringbone pattern — dark oak, professionally restored — extends throughout, grounding the space with warmth and tradition. Through a wide doorway, the reception area is visible: a custom reception desk in the same dark walnut with a black granite counter top, two visitor armchairs in soft caramel leather flanking a low walnut side table with a single ceramic vase holding dried cotton branches. The original building's tall double windows with their interior wooden shutters in dark stain are half-open, allowing warm lateral afternoon light to enter from the west, casting elegant shadows from the shutter slats across the walnut table and parquet floor. Sheer curtains in warm ivory linen filter the brightest light. A single large-format framed black-and-white photograph — an architectural detail of Barcelona — hangs on the pearl grey wall opposite the windows. The atmosphere is authoritative, refined, and reassuring — a space that communicates competence and tradition. Photographed with a Canon EOS R5 and a 35mm lens, photorealistic, ultra-detailed, 8K resolution. The office is empty with no people, no readable text on books or documents, no watermarks, and no logos.
```

---

### RO-3 — Dirección de obra y entrega (étape 3) — Coworking Gràcia avec terrasse

**Ratio :** `16:9` · **Fichier SEO :** `reforma-coworking-terraza-gracia-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `title="Dirección de obra y entrega" image={{ src: imageMeeting, shape: 2 }}`

```
A vibrant editorial photograph of a beautifully finished coworking space with an open terrace connection in a renovated building in Barcelona's Gràcia neighborhood, shot for Architectural Digest. The 200-square-meter interior space opens directly onto a generous 50-square-meter south-facing terrace through a wall of folding glass panels in slim black steel frames, currently fully retracted to blur the boundary between inside and outside. Inside, the hot-desking area features long communal tables in natural ash wood with rounded edges and integrated power outlets concealed in brushed brass pop-up modules, paired with a mix of seating: ergonomic task chairs in warm terracotta fabric, wooden stools in natural ash, and occasional lounge chairs in olive green canvas with oak frames for more relaxed work postures. The ceiling is the original exposed wooden beam structure — massive timber joists in aged honey-brown with visible grain and traditional ceramic tile vaulting between the beams, creating a warm overhead texture characteristic of traditional Catalan construction. Acoustic pendant lights in woven natural rattan with warm LED interiors hang at varying heights from the beams, their organic shapes and warm glow adding softness to the industrial heritage. The walls are a mix of exposed original brick in warm pink-terracotta tones — left raw and sealed — and sections of smooth white plaster for contrast. On the terrace beyond, an outdoor working area is arranged: a long teak table for eight with bentwood café chairs, large terracotta planters overflowing with bougainvillea in vivid magenta and trailing jasmine, a canvas sail shade in natural cream stretched between steel posts providing dappled shade, and a stunning view over the low-rise rooftops of Gràcia toward the distant blue Mediterranean horizon. The morning Mediterranean light floods in from the south through the open glass wall, filling the interior with clean, bright, optimistic illumination and casting sharp shadows from the steel frames across the ash wood tables. A coffee bar along one interior wall features a counter in honed white marble with a brass edge, a professional espresso machine, and open shelving with stacked ceramic cups in warm white. A living green wall of ferns, moss, and trailing plants in a modular steel frame system covers a section of the interior brick wall near the terrace transition. The atmosphere is creative, warm, and connected to the Mediterranean outdoors — a workspace that celebrates Gràcia's bohemian spirit. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no readable text on screens or walls, no brand names, no watermarks, and no logos.
```

---

### RO-4 — PricingBlock (tarifas) — Siège direction PME Sarrià

**Ratio :** `16:9` · **Fichier SEO :** `reforma-oficina-direccion-pme-sarria-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A serene editorial photograph of a beautifully finished executive office and adjacent open workspace in a renovated villa in Barcelona's Sarrià district, shot for Architectural Digest. The scene is captured from the open doorway of the director's office looking inward, with the open-plan team workspace visible through a large interior glass partition to the right. The director's office is intimate yet commanding: approximately 25 square meters with a custom executive desk in solid American walnut with clean mid-century lines — a floating slab top on tapered brass-capped legs — positioned facing the room with the window behind. A high-backed executive chair in warm camel leather with a polished chrome base sits behind the desk. On the desk surface, minimal objects suggest daily use: a leather desk pad in dark brown, a brass desk lamp with an articulated arm and racing-green enameled shade, a small stack of hardcover books, and a ceramic pen holder in matte charcoal. Behind the desk, a floor-to-ceiling window with original wooden shutters in white-washed oak — half-open — reveals the lush private garden of the Sarrià villa: mature Mediterranean pines, manicured hedges, and a stone pathway, with warm indirect afternoon light filtering through the foliage and casting soft dappled patterns on the walnut desktop. The walls are finished in warm lime wash plaster in a soft putty tone. A large framed vintage map — indistinguishable details, warm sepia tones — hangs on the wall opposite the window. Two visitor chairs in soft olive green leather with walnut arms face the desk. Through the interior glass partition — floor-to-ceiling glass in minimal brushed stainless steel frames — the adjacent open workspace for eight to ten employees is visible: clean white desks with birch plywood storage pedestals, ergonomic chairs in light grey mesh, and a central meeting table in walnut matching the director's desk. Acoustic ceiling panels in natural wool felt in soft grey are suspended from the ceiling of the open area, providing sound absorption without blocking the high ceiling. The flooring throughout is reclaimed oak parquet in a chevron pattern with a warm honey tone and matte finish — original to the villa, carefully restored. A tall Monstera deliciosa in a woven seagrass basket stands beside the glass partition, its large fenestrated leaves adding organic presence. The overall atmosphere balances executive gravitas with approachable warmth — a leadership space that is both prestigious and welcoming to the team beyond the glass. Photographed with a Canon EOS R5 and a 50mm lens with moderate depth of field, photorealistic, ultra-detailed, 8K resolution. The office is empty with no people, no readable text on documents or screens, no brand names, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Reforma de Oficinas

| # | Section page | Style | Quartier | Fichier SEO |
|---|-------------|-------|----------|-------------|
| RO-1 | Visita y análisis (étape 1) | Open space startup tech — béton poli + bouleau + teal, phone booths bois + feutre vert, lumière zénithale nord, 20mm | 22@ | `reforma-oficina-startup-tech-22-barcelona.jpg` |
| RO-2 | Proyecto reforma (étape 2) | Despacho abogados — noyer sombre + cuir navy + parquet chevron, moulures classiques, lumière latérale après-midi, 35mm | Eixample | `reforma-despacho-abogados-eixample-barcelona.jpg` |
| RO-3 | Dirección obra (étape 3) | Coworking + terrasse — frêne + brique rose + rotin, bougainvillées + vue mer, lumière matinale méditerranéenne, 24mm | Gràcia | `reforma-coworking-terraza-gracia-barcelona.jpg` |
| RO-4 | PricingBlock (tarifas) | Bureau direction PME — noyer + cuir camel + laiton, jardin privé Sarrià, lumière indirecte filtrée, 50mm shallow DoF | Sarrià | `reforma-oficina-direccion-pme-sarria-barcelona.jpg` |

---

## Page : Licitaciones de Arquitectura (`/licitaciones-arquitectura/`)

**Contexte :** Page de service pour les licitaciones (appels d'offres publics) d'architecture à Barcelona. Contrairement aux autres pages de services (qui montrent des projets résidentiels ou commerciaux), ici les images montrent des **bâtiments et équipements publics** — éducation, santé, culture, sport, administration, espaces publics. Chaque image cible un type d'équipement différent pour illustrer la diversité des marchés publics sur lesquels le collectif intervient.

---

### LIC-1 — Análisis del pliego y estrategia (étape 1) — Mairie / bâtiment administratif

**Ratio :** `16:9` · **Fichier SEO :** `licitacion-arquitectura-ayuntamiento-distrito-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Análisis del pliego y estrategia de propuesta" image={{ src: imageWhiteboard }}`

```
A crisp editorial photograph of the exterior of a modern district town hall building in Barcelona, shot for Architectural Digest. The contemporary civic building features a clean geometric facade in light sandstone cladding with large floor-to-ceiling glass panels framed in anodized aluminum, revealing glimpses of the interior lobby with its double-height atrium. The main entrance is a generous recessed portico with a wide canopy in exposed architectural concrete with board-formed texture, supported by slender round steel columns. A broad accessible ramp in polished grey granite with stainless steel handrails leads to the entrance alongside a set of shallow stone steps. The building is three stories tall with a rooftop terrace visible above, where photovoltaic panels and a green roof with low Mediterranean vegetation — sedum, lavender, and rosemary — are partially visible behind a perforated Corten steel parapet that has developed a rich warm rust patina. The ground-floor facade includes a section of living green wall — a vertical garden of ferns, ivy, and small shrubs in a modular steel planting system — flanking the entrance on one side. In front of the building, a landscaped civic plaza features geometric planters in raw concrete holding mature olive trees, wooden bench seating in FSC-certified iroko wood with steel frames, and permeable paving in light grey natural stone with integrated LED ground lights along the pathways. A bicycle parking area with minimalist steel racks is visible to one side. The sky is clear Mediterranean blue with a few wispy clouds, and the strong midday sun creates sharp architectural shadows from the canopy and columns across the granite entrance. The overall impression is of transparent, accessible, sustainable public architecture — civic dignity expressed through contemporary design. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no readable text on signs or facades, no watermarks, and no logos.
```

---

### LIC-2 — Redacción del proyecto (étape 2) — Intérieur d'école / colegio

**Ratio :** `16:9` · **Fichier SEO :** `licitacion-interiorismo-colegio-aulas-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `title="Redacción del proyecto y documentación técnica" image={{ src: imageLaptop, shape: 1 }}`

```
A bright editorial photograph of the interior of a newly built primary school classroom and corridor in Barcelona, shot for Architectural Digest. The scene is captured from the wide corridor looking into an open classroom through a large glass partition wall in slim natural birch wood frames, revealing the full teaching space beyond. The classroom interior features child-height furniture in smooth natural birch plywood — trapezoidal tables arranged in small clusters of four, with colorful ergonomic chairs in primary blue, warm yellow, and soft green. Built-in storage along one wall consists of open cubbies in birch plywood at child height for backpacks and materials, with taller closed cabinets above in matte white laminate. The classroom floor is continuous linoleum in a warm light grey with excellent acoustic properties. The ceiling features exposed acoustic timber beams in pale pine with sound-absorbing panels in natural wool felt in soft cream between the beams, creating a warm overhead texture while controlling noise. A full wall of floor-to-ceiling windows with operable hopper panels at the top floods the classroom with abundant natural light — through the windows, a school courtyard with a rubber-surfaced play area in warm terracotta red and young plane trees is visible. The corridor in the foreground has polished concrete floors in light warm grey with colored wayfinding strips embedded in the surface — a wide blue line leads toward the classroom, a green line continues down the corridor. Corridor walls are finished in smooth white plaster with a continuous birch plywood dado rail at child height, protecting the walls while adding warmth. Circular acoustic panels in various sizes and soft pastel colors — pale pink, light blue, soft mint — are mounted on the corridor ceiling, functioning as both sound absorption and playful decoration. A drinking fountain in brushed stainless steel at child height is mounted on the corridor wall. The overall atmosphere is joyful, bright, and pedagogically considered — architecture that supports learning through natural materials, abundant light, and thoughtful spatial design. Photographed with a Canon EOS R5 and a 28mm lens, photorealistic, ultra-detailed, 8K resolution. The school is empty with no people, no children, no readable text on walls or displays, no watermarks, and no logos.
```

---

### LIC-3 — Ejecución de obra (étape 3) — Polideportivo / terrain de sport

**Ratio :** `16:9` · **Fichier SEO :** `licitacion-polideportivo-municipal-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `title="Ejecución de obra y dirección facultativa" image={{ src: imageMeeting, shape: 2 }}`

```
A dramatic editorial photograph of the interior of a newly completed municipal sports center in Barcelona, shot for Architectural Digest. The main sports hall is a generous double-height volume approximately 30 meters long and 20 meters wide, with a soaring ceiling at 9 meters formed by a series of curved glulam timber arches in pale Scandinavian spruce, their elegant parabolic curves creating a rhythmic structural pattern overhead. Between the timber arches, translucent polycarbonate panels in milky white allow diffused zenithal natural light to flood the hall evenly, eliminating harsh shadows — the effect is a soft, luminous, cathedral-like quality. The sports floor is a professional-grade maple hardwood surface in warm honey blonde with freshly painted court markings in crisp white and blue lines for basketball and indoor football, the wood's natural grain visible in the clean finish. Along one long wall, a row of tall vertical windows in slim aluminum frames provides views out to a landscaped exterior with Mediterranean pine trees and a running track with terracotta-red rubber surfacing. The opposite wall features retractable bleacher seating in folded position — rows of birch plywood seats with powder-coated steel frames in matte anthracite. Below the bleachers, a continuous storage zone with rolling steel shutters in light grey houses sports equipment. Two professional-grade basketball hoops with tempered glass backboards and orange rims are visible at each end of the hall, mounted on hydraulic ceiling-retractable systems. The floor-level walls are protected by impact-absorbing padding panels covered in durable fabric in deep navy blue, extending two meters up from the floor. High on the end wall, a large digital scoreboard with an LED display — currently off, showing no text — is recessed into the wall within a birch plywood frame. Emergency exit doors in brushed stainless steel with horizontal push bars are visible at intervals. The overall atmosphere is one of civic pride and athletic ambition — a public facility built with the quality and attention to detail of a private sports club. Photographed with a Canon EOS R5 and a 16mm ultra-wide-angle lens from one corner of the hall, capturing the full sweep of the timber arches and the luminous ceiling, photorealistic, ultra-detailed, 8K resolution. The hall is completely empty with no people, no readable text on scoreboards or signs, no watermarks, and no logos.
```

---

### LIC-4 — PricingBlock (tarifas) — Bibliothèque municipale

**Ratio :** `16:9` · **Fichier SEO :** `licitacion-biblioteca-municipal-moderna-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A serene editorial photograph of the interior of a modern municipal library in Barcelona, shot for Architectural Digest. The reading room occupies a luminous double-height space with a striking architectural mezzanine level connected by a sculptural staircase. The ground floor features long reading tables in solid natural oak with rounded edges and integrated brass reading lamps with adjustable arms and warm white LED light, each table paired with ergonomic chairs upholstered in warm grey wool felt with oak armrests. The floor is polished poured concrete in a warm light grey with subtle aggregate texture, creating a quiet, continuous surface. Floor-to-ceiling bookshelves in natural oak with a honey-toned oil finish line the perimeter walls, filled with neatly organized books of various sizes and colors — spines in warm tones creating an organic tapestry of knowledge. The shelving units incorporate occasional display niches where books are presented face-forward alongside small architectural models and ceramic objects. The mezzanine level is accessed via a wide sculptural staircase with oak treads and a minimal balustrade of vertical steel rods in matte black, creating a transparent, airy connection between levels. From the mezzanine, a continuous oak railing allows users to look down into the main reading room below. The mezzanine floor is visible — more intimate reading alcoves with individual oak carrels and soft task lighting. The ceiling is the architectural highlight: a series of north-facing sawtooth skylights with deep timber reveals in pale pine, channeling abundant, even, diffused natural daylight down into the reading room without glare — the quality of light is museum-grade, perfect for reading. Suspended below the skylights, large circular acoustic panels in natural wool felt in soft cream and pale sage dampen sound, maintaining the library's contemplative silence. A generous window wall at one end of the ground floor — floor-to-ceiling glass in slim black steel frames — opens onto a small landscaped reading garden with gravel paths, stone benches, and a mature fig tree. Several potted plants — a tall fiddle-leaf fig in a concrete planter and trailing pothos on a high shelf — bring organic life into the interior. The atmosphere is one of intellectual calm, civic generosity, and architectural beauty — a public space that elevates the everyday act of reading. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The library is empty with no people, no readable text on book spines or signs, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Licitaciones de Arquitectura

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| LIC-1 | Análisis del pliego (étape 1) | Extérieur mairie de district — façade sandstone + verre + béton, plaza civique, panneaux solaires + toit vert, lumière zénithale, 24mm | `licitacion-arquitectura-ayuntamiento-distrito-barcelona.jpg` |
| LIC-2 | Redacción proyecto (étape 2) | Intérieur école primaire — mobilier bouleau + couleurs primaires, corridor wayfinding, panneaux acoustiques pastel, lumière naturelle abondante, 28mm | `licitacion-interiorismo-colegio-aulas-barcelona.jpg` |
| LIC-3 | Ejecución obra (étape 3) | Polideportivo municipal — arches glulam, parquet érable, skylight polycarbonate, gradins rétractables, 16mm ultra-wide | `licitacion-polideportivo-municipal-barcelona.jpg` |
| LIC-4 | PricingBlock (tarifas) | Bibliothèque municipale — mezzanine sculptural, skylights sawtooth, chêne + béton poli, jardin de lecture, 24mm | `licitacion-biblioteca-municipal-moderna-barcelona.jpg` |

---

## Page : Rehabilitación Energética (`/rehabilitacion-energetica/`)

**Contexte :** Page de service pour la rehabilitación energética à Barcelona. Cette page a une structure étendue avec **deux blocs de 3 sections** (soluciones técnicas + proceso en 3 etapas) plus un PricingBlock, soit **7 images au total**. Les images montrent des **projets finis** illustrant le résultat de la réhabilitation énergétique — isolation, fenêtres haute performance, systèmes de climatisation, et résultats finaux chaleureux et lumineux.

---

### RE-1 — Aislamiento térmico y envolvente — Façade réhabilitée avec SATE

**Ratio :** `16:9` · **Fichier SEO :** `rehabilitacion-energetica-fachada-sate-eixample-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Aislamiento térmico y envolvente" image={{ src: imageWhiteboard }}`

```
A striking editorial photograph of the exterior facade of a renovated six-story residential building in Barcelona's Eixample district after a complete SATE (External Thermal Insulation System) rehabilitation, shot for Architectural Digest. The building facade has been meticulously restored with a high-performance external insulation system finished in smooth mineral render in a warm cream-ivory tone that respects the neighborhood's traditional color palette. The original architectural details have been preserved and enhanced — ornate stone cornices at each floor level have been carefully integrated with the new insulation layer, restored classical balcony brackets in carved stone support continuous wrought-iron balconies with traditional Barcelona-style railings in elegant curved patterns painted in matte black. The ground floor features a renovated commercial facade with new thermally broken aluminum storefronts in dark bronze anodized finish with large double-glazed display windows. New high-performance windows throughout the upper floors are triple-glazed units in slim aluminum frames in warm grey, with traditional exterior roller shutters in painted aluminum matching the facade color — several are half-lowered, showing their thermal insulation slats. Each balcony holds terracotta planters with Mediterranean plants — trailing geraniums in vivid red, small olive saplings, and aromatic herbs — adding organic life to the mineral facade. The roofline shows a renovated flat roof with a new perimeter parapet in matching render, behind which the edge of a photovoltaic panel installation is subtly visible. The adjacent buildings on either side show unrenovated facades in weathered grey-beige with visible thermal bridges, cracking render, and aging wooden shutters — creating a powerful before-and-after contrast that demonstrates the transformation. The street level shows a typical Eixample sidewalk with its characteristic hexagonal panot tiles, a mature plane tree with dappled shade, and a traditional cast-iron street lamp. The building is photographed from across the street at a slight upward angle, capturing the full height of the facade in warm late-afternoon golden Mediterranean light that rakes across the surface, highlighting the crisp new render and casting elegant shadows from the balcony railings. Photographed with a Canon EOS R5 and a 35mm lens, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no readable text on signs or facades, no watermarks, and no logos.
```

---

### RE-2 — Ventanas de altas prestaciones — Salon rénové avec fenêtres haute performance

**Ratio :** `16:9` · **Fichier SEO :** `rehabilitacion-energetica-ventanas-salon-luminoso-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `title="Ventanas de altas prestaciones" image={{ src: imageLaptop, shape: 1 }}`

```
A luminous editorial photograph of a beautifully renovated living room in a Barcelona apartment after high-performance window replacement, shot for Architectural Digest. The spacious living room — approximately 35 square meters — is transformed by three tall new windows stretching from floor to ceiling, each 2.5 meters high and 1.2 meters wide, installed in slim-profile thermally broken aluminum frames in warm anthracite grey with a matte satin finish. The triple-glazed units feature barely visible low-E coating that transmits maximum natural light while blocking thermal transfer — the glass is crystal clear with no visible tint. The windows are fitted with concealed hardware allowing each panel to tilt inward at the top for ventilation, and one is shown in the tilt position, demonstrating the functionality. Through the pristine glass, a panoramic view of Barcelona rooftops and distant Montjuïc hill is visible under a clear blue Mediterranean sky, the view crisp and undistorted by the high-quality glazing. Inside, the living room showcases the comfort benefits of the thermal upgrade: a plush contemporary sofa in natural bouclé fabric in warm oatmeal, positioned to enjoy the view, with textured cushions in muted terracotta and sage. A low coffee table in travertine with warm cream tones and natural pitting sits on a large handwoven rug in undyed natural wool. The walls are finished in smooth lime plaster in warm white, and the floor is reclaimed oak parquet in herringbone pattern with a warm honey finish, glowing in the abundant sunlight streaming through the new windows. The deep window reveals — approximately 30 centimeters deep, reflecting the thickness of the insulated wall — are finished in smooth white plaster and serve as display ledges holding a few ceramic objects in warm earth tones and a small potted succulent. Interior wooden shutters in natural oak with adjustable louvers are folded back against the reveals, available for light control but currently open to maximize daylight. The room feels flooded with clean, warm natural light — the quality of illumination is noticeably superior, with no drafts, no condensation on the glass, and a sense of thermal comfort and acoustic isolation from the city below. A wall-mounted slim digital thermostat in matte white shows a comfortable temperature display. Photographed with a Canon EOS R5 and a 28mm lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no readable text on the thermostat, no watermarks, and no logos.
```

---

### RE-3 — Sistemas de climatización y energía — Intérieur avec aerotermia + panneaux solaires

**Ratio :** `16:9` · **Fichier SEO :** `rehabilitacion-energetica-aerotermia-solar-terraza-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `title="Sistemas de climatización y energía" image={{ src: imageMeeting, shape: 2 }}`

```
A bright editorial photograph of a renovated Barcelona penthouse apartment showcasing an integrated aerothermal heating-cooling system with rooftop solar panels, shot for Architectural Digest. The interior view is captured from a spacious open-plan living area looking toward a wide glass sliding door that opens onto a generous private terrace. Inside, the living space features polished micro-cement floors in warm light grey and walls in smooth white lime plaster. The climate system is visible but elegantly integrated: a slim wall-mounted air-to-air heat pump unit in matte white with a minimal contemporary design is recessed into a custom niche in the wall, framed by a thin oak surround that makes it look like a design element rather than an appliance — its surface shows discrete horizontal louvers for air distribution. Below the unit, a slim oak console shelf holds a digital climate control panel with a color touchscreen in sleep mode. Underfloor heating distribution manifolds are subtly visible through a small glass inspection panel at floor level near the terrace door, showing the neat array of red and blue PEX tubes and brass valves — a technical detail that demonstrates the hydronic system. Through the open glass sliding door, the terrace is visible in full: a flat roof terrace of approximately 40 square meters with a floor of sustainable composite decking in warm teak tone. The terrace features a row of eight monocrystalline photovoltaic panels in sleek black with minimal silver frames, mounted on low-angle aluminum racks oriented south, their dark surfaces gleaming in the sunlight. Beside the solar array, the outdoor unit of the aerothermal heat pump system sits on anti-vibration mounts on a small concrete pad — a compact, modern unit in light grey with a quiet fan grille, connected by insulated copper pipes running neatly along the parapet wall. The terrace also includes a small outdoor seating area — two teak lounge chairs with natural linen cushions and a round concrete side table — positioned to enjoy views over the Barcelona skyline, with the spires of the Sagrada Familia faintly visible in the distance against the blue Mediterranean sky. Potted Mediterranean plants on the terrace — a mature rosemary bush, lavender in terracotta pots, and a small lemon tree in a large concrete planter — frame the solar installation with organic life. The overall atmosphere demonstrates the harmony between sustainable technology and comfortable living — energy independence without aesthetic compromise. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no readable text on panels or equipment, no brand names, no watermarks, and no logos.
```

---

### RE-4 — Diagnóstico energético y visita (étape 1) — Appartement ancien avec ponts thermiques

**Ratio :** `16:9` · **Fichier SEO :** `diagnostico-energetico-termografia-piso-antiguo-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Diagnóstico energético y visita" image={{ src: imageWhiteboard }}`

```
An atmospheric editorial photograph of the interior of an unrenovated 1960s apartment in Barcelona during an energy diagnostic assessment, shot for Architectural Digest. The scene captures a living room in its pre-renovation state — a space that reveals the typical thermal deficiencies of Barcelona's aging housing stock. The room has original single-glazed aluminum windows with visible condensation droplets on the inside of the glass, and thin aluminum frames showing the characteristic cold bridging with dark moisture stains on the surrounding plaster. The walls show signs of thermal discomfort: patches of dark mold growth in the upper corners where walls meet the ceiling — classic indicators of thermal bridges and poor insulation. The original terrazzo floor in speckled grey-green, while beautiful, shows its age with hairline cracks near the walls. A portable infrared thermal imaging camera on a professional tripod is positioned in the center of the room, its lens pointed toward the exterior wall and windows — the device is a compact professional model in dark grey and yellow with a small tilting screen, currently showing a thermal image where cold zones appear in vivid blue-purple around the window frames and wall-ceiling junctions, and warmer zones in yellow-orange in the center of the walls. On a folding table nearby, an energy auditor's toolkit is laid out: a digital anemometer for measuring air infiltration, a moisture meter with probe pins, a laser thermometer gun in red and black, a clipboard with printed floor plans showing colored annotations, and a professional blower door test fan partially visible leaning against the wall — a large circular frame with a red nylon panel and calibrated fan used to pressurize the apartment and detect air leaks. The original radiator — a cast-iron column radiator painted in cream, mounted below the window — is visible, representing the inefficient heating system typical of these buildings. Despite the diagnostic context, the room retains a certain charm: high ceilings at 3 meters with a simple plaster cornice, the afternoon light filtering through the condensation-misted windows creating a soft, diffused glow. The atmosphere conveys the critical importance of professional energy diagnosis — understanding what's wrong before prescribing solutions. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no readable text on equipment screens or documents, no watermarks, and no logos.
```

---

### RE-5 — Estudio técnico y proyecto (étape 2) — Bureau d'architecte avec plans d'isolation

**Ratio :** `16:9` · **Fichier SEO :** `estudio-tecnico-proyecto-rehabilitacion-energetica-barcelona.jpg`
**Remplace :** `laptop.jpg` dans `title="Estudio técnico y proyecto de rehabilitación" image={{ src: imageLaptop, shape: 1 }}`

```
An editorial overhead-angle photograph of an architect's workspace dedicated to an energy rehabilitation project in a bright Barcelona studio, shot for Architectural Digest. A large natural oak drafting table is covered with the specialized tools and documents of an energy renovation project in progress. At the center, detailed architectural section drawings on A1 paper show wall construction layers — each insulation layer is color-coded: exterior render in light grey, EPS insulation board in pink, vapor barrier in blue, interior plasterboard in white — with precise dimension annotations and thermal conductivity values. Beside the main drawings, a printed energy performance certificate in the official Spanish CEE format is visible — a document with the characteristic colored energy rating scale from A (green) to G (red), with an arrow pointing to a rating in the middle range, representing the building's current state. A second certificate beside it shows the projected post-renovation rating at the green end. Physical material samples are arranged in a neat row: a cross-section of SATE insulation system showing each layer bonded together — render mesh, adhesive, EPS board, and finish coat — approximately 12 centimeters thick; a corner sample of triple-glazed window profile in anthracite aluminum showing the three glass panes and gas-filled cavities; squares of wood fiber insulation board in their characteristic natural brown-grey tone; and rolls of reflective vapor barrier membrane in silver. A laptop is open to one side showing a PHPP (Passive House Planning Package) energy calculation spreadsheet with colored cells and graphs — the screen glowing softly but details not readable. Professional tools include a scale ruler, colored fine-tip pens in a leather roll, a calculator, and tracing paper with pencil sketches of facade details. A ceramic mug of coffee and a small potted cactus in a concrete pot sit at the corner of the desk. In the background, slightly blurred, a section of office wall displays a large printed thermographic image of a building facade — the vivid blue, green, yellow, and red heat map clearly showing thermal bridges and energy loss zones. Natural morning light streams from a window on the left, illuminating the workspace with clean, even daylight. Photographed with a Canon EOS R5 and a 35mm lens with shallow depth of field, photorealistic, ultra-detailed, 8K resolution. The studio is empty with no people, no fully readable text on documents or screen, no watermarks, and no logos.
```

---

### RE-6 — Ejecución de obra y certificación (étape 3) — Chantier isolation intérieure

**Ratio :** `16:9` · **Fichier SEO :** `obra-aislamiento-interior-fibra-madera-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `title="Ejecución de obra y certificación" image={{ src: imageMeeting, shape: 2 }}`

```
An editorial photograph of an apartment interior insulation renovation in progress in a Barcelona building, shot for Architectural Digest to document the construction phase of an energy rehabilitation project. The scene shows a room mid-renovation where one wall is fully completed with the new insulation system and the adjacent wall is in the process of being insulated, revealing the construction layers in sequence. On the completed wall, the finish is smooth — new plasterboard panels with taped and skimmed joints ready for painting, creating a clean white surface that conceals the insulation behind. On the wall in progress, the construction layers are dramatically visible from inside out: the original stone masonry wall of the 1920s building — rough-cut limestone blocks with lime mortar joints — is exposed at the base where the old plaster has been removed. Against this original wall, thick panels of wood fiber insulation board in their characteristic natural warm brown-grey color — each panel approximately 10 centimeters thick with visible fiber texture on the cut edges — are being installed in a staggered brick-like pattern, held in place with mechanical fixings whose plastic disc heads are visible on the panel faces. Above the insulation boards, a section already has the vapor control membrane installed — a translucent blue-tinted sheet stapled to wooden battens that create a service cavity for electrical conduits. And above that, the first plasterboard panels are being screwed to the battens, the progression of layers clearly readable from raw wall to finished surface. On the floor, stacks of unused wood fiber insulation boards in their brown paper packaging are neatly piled, alongside boxes of plasterboard, rolls of blue vapor membrane, and bags of joint compound. Professional tools are organized on a portable workbench: a cordless screwdriver, a insulation cutting knife with a long serrated blade, a spirit level, a tape measure, and a staple gun. Sawdust and wood fiber particles from the insulation cutting are visible on the protective floor sheeting — heavy-duty brown paper covering the original terrazzo tiles. A window in the room is temporarily sealed with translucent plastic sheeting and painter's tape to maintain dust control, but soft natural light filters through, illuminating the layered wall construction with directional side-lighting that emphasizes the textures and depth of each material layer. The atmosphere conveys meticulous professional craftsmanship and the tangible transformation of a building's thermal performance — each layer a step toward comfort and efficiency. Photographed with a Canon EOS R5 and a 28mm lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no readable text on packaging or labels, no brand names, no watermarks, and no logos.
```

---

### RE-7 — PricingBlock (tarifas) — Appartement rénové énergétiquement (résultat final)

**Ratio :** `16:9` · **Fichier SEO :** `rehabilitacion-energetica-resultado-final-piso-luminoso-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A stunning wide-angle editorial photograph of a beautifully finished apartment in Barcelona after a complete energy rehabilitation, shot for Architectural Digest as the "after" result showcasing the comfort and luminosity achieved through thermal renovation. The spacious open-plan living and dining area — approximately 60 square meters — demonstrates the tangible benefits of energy rehabilitation: abundant natural light through new high-performance triple-glazed windows in slim anthracite aluminum frames, perfectly comfortable ambient temperature with no visible radiators thanks to underfloor heating powered by an aerothermal system, and a sense of warmth and wellbeing that pervades every surface. The floor is wide-plank natural oak in a warm honey tone with a matte oil finish, its surface radiating gentle warmth from the hydronic system beneath. The walls are finished in breathable natural lime plaster in warm white — a material chosen for its moisture-regulating properties that complement the building's improved thermal envelope. A contemporary modular sofa in natural linen bouclé in soft cream is arranged in a generous L-shape, adorned with textured cushions in warm mustard, terracotta, and natural undyed wool. A round coffee table in solid olive wood with beautiful natural grain sits on a large handwoven rug in cream and warm grey tones. The dining area features a long table in reclaimed oak with live edges and black steel legs, surrounded by six chairs in warm cognac leather. Three minimalist pendant lights in hand-blown opal glass with brushed brass fittings hang above the dining table, casting warm pools of light. The triple-glazed windows — three tall panels spanning nearly the full width of the exterior wall — offer crystal-clear views of a tree-lined Eixample street, the glass free of any condensation, the frames showing no thermal bridging. Through the glass, the warm golden light of a Barcelona late-afternoon sun streams in at a low angle, bathing the oak floor and lime plaster walls in rich amber tones and creating long, soft shadows from the window mullions. On the deep window reveals — thick from the added insulation — small ceramic vases in earth tones and a trailing string-of-pearls plant create intimate vignettes. The overall atmosphere is one of profound thermal comfort, luminosity, and material honesty — a space that feels warm in winter, cool in summer, and bathed in natural light year-round, demonstrating that energy efficiency and aesthetic beauty are not competing goals but complementary ones. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Récapitulatif — 7 images Rehabilitación Energética

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| RE-1 | Aislamiento térmico (solution 1) | Façade Eixample réhabilitée SATE — render crème + balcons fer forgé, contraste avant/après avec immeubles adjacents, lumière dorée rasante, 35mm | `rehabilitacion-energetica-fachada-sate-eixample-barcelona.jpg` |
| RE-2 | Ventanas prestaciones (solution 2) | Salon rénové — triple vitrage anthracite, vue panoramique, parquet chevron chêne, confort thermique visible, lumière abondante, 28mm | `rehabilitacion-energetica-ventanas-salon-luminoso-barcelona.jpg` |
| RE-3 | Climatización y energía (solution 3) | Penthouse — aerotermia intégrée + panneaux solaires sur terrasse, vue Sagrada Familia, micro-ciment + teck, 24mm | `rehabilitacion-energetica-aerotermia-solar-terraza-barcelona.jpg` |
| RE-4 | Diagnóstico energético (étape 1) | Piso années 60 — caméra thermographique, condensation, ponts thermiques visibles, moisissures, atmosphère diagnostic, 24mm | `diagnostico-energetico-termografia-piso-antiguo-barcelona.jpg` |
| RE-5 | Estudio técnico (étape 2) | Bureau architecte — plans coupe isolation, certificats CEE, échantillons SATE + triple vitrage, thermographie murale, 35mm overhead | `estudio-tecnico-proyecto-rehabilitacion-energetica-barcelona.jpg` |
| RE-6 | Ejecución obra (étape 3) | Chantier isolation — couches visibles : maçonnerie + fibre bois + pare-vapeur + placo, progression séquentielle, lumière latérale, 28mm | `obra-aislamiento-interior-fibra-madera-barcelona.jpg` |
| RE-7 | PricingBlock (tarifas) | Résultat final — salon lumineux post-réhabilitation, triple vitrage, chauffage sol, chêne + lin + chaux, lumière dorée après-midi, 24mm | `rehabilitacion-energetica-resultado-final-piso-luminoso-barcelona.jpg` |

---

## Page : Reforma de Masías (`/reforma-masias/`)

**Contexte :** Page de service pour la reforma de masías (maisons rurales catalanes). Structure étendue avec **deux blocs de 3 sections** (éléments patrimoniaux + proceso en 3 etapas) plus un PricingBlock, soit **7 images au total**. Les images montrent des **projets finis** — alternance intérieur/extérieur avec des styles variés : rustique-authentique, rustique-moderne, farmhouse-chic, campagne luxe, boutique-hotel, mas provençal revisité, contemporain-rural.

---

### RM-1 — Muros de piedra y bóvedas catalanas — Façade en pierre restaurée

**Ratio :** `16:9` · **Fichier SEO :** `reforma-masia-fachada-piedra-restaurada-campagne-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Muros de piedra y bóvedas catalanas" image={{ src: imageWhiteboard }}`

```
A breathtaking editorial photograph of the restored exterior facade of a medieval Catalan masía farmhouse at golden hour, shot for Architectural Digest. The two-story stone building features meticulously restored load-bearing walls in local golden limestone with visible rough-hewn blocks and traditional lime mortar joints repointed in a warm sand tone. The original Romanesque arched doorway has been preserved with its massive oak door — aged to a silver-grey patina — fitted with hand-forged iron hardware and a modern concealed lock. Small windows with deep stone reveals and restored wooden shutters in faded sage green punctuate the facade at irregular intervals, reflecting the organic medieval construction. The roof shows new handmade clay tiles in the traditional Arabic half-round style, their warm terracotta tones glowing intensely in the low golden sunlight, with restored stone chimneys at each gable end. A covered stone porch — the traditional porxo — extends along the south-facing facade, supported by three sturdy stone columns with simple carved capitals, sheltering a long farmhouse table in reclaimed oak set for an outdoor dinner with ceramic plates in cream and terracotta, linen napkins, and glass hurricane lanterns. The surrounding Mediterranean garden is mature and lush: ancient gnarled olive trees with silvery-green leaves frame the building, lavender hedges in full purple bloom line the gravel pathways, and tall Italian cypress trees stand as dark vertical accents against the golden sky. A dry-stone retaining wall — traditional pedra seca construction — creates terraced planting beds with rosemary, thyme, and santolina spilling over the edges. The gravel courtyard in warm honey-colored local stone leads from the house toward the garden, with a traditional stone wellhead — brocal — as a sculptural centerpiece. The setting sun casts long golden shadows across the stone facade, emphasizing the texture of every block and mortar joint, while the sky transitions from warm amber near the horizon to soft lavender above. Photographed with a Canon EOS R5 and a 28mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no visible text, no watermarks, and no logos.
```

---

### RM-2 — Vigas de madera y cubiertas tradicionales — Grand salon rustique-moderne

**Ratio :** `16:9` · **Fichier SEO :** `reforma-masia-salon-vigas-madera-boveda-catalana.jpg`
**Remplace :** `laptop.jpg` dans `title="Vigas de madera y cubiertas tradicionales" image={{ src: imageLaptop, shape: 1 }}`

```
A dramatic editorial photograph of a grand double-height living room inside a fully renovated Catalan masía, shot for Architectural Digest. The soaring space — approximately 80 square meters with a ceiling height of 5 meters — showcases the stunning restored timber structure: massive original chestnut beams spanning the full width of the room, their dark wood surfaces hand-cleaned to reveal centuries of grain character, axe marks, and warm umber tones, supported by a central stone column with a rough-carved capital. Between the main beams, a traditional Catalan vaulted ceiling — volta catalana — in exposed thin clay bricks arranged in elegant herringbone pattern creates a rhythmic geometric canopy in warm terracotta and rose tones. The walls combine original exposed stone masonry on two walls — golden limestone blocks with lime mortar joints — with smooth lime plaster in warm ivory on the other walls, creating a dialogue between raw heritage and refined finish. The floor is reclaimed wide-plank oak in a warm honey tone with a matte wax finish that reflects the light softly. The furnishings are deliberately contemporary to contrast with the rustic architecture: a large modular sofa in charcoal bouclé fabric arranged around a sculptural coffee table in raw black steel and thick glass, a pair of cognac leather butterfly chairs flanking a freestanding wood-burning stove in matte black with a minimalist cylindrical flue rising to the vaulted ceiling. A contemporary arc floor lamp in brushed brass curves over the sofa, its linen shade casting a warm pool of light. Floor-to-ceiling bookshelves in natural oak line one stone wall, filled with art books and ceramics. Tall restored windows with interior wooden shutters in natural oak allow warm morning light to stream across the space, casting dramatic shadow patterns from the window mullions onto the stone walls. Photographed with a Canon EOS R5 and a 20mm ultra-wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

### RM-3 — Pavimentos, chimeneas y elementos decorativos — Cuisine farmhouse-chic

**Ratio :** `16:9` · **Fichier SEO :** `reforma-masia-cocina-chimenea-piedra-suelo-terracota.jpg`
**Remplace :** `meeting.jpg` dans `title="Pavimentos, chimeneas y elementos decorativos" image={{ src: imageMeeting, shape: 2 }}`

```
A warm editorial photograph of a beautifully renovated open kitchen inside a Catalan masía farmhouse, shot for Architectural Digest in a farmhouse-chic style. The generous kitchen — approximately 40 square meters — is dominated by a magnificent restored stone fireplace on the far wall: a wide hearth with a massive oak lintel beam darkened by centuries of smoke, the interior lined with firebricks in warm amber tones, and the stone surround in local limestone carved with simple geometric motifs — now housing a modern built-in wood oven with a black cast-iron door beside the open hearth. The floor is the star of the room: original reclaimed terracotta tiles — rajoles — in a rich spectrum of warm reds, burnt oranges, and earthy browns, each tile slightly irregular in tone and texture, hand-laid in a traditional running bond pattern with thin lime mortar joints, their surface worn smooth by generations of use to a soft matte sheen. A large central island in honed Calacatta marble with dramatic grey veining sits on a base of reclaimed timber planks in weathered grey oak, providing a striking modern counterpoint to the rustic surrounds. The island holds a professional-grade stainless steel cooktop, a collection of olive wood cutting boards, and a large terracotta bowl filled with lemons and fresh herbs. Custom cabinetry along the walls is painted in a deep sage green with simple Shaker-style panel doors and brass cup-pull handles, topped with thick open shelves in reclaimed oak displaying hand-thrown pottery in cream and speckled grey, glass storage jars filled with dried pasta and grains, and copper pots. A farmhouse sink in white fireclay with a brass bridge faucet is set below a window with deep stone reveals looking out onto the olive grove. Three industrial pendant lights in aged brass with clear glass bell shades hang above the island, their warm filament bulbs casting golden light. Fresh herbs — rosemary, basil, and thyme — grow in small terracotta pots on the windowsill. The morning light enters from the east-facing window, illuminating the terracotta floor and making the warm tones glow with Mediterranean richness. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The kitchen is empty with no people, no readable text, no watermarks, and no logos.
```

---

### RM-4 — Evaluación y diagnóstico — Vue aérienne masía rénovée

**Ratio :** `16:9` · **Fichier SEO :** `reforma-masia-vista-aerea-valles-piscina-olivar.jpg`
**Remplace :** `whiteboard.jpg` dans `title="Evaluación y diagnóstico" image={{ src: imageWhiteboard }}`

```
A spectacular aerial drone photograph of a fully renovated Catalan masía estate in the Vallès countryside near Barcelona, shot for Architectural Digest from approximately 30 meters altitude. The drone captures the entire property in a slightly angled bird's-eye view, revealing the L-shaped masía complex with its new roof of handmade Arabic clay tiles in warm terracotta — the tiles perfectly aligned in alternating rows, their curved forms creating rhythmic shadow lines in the late-afternoon golden light. The main building — a two-story stone structure — connects to a single-story wing that was formerly a barn, now converted into a guest suite, the two volumes joined by a contemporary glass-walled corridor with a flat green roof planted with sedum and Mediterranean grasses. The stone walls of the masía are visible from above, their golden limestone surfaces warm in the raking sunlight with long shadows cast by the building extending toward the east. In front of the south-facing facade, a natural swimming pool — piscine biologique — is set into the landscape: an organic kidney-shaped basin with crystal-clear water reflecting the blue sky, surrounded by a deck of reclaimed stone slabs in warm grey, with a separate planted regeneration zone at one end featuring aquatic plants — water lilies, papyrus, and rushes — their green foliage creating a natural border. The grounds extend outward in Mediterranean luxury: a mature olive grove of approximately thirty gnarled olive trees arranged in traditional irregular rows covers the hillside to the south, their silvery-green canopies catching the golden light. Formal pathways in compacted gravel in warm honey tones connect the house to the pool and garden areas, lined with lavender hedges in purple bloom. A vegetable garden — hort — with raised beds in Corten steel edging is visible near the kitchen wing, planted with orderly rows of tomatoes, peppers, and aromatic herbs. A pergola in weathered oak with climbing bougainvillea in vivid magenta shelters an outdoor dining area with a long stone table. The surrounding landscape is typical Vallès terrain: rolling green hills with Mediterranean pine forest, scattered stone walls defining ancient field boundaries, and distant views of the Collserola mountains silhouetted against a clear sky transitioning from golden amber to soft blue. Photographed with a DJI Mavic 3 drone camera with a Hasselblad lens, photorealistic, ultra-detailed, 8K resolution. The scene has no people, no vehicles, no visible text, no watermarks, and no logos.
```

---

### RM-5 — Proyecto y diseño — Suite parentale boutique-hotel

**Ratio :** `16:9` · **Fichier SEO :** `reforma-masia-suite-combles-piedra-chaux-bano-abierto.jpg`
**Remplace :** `laptop.jpg` dans `title="Proyecto y diseño" image={{ src: imageLaptop, shape: 1 }}`

```
An intimate editorial photograph of a luxurious master suite under the restored eaves of a Catalan masía, shot for Architectural Digest with a boutique-hotel aesthetic. The bedroom occupies the entire upper floor — approximately 50 square meters — beneath the exposed roof structure: original chestnut rafters in dark warm brown radiate from the central ridge beam to the eaves, with traditional flat clay tiles — teules planes — visible between the rafters from the interior, their undersides showing a warm terracotta-rose patina. The walls present a refined material dialogue: one long wall retains its original exposed stone masonry in golden limestone with deep mortar joints, while the opposite wall and the gable end are finished in smooth natural lime wash — cal de obra — in a warm off-white with subtle brush texture that catches the light softly. The floor is wide-plank aged oak in a pale driftwood tone with a matte oil finish. The bed is a low contemporary platform in solid walnut with clean lines and no headboard, dressed in premium natural linen bedding in undyed cream with a lightweight cashmere throw in soft mushroom grey folded at the foot. Two handmade ceramic table lamps in matte white with linen drum shades sit on slim nightstands in brushed black steel and oak. The bedroom flows seamlessly into an open en-suite bathroom area at the far end — no walls, no doors — where a freestanding contemporary bathtub in matte white composite sits beneath a restored stone arched window with deep reveals, the window open to frame a view of the Catalan countryside — rolling hills, olive trees, and distant blue mountains under a clear morning sky. The bathroom floor is a continuous pour of warm grey tadelakt — traditional Moroccan lime plaster — waterproof and seamless, extending up the walls to waist height around the tub area. A rain shower with a ceiling-mounted square head in brushed brass is enclosed by a frameless glass panel, with teak duckboard underfoot. Two round mirrors in thin brass frames hang above a floating vanity in natural oak with an integrated stone basin in honed grey limestone. Morning light enters through the arched window and two smaller windows with deep stone reveals, casting warm directional beams across the lime-washed walls and illuminating the stone texture with dramatic chiaroscuro effect. A single branch of dried eucalyptus in a tall ceramic vase on the floor beside the bathtub adds an organic sculptural element. Photographed with a Canon EOS R5 and a 35mm lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

### RM-6 — Ejecución de obra y entrega — Terrasse mas provençal revisité

**Ratio :** `16:9` · **Fichier SEO :** `reforma-masia-terraza-pergola-vinedo-penedes.jpg`
**Remplace :** `meeting.jpg` dans `title="Ejecución de obra y entrega" image={{ src: imageMeeting, shape: 2 }}`

```
A magnificent editorial photograph of a covered outdoor terrace at a renovated masía in the Penedès wine region near Barcelona, shot for Architectural Digest at the blue hour — the magical moment between sunset and nightfall. The generous terrace — approximately 60 square meters — extends from the south-facing facade of the masía under a contemporary timber pergola: massive Douglas fir beams in a warm golden tone with clean contemporary joints, supporting a slatted roof of narrow oak battens that filters dappled light patterns onto the space below, with one section covered by a retractable waterproof canvas in natural ecru for rain protection. The terrace floor is reclaimed antique stone — large irregular slabs of aged limestone in warm cream and pale gold tones with centuries of patina, laid with wide joints filled with creeping thyme that releases its fragrance when walked upon. A long dining table for twelve — solid reclaimed elm with a natural live edge and trestle base in aged black iron — is set for an evening dinner: white ceramic plates, recycled glass tumblers in pale green, linen napkins in warm sand, and a row of glass hurricane candle holders with lit cream pillar candles casting warm flickering light. Comfortable dining chairs in woven natural rattan with cream linen seat cushions surround the table. At one end of the terrace, a deep built-in daybed in masonry rendered in smooth white lime plaster is fitted with thick cushions in natural linen and scatter pillows in indigo and cream, creating a lounging area. A traditional Catalan stone barbecue — barbacoa — with a chimney in rendered masonry sits at the far end, its opening showing the warm glow of dying embers. Climbing wisteria with cascading pale violet flower clusters winds along the pergola beams, and tall terracotta urns planted with mature rosemary and small citrus trees — kumquat and Meyer lemon heavy with fruit — define the edges of the terrace. Beyond the terrace, the view opens onto rows of trained grapevines in the Penedès vineyards — orderly lines of green foliage stretching toward gentle rolling hills — with the sky above in the deep indigo-violet of blue hour, the last traces of amber light glowing at the western horizon. Warm accent lighting from recessed spots in the pergola beams and the flickering candles on the table create a magical intimate atmosphere. Photographed with a Canon EOS R5 and a 24mm wide-angle lens at f/2.8 for shallow depth of field on the foreground, photorealistic, ultra-detailed, 8K resolution. The terrace is empty with no people, no readable text, no watermarks, and no logos.
```

---

### RM-7 — PricingBlock (tarifas) — Salon contemporain-rural avec vue campagne

**Ratio :** `16:9` · **Fichier SEO :** `reforma-masia-salon-baie-vitree-campagne-catalane.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A stunning editorial photograph of a contemporary living room inside a fully renovated Catalan masía, shot for Architectural Digest, showcasing the seamless indoor-outdoor connection between the historic rural architecture and the surrounding countryside. The spacious living area — approximately 45 square meters — features a dramatic intervention: the entire south-facing wall has been replaced with floor-to-ceiling glazing — three massive fixed glass panels in minimal black steel frames reaching from the polished concrete floor to the restored timber beam ceiling at 4 meters height, with a central panel that slides open to create a 3-meter-wide opening onto the landscape. Through the crystal-clear glass, the Catalan countryside unfolds in layers: a stone-paved terrace immediately outside, then a sloping meadow of wild grasses and poppies, mature cork oak trees with their characteristically gnarled bark, and distant blue-grey mountains under a high midday Mediterranean sky with dramatic cumulus clouds. Inside, the room balances contemporary comfort with rural authenticity: the floor is polished concrete in warm light grey with subtle aggregate visible, incorporating underfloor heating. Two walls retain their original stone masonry — rough-cut blocks in warm ochre and gold tones — while the ceiling displays restored pine beams in a pale natural tone with whitewashed planks between them. A generous contemporary sofa in natural undyed wool bouclé in warm cream forms an L-shape, anchored by a large low coffee table in raw-edge walnut slab on a blackened steel base. Two armchairs in saddle leather in rich warm brown flank a minimalist wood-burning fireplace — a contemporary design in matte black steel with a suspended cylindrical flue, its glass door revealing neatly stacked birch logs inside. A handwoven kilim rug in muted earth tones — clay, charcoal, cream, and dull gold — defines the seating area. The bookshelf built into a stone wall niche holds architecture books, ceramic vessels in earth tones, and a small collection of smooth river stones. The abundant midday light floods through the glass wall, creating sharp geometric shadows from the steel mullions across the concrete floor and illuminating the stone walls with brilliant clarity. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Récapitulatif — 7 images Reforma de Masías

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| RM-1 | Muros de piedra y bóvedas (solution 1) | Façade pierre restaurée — masía médiévale, jardin méditerranéen, olivier + lavande, golden hour, 28mm | `reforma-masia-fachada-piedra-restaurada-campagne-barcelona.jpg` |
| RM-2 | Vigas de madera y cubiertas (solution 2) | Grand salon double hauteur — poutres châtaignier, volta catalana, mobilier contemporain, poêle à bois, lumière matinale, 20mm ultra-wide | `reforma-masia-salon-vigas-madera-boveda-catalana.jpg` |
| RM-3 | Pavimentos y chimeneas (solution 3) | Cuisine farmhouse-chic — cheminée pierre + four à bois, sol terracotta récupéré, îlot marbre, cabinetry sage, lumière matinale, 24mm | `reforma-masia-cocina-chimenea-piedra-suelo-terracota.jpg` |
| RM-4 | Evaluación y diagnóstico (étape 1) | Vue aérienne drone — masía Vallès, toiture tuiles arabes, piscine naturelle, oliveraie, pergola bougainvillier, golden hour, Hasselblad | `reforma-masia-vista-aerea-valles-piscina-olivar.jpg` |
| RM-5 | Proyecto y diseño (étape 2) | Suite parentale combles — chevrons châtaignier, mur pierre + chaux, baignoire libre, vue campagne, style boutique-hotel, lumière matin, 35mm | `reforma-masia-suite-combles-piedra-chaux-bano-abierto.jpg` |
| RM-6 | Ejecución de obra y entrega (étape 3) | Terrasse pergola — table 12 couverts, daybed maçonnerie, barbacoa, vignoble Penedès, wisteria, blue hour, 24mm | `reforma-masia-terraza-pergola-vinedo-penedes.jpg` |
| RM-7 | PricingBlock (tarifas) | Salon contemporain-rural — baie vitrée sol-plafond, vue campagne, béton poli + pierre + laine, cheminée suspendue, lumière zénithale, 24mm | `reforma-masia-salon-baie-vitree-campagne-catalane.jpg` |

---

## Page : Paisajismo (`/paisajismo/`)

**Contexte :** Page de service pour le paisajismo (paysagisme/aménagement extérieur) à Barcelona. Structure standard avec **3 étapes + PricingBlock**, soit **4 images au total**. Les images montrent des **projets finis** d'aménagement paysager — variété de typologies (rooftop, jardin privé, patio, terrasse-jardin) et de styles (urbain-méditerranéen, naturaliste luxe, patio andalou revisité, jardin durable).

---

### PA-1 — Visita consejo y análisis del espacio — Terrasse rooftop ático Eixample

**Ratio :** `16:9` · **Fichier SEO :** `paisajismo-terraza-rooftop-atico-eixample-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `Section title="Visita consejo y análisis del espacio" image={{ src: imageWhiteboard }}`

```
A breathtaking editorial photograph of a fully landscaped rooftop terrace atop a penthouse apartment in Barcelona's Eixample district, shot for Architectural Digest in an urban-Mediterranean style. The expansive terrace — approximately 80 square meters — is a lush elevated garden floating above the city. The design creates distinct zones connected by pathways of pale sandstone stepping stones set into a bed of white Carrara marble pebbles. The central zone features a bioclimatic pergola in powder-coated aluminum in warm anthracite with motorized adjustable louvers — currently angled to filter the golden late-afternoon light into striped shadow patterns across the seating below: a generous outdoor sectional sofa in weather-resistant fabric in warm charcoal with scatter cushions in terracotta, cream, and dusty blue, surrounding a low coffee table in natural teak with a slatted top. The planting design is deliberately Mediterranean and drought-resistant: tall ornamental grasses — Stipa tenuissima and Pennisetum — in feathery golden-green plumes sway gently, catching the light along the terrace perimeter, planted in long contemporary troughs in Corten steel that have weathered to a rich warm rust patina. Three mature olive trees in large concrete planters in smooth light grey — each tree approximately 3 meters tall with characteristically twisted silver trunks and silvery-green foliage — provide vertical structure and dappled shade. Aromatic Mediterranean shrubs — lavender in purple bloom, rosemary with tiny blue flowers, and santolina in grey-green mounds — fill the beds between the grasses, releasing fragrance into the warm air. A slim infinity-edge water feature — a narrow raised channel in honed dark basalt — runs along one edge of the terrace, the water barely moving but catching reflections of the sky. Beyond the plantings and the perimeter glass railing with slim stainless steel posts, the Barcelona skyline unfolds spectacularly: the iconic octagonal grid of the Eixample blocks extends in every direction, with the towers of the Sagrada Familia visible to the northeast, the green ridge of Tibidabo to the northwest, and glimpses of the Mediterranean sea to the south — all bathed in the warm amber light of the setting sun. Photographed with a Canon EOS R5 and a 20mm ultra-wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The terrace is empty with no people, no visible text, no watermarks, and no logos.
```

---

### PA-2 — Proyecto de paisajismo — Jardin naturaliste villa Sant Cugat

**Ratio :** `16:9` · **Fichier SEO :** `paisajismo-jardin-piscina-natural-villa-sant-cugat.jpg`
**Remplace :** `laptop.jpg` dans `Section title="Proyecto de paisajismo" image={{ src: imageLaptop, shape: 1 }}`

```
A stunning wide-angle editorial photograph of a grand private garden at a contemporary villa in Sant Cugat del Vallès near Barcelona, shot for Architectural Digest in a naturalistic luxury style. The expansive garden — approximately 500 square meters — is designed as a series of organic flowing zones that blend seamlessly with the natural Mediterranean landscape beyond. The centerpiece is a natural swimming pool — piscine biologique — with an organic freeform shape, its crystal-clear water revealing a natural stone bottom in pale grey limestone, bordered by large irregular slabs of aged honey-toned sandstone forming a generous sun deck. At one end, the biological regeneration zone is a lush planted area where water filters naturally through beds of aquatic plants — water irises with blue-violet flowers, ornamental rushes, and floating water lilies with white blooms — creating a living water treatment system framed by rounded boulders in warm grey granite. The garden planting follows a naturalistic design philosophy with native and Mediterranean-adapted species: drifts of ornamental grasses — Muhlenbergia capillaris in its spectacular pink-coral cloud-like flower heads — flow between specimens of native strawberry tree (Arbutus unedo) with red berries, dwarf fan palms (Chamaerops humilis) with silvery-green fronds, and ancient carob trees (Ceratonia siliqua) with dense dark green canopies providing deep shade. A curving pathway in decomposed granite in warm ochre tone winds through the planted areas, edged with aromatic ground cover — creeping thyme, oregano, and chamomile — that releases fragrance when brushed. Professional landscape lighting is subtly integrated: warm-toned LED uplights in small bronze housings at the base of specimen trees cast dramatic upward illumination, while recessed path lights in brushed steel guide the way along the gravel paths, all visible in the soft twilight glow of early evening. A contemporary fire pit — a large circular bowl in raw Corten steel on a concrete base — is surrounded by a semicircle of low stone seating walls with thick natural linen cushions in cream, positioned to enjoy the warmth and the garden views. In the background, the villa's contemporary facade — white rendered walls with large glass openings — is partially visible through the mature planting, the house integrated into rather than imposed upon the landscape. The sky above shows the soft warm light of early evening with the first hints of blue hour approaching. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The garden is empty with no people, no visible text, no watermarks, and no logos.
```

---

### PA-3 — Ejecución y coordinación — Patio modernista Gràcia

**Ratio :** `16:9` · **Fichier SEO :** `paisajismo-patio-interior-modernista-gracia-barcelona.jpg`
**Remplace :** `meeting.jpg` dans `Section title="Ejecución y coordinación" image={{ src: imageMeeting, shape: 2 }}`

```
An enchanting editorial photograph of a beautifully landscaped interior courtyard patio inside a renovated modernista apartment building in Barcelona's Gràcia neighborhood, shot for Architectural Digest in a reimagined Andalusian patio style. The rectangular courtyard — approximately 6 meters by 10 meters — is enclosed by the building's interior walls rising three stories, their surfaces a mix of original ornamental plasterwork in warm cream with art nouveau floral relief details and sections of smooth lime render in pale terracotta. The floor is a masterpiece of recovered hydraulic cement tiles — baldosas hidráulicas — in an intricate geometric pattern of warm reds, blues, creams, and ochres, restored to their original brilliance and sealed to a soft sheen, with intentional variation between tiles adding authentic character. At the center of the patio, a restored traditional fountain — a low octagonal basin in carved stone with a simple single jet of water rising and falling with a gentle splashing sound — sits on a slightly raised platform of the same hydraulic tiles, surrounded by a border of smooth river pebbles in white and grey set in mortar. A dramatic living green wall — jardín vertical — covers the entire far wall from ground to second-floor balcony: a modular planted wall system with pockets of lush ferns — maidenhair, Boston, and bird's nest varieties — interspersed with trailing pothos, philodendron, and small-leafed ivy, creating a vertical tapestry of varied green textures and tones, fed by a concealed drip irrigation system. A mature Canary Island date palm — Phoenix canariensis — rises from a large square planter in aged terracotta at one corner, its elegant frond canopy reaching the second-floor balconies and filtering light into dappled patterns on the tiled floor below. Smaller plantings include jasmine — Jasminum officinale — trained on thin wire supports along one wall, its white star-shaped flowers in full bloom, and Mediterranean fan palms in glazed ceramic pots in cobalt blue — traditional Andalusian-style planters — arranged along the base of the walls. The wrought-iron balconies of the upper floors are visible above, their traditional curved railings decorated with trailing geraniums in vivid coral and fuchsia in simple terracotta pots. Light enters the courtyard from above — the open sky — creating a natural light well effect, with the midday sun illuminating the upper portion of the green wall brilliantly while the lower patio area enjoys cool dappled shade, the contrast adding depth and drama to the space. A simple stone bench — a single slab of aged limestone on two carved stone supports — is positioned against one wall beneath the jasmine, offering a contemplative seating spot. Photographed with a Canon EOS R5 and a 16mm ultra-wide-angle lens pointed slightly upward to capture the vertical dimension, photorealistic, ultra-detailed, 8K resolution. The patio is empty with no people, no visible text, no watermarks, and no logos.
```

---

### PA-4 — PricingBlock (tarifas) — Terrasse-jardin méditerranéen durable

**Ratio :** `16:9` · **Fichier SEO :** `paisajismo-terraza-jardin-mediterraneo-sostenible-barcelona.jpg`
**Remplace :** `whiteboard.jpg` dans `PricingBlock image={{ src: imageWhiteboard, shape: 0 }}`

```
A beautiful editorial photograph of a contemporary terraced garden attached to a renovated ground-floor apartment in Barcelona, shot for Architectural Digest as an exemplary Mediterranean sustainable garden design. The garden — approximately 120 square meters — is organized into clearly defined functional zones connected by a design language of natural materials and drought-tolerant planting. The dining zone occupies the area closest to the apartment's wide folding glass doors: a generous deck in FSC-certified ipe hardwood in warm reddish-brown with a tight grain, featuring a rectangular dining table for eight in solid reclaimed teak with a natural weathered silver-grey patina, surrounded by contemporary slatted chairs in matching teak with seat cushions in weather-resistant fabric in warm sand. A retractable canvas sail shade in natural ecru is extended above, providing sun protection while maintaining a view of the sky. Beyond the dining area, the relaxation zone features a sunken seating area — three steps down into a gravel-floored pit surrounded by built-in concrete benches with thick cushions in natural linen — centered around a low fire table in concrete with a gas flame dancing among white ceramic pebbles. The planting zone forms the garden's green heart: raised beds constructed from large Corten steel panels — weathered to a rich warm rust — contain a curated Mediterranean edible and ornamental garden. One bed holds a productive kitchen garden — potager — with orderly rows of tomato plants on bamboo stakes, bushy basil, trailing strawberries, and leafy chard, their vibrant greens and reds providing color and sustenance. Adjacent beds showcase ornamental Mediterranean planting: masses of French lavender in vivid purple bloom, silver-leafed Artemisia, blue-flowering Teucrium, ornamental salvias in coral and purple, and cushions of grey-green Helichrysum — all plants selected for extreme drought tolerance and low water needs. A gravel pathway in warm golden local aggregate — garbancillo — connects the zones, edged with creeping aromatic herbs — thyme, oregano, and Corsican mint — that perfume the air. A slim linear water feature — a narrow rill in honed dark grey basalt — runs along one edge of the garden, its water flowing gently and recirculating through a hidden pump. A mature carob tree provides dappled shade over the relaxation zone, its dense dark canopy a natural parasol. The overall atmosphere is one of sustainable abundance — a garden that produces food, supports biodiversity, and requires minimal water, while providing beauty and multiple outdoor living spaces. Warm afternoon Mediterranean light bathes the scene, with long shadows beginning to stretch across the golden gravel. Photographed with a Canon EOS R5 and a 28mm lens, photorealistic, ultra-detailed, 8K resolution. The garden is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Récapitulatif — 4 images Paisajismo

| # | Section page | Style | Fichier SEO |
|---|-------------|-------|-------------|
| PA-1 | Visita consejo (étape 1) | Rooftop ático Eixample — pergola bioclimatique, graminées + oliviers, Corten, skyline Barcelona + Sagrada Familia, golden hour, 20mm ultra-wide | `paisajismo-terraza-rooftop-atico-eixample-barcelona.jpg` |
| PA-2 | Proyecto paisajismo (étape 2) | Jardin villa Sant Cugat — piscine naturelle, plantes autóctones, graminées Muhlenbergia, fire pit Corten, éclairage paysager, early evening, 24mm | `paisajismo-jardin-piscina-natural-villa-sant-cugat.jpg` |
| PA-3 | Ejecución y coordinación (étape 3) | Patio modernista Gràcia — mur végétal, fontaine pierre, carreaux hydrauliques, palmier Phoenix, jasmin, patio andalou revisité, zénithale, 16mm | `paisajismo-patio-interior-modernista-gracia-barcelona.jpg` |
| PA-4 | PricingBlock (tarifas) | Terrasse-jardin — zones repas + détente + potager, deck ipé + gravier + Corten, lavande + aromatiques, jardin méditerranéen durable, après-midi, 28mm | `paisajismo-terraza-jardin-mediterraneo-sostenible-barcelona.jpg` |

---

## Workflow recommandé

1. **Tester en `1K`** — Générer en basse résolution pour valider composition et ambiance
2. **Commencer par DI-4 (résultat final)** — C'est l'image d'ambiance qui donne le ton
3. **Continuer avec DI-1, DI-2, DI-3** — Les étapes du processus, dans l'ordre narratif
4. **Qualité finale en `4K`** — Relancer les prompts validés en résolution max
5. **Post-production** — Lightroom pour la cohérence couleur entre les 4 images
6. **Compression** — TinyPNG ou Squoosh, target < 200KB par image, format WebP
