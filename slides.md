---
theme: default
title: "L'Automatisation de l'Audit SEO par l'Intelligence Artificielle"
author: Mohamad Aymen Charichi
transition: fade
colorSchema: dark
themeConfig:
  primary: '#6366f1'
fonts:
  sans: Inter
  mono: 'JetBrains Mono'
---

---
layout: cover
class: text-center
---

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0 }">

# L'Automatisation de l'Audit SEO<br>par l'Intelligence Artificielle

<p class="aiq-subtitle mt-4">Conception de la plateforme AuditIQ & évaluation de son impact sur la performance digitale des PME marocaines</p>

</div>

<div class="aiq-divider" style="max-width: 420px; margin: 2.5rem auto;"></div>

<div class="flex flex-col items-center gap-3">
  <div style="color: var(--aiq-text); font-weight: 600; font-size: 1.15rem;">Mohamad Aymen Charichi</div>
  <span class="aiq-chip">Sous la direction de M. Zakaria El Bakirdi</span>
</div>

<p class="aiq-meta mt-8">Université Mohammed V de Rabat — FSJES Souissi<br>Master Marketing Digital et E-commerce · Année Universitaire 2025-2026</p>

---
layout: default
---

# Plan de la soutenance

<div class="grid grid-cols-2 gap-4 mt-6">

<div v-click class="aiq-card">

<span class="aiq-chip">I</span>

### Contexte & problématique
<p class="aiq-meta">Le paradoxe digital des PME marocaines</p>

</div>

<div v-click class="aiq-card">

<span class="aiq-chip aiq-chip-cyan">II</span>

### AuditIQ — l'architecture technique
<p class="aiq-meta">Trois moteurs, une plateforme</p>

</div>

<div v-click class="aiq-card">

<span class="aiq-chip aiq-chip-green">III</span>

### Étude empirique
<p class="aiq-meta">42 PME, 13 semaines, des résultats mesurables</p>

</div>

<div v-click class="aiq-card">

<span class="aiq-chip aiq-chip-amber">IV</span>

### Limites & perspectives
<p class="aiq-meta">Ce que ça ne prouve pas encore, et la suite</p>

</div>

</div>

<!--
Un clic par partie : nommer chaque partie à voix haute avant qu'elle apparaisse à l'écran.
-->

---
layout: default
---

# L'évolution du SEO

<p class="aiq-subtitle">Des mots-clés aux LLM : 15 ans de transformation</p>

<div class="aiq-divider" style="max-width: 320px; margin: 1.25rem 0 1.75rem;"></div>

<div class="grid grid-cols-5 gap-3 mt-2" style="position: relative;">

<div style="position: absolute; top: 14px; left: 8%; right: 8%; height: 2px; background: linear-gradient(90deg, #06b6d4 0%, #6366f1 35%, #8b5cf6 65%, #22c55e 90%, #f59e0b 100%); z-index: 0;"></div>

<div style="position: absolute; top: 9px; left: calc(10% - 6px); width: 12px; height: 12px; border-radius: 50%; background: #06b6d4; box-shadow: 0 0 8px rgba(6, 182, 212, 0.6); z-index: 1;"></div>
<div style="position: absolute; top: 9px; left: calc(30% - 6px); width: 12px; height: 12px; border-radius: 50%; background: #06b6d4; box-shadow: 0 0 8px rgba(6, 182, 212, 0.6); z-index: 1;"></div>
<div style="position: absolute; top: 9px; left: calc(50% - 6px); width: 12px; height: 12px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px rgba(34, 197, 94, 0.6); z-index: 1;"></div>
<div style="position: absolute; top: 9px; left: calc(70% - 6px); width: 12px; height: 12px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px rgba(34, 197, 94, 0.6); z-index: 1;"></div>
<div style="position: absolute; top: 9px; left: calc(90% - 6px); width: 12px; height: 12px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 8px rgba(245, 158, 11, 0.6); z-index: 1;"></div>

<div v-click class="aiq-card" style="padding: 2rem 0.75rem 0.9rem; position: relative; z-index: 2; margin-top: 0.5rem;">

<span class="aiq-chip aiq-chip-cyan" style="font-size: 0.7rem;">2011</span>

### Panda

<p class="aiq-meta" style="font-size: 0.78rem; margin-top: 0.4rem;">Qualité du contenu</p>

</div>

<div v-click class="aiq-card" style="padding: 2rem 0.75rem 0.9rem; position: relative; z-index: 2; margin-top: 0.5rem;">

<span class="aiq-chip aiq-chip-cyan" style="font-size: 0.7rem;">2015</span>

### RankBrain

<p class="aiq-meta" style="font-size: 0.78rem; margin-top: 0.4rem;">Machine learning</p>

</div>

<div v-click class="aiq-card" style="padding: 2rem 0.75rem 0.9rem; position: relative; z-index: 2; margin-top: 0.5rem;">

<span class="aiq-chip aiq-chip-green" style="font-size: 0.7rem;">2019</span>

### BERT

<p class="aiq-meta" style="font-size: 0.78rem; margin-top: 0.4rem;">Contexte bidirectionnel</p>

</div>

<div v-click class="aiq-card" style="padding: 2rem 0.75rem 0.9rem; position: relative; z-index: 2; margin-top: 0.5rem;">

<span class="aiq-chip aiq-chip-green" style="font-size: 0.7rem;">2022</span>

### HCU

<p class="aiq-meta" style="font-size: 0.78rem; margin-top: 0.4rem;">Contenu utile</p>

</div>

<div v-click class="aiq-card" style="padding: 2rem 0.75rem 0.9rem; position: relative; z-index: 2; margin-top: 0.5rem;">

<span class="aiq-chip aiq-chip-amber" style="font-size: 0.7rem;">2024+</span>

### LLMs

<p class="aiq-meta" style="font-size: 0.78rem; margin-top: 0.4rem;">IA générative</p>

</div>

</div>

<!--
Un clic par étape : nommer l'algorithme, l'année, et l'apport clé avant de cliquer.
-->

---
layout: fact
---

# Le paradoxe marocain

<div class="flex flex-col items-center gap-6">

<div v-click class="aiq-stat" style="min-width: 360px;">

  <div class="num">68 %</div>
  <div class="lbl">des PME marocaines n'ont pas de site web fonctionnel</div>

</div>

<div v-click class="aiq-card" style="max-width: 720px; border-left: 3px solid var(--aiq-accent);">

<p style="font-size: 1.05rem; line-height: 1.5; margin: 0;">109 % de pénétration Internet · 34 millions d'utilisateurs 4G…<br>et pourtant, la transformation digitale ne suit pas au niveau des PME.</p>

</div>

</div>

<!--
Présenter le chiffre d'abord (silence 2s), puis le paradoxe macro-vs-PME.
Source : Chapitre 2, notre analyse documentaire du tissu PME marocain.
-->

---
layout: quote
---

# Problématique

<div v-click>
<span class="aiq-chip aiq-chip-cyan">Question centrale · Chapitre 1</span>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }" class="aiq-gradient-border mt-8" style="padding: 2.75rem 3.5rem 2.5rem; position: relative; background: linear-gradient(160deg, rgba(99, 102, 241, 0.08), rgba(6, 182, 212, 0.04));">

<div style="position: absolute; top: 1.25rem; left: 1.5rem; font-size: 4.5rem; line-height: 1; font-weight: 900; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #06b6d4 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; opacity: 0.3; pointer-events: none; user-select: none;">«</div>

<div style="position: absolute; bottom: 0.5rem; right: 1.5rem; font-size: 4.5rem; line-height: 1; font-weight: 900; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #06b6d4 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; opacity: 0.3; pointer-events: none; user-select: none;">»</div>

<blockquote style="margin: 0; padding: 0 1rem; font-size: 1.55rem; line-height: 1.6; color: var(--aiq-text); font-weight: 400; font-style: normal; border: none; letter-spacing: -0.005em; background: transparent; text-align: center;">

Dans quelle mesure l'automatisation de l'audit SEO par l'Intelligence Artificielle, couplée à une analyse sémantique avancée, peut-elle <span style="color: var(--aiq-glow); font-weight: 600;">pallier les limites techniques et stratégiques des PME marocaines</span> dans leur quête de visibilité en ligne ?

</blockquote>

</div>

<div v-click class="flex items-center justify-end gap-4 mt-12">

<div style="height: 2px; width: 100px; background: linear-gradient(90deg, transparent, var(--aiq-glow), transparent); border-radius: 2px;"></div>

<p style="text-align: right; margin: 0; font-size: 0.95rem; font-style: italic; color: var(--aiq-text-mute); font-weight: 500; letter-spacing: 0.02em;">Notre recherche · 2026</p>

</div>

<!--
Citer la phrase au complet, sans coupure, à voix haute. C'est la question qui structure tout le mémoire.
-->

---
layout: default
---

# Trois sous-questions de recherche

<p class="aiq-subtitle">Un parcours investigatif en trois dimensions</p>

<div class="aiq-divider" style="max-width: 320px; margin: 0.75rem 0 0.75rem;"></div>

<div class="flex flex-col gap-2">

<div v-click class="aiq-card" style="padding: 0.6rem 1rem;">

<span class="aiq-chip aiq-chip-cyan">SQ1 · Technique</span>

<p style="margin: 0.35rem 0 0; font-size: 0.82rem; line-height: 1.3;">Comment les techniques d'extraction de données adaptées aux sites JavaScript-heavy peuvent-elles être optimisées pour permettre un audit SEO complet et précis malgré les contraintes de budget de crawl et de capacité de calcul des PME ?</p>

</div>

<div v-click class="aiq-card" style="padding: 0.6rem 1rem;">

<span class="aiq-chip aiq-chip-green">SQ2 · Linguistique</span>

<p style="margin: 0.35rem 0 0; font-size: 0.82rem; line-height: 1.3;">Dans quelle mesure les modèles de langage naturel peuvent-ils être adaptés pour détecter et classifier l'intention de recherche des utilisateurs marocains, tenant compte du multilinguisme et des spécificités culturelles locales ?</p>

</div>

<div v-click class="aiq-card" style="padding: 0.6rem 1rem;">

<span class="aiq-chip aiq-chip-amber">SQ3 · Managérial</span>

<p style="margin: 0.35rem 0 0; font-size: 0.82rem; line-height: 1.3;">Quel est l'impact technique mesurable de l'implémentation des recommandations générées par un outil d'audit SEO basé sur l'IA sur les scores globaux d'optimisation et les Core Web Vitals des PME marocaines, dans le cadre d'une simulation de 13 semaines ?</p>

</div>

</div>

<!--
Trois dimensions complémentaires : technique (extraction), linguistique (intention), managérial (ROI). Un clic par question, lire l'intitulé à voix haute.
-->

---
layout: default
---

# Hypothèses de recherche

<p class="aiq-subtitle">Trois propositions vérifiables, une par dimension</p>

<div class="aiq-divider" style="max-width: 320px; margin: 1.25rem 0 1.75rem;"></div>

<div class="grid grid-cols-3 gap-4 mt-2">

<div v-click class="aiq-card">

<span class="aiq-chip">H1</span>

<p class="aiq-meta" style="margin-top: 0.5rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;">métrique d'évaluation</p>

<p style="margin: 0.65rem 0 0; font-size: 0.95rem; line-height: 1.45;">L'utilisation d'AuditIQ améliore significativement le score SEO global des PME après 12 semaines.</p>

</div>

<div v-click class="aiq-card">

<span class="aiq-chip aiq-chip-cyan">H2</span>

<p class="aiq-meta" style="margin-top: 0.5rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;">efficacité opérationnelle</p>

<p style="margin: 0.65rem 0 0; font-size: 0.95rem; line-height: 1.45;">L'automatisation de l'audit technique se traduit par une amélioration significative des Core Web Vitals (LCP, FCP, CLS).</p>

</div>

<div v-click class="aiq-card">

<span class="aiq-chip aiq-chip-green">H3</span>

<p class="aiq-meta" style="margin-top: 0.5rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;">pertinence contextuelle</p>

<p style="margin: 0.65rem 0 0; font-size: 0.95rem; line-height: 1.45;">L'ampleur des améliorations varie selon le secteur d'activité, avec un avantage particulier pour le secteur du e-commerce.</p>

</div>

</div>

<!--
H1 = score SEO, H2 = Core Web Vitals, H3 = secteur. Chaque hypothèse est testée dans la PoC de 13 semaines.
-->

---
layout: default
---

# Méthodologie

<p class="aiq-subtitle">Design Science Research & recherche-action</p>

<div class="aiq-divider" style="max-width: 320px; margin: 1.1rem 0 1.1rem;"></div>

<div class="grid grid-cols-2 gap-4">

<div v-click class="aiq-card" style="padding: 0.85rem 1.2rem;">

<span class="aiq-chip aiq-chip-cyan">Approche</span>

<p style="margin: 0.5rem 0 0; font-size: 0.92rem; line-height: 1.4;">Design Science Research couplée à la recherche-action en ingénierie des systèmes d'information. Cycle itératif en 5 phases (diagnostic, planification, intervention, évaluation, apprentissage) selon Staron (2025).</p>

</div>

<div v-click class="aiq-card" style="padding: 0.85rem 1.2rem;">

<span class="aiq-chip aiq-chip-green">PoC</span>

<p style="margin: 0.5rem 0 0; font-size: 0.92rem; line-height: 1.4;">Protocole quasi-expérimental simulé. 42 scénarios de PME, durée de 13 semaines, mesures T0/T3 (scores SEO, Core Web Vitals). Analyse statistique sous R : tests t appariés, ANOVA.</p>

</div>

</div>

<div v-click class="aiq-card" style="margin-top: 0.75rem; padding: 0.85rem 1.2rem; border-left: 3px solid var(--aiq-danger); background: linear-gradient(160deg, rgba(239, 68, 68, 0.10), rgba(239, 68, 68, 0.04));">

<span class="aiq-chip aiq-chip-red">⚠ Note méthodologique</span>

<p style="margin: 0.5rem 0 0; font-size: 1.0rem; line-height: 1.4; font-weight: 600;">Simulation calibrée, pas de PME réelles.</p>

<p style="margin: 0.45rem 0 0; font-size: 0.88rem; line-height: 1.4; color: var(--aiq-text-mute);">Les 42 scénarios sont générés synthétiquement à partir des distributions de performance documentées dans la littérature, assurant un réalisme statistique ancré dans les données terrain du marché marocain.</p>

</div>

<!--
L'approche et le PoC d'abord, puis la mention obligatoire en dernier — non négociable, à dire à voix haute.
-->

---
layout: section
---

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">

<span class="aiq-chip aiq-chip-cyan">Partie II</span>

# AuditIQ

### L'architecture technique

<p class="aiq-meta mt-4">Trois moteurs, une plateforme</p>

</div>

---
layout: default
---

# Les 3 moteurs d'AuditIQ

```mermaid {theme: 'dark', scale: 0.43}
flowchart LR
    A(["Site web<br/>d'une PME"]) --> B["Ninja Scraper<br/>Puppeteer furtif"]
    B --> C{"WAF détecté ?<br/>Cloudflare · Akamai"}
    C -->|Non| D["Cognitive Engine<br/>Qwen 3.5 · PLIM"]
    C -->|Oui| E["Attente active ≤15s<br/>+ rotation IP/UA"]
    E --> F{"Qwen 3.5<br/>répond ?"}
    D --> F
    F -->|Oui| G{"Confiance PLIM<br/>≥ 0,3 ?"}
    F -->|Échec| H["Dégradation gracieuse<br/>recos vides + avertissement"]
    G -->|Oui| I["Forensic Engine<br/>Core Web Vitals"]
    G -->|Non| J["Intention indéterminée<br/>vers analyse manuelle"]
    K[("PageSpeed Insights<br/>API Google")] --> I
    H --> I
    J -.-> I
    I --> L(["Rapport d'audit<br/>+ recommandations"])

    classDef indigo fill:#0f1030,stroke:#6366f1,color:#c7d2fe,font-weight:bold
    classDef violet fill:#2a1a55,stroke:#8b5cf6,color:#ddd6fe,font-weight:bold
    classDef amber  fill:#3a2a0a,stroke:#f59e0b,color:#fde68a,font-weight:bold

    class A,L,K indigo
    class B,D,I,C,F,G violet
    class E,H,J amber
```

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="aiq-card">

**Extraction**
<p class="aiq-meta">DOM rendu, même sur les sites React/Next.js</p>

</div>

<div v-click class="aiq-card">

**Analyse sémantique**
<p class="aiq-meta">Intention de recherche, densité informationnelle</p>

</div>

<div v-click class="aiq-card">

**Diagnostic technique**
<p class="aiq-meta">LCP, FCP, CLS — mesurés, pas estimés</p>

</div>

</div>

<!--
Laisser le diagramme respirer avant de commenter. Un clic par carte, dans l'ordre du flux : "extraction" en pointant Ninja Scraper, "analyse" en pointant Cognitive Engine, "diagnostic" en pointant Forensic Engine.
-->

---
layout: default
---

# Ninja Scraper

<p class="aiq-subtitle">Extraction furtive, même quand le site se dérobe</p>

<div v-click style="margin-top: 0.75rem; margin-bottom: 0.6rem;">
<span class="aiq-term-prompt-bar">~ audit.run --ninja --stealth</span>
</div>

<div class="mt-2">

<div v-click class="aiq-term-card aiq-term-cyan mb-3">

<span class="aiq-term-step">[01]</span>

<div class="aiq-term-line">
<span class="aiq-term-prompt">&gt;</span>
<span>Puppeteer, pas un simple fetch HTTP</span>
</div>
<p class="aiq-term-comment"># Un scraper HTTP classique ne voit que le HTML brut envoyé par le serveur — vide ou quasi vide sur un site React/Next.js, où le contenu s'affiche seulement après exécution du JavaScript côté client.</p>

</div>

<div v-click class="aiq-term-card aiq-term-green mb-3">

<span class="aiq-term-step">[02]</span>

<div class="aiq-term-line">
<span class="aiq-term-prompt">&gt;</span>
<span>Rendu complet avant extraction</span>
</div>
<p class="aiq-term-comment"># Puppeteer pilote un vrai navigateur headless : il attend la fin du rendu côté client, puis extrait le DOM final — celui que voit réellement un visiteur humain, pas le squelette HTML de départ.</p>

</div>

<div v-click class="aiq-term-card aiq-term-amber">

<span class="aiq-term-step">[03]</span>

<div class="aiq-term-line">
<span class="aiq-term-prompt">&gt;</span>
<span>Furtivité</span>
</div>
<p class="aiq-term-comment"># Mesures anti-détection pour éviter le blocage par les pare-feux applicatifs que beaucoup d'hébergeurs activent par défaut.</p>

</div>

</div>

<!--
24% des PME de l'échantillon tournent sur React/Next.js (Table 4.2, présentée en Partie III) — exactement le cas où un scraper naïf échoue silencieusement. Rappel optionnel, pas obligatoire à ce stade.
-->

---
layout: default
---

# Cognitive Engine

<p class="aiq-subtitle mb-3">Qwen 3.5-32B comme moteur de raisonnement sémantique</p>

<div v-click style="margin-bottom: 0.8rem;">
  <span class="aiq-chip aiq-chip-cyan">MMLU 87,8</span>
  <span class="aiq-chip aiq-chip-cyan" style="margin-left: 0.4rem;">119 langues</span>
  <span class="aiq-chip" style="margin-left: 0.4rem;">T = 0,4</span>
  <span class="aiq-chip aiq-chip-green" style="margin-left: 0.4rem;">10× moins cher que GPT-4</span>
</div>

<div class="aiq-pipeline">
  <div class="aiq-pipeline-track"></div>

  <div class="aiq-pipeline-step" v-click style="--step-color: var(--aiq-primary);">
    <div class="aiq-pipeline-node">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 5h16l-6 7.5V19l-4 2v-8.5L4 5z"/>
      </svg>
    </div>
    <div class="aiq-pipeline-num">01</div>
    <div class="aiq-pipeline-label">Pré-traitement</div>
    <p class="aiq-pipeline-desc">DOM nettoyé,<br/>bruit UI filtré</p>
  </div>

  <div class="aiq-pipeline-step" v-click style="--step-color: var(--aiq-secondary);">
    <div class="aiq-pipeline-fill" style="--fill-w: 25%; --fill-grad: linear-gradient(90deg, var(--aiq-primary), var(--aiq-secondary));"></div>
    <div class="aiq-pipeline-node">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 5.5h16v10H10l-4 3.5v-3.5H4v-10z"/>
        <path d="M8 9.5h8M8 12.5h5"/>
      </svg>
    </div>
    <div class="aiq-pipeline-num">02</div>
    <div class="aiq-pipeline-label">Prompt</div>
    <p class="aiq-pipeline-desc">Système + données<br/>JSON contraint</p>
  </div>

  <div class="aiq-pipeline-step aiq-pipeline-hero" v-click style="--step-color: var(--aiq-glow);">
    <div class="aiq-pipeline-fill" style="--fill-w: 50%; --fill-grad: linear-gradient(90deg, var(--aiq-primary), var(--aiq-secondary) 50%, var(--aiq-glow));"></div>
    <div class="aiq-pipeline-node">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1.5"/>
        <rect x="9.5" y="9.5" width="5" height="5" rx="0.5"/>
        <path d="M9 2.5V6M12 2.5V6M15 2.5V6M9 18V21.5M12 18V21.5M15 18V21.5M2.5 9H6M2.5 12H6M2.5 15H6M18 9H21.5M18 12H21.5M18 15H21.5"/>
      </svg>
    </div>
    <div class="aiq-pipeline-num">03</div>
    <div class="aiq-pipeline-label">Inférence</div>
    <p class="aiq-pipeline-desc">Qwen 3.5 via Ollama<br/>(timeout 120s)</p>
  </div>

  <div class="aiq-pipeline-step" v-click style="--step-color: var(--aiq-accent);">
    <div class="aiq-pipeline-fill" style="--fill-w: 75%; --fill-grad: linear-gradient(90deg, var(--aiq-primary), var(--aiq-secondary) 33%, var(--aiq-glow) 66%, var(--aiq-accent));"></div>
    <div class="aiq-pipeline-node">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="8.5"/>
        <path d="M8.2 12.3l2.6 2.6 5-5.6"/>
      </svg>
    </div>
    <div class="aiq-pipeline-num">04</div>
    <div class="aiq-pipeline-label">Post-traitement</div>
    <p class="aiq-pipeline-desc">Parsing JSON,<br/>validation, fallbacks</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-4" style="transform: scale(0.85); transform-origin: top center; margin-bottom: -2rem;">

<div v-click class="aiq-card" style="border-left: 3px solid var(--aiq-accent);">

<span class="aiq-chip aiq-chip-cyan">PLIM</span>
<p style="font-size: 0.95rem; margin: 0.55rem 0 0.3rem; font-weight: 600;">Probabilistic Latent Intent Matrix</p>
<p class="aiq-meta" style="font-size: 0.82rem; line-height: 1.45; margin: 0;">Vecteur d'intentions probabiliste multi-étiquettes — étend Broder (2002) en capturant la nature hybride des requêtes modernes. Lexiques multilingues : <strong>FR · AR · EN</strong>.</p>

</div>

<div v-click class="aiq-card" style="border-left: 3px solid #22c55e;">

<span class="aiq-chip aiq-chip-green">IGD</span>
<p style="font-size: 0.95rem; margin: 0.55rem 0 0.3rem; font-weight: 600;">Information Gain Density</p>
<p class="aiq-meta" style="font-size: 0.82rem; line-height: 1.45; margin: 0;">Score propriétaire (théorie de Shannon) mesurant la densité informationnelle du contenu face au <strong>top 10 SERP</strong> — récompense les "fringe entities" qui différencient la page.</p>

</div>

</div>

<!--
PLIM : l'abstract dit "Pertinence, Longueur, Intention, Mots-clés", le chapitre 3.3.3 dit "Probabilistic Latent Intent Matrix" — cette 2e définition est utilisée ici (avec modèle réel). Anticiper la question si un membre du jury a lu l'abstract de près.

IGD : pas de formule IGD affichée à l'écran, par prudence — la formule (3.6) existe au chapitre 3.3.2, le slide se contente d'expliquer l'intuition. Le mot "fringe entities" vient directement du §3.3.2.

Inférence via Ollama : confirmé au §4.x (module aiRecommender.js) — l'API est locale, ce qui justifie le 10× moins cher et la contrainte GPU.

La matrice de classification d'intention (TOFU/MOFU/BOFU/Nav + lexiques FR/AR) est traitée sur le slide suivant pour laisser ce slide-ci respirer.
-->

---
layout: two-cols
---

# Forensic Engine

<p class="aiq-subtitle mb-6">Ce qui est mesuré, pas estimé</p>

<div class="flex flex-col gap-3">

<div v-click class="aiq-card" style="padding: 0.75rem 1.1rem; margin-right: 1.25rem;">
<span class="aiq-chip">LCP</span>
<p class="aiq-meta mt-1" style="font-size: 0.85rem; line-height: 1.35;">Largest Contentful Paint — temps d'affichage du plus grand élément visible</p>
</div>

<div v-click class="aiq-card" style="padding: 0.75rem 1.1rem; margin-right: 1.25rem;">
<span class="aiq-chip aiq-chip-cyan">FCP</span>
<p class="aiq-meta mt-1" style="font-size: 0.85rem; line-height: 1.35;">First Contentful Paint — premier affichage de contenu textuel ou visuel</p>
</div>

<div v-click class="aiq-card" style="padding: 0.75rem 1.1rem; margin-right: 1.25rem;">
<span class="aiq-chip aiq-chip-green">CLS</span>
<p class="aiq-meta mt-1" style="font-size: 0.85rem; line-height: 1.35;">Cumulative Layout Shift — stabilité visuelle pendant le chargement</p>
</div>

</div>

::right::

<div class="mt-4">

**Infrastructure — 5 microservices, Docker**

<p class="aiq-meta mb-4">React 19 + Vite · Node.js + Express · Puppeteer · API Qwen 3.5 · MongoDB Atlas M0</p>

<div class="aiq-stat mt-6">
  <div class="num">0–10€</div>
  <div class="lbl">Hébergement par mois</div>
</div>

<p class="aiq-meta mt-2">Contre 50–100€/mois pour un outil SaaS équivalent — réduction de 80 à 90%</p>

</div>

<!--
Le contraste "mesuré, pas estimé" mérite d'être dit à voix haute : beaucoup d'outils SEO grand public affichent des scores de performance sans jamais faire tourner Lighthouse — ici les 3 métriques sont calculées directement, pas approximées.
-->

---
layout: section
---

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">

<span class="aiq-chip aiq-chip-green">Partie III</span>

# Étude empirique

### Validation d'AuditIQ auprès de 42 PME marocaines

<p class="aiq-meta mt-4">42 PME, 13 semaines, des résultats mesurables</p>

</div>

---
layout: default
---

# Protocole expérimental

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="aiq-card text-center">
<div class="aiq-stat">
  <div class="num">18</div>
  <div class="lbl">E-commerce</div>
</div>
</div>

<div class="aiq-card text-center">
<div class="aiq-stat">
  <div class="num">12</div>
  <div class="lbl">Tourisme</div>
</div>
</div>

<div class="aiq-card text-center">
<div class="aiq-stat">
  <div class="num">12</div>
  <div class="lbl">Services B2B</div>
</div>
</div>

</div>

<div class="flex items-center justify-center gap-4 mt-8">
  <span class="aiq-chip">T0 — référence</span>
  <span class="aiq-meta">13 semaines</span>
  <span class="aiq-chip aiq-chip-cyan">T3 — mesure finale</span>
</div>

<div class="aiq-gradient-border mt-8">

**Note méthodologique**
<p class="aiq-meta mt-2">N=42 scénarios de PME marocaines générés par simulation computationnelle calibrée sur des distributions documentées dans la littérature — pas d'entreprises réelles. Ce choix, assumé et justifié en Partie I, limite la portée des résultats à une validation de cohérence interne d'AuditIQ.</p>

</div>

---
layout: fact
---

# 47,3/100

<p class="aiq-subtitle">Score SEO moyen à T0</p>

<p class="aiq-meta mt-6">LCP moyen : 6,2s — plus de deux fois le seuil Google (2,5s)</p>

---
layout: statement
---

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">

# AuditIQ améliore significativement<br>la performance SEO mesurée

</div>

<div class="flex items-center justify-center gap-6 mt-10">
  <div class="aiq-stat">
    <div class="num">47,3 → 68,9</div>
    <div class="lbl">Score SEO / 100</div>
  </div>
</div>

<p class="aiq-meta mt-6">+21,6 points · p < 0,001 · d = 1,68 (effet très large) · N = 42, T0 → T3</p>

---
layout: default
class: aiq-cwv
---

# Core Web Vitals — T0 → T3

| Métrique | T0 | T3 | Δ | Signification |
|---|---|---|---|---|
| **LCP** | 6,2s | 3,1s | −3,1s | p < 0,001 |
| **FCP** | 3,8s | 2,1s | −1,7s | p < 0,001 |
| **CLS** | 0,21 | 0,09 | −0,12 | p < 0,001 |

<div class="grid grid-cols-2 gap-4 mt-8">

<div v-click class="aiq-card">
<span class="aiq-chip aiq-chip-cyan">LCP ≤ 2,5s</span>
<p class="aiq-meta mt-2">17% des sites à T0 → 67% à T3</p>
</div>

<div v-click class="aiq-card">
<span class="aiq-chip aiq-chip-green">CLS ≤ 0,1</span>
<p class="aiq-meta mt-2">74% des sites atteignent le seuil à T3</p>
</div>

</div>

---
layout: two-cols
---

# Analyse sectorielle

<div class="flex flex-col gap-3 mt-4">

<div v-click class="aiq-card" style="margin-right: 1.25rem;">
<div class="flex items-center justify-between">
<span class="aiq-chip aiq-chip-cyan">E-commerce</span>
<span style="color: var(--aiq-text); font-weight: 700; font-size: 1.3rem;">+24,3</span>
</div>
</div>

<div v-click class="aiq-card" style="margin-right: 1.25rem;">
<div class="flex items-center justify-between">
<span class="aiq-chip">Tourisme</span>
<span style="color: var(--aiq-text); font-weight: 700; font-size: 1.3rem;">+19,8</span>
</div>
</div>

<div v-click class="aiq-card" style="margin-right: 1.25rem;">
<div class="flex items-center justify-between">
<span class="aiq-chip aiq-chip-amber">Services B2B</span>
<span style="color: var(--aiq-text); font-weight: 700; font-size: 1.3rem;">+18,1</span>
</div>
</div>

</div>

::right::

<div class="mt-8" style="margin-left: 0.5rem;">

<div v-click class="aiq-stat" style="min-width: 0;">

  <div class="num">p = 0,024</div>
  <div class="lbl">ANOVA · F = 4,12 · effet sectoriel</div>

</div>

<div v-click class="mt-6">

<p class="aiq-subtitle" style="font-size: 1rem;">Là où l'écart se confirme</p>

<div class="flex items-center gap-2 mt-3" style="font-size: 0.88rem;">
  <span class="aiq-chip aiq-chip-green">✓ E-com. vs B2B</span>
  <span class="aiq-meta">p = 0,018</span>
</div>

<div class="flex items-center gap-2 mt-2" style="font-size: 0.88rem;">
  <span class="aiq-chip aiq-chip-red">✗ Tourisme vs B2B</span>
  <span class="aiq-meta">p = 0,34</span>
</div>

</div>

<p v-click class="aiq-meta mt-6" style="font-size: 0.9rem; line-height: 1.4;">L'avantage e-commerce est réel, mais il ne se généralise pas : AuditIQ aide tous les secteurs, l'e-commerce en bénéficie davantage.</p>

</div>

---
layout: default
---

# Validation des hypothèses

<div class="flex flex-col gap-4 mt-8">

<div v-click class="aiq-card">
<div class="flex items-center gap-3">
<span class="aiq-chip aiq-chip-green">H1 — validée</span>
<p class="aiq-meta">AuditIQ améliore significativement le score SEO (p < 0,001)</p>
</div>
</div>

<div v-click class="aiq-card">
<div class="flex items-center gap-3">
<span class="aiq-chip aiq-chip-green">H2 — validée</span>
<p class="aiq-meta">L'automatisation améliore significativement les Core Web Vitals (p < 0,001)</p>
</div>
</div>

<div v-click class="aiq-card">
<div class="flex items-center gap-3">
<span class="aiq-chip aiq-chip-amber">H3 — partiellement validée</span>
<p class="aiq-meta">L'e-commerce bénéficie davantage, mais les autres secteurs progressent aussi significativement</p>
</div>
</div>

</div>

---
layout: default
---

# Recommandations pour dirigeants de PME

<div class="grid grid-cols-2 gap-3 mt-3">

<div v-click class="aiq-card" style="padding: 0.2rem 0.5rem;">

**IA comme levier, pas substitut**
<p class="aiq-meta" style="font-size: 0.7rem; line-height: 1.25;">Validation humaine systématique — le modèle hybride obtient les meilleurs résultats</p>

</div>

<div v-click class="aiq-card" style="padding: 0.2rem 0.5rem;">

**Prioriser les "quick wins"**
<p class="aiq-meta" style="font-size: 0.7rem; line-height: 1.25;">HTTPS, 404, balises manquantes = 45% du gain total entre T0 et T1</p>

</div>

<div v-click class="aiq-card" style="padding: 0.2rem 0.5rem;">

**Monitoring continu**
<p class="aiq-meta" style="font-size: 0.7rem; line-height: 1.25;">Rituel hebdomadaire + revue stratégique mensuelle</p>

</div>

<div v-click class="aiq-card" style="padding: 0.2rem 0.5rem;">

**Anticiper la montée en compétence**
<p class="aiq-meta" style="font-size: 0.7rem; line-height: 1.25;">8 à 12h de formation initiale recommandées</p>

</div>

</div>

<div class="mt-8 flex justify-center">

<div style="font-size: 0.82rem; transform: scale(0.9); transform-origin: top center;">

| Phase | Semaines | Action |
|---|---|---|
| Diagnostic | 1–2 | Audit initial, priorisation |
| Corrections rapides | 3–4 | HTTPS, 404, balises |
| Optimisation | 5–8 | Contenu, structure |
| Consolidation | 9–12 | Suivi, ajustements |

</div>

</div>

<!--
Approche structurée (ce séquencement) : +23,4 points, contre +16,8 points pour une approche non structurée. Chiffre pour l'oral si le temps le permet, pas nécessaire à l'écran.
-->

---
layout: two-cols
---

# Limites

<p class="aiq-subtitle mb-4">Ce que la simulation ne capture pas — et ce qui reste à prouver</p>

<div style="transform: scale(0.86); transform-origin: top left; margin-bottom: -3.6rem;">

<div class="flex flex-col gap-2">

<div v-click class="aiq-card" style="padding: 0.6rem 0.9rem;">

**Échantillon & biais de sélection**
<p class="aiq-meta" style="font-size: 0.76rem; line-height: 1.35; margin: 0.15rem 0 0;">N=42 limite la puissance statistique sur les sous-groupes (80% effet moyen, 45% petit effet) ; échantillon de convenance, non représentatif des TPE et secteurs traditionnels.</p>

</div>

<div v-click class="aiq-card" style="padding: 0.6rem 0.9rem;">

**Durée limitée**
<p class="aiq-meta" style="font-size: 0.76rem; line-height: 1.35; margin: 0.15rem 0 0;">13 semaines ne suffisent pas à observer l'impact réel sur le trafic organique — les effets SEO se déploient généralement sur 3 à 6 mois.</p>

</div>

<div v-click class="aiq-card" style="padding: 0.6rem 0.9rem;">

**Pas de groupe de contrôle**
<p class="aiq-meta" style="font-size: 0.76rem; line-height: 1.35; margin: 0.15rem 0 0;">Impossible d'isoler l'effet propre d'AuditIQ des facteurs concurrents (mises à jour Google, saisonnalité, actions marketing parallèles).</p>

</div>

</div>

</div>

::right::

<div style="transform: scale(0.86); transform-origin: top left; margin-bottom: -3.6rem; padding-top: 131px;">

<div class="flex flex-col gap-2">

<div v-click class="aiq-card" style="padding: 0.6rem 0.9rem;">

**Données de laboratoire, pas de terrain**
<p class="aiq-meta" style="font-size: 0.76rem; line-height: 1.35; margin: 0.15rem 0 0;">Scores PageSpeed (labo) vs données réelles (RUM/CrUX) — le labo surestime généralement de 15 à 20% ; aucune donnée business réelle (trafic, conversion, ROI) collectée.</p>

</div>

<div v-click class="aiq-card" style="padding: 0.6rem 0.9rem;">

**Hallucinations de l'IA**
<p class="aiq-meta" style="font-size: 0.76rem; line-height: 1.35; margin: 0.15rem 0 0;">2,5% des recommandations (3 sur 120) — détectées et écartées par validation humaine, pas par le système lui-même.</p>

</div>

<div v-click class="aiq-card" style="padding: 0.6rem 0.9rem; border-left: 3px solid var(--aiq-warning); background: linear-gradient(160deg, rgba(245, 158, 11, 0.06), rgba(239, 68, 68, 0.03));">

**⚠ La limite fondamentale**
<p class="aiq-meta" style="font-size: 0.76rem; line-height: 1.35; margin: 0.15rem 0 0;">L'ensemble des résultats provient d'une <strong style="color: var(--aiq-text);">simulation calibrée, pas de PME réelles</strong>. Cela valide la cohérence interne d'AuditIQ — ce n'est pas encore une preuve d'impact en conditions réelles. Une étude longitudinale avec de vraies PME reste nécessaire.</p>

</div>

</div>

</div>

<!--
La carte "La limite fondamentale" a été déplacée d'un callout séparé (aiq-gradient-border) à une carte de la 2e colonne pour équilibrer la mise en page 3+3. Le contenu textuel est identique à la version précédente.

Distribution des cartes :
- Colonne gauche : Échantillon · Durée · Contrôle (les trois limites méthodologiques classiques d'une étude quasi-expérimentale)
- Colonne droite : Labo · Hallucinations · Limite fondamentale (les deux limites techniques + le disclaimer principal)

Le chip ⚠ et la bordure amber signalent que la 6e carte est le disclaimer central de la thèse — elle ne doit pas être lue comme une limite parmi d'autres mais comme la mise en garde globale.
-->

---
layout: default
---

# Perspectives — vers une V2

<div class="grid grid-cols-2 gap-4 mt-8">

<div v-click class="aiq-card">
<span class="aiq-chip aiq-chip-cyan">Données réelles</span>
<p class="aiq-meta mt-2">Intégration GA4 — combler l'écart entre scores de laboratoire et impact business réel</p>
</div>

<div v-click class="aiq-card">
<span class="aiq-chip">Positionnement</span>
<p class="aiq-meta mt-2">Tracking concurrentiel — situer chaque PME face à ses concurrents directs, pas seulement dans l'absolu</p>
</div>

<div v-click class="aiq-card">
<span class="aiq-chip aiq-chip-amber">Linguistique</span>
<p class="aiq-meta mt-2">Extension à la Darija — au-delà du français et de l'arabe standard, pour coller aux requêtes réellement tapées par les Marocains</p>
</div>

<div v-click class="aiq-card">
<span class="aiq-chip aiq-chip-green">Infrastructure</span>
<p class="aiq-meta mt-2">Passage à une architecture SaaS cloud — lever la contrainte du serveur GPU dédié pour Qwen 3.5</p>
</div>

</div>

---
layout: statement
---

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">

# L'automatisation de l'audit SEO par l'IA<br>est techniquement viable pour les PME marocaines

</div>

<p class="aiq-meta mt-8">AuditIQ démontre, à l'échelle d'une preuve de concept, qu'une architecture accessible (0–10€/mois) peut produire des gains mesurables et statistiquement significatifs — la prochaine étape est de le prouver sur le terrain, pas seulement en simulation.</p>

---
layout: end
---

# Merci

<p class="aiq-subtitle mt-4">Questions & discussion</p>

<p class="aiq-meta mt-12">Mohamad Aymen Charichi · AuditIQ<br>Sous la direction de M. Zakaria El Bakirdi</p>

