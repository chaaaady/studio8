# Studio Emara - Landing Page

Site web moderne pour les studios d'enregistrement Emara, construit avec **Astro** et **shadcn/ui**.

## 🚀 Migration de Next.js vers Astro

Ce projet a été migré de Next.js vers Astro pour une meilleure performance et une compatibilité optimale avec Vercel.

### Avantages de la migration :

- **Performance** : Génération statique par défaut
- **Compatibilité Vercel** : Déploiement natif et optimisé
- **Conservation du design** : Tous les composants React existants conservés
- **Bundle size réduit** : JavaScript minimal par défaut

## 🛠️ Technologies utilisées

- **Astro** - Framework de génération statique
- **React** - Composants interactifs
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **shadcn/ui** - Composants UI
- **Radix UI** - Composants accessibles

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement sur Vercel

### Déploiement automatique

1. **Connectez votre repository GitHub à Vercel**
2. **Vercel détectera automatiquement Astro**
3. **Configuration automatique** - Aucune configuration supplémentaire nécessaire

### Configuration manuelle (optionnelle)

Le fichier `vercel.json` est déjà configuré :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "installCommand": "npm install"
}
```

### Variables d'environnement

Aucune variable d'environnement requise pour ce projet.

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants shadcn/ui
│   ├── navbar/         # Navigation
│   └── ...
├── layouts/            # Layouts Astro
├── pages/              # Pages Astro
└── styles/             # Styles globaux
```

## 🎨 Personnalisation

### Couleurs et thème

Les variables CSS sont définies dans `src/styles/global.css` :

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... */
}
```

### Composants

Tous les composants React sont dans `src/components/` et utilisent `client:load` pour l'hydratation.

## 🔧 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build
- `npm run astro` - Commandes Astro

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- `xs:` - 475px+
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

## 🚀 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 📞 Contact

- **Téléphone** : 07 56 81 22 55
- **WhatsApp** : [Lien WhatsApp](https://wa.me/33756812255)

## 📄 Licence

© 2025 Studios Emara. Tous droits réservés.
