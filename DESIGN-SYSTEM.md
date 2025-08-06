# 🎨 Design System Studio Emara

## Vue d'ensemble

Le design system unifié de Studio Emara centralise toutes les variables CSS et les classes utilitaires pour assurer une cohérence visuelle et faciliter les modifications futures.

## 📁 Structure des fichiers

```
src/styles/
├── design-system.css    # Design system principal
├── global.css          # Styles globaux (à migrer progressivement)
└── components.css      # Styles spécifiques aux composants
```

## 🎯 Avantages

- **Cohérence** : Variables centralisées pour couleurs, typographie, espacement
- **Maintenabilité** : Modifications globales en un seul endroit
- **Performance** : Classes utilitaires optimisées
- **Accessibilité** : Support du mode sombre et réductions de mouvement
- **Responsive** : Breakpoints et conteneurs standardisés

## 🚀 Utilisation

### 1. Import du design system

```css
@import './design-system.css';
```

### 2. Variables CSS

Toutes les variables sont préfixées par catégorie :

```css
/* Couleurs */
--color-primary: #007AFF;
--color-text-primary: #000000;

/* Typographie */
--font-size-lg: 1rem;
--font-weight-semibold: 600;

/* Espacement */
--space-4: 1rem;
--space-6: 1.5rem;

/* Rayons */
--radius-lg: 0.75rem;
--radius-xl: 1rem;
```

### 3. Classes utilitaires

#### Layout
```html
<div class="ds-container">Contenu centré (max-width: 72rem)</div>
<div class="ds-container-sm">Contenu centré (max-width: 56rem)</div>
<div class="ds-section">Section avec padding vertical</div>
```

#### Typographie
```html
<h1 class="ds-text-4xl ds-font-bold">Titre principal</h1>
<p class="ds-text-md ds-text-secondary">Texte secondaire</p>
<span class="ds-text-sm ds-font-medium">Label</span>
```

#### Couleurs
```html
<div class="ds-bg-primary">Fond principal</div>
<div class="ds-bg-card">Fond carte</div>
<p class="ds-text-primary">Texte principal</p>
<p class="ds-text-secondary">Texte secondaire</p>
```

#### Espacement
```html
<div class="ds-p-4">Padding 16px</div>
<div class="ds-px-6">Padding horizontal 24px</div>
<div class="ds-py-8">Padding vertical 32px</div>
<div class="ds-mt-4">Margin top 16px</div>
<div class="ds-mb-6">Margin bottom 24px</div>
```

#### Bordures et rayons
```html
<div class="ds-rounded-lg">Rayon 12px</div>
<div class="ds-rounded-xl">Rayon 16px</div>
<div class="ds-border ds-border-light">Bordure légère</div>
```

#### Ombres
```html
<div class="ds-shadow-card">Ombre carte</div>
<div class="ds-shadow-card-hover">Ombre carte hover</div>
<div class="ds-shadow-button">Ombre bouton</div>
```

#### Transitions
```html
<div class="ds-transition">Transition standard</div>
<div class="ds-transition-fast">Transition rapide</div>
<div class="ds-transition-colors">Transition couleurs uniquement</div>
```

#### Effets de flou
```html
<div class="ds-blur-md">Flou moyen</div>
<div class="ds-blur-lg">Flou important</div>
<div class="ds-glass">Effet glassmorphism</div>
```

### 4. Composants de base

#### Boutons
```html
<button class="ds-btn ds-btn-primary ds-btn-md">Bouton principal</button>
<button class="ds-btn ds-btn-secondary ds-btn-sm">Bouton secondaire</button>
<button class="ds-btn ds-btn-black ds-btn-lg">Bouton noir</button>
```

#### Cartes
```html
<div class="ds-card">
  <div class="ds-card-content">
    <h3 class="ds-text-xl ds-font-semibold">Titre carte</h3>
    <p class="ds-text-secondary ds-mt-2">Contenu de la carte</p>
  </div>
</div>
```

## 🔄 Migration depuis les anciens styles

### Avant (ancien système)
```css
.today-button-black {
  background-color: #000000;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
}
```

### Après (design system)
```css
.ds-btn.ds-btn-black.ds-btn-md {
  /* Utilise les variables du design system */
  background-color: var(--color-black);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-6);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
}
```

## 🎨 Personnalisation

### Modifier les couleurs
```css
:root {
  --color-primary: #FF6B35; /* Nouvelle couleur primaire */
  --color-primary-hover: #E55A2B;
}
```

### Modifier les rayons
```css
:root {
  --radius-lg: 1rem; /* Rayon plus important */
  --radius-xl: 1.5rem;
}
```

### Modifier l'espacement
```css
:root {
  --space-4: 1.25rem; /* Espacement plus généreux */
  --space-6: 2rem;
}
```

## 📱 Responsive

Le design system inclut des breakpoints standardisés :

```css
/* Mobile first */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 🌙 Mode sombre

Le design system gère automatiquement le mode sombre :

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-primary: var(--color-black);
    --color-text-primary: var(--color-white);
    /* ... autres variables */
  }
}
```

## ♿ Accessibilité

- Support de `prefers-reduced-motion`
- Contraste automatique en mode sombre
- Tailles de police accessibles
- Focus states inclus

## 🔧 Bonnes pratiques

1. **Utilisez les variables CSS** plutôt que des valeurs hardcodées
2. **Préférez les classes utilitaires** aux styles personnalisés
3. **Respectez la hiérarchie** des tailles et espacements
4. **Testez en mode sombre** et avec les réductions de mouvement
5. **Documentez les exceptions** au design system

## 📋 Checklist de migration

- [ ] Importer `design-system.css`
- [ ] Remplacer les couleurs hardcodées par des variables
- [ ] Utiliser les classes utilitaires pour l'espacement
- [ ] Standardiser les rayons de bordure
- [ ] Migrer les boutons vers les classes `ds-btn`
- [ ] Adapter les cartes avec `ds-card`
- [ ] Tester en mode sombre
- [ ] Vérifier l'accessibilité

## 🚀 Prochaines étapes

1. **Migration progressive** des composants existants
2. **Création de composants** spécifiques au design system
3. **Documentation interactive** avec Storybook
4. **Tests automatisés** de cohérence visuelle
5. **Système de tokens** pour les valeurs numériques 