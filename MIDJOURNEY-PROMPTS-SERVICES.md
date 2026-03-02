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

## Workflow recommandé

1. **Tester en `1K`** — Générer en basse résolution pour valider composition et ambiance
2. **Commencer par DI-4 (résultat final)** — C'est l'image d'ambiance qui donne le ton
3. **Continuer avec DI-1, DI-2, DI-3** — Les étapes du processus, dans l'ordre narratif
4. **Qualité finale en `4K`** — Relancer les prompts validés en résolution max
5. **Post-production** — Lightroom pour la cohérence couleur entre les 4 images
6. **Compression** — TinyPNG ou Squoosh, target < 200KB par image, format WebP
