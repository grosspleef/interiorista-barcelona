# Prompts Image V2 — Interiorista Barcelona (Nano Banana 3 Pro)

Prompts pour générer les photos réalistes d'intérieur pour les 5 projets restants du site (le loft Poblenou est déjà fait), avec **Nano Banana 3 Pro** (`gemini-3-pro-image-preview`). **25 images au total** (5 par projet). Tous les prompts sont plus détaillés que la V1, dans le style narratif du loft Poblenou.

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

## Projet 1 : Interiorismo Restaurante Mediterráneo — Born

**Contexte :** Restaurant de cocina mediterránea de 180m² dans le Born (Barcelona). Matériaux : madera de olivo recuperada, piedra calcárea, cerámica artesanal, lino. Mobilier : banquetas tapizadas en tejidos naturales, mesas de roble macizo, barra central de mármol. Éclairage en couches. Cocina abierta.

**Éléments constants :** Reclaimed olive wood wall panels with visible natural grain, limestone flooring throughout, artisanal hand-painted ceramic tile accents in earth tones, natural linen textiles, solid oak dining tables, upholstered banquettes in natural fabric, a central marble bar counter with white marble and subtle grey veining, arched architectural details in ceilings and doorways, warm layered lighting from hand-blown glass pendants and brass wall sconces, and an open kitchen visible from the dining room. Color palette: honey olive wood, cream limestone, terracotta ceramics, ecru linen, aged brass, and white marble.

### 1.1 — Salle principale (hero)
**Ratio :** `16:9` · **Fichier SEO :** `diseno-restaurante-born-barcelona-sala-principal.jpg`

```
A stunning wide-angle editorial photograph of the main dining room of a 180-square-meter Mediterranean restaurant in Barcelona's Born district, shot for Architectural Digest. Reclaimed olive wood panels line the walls, their warm honey tones glowing under pendant lighting. A long upholstered banquette in natural linen fabric runs along the left wall, with solid oak tables set with ceramic plates, linen napkins, and small terracotta vases holding dried herbs. On the right, freestanding oak tables for two and four are arranged with black bistro-style chairs with woven seats. Hand-blown glass pendant clusters hang at varying heights above each table. The limestone floor is warm and textured. In the far background, the open kitchen is visible through an arched opening, with stainless steel surfaces and copper pots hanging from a rack. Artisanal ceramic tiles in Mediterranean blue and terracotta form a decorative band along the upper walls. Warm golden afternoon light streams through the arched windows on the right, casting soft shadows across the limestone floor. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The restaurant is empty with no people, no visible text, no watermarks, and no logos.
```

### 1.2 — Bar et comptoir en marbre
**Ratio :** `16:9` · **Fichier SEO :** `barra-marmol-restaurante-born-barcelona-diseno.jpg`

```
An editorial interior photograph of the central marble bar in a 180-square-meter Mediterranean restaurant in Barcelona's Born district. The bar features a polished white marble countertop with subtle grey veining and a waterfall edge on one side. The bar front is clad in reclaimed olive wood panels matching the walls. Eight high stools with natural linen seats and black metal frames line the counter. Behind the bar, olive wood shelving displays wine bottles, ceramic decanters, hand-blown glassware, and copper cocktail tools. A cluster of three hand-blown amber glass pendants hangs directly above the bar. The artisanal ceramic tile backsplash behind the shelving features hand-painted Mediterranean patterns. A small arrangement of fresh rosemary and thyme in a ceramic pot sits on the bar corner. The open kitchen is partially visible through an arched doorway to the right of the bar. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The restaurant is empty with no people, no visible text, no watermarks, and no logos.
```

### 1.3 — Cuisine ouverte vue depuis la salle
**Ratio :** `16:9` · **Fichier SEO :** `cocina-abierta-restaurante-born-barcelona-interiorismo.jpg`

```
An editorial interior photograph of a Mediterranean restaurant in Barcelona's Born district, looking from the dining room directly into the open kitchen through a wide arched opening. The kitchen features professional stainless steel equipment, a marble pass counter where dishes are presented, and hanging copper pots and pans on a wrought-iron rack above the central station. Olive wood open shelving on the kitchen's back wall holds ceramic containers, glass jars with spices, and stacked white plates. The limestone floor continues seamlessly from the dining area into the kitchen. Two brass pendant lights illuminate the pass counter. On the dining room side in the foreground, the edge of an oak table with a ceramic carafe of water and two wine glasses is visible. The connection between kitchen and dining room feels transparent and inviting. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The restaurant is empty with no people, no visible text, no watermarks, and no logos.
```

### 1.4 — Coin intime avec banquette
**Ratio :** `16:9` · **Fichier SEO :** `rincon-banqueta-restaurante-born-barcelona.jpg`

```
An editorial interior photograph of an intimate corner seating area in a Mediterranean restaurant in Barcelona's Born district. An L-shaped upholstered banquette in natural linen wraps around two solid oak tables. The banquette sits against two walls of exposed reclaimed olive wood. Above the seating, a collection of three framed botanical prints in simple black frames hangs on the olive wood wall. A brass wall sconce with a linen shade casts warm directional light. On the tables: handmade ceramic plates, linen placemats, a small terracotta oil cruet, bread in a linen-lined basket, and a half-drunk bottle of red wine with two glasses. The artisanal ceramic tile accent is visible where the wall meets the ceiling. A potted trailing ivy in a terracotta planter sits on a small limestone ledge nearby. The mood is warm, golden, and inviting — a perfect dinner scene. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The restaurant is empty with no people, no visible text, no watermarks, and no logos.
```

### 1.5 — Façade et entrée au golden hour
**Ratio :** `16:9` · **Fichier SEO :** `fachada-restaurante-born-barcelona-golden-hour.jpg`

```
An editorial exterior photograph of a Mediterranean restaurant entrance in the Born district of Barcelona at golden hour. The building features warm sandstone walls typical of Barcelona's Gothic quarter, with a tall arched doorway framed by reclaimed olive wood. Double wooden doors are open, revealing the warm amber glow of the interior — the banquette, pendant lights, and limestone floor visible inside. Flanking the entrance, large terracotta planters hold Mediterranean herbs: rosemary, thyme, and basil. A small vintage-style iron sign with the restaurant name hangs above the door. The narrow cobblestone street is bathed in warm golden light, with the sandstone facades of neighboring buildings visible. A small chalkboard easel with the day's menu stands beside the entrance. The atmosphere is magical and inviting, capturing the essence of Mediterranean hospitality. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The scene is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Projet 2 : Reforma Piso Modernista — Eixample

**Contexte :** Appartement moderniste de 120m² dans l'Eixample (Barcelona). Éléments d'origine : moulures aux plafonds, suelos hidráulicos, menuiserie bois. Matériaux ajoutés : roble natural, mármol de Carrara, latón envejecido. Cuisine ouverte sur salon-salle à manger, vestidor dans la chambre principale.

**Éléments constants :** Original ornate white ceiling moldings beautifully restored, original colorful hydraulic cement floor tiles with geometric patterns in warm reds, blues, and creams throughout, tall shuttered windows with classic Eixample proportions, natural oak furniture and cabinetry, Carrara marble surfaces with subtle grey veining, aged brass fixtures and hardware, white walls that let the heritage details shine, 3.2-meter ceiling height, consistent warm natural daylight.

### 2.1 — Salon-salle à manger ouverts (hero)
**Ratio :** `16:9` · **Fichier SEO :** `reforma-piso-eixample-barcelona-salon-comedor.jpg`

```
A stunning wide-angle editorial photograph for Architectural Digest of the main open-plan living and dining area in a renovated 120-square-meter modernist apartment in Barcelona's Eixample district. The restored ornate ceiling moldings in white draw the eye upward, intricate floral and geometric plasterwork casting subtle shadows. Below, the original hydraulic cement floor tiles create a stunning carpet of geometric patterns in warm reds, ochres, blues, and cream. A natural oak dining table for six sits in the center with contemporary upholstered chairs in light grey fabric. Above the table, a cluster of three aged brass pendant lights with frosted glass shades hangs at staggered heights. Against the far wall, a comfortable contemporary sofa in off-white linen faces a natural oak media console holding books, a ceramic vase with dried eucalyptus, and a small sculpture. Two tall shuttered windows on the right flood the space with warm afternoon light, their original wooden shutters folded open. An open kitchen is visible through a wide archway in the background, with Carrara marble countertops catching the light. A large round mirror with a thin brass frame hangs on the wall above the sofa, reflecting the ceiling moldings. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The apartment is empty with no people, no visible text, no watermarks, and no logos.
```

### 2.2 — Cuisine ouverte avec marbre de Carrare
**Ratio :** `16:9` · **Fichier SEO :** `cocina-abierta-reforma-eixample-barcelona-marmol-carrara.jpg`

```
An editorial interior photograph of the kitchen in a renovated 120-square-meter modernist apartment in Barcelona's Eixample district, opened to the living-dining room. The kitchen features floor-to-ceiling natural oak cabinetry with aged brass handles on one wall, and a long Carrara marble countertop with waterfall edge forming a breakfast bar. Three oak stools with woven seats line the bar. The marble backsplash extends to the ceiling behind the main work area, with open oak shelves breaking it up, displaying cookbooks, olive oil bottles, ceramic bowls, and a French press. Integrated matte black appliances blend into the oak cabinetry. On the marble counter: a wooden cutting board with lemons, a ceramic mortar and pestle, and a copper kettle. The original hydraulic cement floor tiles continue seamlessly from the living area into the kitchen. The restored ceiling moldings extend over the kitchen as well, maintaining the heritage continuity. Warm daylight enters from a window on the left, illuminating the veining in the Carrara marble. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The apartment is empty with no people, no visible text, no watermarks, and no logos.
```

### 2.3 — Chambre principale avec dressing
**Ratio :** `16:9` · **Fichier SEO :** `dormitorio-principal-vestidor-reforma-eixample-barcelona.jpg`

```
An editorial interior photograph of the master bedroom in a renovated 120-square-meter modernist apartment in Barcelona's Eixample district. A king-size bed with a natural oak headboard and frame is dressed in crisp white linen sheets and a light grey wool throw at the foot. Two aged brass wall-mounted reading lights flank the bed. Matching oak nightstands hold a ceramic table lamp with a linen shade on one side and a small stack of books with reading glasses on the other. The original hydraulic cement floor tiles in this room feature a different but complementary geometric pattern in softer tones of sage green and cream. The ornate ceiling moldings crown the room. Through an open doorway on the left, a custom walk-in closet is visible — natural oak shelving and hanging rails with integrated LED strip lighting, neatly organized. A tall shuttered window with sheer white curtains lets in soft diffused light. At the foot of the bed, an upholstered bench in light grey fabric holds a folded cashmere blanket. A small Persian rug in muted tones lies beside the bed. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The apartment is empty with no people, no visible text, no watermarks, and no logos.
```

### 2.4 — Salle de bain en marbre de Carrare
**Ratio :** `16:9` · **Fichier SEO :** `bano-marmol-carrara-reforma-piso-eixample-barcelona.jpg`

```
An editorial interior photograph of a luxurious bathroom in a renovated 120-square-meter modernist apartment in Barcelona's Eixample district. The walls are clad in large-format Carrara marble slabs from floor to ceiling, the grey veining creating natural artwork. A freestanding contemporary oval bathtub in matte white sits beneath a tall shuttered window with frosted glass. Beside the tub, a small natural oak stool holds folded white towels and a candle in a brass holder. A floating oak vanity with an integrated Carrara marble basin spans one wall, beneath a large rectangular frameless mirror. Two aged brass wall sconces with frosted glass shades flank the mirror. On the vanity: a brass soap dispenser, a small ceramic tray with toiletries, and a trailing pothos plant in a terracotta pot. The original ornate ceiling moldings have been preserved even in the bathroom, restored in white. The hydraulic cement floor tiles in this room feature a more subtle pattern in cream and grey tones that harmonize with the marble. A walk-in rain shower with aged brass fixtures is visible behind a frameless glass partition. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The bathroom is empty with no people, no visible text, no watermarks, and no logos.
```

### 2.5 — Couloir et détails architecturaux
**Ratio :** `16:9` · **Fichier SEO :** `pasillo-suelos-hidraulicos-piso-modernista-eixample.jpg`

```
An editorial interior photograph looking down the main hallway of a renovated 120-square-meter modernist apartment in Barcelona's Eixample district, showcasing the architectural heritage. The long corridor features the original hydraulic cement floor tiles in their most vibrant pattern — bold geometric designs in red, blue, ochre, and cream creating a stunning visual runway. The restored ceiling moldings run the entire length, with a central medallion where an aged brass lantern-style pendant light hangs. Original restored wooden doors with ornate panels and aged brass handles line both sides of the hallway. At the far end, a tall shuttered window bathes the corridor in warm golden light, creating beautiful shadows from the window frame on the tiled floor. A narrow natural oak console table against one wall holds a ceramic vase with fresh branches, a small framed photograph, and a brass key tray. Above it, a round convex mirror in an aged brass frame catches and multiplies the light. The atmosphere is luminous, stately, and alive with history. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The hallway is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Projet 3 : Decoración Ático Minimalista — Sarrià

**Contexte :** Penthouse de luxe de 200m² + terrasse panoramique de 60m² à Sarrià-Sant Gervasi (Barcelona). Style minimaliste cálido. Mobilier de luxe : B&B Italia, Flos, Carl Hansen. Vestidor a medida avec iluminación integrada. Terrasse avec zone salon, comedor extérieur et jardinería mediterránea. Vues panoramiques sur Barcelona et la Sierra de Collserola.

**Éléments constants :** Floor-to-ceiling windows with panoramic views, polished light stone flooring (limestone or travertine) throughout, natural stone accent walls in warm beige, designer furniture from B&B Italia, Flos, and Carl Hansen, a palette of off-white, warm beige, light grey, natural oak, and natural stone with matte black as subtle accent, sheer white linen curtains, 3-meter ceiling height, abundant warm natural light.

### 3.1 — Salon principal avec vues panoramiques (hero)
**Ratio :** `16:9` · **Fichier SEO :** `atico-lujo-sarria-barcelona-salon-vistas-panoramicas.jpg`

```
A stunning wide-angle editorial photograph for Architectural Digest of a spacious minimalist penthouse living room in Barcelona's Sarrià district. Floor-to-ceiling windows span the entire far wall, framing a breathtaking panoramic view of Barcelona's skyline with the Mediterranean Sea in the distance and the green Collserola mountains to the right. A large B&B Italia Tufty-Time modular sofa in warm cream fabric is arranged in an L-shape facing the view, with a collection of textured cushions in beige, sand, and soft grey. A low Maxalto coffee table in natural oak and stone sits on a large handwoven cream rug. A Flos Arco floor lamp in polished chrome arches elegantly over the sofa from behind. To the right, a Carl Hansen CH07 Shell chair in natural oak and leather provides a sculptural reading nook beside a small stack of oversized art books on the floor. A natural stone accent wall in warm beige travertine anchors the left side of the room, with a recessed fireplace (linear, gas, with a clean glass front) embedded in it. Above the fireplace, a single large-format abstract painting in muted earth tones. Two Flos IC floor lights in brass stand at the corners of the sofa arrangement. A tall fiddle leaf fig tree in a white ceramic planter stands near the window. The warm afternoon sun floods the space, casting long soft shadows across the limestone floor. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

### 3.2 — Salle à manger et cuisine
**Ratio :** `16:9` · **Fichier SEO :** `comedor-cocina-atico-sarria-barcelona-interiorismo.jpg`

```
An editorial interior photograph of the dining area adjacent to the open kitchen in a luxury minimalist penthouse in Barcelona's Sarrià district, with the panoramic windows continuing along the wall. A B&B Italia Oskar dining table in natural oak for eight is surrounded by Carl Hansen CH24 Wishbone chairs in natural oak with natural cord seats. A Flos Aim pendant cluster of five matte black lights hangs above the table at varying heights. On the table: a ceramic bowl with lemons, a linen table runner in natural ecru, a ceramic water pitcher, and a small potted orchid. The open kitchen behind features a long island in natural stone with a waterfall edge, with integrated matte black fixtures. Light oak cabinetry lines the back wall with concealed appliances. Open shelving displays ceramic vessels, cookbooks, and small plants. The limestone floor continues throughout. Through the dining area windows, the Collserola mountains and late afternoon sky are visible. A Carl Hansen CH33 bar stool in natural oak sits at the kitchen island corner. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

### 3.3 — Chambre principale avec vues
**Ratio :** `16:9` · **Fichier SEO :** `dormitorio-principal-atico-sarria-barcelona-vistas.jpg`

```
An editorial interior photograph of the master bedroom in a luxury minimalist penthouse in Barcelona's Sarrià district, bathed in soft morning light. A B&B Italia Husk bed with a padded headboard in warm taupe fabric dominates the room, dressed in rumpled white linen sheets, a lightweight cashmere throw in sand color draped at the foot, and oversized down pillows. Two Flos String pendant lights in matte black hang from the ceiling as bedside lamps on either side. Matching natural oak nightstands hold a ceramic table lamp on one side and a stack of three books with a small ceramic cup on the other. Behind the headboard, a natural stone accent wall in warm beige travertine runs the full width of the room. Floor-to-ceiling windows on the right reveal the Barcelona skyline and morning haze over the sea. Sheer white linen curtains are partially drawn. Through an open doorway on the left, the custom walk-in closet is visible — light oak shelving, drawers, and hanging rails with integrated warm LED lighting, clothes and accessories neatly arranged. A small upholstered bench in light grey at the foot of the bed holds a folded blanket and a leather-bound journal. A round handwoven rug in cream and natural tones lies beside the bed on the limestone floor. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

### 3.4 — Coin lecture et bibliothèque
**Ratio :** `16:9` · **Fichier SEO :** `rincon-lectura-biblioteca-atico-sarria-barcelona.jpg`

```
An editorial interior photograph of an intimate reading corner in a luxury minimalist penthouse in Barcelona's Sarrià district, positioned beside a floor-to-ceiling window with Collserola mountain views. A Carl Hansen CH25 lounge chair in natural oak and woven paper cord sits angled toward the window, with a small Flos IC table lamp on a B&B Italia Simplice side table beside it. A cashmere throw in soft grey is draped over the chair arm. Built-in floor-to-ceiling oak bookshelves fill the adjacent wall, densely packed with art books, architecture monographs, novels, and small collected objects — a ceramic sculpture, a small framed sketch, a brass geometric object, trailing pothos plants on upper shelves. A sliding oak library ladder leans against the shelves. On the floor beside the chair, a stack of oversized coffee table books and a ceramic mug on a small brass tray. The limestone floor is warmed by a vintage Moroccan rug in muted tones of cream, terracotta, and soft blue. Late afternoon light pours through the window, creating a warm golden atmosphere that highlights the textures of the oak, paper cord, and book spines. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

### 3.5 — Terrasse panoramique au golden hour
**Ratio :** `16:9` · **Fichier SEO :** `terraza-panoramica-atico-sarria-barcelona-golden-hour.jpg`

```
An editorial photograph of the 60-square-meter terrace of a luxury penthouse in Barcelona's Sarrià district at golden hour, showcasing the seamless indoor-outdoor connection. Large sliding glass doors are fully open, revealing the living room interior behind. The terrace is divided into two zones: a lounge area with comfortable outdoor sofas and armchairs in neutral performance fabric (Kettal or Tribù style) arranged around a natural teak coffee table, and a dining zone with a teak dining table for eight set with ceramic plates and linen napkins. Large ceramic planters in matte white and terracotta hold mature Mediterranean plants — a sculptural olive tree, cascading bougainvillea in fuchsia, fragrant lavender bushes, trailing rosemary, and ornamental grasses. The terrace floor is clad in warm natural stone pavers. Delicate festoon string lights are strung above the dining area. The panoramic view of Barcelona stretches across the entire background — the city grid of the Eixample, the towers of the Sagrada Familia silhouetted in the distance, and the Mediterranean Sea catching the golden light on the horizon. The Collserola mountain ridge frames the scene on the right. The atmosphere is magical, warm, and quintessentially Mediterranean. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The terrace is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Projet 4 : Arquitectura Casa entre Medianeras — Gràcia

**Contexte :** Casa entre medianeras centenaria de 160m² sur 3 étages + patio intérieur de 25m² dans le quartier de Gràcia (Barcelona). Réhabilitation complète. Matériaux : microciment, terracotta récupérée, roble natural, murs chaux blanche, brique apparente voûte catalane, menuiserie acier noir.

**Éléments constants :** A century-old Barcelona townhouse (casa entre medianeras) in the Gràcia neighborhood, fully rehabilitated. Micro-cement floors and surfaces in warm grey, reclaimed terracotta tiles in the courtyard, natural oak interior woodwork and doors, lime-washed white walls throughout, exposed brick Catalan vault (volta catalana) ceiling with beautiful curved brickwork, black steel-framed windows and structural elements, a central 25-square-meter interior courtyard with Mediterranean plants, warm natural daylight. Color palette: warm grey micro-cement, white lime walls, honey oak, terracotta, exposed red-brown brick vault, matte black steel accents, and lush green courtyard plants.

### 4.1 — Salon-comedor avec vue sur patio (hero)
**Ratio :** `16:9` · **Fichier SEO :** `arquitectura-casa-gracia-barcelona-salon-patio.jpg`

```
A stunning wide-angle editorial photograph for Architectural Digest of the open-plan living and dining area in a rehabilitated century-old townhouse in Barcelona's Gràcia neighborhood. The space features polished micro-cement floors in warm grey and lime-washed white walls that create a luminous backdrop. A contemporary linen sofa in off-white faces a natural oak coffee table and a pair of leather armchairs in cognac. A natural oak dining table for six with black metal-framed chairs sits near the back. The star feature is the wide black steel-framed glass door system that opens fully onto the interior courtyard — a lush 25-square-meter garden visible through the opening, with terracotta floor tiles, mature Mediterranean plants including a small lemon tree, trailing jasmine on the walls, potted lavender and rosemary, and a small stone fountain. Warm afternoon sunlight streams through the courtyard into the living space, casting dappled shadows from the plants onto the micro-cement floor. On the far wall, built-in natural oak bookshelves hold ceramics, books, and small plants. A cluster of black metal pendant lights hangs above the dining table. The atmosphere is serene, warm, and deeply Mediterranean. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no visible text, no watermarks, and no logos.
```

### 4.2 — Patio intérieur végétalisé
**Ratio :** `16:9` · **Fichier SEO :** `patio-interior-casa-gracia-barcelona-arquitectura.jpg`

```
An editorial interior-exterior photograph of the 25-square-meter interior courtyard of a rehabilitated century-old townhouse in Barcelona's Gràcia neighborhood. The courtyard is viewed from the ground floor looking upward, revealing the three-story height of the surrounding walls in lime-washed white with exposed brick details. The floor is paved in reclaimed terracotta tiles in warm earth tones, with geometric patterns worn by time. The courtyard is a lush Mediterranean garden: a mature lemon tree in a large terracotta pot anchors the center, surrounded by terracotta planters of lavender, rosemary, trailing bougainvillea climbing the walls in vivid magenta, jasmine cascading from an upper balcony, and ornamental grasses in ceramic pots. A small stone water feature — a simple carved basin on the wall — trickles water. Two natural oak folding chairs and a small round terracotta bistro table sit in one corner. Black steel-framed windows and doors on the ground and first floors open onto the courtyard, with sheer white curtains visible inside. Sunlight pours down from above, creating a dramatic play of light and shadow on the terracotta floor and white walls. The sky is visible as a rectangle of blue above. Photographed with a Canon EOS R5 and a 16mm ultra-wide-angle lens looking slightly upward, photorealistic, ultra-detailed, 8K resolution. The courtyard is empty with no people, no visible text, no watermarks, and no logos.
```

### 4.3 — Cuisine ouverte sur patio
**Ratio :** `16:9` · **Fichier SEO :** `cocina-casa-gracia-barcelona-microcemento.jpg`

```
An editorial interior photograph of the kitchen in a rehabilitated century-old townhouse in Barcelona's Gràcia neighborhood, designed with micro-cement surfaces and natural materials. The kitchen features a long micro-cement countertop in warm grey with a waterfall edge forming a breakfast bar, natural oak open shelving on the back wall holding ceramic bowls, glass jars with spices, and cookbooks. Base cabinetry in natural oak with matte black handles. Integrated matte black appliances. On the counter: a wooden cutting board with tomatoes and basil, a ceramic olive oil cruet, and a copper kettle. A large black steel-framed window looks directly into the interior courtyard — the lemon tree, terracotta pots, and trailing jasmine visible through the glass. The micro-cement floor is continuous and seamless. The lime-washed white walls give the kitchen a bright, clean feeling. Two black metal pendant lights hang above the breakfast bar, where two natural oak stools with woven seats are placed. A small herb garden in terracotta pots sits on the windowsill — fresh basil, mint, and thyme. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The kitchen is empty with no people, no visible text, no watermarks, and no logos.
```

### 4.4 — Chambre principale avec volta catalana
**Ratio :** `16:9` · **Fichier SEO :** `dormitorio-volta-catalana-casa-gracia-barcelona.jpg`

```
An editorial interior photograph of the master bedroom on the first floor of a rehabilitated century-old townhouse in Barcelona's Gràcia neighborhood, featuring a stunning restored Catalan vault ceiling (volta catalana). The barrel-vaulted ceiling is constructed from exposed thin red-brown bricks laid in the traditional Catalan technique, creating a beautiful curved surface that dominates the room. The walls below are lime-washed white, creating a dramatic contrast with the warm brick vault above. A king-size bed with a natural oak headboard and frame is dressed in white linen sheets and a light sand-colored wool throw. Two wall-mounted reading lights in matte black flank the headboard. Matching natural oak nightstands hold a ceramic lamp with a linen shade on one side and a stack of books on the other. The micro-cement floor in warm grey anchors the room. A black steel-framed window lets in soft morning light through sheer white linen curtains. A vintage Persian rug in muted tones of cream and terracotta lies beside the bed. Through an arched doorway, a glimpse of the bathroom with micro-cement walls is visible. The mood is warm, historic, and deeply peaceful. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

### 4.5 — Terrasse-solarium en toiture
**Ratio :** `16:9` · **Fichier SEO :** `terraza-sobretico-casa-gracia-barcelona.jpg`

```
An editorial photograph of the rooftop solarium terrace of a rehabilitated century-old townhouse in Barcelona's Gràcia neighborhood at golden hour. The terrace features warm natural stone pavers and a low perimeter wall in lime-washed white. The seating area includes a built-in L-shaped bench in micro-cement with outdoor cushions in off-white and sand-colored fabric, arranged around a low natural teak coffee table. A pair of canvas deck chairs in natural linen face the view. Large terracotta and ceramic planters hold Mediterranean plants — a small olive tree, lavender, rosemary, trailing bougainvillea in magenta, and ornamental grasses. A simple outdoor dining area with a teak table for four and black metal chairs occupies one corner. String lights are draped above the seating area. The panoramic view shows the rooftops of Gràcia — terracotta tiles, church bell towers, water tanks, TV antennas, and laundry lines — with the distant silhouette of the Sagrada Familia and the Mediterranean Sea catching golden light on the horizon. The Collserola hills are visible to the north. The atmosphere is intimate, warm, and quintessentially Barcelona. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The terrace is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Projet 5 : Reforma Oficinas Biofílicas — Sant Martí

**Contexte :** Bureau de 280m² open-plan pour une startup tech dans le district de Sant Martí (Barcelona). Design biophilique + scandinave chaleureux. Mur végétal, cabines acoustiques, cuisine sociale, salles vitrées. Matériaux : roble natural, microciment, liège acoustique, fieltro reciclado vert sauge, terrazzo, acero negro mate, 200+ plantes.

**Éléments constants :** A 280-square-meter open-plan office space in Barcelona's Sant Martí innovation district, designed with biophilic principles. Micro-cement floors throughout, natural oak desks and furniture, a large living green wall (muro vegetal) with 200+ plants, recycled sage-green felt acoustic panels, cork acoustic ceiling panels, black matte steel structural elements, floor-to-ceiling glass partitions for meeting rooms, terrazzo reception counter, circadian lighting system, abundant greenery distributed throughout. Color palette: warm grey micro-cement, natural oak, sage green felt, forest green plants, cork brown, white, and matte black steel accents.

### 5.1 — Open-plan workspace (hero)
**Ratio :** `16:9` · **Fichier SEO :** `reforma-oficinas-sant-marti-barcelona-espacio-abierto.jpg`

```
A stunning wide-angle editorial photograph for Architectural Digest of a 280-square-meter biophilic open-plan office in Barcelona's Sant Martí innovation district. The main workspace features rows of natural oak desks with black matte steel legs, ergonomic task chairs in light grey mesh, and integrated cable management. Low natural oak planter dividers between desk clusters hold trailing pothos, ferns, and small palms, creating green corridors between work zones. The polished micro-cement floor in warm grey reflects the abundant natural light from floor-to-ceiling windows along the left wall. Cork acoustic panels cover sections of the ceiling, and recycled sage-green felt panels are mounted on walls as acoustic treatment and visual warmth. In the background, the massive living green wall (muro vegetal) is visible — a full-height installation of lush tropical and subtropical plants covering an entire wall, with integrated irrigation. Glass-partitioned meeting rooms are visible through the greenery. Pendant lights in clusters of matte black and natural oak hang above collaborative areas. A few standing desk stations with oak tops are scattered throughout. The atmosphere is fresh, energizing, and deeply connected to nature. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The office is empty with no people, no visible text, no watermarks, and no logos.
```

### 5.2 — Cuisine sociale / breakout
**Ratio :** `16:9` · **Fichier SEO :** `cocina-social-oficinas-sant-marti-barcelona.jpg`

```
An editorial interior photograph of the social kitchen and breakout area in a biophilic office in Barcelona's Sant Martí district. The space is designed as an informal gathering hub, with a long terrazzo-topped island counter with waterfall edges in a warm white and green terrazzo mix. Natural oak bar stools with black metal frames line one side. The kitchen wall features natural oak cabinetry with matte black handles, a professional espresso machine, open shelving with ceramic mugs and glasses, and a large stainless steel fridge. A comfortable lounge zone adjacent features a modular sofa in dark green fabric, low natural oak coffee tables, and large floor cushions in sage green and cream. Hanging plants in macramé holders descend from the cork-paneled ceiling. A chalkboard wall on one side shows team doodles and messages. The micro-cement floor continues from the main workspace. Large windows let in warm afternoon light, with views of Sant Martí's modern architecture outside. Recycled sage-green felt acoustic panels absorb sound, keeping the space cozy despite its openness. A communal bookshelf in natural oak holds books, board games, and small plants. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no visible text, no watermarks, and no logos.
```

### 5.3 — Salle de réunion vitrée
**Ratio :** `16:9` · **Fichier SEO :** `sala-reuniones-oficinas-sant-marti-barcelona-diseno.jpg`

```
An editorial interior photograph of a glass-walled meeting room in a biophilic office in Barcelona's Sant Martí district. The room is enclosed by floor-to-ceiling glass partitions with slim black steel frames, maintaining visual transparency while providing acoustic isolation. Inside, a natural oak conference table for eight with rounded edges sits at the center, surrounded by ergonomic chairs in light grey fabric with oak armrests. A large wall-mounted display screen sits on the back wall, which is covered in recycled sage-green felt providing both acoustic treatment and a warm backdrop. Cork acoustic panels on the ceiling complement the felt walls. A trailing pothos plant cascades from a high natural oak shelf in the corner. On the table: a ceramic water pitcher, glasses, notebooks, and a small potted succulent. Through the glass walls, the open-plan workspace and living green wall are visible, creating a layered depth of greenery. A linear pendant light in matte black runs the length of the table. The micro-cement floor continues seamlessly under the glass partitions. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The room is empty with no people, no visible text, no watermarks, and no logos.
```

### 5.4 — Cabines de concentration
**Ratio :** `16:9` · **Fichier SEO :** `cabinas-concentracion-oficinas-sant-marti-barcelona.jpg`

```
An editorial interior photograph of a row of four acoustic focus pods (cabinas de concentración) in a biophilic office in Barcelona's Sant Martí district. The pods are freestanding structures with exterior walls clad in recycled sage-green felt and interiors lined in natural cork for maximum acoustic absorption. Each pod is a compact single-person booth with a small natural oak desk, an ergonomic stool, integrated LED task lighting, a power outlet, and a small shelf. The pods have no doors but deeply recessed entrances that block sound. Between the pods, tall planters with bamboo and ornamental grasses create natural dividers. The micro-cement floor anchors the scene. Behind the pods, the open-plan workspace is visible with its natural oak desks and hanging plants, providing context. The ceiling above features exposed ductwork painted matte black and cork acoustic panels. The overall impression is of a thoughtful workspace that balances collaboration with deep focus. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no visible text, no watermarks, and no logos.
```

### 5.5 — Réception et accueil
**Ratio :** `16:9` · **Fichier SEO :** `recepcion-oficinas-sant-marti-barcelona-reforma.jpg`

```
An editorial interior photograph of the reception area in a biophilic office in Barcelona's Sant Martí district. The showpiece is the massive living green wall (muro vegetal) that covers the entire wall behind the reception — a lush tapestry of tropical ferns, philodendrons, pothos, moss, and air plants in varying shades of green, with integrated drip irrigation barely visible. In front of the green wall, the reception counter is a sculptural piece in polished terrazzo with a warm white base flecked with green and grey chips, with a waterfall edge and integrated oak shelf. Behind the counter, a natural oak pegboard displays the company logo in matte black metal letters. The waiting area features two designer armchairs in dark green leather and a low natural oak side table with architecture and design magazines. A large round ceramic planter with a mature fiddle leaf fig tree stands beside the seating. The micro-cement floor is pristine and reflective. Overhead, a circular pendant light in natural oak and matte black provides warm ambient light. The glass entrance doors are visible on the right, with the Sant Martí street visible outside. Photographed with a Canon EOS R5 and a 24mm wide-angle lens, photorealistic, ultra-detailed, 8K resolution. The space is empty with no people, no visible text, no watermarks, and no logos.
```

---

## Récapitulatif — 25 images (5 × 5 projets)

### Restaurante Born (5 images)

| # | Espace | Ratio | Fichier SEO |
|---|--------|-------|-------------|
| 1.1 | Salle principale (hero) | 16:9 | `diseno-restaurante-born-barcelona-sala-principal.jpg` |
| 1.2 | Bar et comptoir marbre | 16:9 | `barra-marmol-restaurante-born-barcelona-diseno.jpg` |
| 1.3 | Cuisine ouverte | 16:9 | `cocina-abierta-restaurante-born-barcelona-interiorismo.jpg` |
| 1.4 | Coin intime banquette | 16:9 | `rincon-banqueta-restaurante-born-barcelona.jpg` |
| 1.5 | Façade et entrée golden hour | 16:9 | `fachada-restaurante-born-barcelona-golden-hour.jpg` |

### Reforma Eixample (5 images)

| # | Espace | Ratio | Fichier SEO |
|---|--------|-------|-------------|
| 2.1 | Salon-salle à manger (hero) | 16:9 | `reforma-piso-eixample-barcelona-salon-comedor.jpg` |
| 2.2 | Cuisine ouverte Carrara | 16:9 | `cocina-abierta-reforma-eixample-barcelona-marmol-carrara.jpg` |
| 2.3 | Chambre principale + dressing | 16:9 | `dormitorio-principal-vestidor-reforma-eixample-barcelona.jpg` |
| 2.4 | Salle de bain Carrara | 16:9 | `bano-marmol-carrara-reforma-piso-eixample-barcelona.jpg` |
| 2.5 | Couloir et détails architecturaux | 16:9 | `pasillo-suelos-hidraulicos-piso-modernista-eixample.jpg` |

### Ático Sarrià (5 images)

| # | Espace | Ratio | Fichier SEO |
|---|--------|-------|-------------|
| 3.1 | Salon principal (hero) | 16:9 | `atico-lujo-sarria-barcelona-salon-vistas-panoramicas.jpg` |
| 3.2 | Salle à manger + cuisine | 16:9 | `comedor-cocina-atico-sarria-barcelona-interiorismo.jpg` |
| 3.3 | Chambre principale | 16:9 | `dormitorio-principal-atico-sarria-barcelona-vistas.jpg` |
| 3.4 | Coin lecture / bibliothèque | 16:9 | `rincon-lectura-biblioteca-atico-sarria-barcelona.jpg` |
| 3.5 | Terrasse panoramique | 16:9 | `terraza-panoramica-atico-sarria-barcelona-golden-hour.jpg` |

### Casa Gràcia (5 images)

| # | Espace | Ratio | Fichier SEO |
|---|--------|-------|-------------|
| 4.1 | Salon-comedor + patio (hero) | 16:9 | `arquitectura-casa-gracia-barcelona-salon-patio.jpg` |
| 4.2 | Patio intérieur végétalisé | 16:9 | `patio-interior-casa-gracia-barcelona-arquitectura.jpg` |
| 4.3 | Cuisine ouverte sur patio | 16:9 | `cocina-casa-gracia-barcelona-microcemento.jpg` |
| 4.4 | Chambre volta catalana | 16:9 | `dormitorio-volta-catalana-casa-gracia-barcelona.jpg` |
| 4.5 | Terrasse-solarium | 16:9 | `terraza-sobretico-casa-gracia-barcelona.jpg` |

### Oficinas Sant Martí (5 images)

| # | Espace | Ratio | Fichier SEO |
|---|--------|-------|-------------|
| 5.1 | Open-plan workspace (hero) | 16:9 | `reforma-oficinas-sant-marti-barcelona-espacio-abierto.jpg` |
| 5.2 | Cuisine sociale / breakout | 16:9 | `cocina-social-oficinas-sant-marti-barcelona.jpg` |
| 5.3 | Salle de réunion vitrée | 16:9 | `sala-reuniones-oficinas-sant-marti-barcelona-diseno.jpg` |
| 5.4 | Cabines de concentration | 16:9 | `cabinas-concentracion-oficinas-sant-marti-barcelona.jpg` |
| 5.5 | Réception / accueil | 16:9 | `recepcion-oficinas-sant-marti-barcelona-reforma.jpg` |

---

## Workflow recommandé

1. **Tester en `1K`** — Générer en basse résolution pour valider composition et ambiance
2. **Commencer par le hero (X.1)** — C'est l'image de référence pour tout le projet
3. **Continuer les autres images** — Chaque prompt est indépendant
4. **Qualité finale en `4K`** — Relancer les prompts validés en résolution max
5. **Post-production** — Lightroom pour la cohérence couleur entre les 5 images du projet
6. **Compression** — TinyPNG ou Squoosh, target < 200KB par image, format WebP
