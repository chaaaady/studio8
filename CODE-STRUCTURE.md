# Structure du Code - Studio Emara

## 📁 Organisation des Fichiers

### Structure Principale
```
src/
├── pages/
│   └── index.astro          # Page principale (HTML structuré)
├── layouts/
│   └── Layout.astro         # Layout de base
├── styles/
│   ├── global.css           # Styles globaux
│   ├── design-system.css    # Système de design
│   └── components.css       # Animations et composants
└── lib/
    └── utils.ts             # Utilitaires

public/
├── js/
│   └── main.js              # JavaScript principal
└── images/                  # Assets statiques
```

## 🏗️ Architecture du Code

### 1. Séparation des Responsabilités

#### HTML (Astro)
- **Structure sémantique** : Utilisation appropriée des balises HTML5
- **Sections clairement définies** : Chaque section a un commentaire descriptif
- **Accessibilité** : Attributs ARIA et structure logique
- **Performance** : Images optimisées avec `loading="lazy"` et `decoding="async"`

#### CSS
- **Modularité** : Styles séparés par fonctionnalité
- **Design System** : Classes cohérentes et réutilisables
- **Animations** : Transitions fluides et optimisées
- **Responsive** : Mobile-first approach

#### JavaScript
- **Modularité** : Fonctions organisées par domaine
- **Configuration** : Variables centralisées
- **Performance** : Event listeners optimisés
- **Accessibilité** : Support clavier et navigation

### 2. Standards de Code Appliqués

#### Naming Conventions
```css
/* BEM-like naming pour les composants */
.today-component
.today-component__element
.today-component--modifier

/* Classes utilitaires */
.today-animate-stagger-1
.today-fade-in
```

#### Structure JavaScript
```javascript
// Configuration centralisée
const CONFIG = {
  PHONE_NUMBER: '0756812255',
  GALLERY_IMAGES: { /* ... */ }
};

// Fonctions organisées par domaine
function initializeMobileMenu() { /* ... */ }
function initializeAnimations() { /* ... */ }
function initializeGallery() { /* ... */ }
```

#### Commentaires et Documentation
```html
<!-- ===== SECTION NAME ===== -->
<section class="today-section">
  <!-- Section content -->
</section>
```

### 3. Optimisations de Performance

#### Images
- **Lazy loading** pour les images non critiques
- **Formats optimisés** (WebP, AVIF)
- **Tailles appropriées** pour chaque contexte

#### JavaScript
- **Intersection Observer** pour les animations
- **Event delegation** pour les interactions
- **Debouncing** pour les événements fréquents

#### CSS
- **GPU acceleration** pour les animations
- **Will-change** pour les éléments animés
- **Media queries** pour les préférences utilisateur

### 4. Accessibilité

#### Navigation
- **Support clavier** complet
- **Focus visible** sur tous les éléments interactifs
- **Navigation par tab** logique

#### Contenu
- **Alt text** descriptif pour les images
- **Structure sémantique** appropriée
- **Contraste** suffisant

#### Animations
- **Respect des préférences** `prefers-reduced-motion`
- **Alternatives** pour les utilisateurs malvoyants

### 5. Responsive Design

#### Breakpoints
```css
/* Mobile-first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

#### Composants Adaptatifs
- **Mobile menu** avec overlay
- **Grid responsive** pour les studios
- **Typography** adaptative

### 6. Gestion des États

#### Menu Mobile
```javascript
// États clairement définis
function openMobileMenu() { /* ... */ }
function closeMobileMenu() { /* ... */ }
function toggleMobileMenu() { /* ... */ }
```

#### Galerie
```javascript
// Variables d'état globales
let currentGallery = null;
let currentImageIndex = 0;
let galleryImages = [];
```

### 7. Sécurité

#### Validation
- **Sanitisation** des entrées utilisateur
- **Validation** côté client et serveur
- **Protection** contre les injections

#### Performance
- **CSP** (Content Security Policy)
- **HTTPS** obligatoire
- **Headers** de sécurité appropriés

## 🚀 Bonnes Pratiques

### Code Quality
1. **Lisibilité** : Code auto-documenté
2. **Maintenabilité** : Structure modulaire
3. **Réutilisabilité** : Composants génériques
4. **Testabilité** : Fonctions pures

### Performance
1. **Lazy loading** des ressources
2. **Minification** en production
3. **Compression** des assets
4. **Cache** approprié

### SEO
1. **Meta tags** optimisés
2. **Structure** sémantique
3. **Performance** Core Web Vitals
4. **Accessibilité** pour les crawlers

## 📋 Checklist de Qualité

- [ ] Code lisible et bien commenté
- [ ] Structure sémantique appropriée
- [ ] Responsive design testé
- [ ] Accessibilité validée
- [ ] Performance optimisée
- [ ] Sécurité vérifiée
- [ ] Tests fonctionnels
- [ ] Documentation à jour

## 🔧 Outils Recommandés

### Développement
- **ESLint** pour la qualité JavaScript
- **Prettier** pour le formatage
- **Stylelint** pour la qualité CSS

### Performance
- **Lighthouse** pour l'audit
- **WebPageTest** pour les métriques
- **Core Web Vitals** monitoring

### Accessibilité
- **axe-core** pour l'audit
- **NVDA** pour les tests lecteur d'écran
- **Keyboard navigation** testing 