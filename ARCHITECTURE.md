# Architecture Complète — Site Web Interiorista Barcelona

## Analyse du site de référence : createursdinterieur.com

---

## 1. Analyse du site source (Créateurs d'Intérieur)

### 1.1 Modèle d'affaires

Créateurs d'Intérieur est un **collectif de ~90 professionnels** (architectes d'intérieur, décorateurs, paysagistes) fondé en 2006, opérant dans 16 villes (France, Belgique, Suisse). Le site sert de **vitrine et d'entonnoir de conversion** : présentation du collectif → démonstration d'expertise → prise de contact.

### 1.2 Arborescence complète du site source

```
/                                    → Page d'accueil
│
├── /qui-sommes-nous/               → Page À propos (collectif)
│   ├── /philippe-founder-.../      → Profil fondateur
│   ├── /julien-architecte-.../     → Profil architecte (DPLG)
│   ├── /severine-decoratrice-.../  → Profil décoratrice
│   ├── /glenn-architecte-erp/      → Profil spécialiste ERP
│   ├── /caroline-architecte-.../   → Profil architecte
│   ├── /alexandre-decorateur-.../  → Profil décorateur
│   ├── /emilie-decoratrice-.../    → Profil décoratrice
│   ├── /paul-architecte-.../       → Profil architecte
│   └── ... (~90 profils)
│
├── SERVICES (pages piliers)
│   ├── /architecte-interieur/      → Architecte d'intérieur (page pilier principale)
│   ├── /decorateur-interieur/      → Décorateur d'intérieur
│   ├── /architecte/                → Architecte (construction/extension)
│   ├── /architecture-commerciale/  → Architecture commerciale & retail
│   ├── /amenagement-bureaux/       → Aménagement de bureaux / tertiaire
│   ├── /relooking-interieur/       → Relooking intérieur (home staging)
│   ├── /renovation-energetique/    → Rénovation énergétique
│   ├── /conseil-avant-achat/       → Conseil avant achat immobilier
│   └── /achat-sur-plan/            → Accompagnement VEFA
│
├── PORTFOLIO
│   ├── /realisations/              → Index des projets
│   │   ├── /design-interieur/      → Catégorie design
│   │   │   ├── /renovation-maison-maitre/
│   │   │   ├── /renovation-appartement-atypique/
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── /avant-apres/               → Index avant/après
│   │   ├── /appartement/           → Filtre : appartements
│   │   ├── /renovation-appartement-70m2/
│   │   ├── /appartement-3-pieces-60m2/
│   │   ├── /appartement-art-deco-275m2/
│   │   ├── /appartement-2-pieces-50m2/
│   │   ├── /appartement-haussmannien-250m2/
│   │   ├── /appartement-2-pieces-32m2/
│   │   └── ...
│   │
├── /tarifs/                        → Page tarifs
├── /avis/                          → Page avis clients
├── /faq/                           → FAQ
├── /contact/                       → Contact + recrutement
│
└── /en/                            → Version anglaise (mirror complet)
```

### 1.3 Points forts identifiés

- **Profils individuels** détaillés pour chaque membre (E-E-A-T fort)
- **Portfolio Avant/Après** avec dimensions, type de bien, localisation
- **Page tarifs** transparente avec barèmes par m²
- **FAQ dédiée** avec questions structurées
- **Multilingue** (FR/EN)
- **Présence sur annuaires** : Houzz, PagesJaunes, Trustpilot

### 1.4 Points faibles identifiés

- **Pas de blog** → opportunité SEO manquée
- **Rendu full client-side (SPA)** → problème d'indexation potentiel
- **Utilise Bootstrap** avec CSS monolithique → poids performance
- **Pas de données structurées visibles** (Schema.org absent ou insuffisant)
- **Pas de contenu éducatif** → faible potentiel GEO
- **Pas de FAQ riches** avec Schema FAQ

---

## 2. Architecture du site Interiorista Barcelona

### 2.1 Positionnement

**Collectif d'architectes d'intérieur et décorateurs à Barcelone**, ciblant une clientèle internationale (espagnol, anglais) dans les segments :
- Rénovation résidentielle (appartements Eixample, penthouses, maisons)
- Design commercial (restaurants, hôtels, boutiques)
- Conseil et accompagnement projet

### 2.2 Arborescence complète proposée

```
DOMAINE : interiorista-barcelona.com (ou variante)
LANGUES : ES (principal) / EN

/                                           → Homepage
│
├── 📄 PAGES INSTITUTIONNELLES
│   ├── /sobre-nosotros/                    → À propos du collectif
│   ├── /equipo/                            → Index de l'équipe
│   │   ├── /equipo/[nombre-apellido]/      → Profil individuel (dynamique)
│   │   └── ...
│   ├── /opiniones/                         → Avis clients (Trustpilot/Google intégré)
│   ├── /contacto/                          → Contact + formulaire devis
│   └── /trabaja-con-nosotros/              → Recrutement
│
├── 📄 PAGES SERVICES (piliers SEO)
│   ├── /interiorista/                      → Page pilier : Interiorista en Barcelona
│   ├── /decorador-interiores/              → Décorateur d'intérieur
│   ├── /arquitecto-interiores/             → Architecte d'intérieur
│   ├── /reformas-integrales/               → Rénovation intégrale
│   ├── /diseno-comercial/                  → Design commercial (restaurants, hôtels)
│   ├── /diseno-oficinas/                   → Aménagement bureaux
│   ├── /home-staging/                      → Home staging
│   ├── /reforma-energetica/                → Rénovation énergétique
│   └── /asesoria-compra-inmueble/          → Conseil avant achat
│
├── 📄 PAGES LOCALISATION (SEO local)
│   ├── /interiorista-eixample/             → Quartier Eixample
│   ├── /interiorista-gracia/               → Quartier Gràcia
│   ├── /interiorista-born/                 → Quartier El Born
│   ├── /interiorista-sarria/               → Quartier Sarrià
│   ├── /interiorista-poblenou/             → Quartier Poblenou
│   ├── /interiorista-sitges/               → Ville satellite : Sitges
│   └── /interiorista-costa-brava/          → Région : Costa Brava
│
├── 📄 PORTFOLIO
│   ├── /proyectos/                         → Index projets
│   │   ├── /proyectos/[slug-projet]/       → Page projet individuelle
│   │   └── ...
│   ├── /antes-despues/                     → Index avant/après
│   │   ├── /antes-despues/[slug]/          → Page avant/après individuelle
│   │   └── ...
│   └── Filtres : type (piso, casa, local), quartier, superficie, style
│
├── 📄 TARIFS
│   └── /precios/                           → Grille tarifaire transparente
│
├── 📄 FAQ
│   └── /preguntas-frecuentes/              → FAQ globale (avec Schema FAQ)
│
├── 📄 PAGES LÉGALES
│   ├── /aviso-legal/                       → Mentions légales
│   ├── /politica-privacidad/               → Politique de confidentialité
│   └── /politica-cookies/                  → Cookies
│
└── 🌐 VERSION ANGLAISE
    └── /en/...                             → Miroir anglais complet
```

### 2.3 Structure des URLs

| Pattern | Exemple | Logique |
|---------|---------|---------|
| `/[service]/` | `/interiorista/` | Pages services = piliers SEO |
| `/interiorista-[quartier]/` | `/interiorista-eixample/` | SEO local par quartier |
| `/proyectos/[slug]/` | `/proyectos/reforma-piso-eixample-120m2/` | Portfolio avec slug descriptif |
| `/antes-despues/[slug]/` | `/antes-despues/piso-gotico-85m2/` | Avant/après descriptifs |
| `/equipo/[nom]/` | `/equipo/maria-garcia-interiorista/` | Profils individuels |

---

## 3. Fondations Techniques

### 3.1 Stack technologique

| Composant | Choix | Justification |
|-----------|-------|---------------|
| **Framework** | Next.js 14+ (App Router) | SSG/SSR natif, ISR, React Server Components |
| **Rendu** | SSG par défaut, ISR pour projets | Indexation parfaite, performance maximale |
| **Styling** | Tailwind CSS | Tree-shaking, pas de CSS inutilisé, DX rapide |
| **CMS** | Sanity / Strapi | Contenu manageable par non-dev, API GraphQL |
| **Hébergement** | Vercel | Edge network, CDN, preview deployments |
| **Images** | Next/Image + CDN (Cloudinary ou Vercel) | WebP/AVIF auto, lazy loading, srcset |
| **Analytics** | Plausible ou Umami | RGPD-friendly, léger (<1KB) |
| **Formulaires** | React Hook Form + API route Next.js | Validation côté client + serveur |
| **i18n** | next-intl | Routing i18n natif avec App Router |

### 3.2 Performance — Objectif PageSpeed 90+

```
Stratégie de performance :

1. RENDU
   - SSG (Static Site Generation) pour toutes les pages stables
   - ISR (Incremental Static Regeneration) revalidate: 3600 pour projets
   - Streaming SSR uniquement pour pages avec données temps réel

2. ASSETS
   - Next/Image : formats WebP/AVIF, srcset responsive, lazy loading natif
   - Tailwind CSS : purge automatique, ~15KB gzippé final
   - Fonts : Montserrat/Inter via next/font (self-hosted, display: swap)
   - Zero JavaScript tiers inutile (pas de jQuery, pas de Bootstrap JS)

3. CORE WEB VITALS
   - LCP < 2.5s : hero image en priority, preload critique
   - FID/INP < 200ms : minimal JS côté client, React Server Components
   - CLS < 0.1 : dimensions explicites sur toutes les images/embeds

4. OPTIMISATIONS AVANCÉES
   - <link rel="preconnect"> pour CDN images et fonts
   - Route prefetching natif Next.js (hover prefetch)
   - Compression Brotli via Vercel Edge
   - Bundle analyzer pour surveiller le poids JS
```

### 3.3 Architecture crawlable

```
robots.txt
──────────
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://interiorista-barcelona.com/sitemap.xml

sitemap.xml (unique, généré automatiquement via next-sitemap)
──────────
- Un seul sitemap avec toutes les URLs (ES + EN)
- Annotations hreflang dans chaque <url> pour lier les versions ES ↔ EN
- Pages statiques : priorité 1.0 (accueil), 0.9 (services), 0.8 (projets)
- Profils équipe : priorité 0.6
```

### 3.4 Données structurées (Schema.org)

Chaque type de page a son propre ensemble de schemas :

```jsonc
// === PAGE ACCUEIL ===
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Interiorista Barcelona",
  "url": "https://interiorista-barcelona.com",
  "logo": "https://interiorista-barcelona.com/logo.png",
  "description": "Colectivo de interioristas, arquitectos de interior y decoradores en Barcelona",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barcelona",
    "addressRegion": "Cataluña",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.3874,
    "longitude": 2.1686
  },
  "areaServed": [
    { "@type": "City", "name": "Barcelona" },
    { "@type": "City", "name": "Sitges" }
  ],
  "sameAs": [
    "https://www.instagram.com/interiorista-barcelona",
    "https://www.houzz.es/...",
    "https://www.linkedin.com/company/..."
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87"
  }
}

// === PAGES SERVICES ===
{
  "@type": "Service",
  "name": "Interiorista en Barcelona",
  "provider": { "@type": "Organization", "name": "Interiorista Barcelona" },
  "areaServed": { "@type": "City", "name": "Barcelona" },
  "description": "...",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "2500",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "unitText": "proyecto mínimo"
    }
  }
}

// === PAGE FAQ ===
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un interiorista en Barcelona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los honorarios de un interiorista en Barcelona representan entre el 10% y el 15% del presupuesto total de la obra..."
      }
    }
  ]
}

// === PAGES PROJETS ===
{
  "@type": "CreativeWork",
  "name": "Reforma integral piso Eixample 120m²",
  "creator": { "@type": "Organization", "name": "Interiorista Barcelona" },
  "image": ["..."],
  "description": "...",
  "locationCreated": {
    "@type": "Place",
    "address": { "addressLocality": "Barcelona", "addressRegion": "Eixample" }
  }
}

// === BREADCRUMBS (toutes les pages) ===
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "/" },
    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "/interiorista/" },
    { "@type": "ListItem", "position": 3, "name": "..." }
  ]
}

// === PROFILS ÉQUIPE ===
{
  "@type": "Person",
  "name": "María García",
  "jobTitle": "Interiorista",
  "worksFor": { "@type": "Organization", "name": "Interiorista Barcelona" },
  "description": "...",
  "image": "...",
  "sameAs": ["https://linkedin.com/in/...", "https://instagram.com/..."]
}

// === AVIS ===
{
  "@type": "LocalBusiness",
  "name": "Interiorista Barcelona",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "..." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "..."
    }
  ]
}
```

### 3.5 Architecture Next.js — Structure des fichiers

```
src/
├── app/
│   ├── layout.tsx                          → Layout racine (metadata globale, fonts, analytics)
│   ├── page.tsx                            → Homepage
│   ├── sitemap.ts                          → Génération sitemap dynamique
│   ├── robots.ts                           → robots.txt dynamique
│   │
│   ├── (pages)/
│   │   ├── sobre-nosotros/
│   │   │   └── page.tsx
│   │   ├── equipo/
│   │   │   ├── page.tsx                    → Index équipe
│   │   │   └── [slug]/
│   │   │       └── page.tsx                → Profil dynamique
│   │   ├── contacto/
│   │   │   └── page.tsx
│   │   ├── opiniones/
│   │   │   └── page.tsx
│   │   ├── precios/
│   │   │   └── page.tsx
│   │   └── preguntas-frecuentes/
│   │       └── page.tsx
│   │
│   ├── (services)/
│   │   ├── interiorista/
│   │   │   └── page.tsx                    → Page pilier
│   │   ├── decorador-interiores/
│   │   │   └── page.tsx
│   │   ├── arquitecto-interiores/
│   │   │   └── page.tsx
│   │   ├── reformas-integrales/
│   │   │   └── page.tsx
│   │   ├── diseno-comercial/
│   │   │   └── page.tsx
│   │   ├── diseno-oficinas/
│   │   │   └── page.tsx
│   │   ├── home-staging/
│   │   │   └── page.tsx
│   │   ├── reforma-energetica/
│   │   │   └── page.tsx
│   │   └── asesoria-compra-inmueble/
│   │       └── page.tsx
│   │
│   ├── (local)/                            → Pages SEO local
│   │   ├── interiorista-eixample/
│   │   │   └── page.tsx
│   │   ├── interiorista-gracia/
│   │   │   └── page.tsx
│   │   ├── interiorista-born/
│   │   │   └── page.tsx
│   │   ├── interiorista-sarria/
│   │   │   └── page.tsx
│   │   ├── interiorista-poblenou/
│   │   │   └── page.tsx
│   │   ├── interiorista-sitges/
│   │   │   └── page.tsx
│   │   └── interiorista-costa-brava/
│   │       └── page.tsx
│   │
│   ├── (portfolio)/
│   │   ├── proyectos/
│   │   │   ├── page.tsx                    → Index projets (avec filtres)
│   │   │   └── [slug]/
│   │   │       └── page.tsx                → Projet individuel
│   │   └── antes-despues/
│   │       ├── page.tsx                    → Index avant/après
│   │       └── [slug]/
│   │           └── page.tsx                → Avant/après individuel
│   │
│   ├── (legal)/
│   │   ├── aviso-legal/page.tsx
│   │   ├── politica-privacidad/page.tsx
│   │   └── politica-cookies/page.tsx
│   │
│   └── api/
│       ├── contact/route.ts                → API formulaire contact
│       ├── revalidate/route.ts             → Webhook ISR depuis CMS
│       └── og/route.tsx                    → Génération OG images dynamiques
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                      → Navigation principale
│   │   ├── Footer.tsx                      → Footer avec liens, carte, contact
│   │   ├── Breadcrumbs.tsx                 → Fil d'Ariane (+ Schema)
│   │   └── LanguageSwitcher.tsx            → Sélecteur ES/EN
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TeamMemberCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── BeforeAfterSlider.tsx           → Slider interactif avant/après
│   │   ├── ContactForm.tsx
│   │   ├── ImageGallery.tsx
│   │   └── FilterBar.tsx                   → Filtres projets
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx                         → Accordéon FAQ (+ Schema)
│   │   ├── CTABanner.tsx
│   │   ├── ContactFormSection.tsx             → Formulaire de contact intégré (présent sur chaque page)
│   │   ├── StatsCounter.tsx
│   │   └── ProcessSteps.tsx
│   └── seo/
│       ├── JsonLd.tsx                      → Composant wrapper Schema.org
│       ├── MetaTags.tsx                    → OG tags dynamiques
│       └── Hreflang.tsx                    → Balises hreflang
│
├── lib/
│   ├── sanity/                             → Client CMS
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   ├── schema/                             → Générateurs Schema.org
│   │   ├── organization.ts
│   │   ├── service.ts
│   │   ├── faq.ts
│   │   ├── breadcrumb.ts
│   │   ├── person.ts
│   │   └── local-business.ts
│   ├── i18n/
│   │   ├── config.ts
│   │   └── dictionaries/
│   │       ├── es.json
│   │       └── en.json
│   └── utils/
│       ├── metadata.ts                     → Helper génération metadata Next.js
│       └── slugify.ts
│
├── content/                                → Contenu statique (si pas de CMS au départ)
│   ├── services/
│   ├── team/
│   └── faq/
│
└── public/
    ├── images/
    ├── fonts/
    └── favicon/
```

---

## 4. Stratégie de contenu SEO + GEO

### 4.1 Recherche de mots-clés — Clusters prioritaires

#### Cluster 1 : Interiorista Barcelona (pilier principal)

| Mot-clé | Intention | Volume estimé | Difficulté | Page cible |
|---------|-----------|---------------|------------|------------|
| interiorista barcelona | Transactionnelle | Élevé | Haute | /interiorista/ |
| interiorista en barcelona | Transactionnelle | Élevé | Haute | /interiorista/ |
| diseñador de interiores barcelona | Transactionnelle | Moyen | Haute | /interiorista/ |
| arquitecto de interiores barcelona | Transactionnelle | Moyen | Moyenne | /arquitecto-interiores/ |
| decorador de interiores barcelona | Transactionnelle | Moyen | Moyenne | /decorador-interiores/ |
| estudio interiorismo barcelona | Transactionnelle | Moyen | Moyenne | / |
| interiorista eixample | Transactionnelle locale | Faible | Basse | /interiorista-eixample/ |
| interiorista gracia barcelona | Transactionnelle locale | Faible | Basse | /interiorista-gracia/ |

#### Cluster 2 : Services spécifiques

| Mot-clé | Intention | Page cible |
|---------|-----------|------------|
| reforma integral barcelona | Transactionnelle | /reformas-integrales/ |
| reforma piso barcelona precio | Informationnelle/Trans. | /precios/ + /reformas-integrales/ |
| diseño restaurante barcelona | Transactionnelle | /diseno-comercial/ |
| home staging barcelona | Transactionnelle | /home-staging/ |
| reforma energetica barcelona | Transactionnelle | /reforma-energetica/ |
| diseño oficinas barcelona | Transactionnelle | /diseno-oficinas/ |

#### Cluster 3 : Mots-clés anglais (expats/touristes)

| Mot-clé | Page cible |
|---------|------------|
| interior designer barcelona | /en/interior-designer/ |
| interior design studio barcelona | /en/ |
| apartment renovation barcelona | /en/full-renovation/ |
| home decorator barcelona | /en/interior-decorator/ |

### 4.2 Contenu pensé pour les LLMs

Chaque page de service suit cette structure optimisée GEO :

```
1. RÉPONSE DIRECTE (premier paragraphe)
   → Définition claire du service + localisation + chiffre clé
   Exemple : "Un interiorista en Barcelona cobra entre 60€ y 90€/m²
   para un proyecto de diseño integral. Nuestro colectivo de [X]
   profesionales certificados acompaña proyectos residenciales y
   comerciales en toda el área metropolitana de Barcelona."

2. SECTION "EN BREF" (encadré citable)
   → 5-7 bullet points factuels résumant le service
   → Format parfait pour citation par LLM

3. CONTENU PRINCIPAL
   → H2/H3 formulés comme des questions
   → "¿Qué hace un interiorista en Barcelona?"
   → "¿Cuánto cuesta contratar un interiorista?"
   → "¿Cuál es la diferencia entre interiorista y decorador?"

4. DONNÉES CHIFFRÉES
   → Tableaux de prix, statistiques, comparaisons
   → Sources citées (colegio de arquitectos, INE, etc.)

5. PROCESSUS NUMÉROTÉ
   → Étapes 1-2-3-4 du service
   → Format idéal pour reprise par IA

6. FAQ EN BAS DE PAGE
   → 5-8 questions avec Schema FAQPage
   → Réponses concises (2-3 phrases max)

7. CTA + FORMULAIRE DE CONTACT
   → Formulaire de demande de projet intégré directement sur chaque page
   → Champs : Nombre, Apellido, Email, Teléfono, Código postal del proyecto,
     Descripción del proyecto, Superficie (m², optionnel), Franja horaria para llamada
   → Élimine la friction : pas besoin de naviguer vers /contacto/
```

### 4.3 Stratégie pilier + clusters

```
PAGE PILIER : /interiorista/
"Interiorista en Barcelona : Guía completa"
│
├── CLUSTER : Services
│   ├── /decorador-interiores/
│   ├── /arquitecto-interiores/
│   ├── /reformas-integrales/
│   ├── /diseno-comercial/
│   └── ...
│
├── CLUSTER : Localisation
│   ├── /interiorista-eixample/
│   ├── /interiorista-gracia/
│   ├── /interiorista-born/
│   └── ...
│
├── CLUSTER : Portfolio preuve
│   ├── /proyectos/reforma-piso-eixample-120m2/
│   ├── /antes-despues/piso-gotico-85m2/
│   └── ...
│
└── CLUSTER : Social proof
    ├── /opiniones/
    ├── /precios/
    └── /preguntas-frecuentes/
```

Chaque page satellite contient un **lien contextuel vers la page pilier** et vice-versa.

---

## 5. E-E-A-T — Stratégie de crédibilité

### 5.1 Experience (Expérience terrain)

| Élément | Implémentation |
|---------|----------------|
| **Portfolio riche** | Min. 20 projets au lancement avec photos pro, descriptions détaillées, m², quartier, budget range |
| **Avant/Après** | Slider interactif avec témoignage client intégré |
| **Études de cas** | 3-5 articles détaillés : problématique → solution → résultat → chiffres |
| **Contenu terrain** | Pages services avec insights spécifiques à Barcelone (normativas, matériaux locaux, climat) |
| **Vidéo** | Visites de projets terminés, interviews de designers (YouTube + embed) |

### 5.2 Expertise (Compétence professionnelle)

| Élément | Implémentation |
|---------|----------------|
| **Profils détaillés** | Chaque membre : formation, certifications (COAC, CODIC), années d'expérience, spécialités |
| **Certifications visibles** | Logos : Colegio de Arquitectos de Cataluña, associations professionnelles |
| **Articles signés** | Chaque page service liée aux profils auteurs avec bio et credentials |
| **Données techniques** | Inclure normes CTE, références au Plan General Metropolitano, réglementation urbanistique |

### 5.3 Authoritativeness (Autorité)

| Élément | Implémentation |
|---------|----------------|
| **Mentions presse** | Section "Nos en la prensa" avec logos médias |
| **Partenariats** | Logos fournisseurs/marques premium (collaboration matériaux) |
| **Annuaires pro** | Profils actifs : Houzz, Habitissimo, Google Business, PagesJaunes Espagne |
| **Backlinks** | Stratégie d'articles invités sur sites archi/déco espagnols |
| **Awards** | Participation concours design (si applicable) |

### 5.4 Trustworthiness (Confiance)

| Élément | Implémentation |
|---------|----------------|
| **Avis vérifiés** | Intégration Google Reviews + Trustpilot widget |
| **Transparence prix** | Page tarifs complète avec fourchettes par type de projet |
| **Garanties** | Section garanties : assurance RC pro, garantie décennale si applicable |
| **Contact accessible** | Adresse physique, téléphone, WhatsApp, formulaire — sur chaque page |
| **HTTPS + legal** | SSL, mentions légales complètes, RGPD/LOPD conforme |
| **Politique claire** | Conditions générales, process de collaboration détaillé |

---

## 6. Optimisation GEO (Generative Engine Optimization)

### 6.1 Être cité comme source

```
STRATÉGIE DE CITABILITÉ :

1. CONTENU "WIKIPEDIA-LIKE"
   → Pages services qui définissent clairement le métier dans le contexte de Barcelone
   → Données factuelles : prix moyens, délais, réglementation
   → Sources vérifiables citées dans le contenu

2. FORMAT CITABLE
   → Phrases autonomes compréhensibles hors contexte
   ✅ "En Barcelona, los honorarios de un interiorista oscilan entre
      60€ y 90€/m² para un proyecto de diseño integral, según datos
      del Colegio de Arquitectos de Cataluña."
   ❌ "Nuestros precios son muy competitivos y adaptados a cada proyecto."

3. STRUCTURED DATA RICHE
   → Schema.org sur chaque page = données machine-readable
   → Les LLMs exploitent les structured data pour extraire des faits

4. CONTENU RÉGULIÈREMENT MIS À JOUR
   → Dates de mise à jour visibles
   → "Actualizado en febrero 2026"
   → Les LLMs préfèrent les sources récentes
```

### 6.2 FAQ natives riches

Chaque page service intègre un bloc FAQ avec :
- Schema FAQPage markup
- 5-8 questions par page
- Réponses directes en 2-3 phrases
- Données chiffrées quand pertinent

**Exemples de FAQ pour /interiorista/ :**

```
Q: ¿Cuánto cuesta contratar un interiorista en Barcelona?
R: Los honorarios representan entre el 10% y el 15% del coste total de
   las obras. Para un proyecto de diseño sin obra, el precio oscila entre
   60€ y 90€/m². El presupuesto mínimo es de 2.500€.

Q: ¿Cuánto tiempo dura un proyecto de interiorismo en Barcelona?
R: Un proyecto medio de reforma integral (80-120m²) dura entre 4 y 6 meses
   desde el diseño hasta la entrega. La fase de diseño requiere 4-6 semanas,
   y la ejecución de obra entre 3 y 4 meses.

Q: ¿Necesito un interiorista o un arquitecto para reformar mi piso en Barcelona?
R: Depende del alcance: si se modifican tabiques, instalaciones o estructura,
   necesitas un arquitecto técnico o de interiores colegiado (COAC). Para
   decoración y distribución sin obra, un interiorista o decorador es suficiente.

Q: ¿Qué permisos necesito para reformar un piso en Barcelona?
R: Para obras menores (cambio suelos, pintura, baños) se necesita una
   comunicación previa al Ajuntament. Para obras mayores (derribos, cambio
   de distribución), se requiere una licencia de obras mayor tramitada
   por un técnico colegiado.
```

### 6.3 Présence multiplateforme

| Plateforme | Action | Objectif |
|------------|--------|----------|
| **Google Business Profile** | Profil complet + posts réguliers + photos | SEO local + crédibilité IA |
| **Houzz** | Profil premium avec projets + avis | Backlink + autorité sectorielle |
| **Instagram** | Contenu visuel projets + reels process | Brand awareness + trafic |
| **Pinterest** | Boards par style/quartier/type de projet | Trafic référent long-tail |
| **YouTube** | Visites projets, conseils déco, vlogs chantier | Autorité + contenu citable |
| **Reddit** | Participation r/barcelona, r/interiordesign | Mentions naturelles |
| **LinkedIn** | Articles expertise + profils membres | Autorité professionnelle |
| **Habitissimo** | Profil avec budget/avis | Backlink + leads |

---

## 7. Ordre de priorité — Roadmap de lancement

### Phase 1 : Fondations

```
□ Acheter le domaine
□ Configurer l'hébergement Vercel
□ Setup Next.js 14 + Tailwind + next-intl
□ Créer le layout principal (Header, Footer, Breadcrumbs)
□ Configurer le CMS (Sanity)
□ Mettre en place les données structurées (composants Schema.org)
□ Configurer robots.txt + sitemap.xml automatique
□ Setup analytics (Plausible)
```

### Phase 2 : Pages essentielles

```
□ Homepage
□ Page pilier /interiorista/ (contenu SEO + GEO complet)
□ 3 pages services prioritaires :
  - /reformas-integrales/
  - /decorador-interiores/
  - /diseno-comercial/
□ /sobre-nosotros/
□ /equipo/ + 5 premiers profils membres
□ /contacto/ avec formulaire
□ /precios/
□ /preguntas-frecuentes/ (FAQ globale)
□ /opiniones/
```

### Phase 3 : Portfolio + Social Proof

```
□ /proyectos/ + 10-15 projets avec photos pro
□ /antes-despues/ + 5-8 transformations
□ Intégration avis Google/Trustpilot
□ Pages légales (aviso legal, privacidad, cookies)
```

### Phase 4 : SEO local

```
□ Pages quartiers (Eixample, Gràcia, Born, Sarrià, Poblenou)
□ Pages villes satellites (Sitges, Costa Brava)
□ Setup Google Business Profile
□ Profil Houzz
```

### Phase 5 : Scale + Netlinking

```
□ Version EN complète
□ Remaining services pages
□ Études de cas détaillées (1/mois)
□ Stratégie de backlinks :
  - Articles invités sur blogs archi/déco espagnols
  - Partenariats avec fournisseurs/marques
  - Relations presse locale
□ Présence Reddit, YouTube, Pinterest
□ Campagne avis clients
```

### Phase 6 : Optimisation continue

```
□ Audit PageSpeed + Core Web Vitals (objectif 90+)
□ Analyse Search Console → identifier nouvelles opportunités
□ A/B testing CTA et landing pages
□ Mise à jour contenu existant (dates, prix, tendances)
□ Expansion clusters sémantiques selon données réelles
□ Monitoring positions GEO (vérifier citations IA)
```

---

## 8. Métriques de succès

| Métrique | Objectif M3 | Objectif M6 | Objectif M12 |
|----------|-------------|-------------|--------------|
| PageSpeed Score (mobile) | 90+ | 95+ | 95+ |
| Pages indexées | 40+ | 80+ | 150+ |
| Trafic organique mensuel | 500 | 2000 | 5000+ |
| Positions top 10 (mots-clés cibles) | 5 | 15 | 30+ |
| Leads/mois via formulaire | 10 | 30 | 60+ |
| Avis Google | 10 | 25 | 50+ |
| Backlinks domaines référents | 10 | 30 | 60+ |
| Citations dans réponses IA | Monitoring | 5+ | 15+ |

---

## 9. Différenciateurs vs createursdinterieur.com

| Aspect | createursdinterieur.com | Notre site |
|--------|------------------------|------------|
| Rendu | SPA (client-side) — mauvais pour SEO | SSG/ISR — indexation parfaite |
| Schema.org | Minimal/absent | Complet sur chaque page |
| FAQ | Page unique basique | FAQ riches par page avec Schema |
| SEO local | Pas de pages quartiers | Pages dédiées par quartier |
| Performance | Bootstrap lourd | Tailwind optimisé, score 90+ |
| GEO | Non optimisé | Contenu citable, structuré, factuel |
| Multiplateforme | Houzz + PagesJaunes | Houzz + Google + YouTube + Reddit + Pinterest |
| i18n | FR/EN | ES/EN (marché expat anglophone) |
| CMS | Semble custom/Drupal ancien | Headless CMS moderne (Sanity) |

---

## 10. Concurrence Barcelona — Positionnement

### Concurrents principaux identifiés

| Concurrent | Forces | Faiblesses |
|-----------|--------|------------|
| **The Room Studio** (theroom-studio.com) | 20+ ans, portfolio riche, marque forte | Site non optimisé GEO, pas de contenu éducatif |
| **Coblonal** (coblonal.com) | Multidisciplinaire, projets premium | Ciblage haut de gamme exclusif |
| **Clara Lleal** (claralleal.com) | Awards internationaux, SEO décent | Studio individuel, pas collectif |
| **Miriam Barrio** (miriambarrio.com) | Référence locale, bon portfolio | Site simple, peu de contenu SEO |
| **Ritual Lifestyle** (ritualifestyle.com) | Bon positionnement web | Contenu limité |

### Notre avantage compétitif

1. **Modèle collectif** — plus de profils = plus de pages = plus d'autorité thématique
2. **Contenu éducatif** — FAQ riches + guides intégrés aux pages services = capture du trafic informatif que personne ne travaille
3. **Bilingue ES/EN** — capture du marché expat anglophone largement ignoré par la concurrence locale
4. **GEO-first** — contenu structuré pour être cité par les IA, différenciateur fort à moyen terme
5. **SEO local granulaire** — pages par quartier, chose que très peu de concurrents font
