# Studio Emara - Site Web Professionnel

Site web moderne et performant pour les Studios Emara, développé avec Astro et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne** inspiré d'App Store Today
- **Performance optimisée** avec Astro
- **Responsive design** mobile-first
- **Accessibilité** complète (WCAG 2.1)
- **Animations fluides** et optimisées
- **SEO optimisé** avec métadonnées structurées

## 📁 Structure du Projet

```
studio9-main/
├── src/
│   ├── pages/
│   │   └── index.astro          # Page principale
│   ├── layouts/
│   │   └── Layout.astro         # Layout de base
│   ├── styles/
│   │   ├── global.css           # Styles globaux
│   │   ├── design-system.css    # Système de design
│   │   └── components.css       # Animations et composants
│   └── lib/
│       └── utils.ts             # Utilitaires
├── public/
│   ├── js/
│   │   └── main.js              # JavaScript principal
│   └── images/                  # Assets statiques
├── .eslintrc.json               # Configuration ESLint
├── .prettierrc                  # Configuration Prettier
├── CODE-STRUCTURE.md            # Documentation de la structure
└── README.md                    # Ce fichier
```

## 🛠️ Technologies

- **Astro** - Framework web moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript ES6+** - Code moderne et optimisé
- **PostCSS** - Traitement CSS avancé

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/chaaaady/studio9.git
   cd studio9-main
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:4321
   ```

## 📋 Scripts Disponibles

### Développement
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualisation du build
```

### Qualité de Code
```bash
npm run lint         # Linter et corriger le code
npm run lint:check   # Vérifier le code sans corriger
npm run format       # Formater le code
npm run format:check # Vérifier le formatage
npm run quality      # Vérifier la qualité complète
npm run quality:fix  # Corriger automatiquement
```

### Design System
```bash
npm run migrate:design-system        # Migrer vers le design system
npm run migrate:design-system:dry-run # Test de migration
npm run setup:design-system          # Configuration complète
```

## 🎨 Architecture du Code

### Standards Appliqués

#### 1. **Séparation des Responsabilités**
- **HTML** : Structure sémantique et accessibilité
- **CSS** : Styles modulaires et réutilisables
- **JavaScript** : Fonctions organisées par domaine

#### 2. **Naming Conventions**
```css
/* BEM-like pour les composants */
.today-component
.today-component__element
.today-component--modifier

/* Classes utilitaires */
.today-animate-stagger-1
.today-fade-in
```

#### 3. **Structure JavaScript**
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

### Optimisations de Performance

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

### Accessibilité

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

## 🔧 Configuration

### ESLint
Le projet utilise ESLint pour maintenir la qualité du code JavaScript :
- Règles de sécurité
- Bonnes pratiques
- Formatage cohérent
- Complexité contrôlée

### Prettier
Prettier assure un formatage cohérent :
- Indentation standardisée
- Guillemets cohérents
- Longueur de ligne contrôlée
- Support multi-langage

### Tailwind CSS
Configuration optimisée pour :
- Design system cohérent
- Responsive design
- Performance optimale
- Accessibilité

## 📱 Responsive Design

Le site utilise une approche mobile-first avec des breakpoints optimisés :

```css
/* Mobile-first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

## 🎯 Fonctionnalités Principales

### 1. **Navigation Mobile**
- Menu hamburger animé
- Overlay responsive
- Navigation tactile optimisée

### 2. **Galerie d'Images**
- Vue plein écran
- Navigation clavier
- Transitions fluides

### 3. **FAQ Interactive**
- Accordéon animé
- Navigation clavier
- États visuels clairs

### 4. **Animations**
- Intersection Observer
- Transitions CSS optimisées
- Respect des préférences utilisateur

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
# Déployer le dossier dist/
```

### Netlify
```bash
npm run build
# Déployer le dossier dist/
```

### Autres Plateformes
Le projet génère des fichiers statiques dans `dist/` qui peuvent être déployés sur n'importe quelle plateforme.

## 📊 Performance

### Core Web Vitals
- **LCP** : < 2.5s
- **FID** : < 100ms
- **CLS** : < 0.1

### Optimisations
- Images optimisées et lazy loading
- CSS et JS minifiés
- Compression gzip/brotli
- Cache approprié

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Standards de Contribution
- Suivre les conventions de nommage
- Maintenir la qualité du code
- Tester sur différents appareils
- Respecter l'accessibilité

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Site web** : [Studio Emara](https://studio-emara.com)
- **Téléphone** : 07 56 81 22 55
- **Email** : contact@studio-emara.com

---

**Développé avec ❤️ par l'équipe Studio Emara**
