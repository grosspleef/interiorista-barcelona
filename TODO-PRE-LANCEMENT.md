# Audit Pre-Lancement — Interiorista Barcelona

## Contexte
Analyse complète du site avant mise en ligne et indexation Google. Le site est fonctionnel structurellement mais présente des lacunes critiques (formulaires non fonctionnels, fichiers SEO manquants, pages template non remplacées) qui doivent etre resolues avant la production.

---

## TODO LIST PRE-LANCEMENT

### CRITIQUE — Bloquant pour la mise en ligne

- [x] **1. Creer `robots.txt`** — Aucun fichier robots.txt n'existe. Creer `src/app/robots.ts` avec les regles d'indexation et lien vers le sitemap.

- [x] **2. Creer `sitemap.xml`** — Aucun sitemap. Creer `src/app/sitemap.ts` generant dynamiquement toutes les URLs (pages, services, blog, projets, antes-y-despues).

- [x] **3. Formulaires de contact non fonctionnels** — Les 3 formulaires (`/contacto/`, `/contact/`, `ContactSection`) n'ont aucun handler de soumission. Creer une API route `src/app/api/contact/route.ts` avec:
  - Service email (Resend, SendGrid ou Nodemailer)
  - Validation serveur (zod)
  - Protection spam (honeypot + rate limiting)
  - Confirmation visuelle a l'utilisateur

- [x] **4. Page Politique de Confidentialite manquante** — OBLIGATOIRE RGPD/LSSI-CE. Creer `/politica-privacidad/` avec le contenu legal requis.

- [x] **5. Corriger la page Contact anglais** — `/contact/` supprimee (cf. point 11). `/contacto/` est la seule page de contact.

- [x] **6. Ajouter `trailingSlash: true`** dans `next.config.mjs` — Toutes les URLs internes utilisent des trailing slashes mais la config Next.js ne le force pas. Risque de contenu duplique.

---

### IMPORTANT — A faire avant l'indexation

- [x] **7. Ajouter les balises Open Graph** sur toutes les pages — Aucune balise og:title, og:description, og:image, og:url n'existe. Ajouter dans le `metadata` du layout racine + surcharger par page.

- [x] **8. Ajouter les balises Twitter Card** — Memes lacunes, ajouter `twitter:card`, `twitter:title`, etc.

- [x] **9. Ajouter les URLs canoniques** — Seulement 2 pages sur ~30 ont une canonical. Ajouter sur toutes les pages via le metadata Next.js.

- [ ] **10. Remplacer les 3 articles de blog** — Contenu template en anglais ("Component Naming", "Going Back to Office", "Web Development"). Ecrire de vrais articles en espagnol sur le design d'interieur.

- [x] **11. Supprimer ou adapter les pages template anglaises** :
  - `/about/` — Supprimee (contenu satirique template, equipe fictive)
  - `/process/` — Supprimee (contenu generique)
  - `/contact/` — Supprimee (emails et adresses fausses, `/contacto/` existe deja)
  - Decision : pages supprimees — aucun lien interne ne pointait vers elles.

- [x] **12. Corriger les liens footer "Ciudades"** — Section supprimee (liens fictifs vers `#`). A reimplementer quand le collectif s'etend a d'autres villes.

- [ ] **13. Integrer Google Analytics / GTM** — Aucun analytics configure. Ajouter GA4 ou une alternative privacy-friendly (Plausible, Umami).

- [ ] **14. Configurer Google Search Console** — Aucune verification. Ajouter le fichier de verification ou la meta tag.

- [x] **15. Ajouter les headers de securite** — Headers configures dans `next.config.mjs`:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Strict-Transport-Security`
  - `Permissions-Policy`

---

### RECOMMANDE — Ameliorations SEO & UX

- [x] **16. Creer les pages barrios** — 5 pages locales creees : Eixample, Gracia, Born, Sarria, Poblenou. Contenu unique par quartier, Schema.org LocalBusiness, FAQ specifiques.

- [ ] **17. Ajouter Schema.org sur les articles de blog** — Les pages MDX blog n'ont pas de JSON-LD Article/BlogPosting.

- [ ] **18. Ajouter Schema.org sur les etudes de cas** — Les pages projets/MDX n'ont pas de JSON-LD CreativeWork.

- [ ] **19. Creer `error.tsx`** — Pas de page d'erreur globale (500). Creer `src/app/error.tsx` avec un message utile en espagnol.

- [ ] **20. Ajouter les balises hreflang** — Le site vise ES/EN mais aucune balise d'alternance linguistique. Important si les pages EN restent.

- [ ] **21. Optimiser le chargement des fonts** — `font-display: block` dans base.css. Passer a `font-display: swap` pour eviter le FOIT (Flash of Invisible Text).

- [ ] **22. Ajouter un banner de consentement cookies** — Meme si le site n'utilise que des cookies techniques, un banner est une bonne pratique UX/RGPD. Obligatoire si analytics ajoute.

- [ ] **23. Ajouter favicon et icones** — `favicon.ico` est declare dans le layout mais verifier sa presence. Ajouter `apple-touch-icon`, `manifest.json` pour PWA-readiness.

- [ ] **24. Ajouter alt text aux images projets** — `ProjectShowcase.tsx` et `HeroCarousel.tsx` ont des alt="" vides sur certaines images.

- [x] **25. Lien politique de confidentialite dans le footer** — Ajouter le lien vers `/politica-privacidad/` une fois la page creee.

---

### NICE TO HAVE — Post-lancement

- [ ] **26. Pages barrios supplementaires** — Etendre a d'autres quartiers de Barcelone.
- [ ] **27. Monitoring d'erreurs** — Integrer Sentry ou equivalent.
- [ ] **28. Tests automatises** — Aucun test configure. Ajouter au minimum des tests de build/lint en CI.
- [ ] **29. Lighthouse CI** — Ajouter des checks automatiques de performance/accessibilite.
- [ ] **30. Contenu blog regulier** — Strategie de contenu pour le SEO organique.

---

## RESUME PAR STATUT

| Categorie | Statut | Detail |
|-----------|--------|--------|
| Pages services (14) | OK | Contenu complet, Schema.org, pricing, FAQ |
| Etudes de cas (7) | OK | Contenu reel, images WebP, temoignages |
| Avant/Apres (7) | OK | Galeries photos reelles |
| Page prix | OK | 14 services avec vrais tarifs |
| Temoignages (40+) | OK | Contenus authentiques |
| Pages legales | OK | Aviso legal, conditions, cookies, politique de confidentialite |
| Blog (3 articles) | KO | Contenu template anglais non remplace |
| Pages EN (about, process, contact) | OK | Supprimees (aucun lien interne, `/contacto/` existe) |
| SEO technique | OK | robots.txt, sitemap, OG tags, Twitter Cards et canonicals OK |
| Formulaires | OK | Resend API, validation, honeypot, rate limiting, confirmation client |
| Analytics | KO | Aucun tracking |
| Securite | KO | Aucun header de securite |
| Pages barrios | KO | Non creees (prevues dans l'architecture) |

---

## FICHIERS CLES A MODIFIER/CREER

| Fichier | Action |
|---------|--------|
| `src/app/robots.ts` | CREER |
| `src/app/sitemap.ts` | CREER |
| `src/app/api/contact/route.ts` | CREER |
| `src/app/politica-privacidad/page.tsx` | CREER |
| `src/app/error.tsx` | CREER |
| `src/middleware.ts` | CREER (headers securite) |
| `src/app/layout.tsx` | MODIFIER (OG tags, Twitter cards, canonical) |
| `next.config.mjs` | MODIFIER (trailingSlash, headers) |
| `src/styles/base.css` | MODIFIER (font-display: swap) |
| `src/components/ProjectShowcase.tsx` | MODIFIER (alt text) |
| `src/app/contact/page.tsx` | ~~SUPPRIME~~ |
| `src/app/about/page.tsx` | ~~SUPPRIME~~ |
| `src/app/process/page.tsx` | ~~SUPPRIME~~ |
| `src/app/blog/*/page.mdx` | REMPLACER (3 articles) |
