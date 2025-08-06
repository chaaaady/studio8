# 🎨 Design System Studio Emara

## 🚀 Installation rapide

```bash
# Installer les dépendances
npm install

# Configurer le design system
npm run setup:design-system
```

## 📁 Fichiers créés

- `src/styles/design-system.css` - Variables et classes utilitaires
- `src/styles/migration-map.css` - Mapping des anciennes classes
- `scripts/migrate-to-design-system.js` - Script de migration automatique
- `DESIGN-SYSTEM.md` - Documentation complète

## 🎯 Utilisation immédiate

### 1. Importer le design system

Dans votre fichier CSS principal :
```css
@import './design-system.css';
```

### 2. Utiliser les classes

```html
<!-- Boutons -->
<button class="ds-btn ds-btn-primary ds-btn-md">Bouton principal</button>
<button class="ds-btn ds-btn-black ds-btn-sm">Bouton noir</button>

<!-- Cartes -->
<div class="ds-card">
  <div class="ds-card-content">
    <h3 class="ds-text-xl ds-font-semibold">Titre</h3>
    <p class="ds-text-secondary ds-mt-2">Contenu</p>
  </div>
</div>

<!-- Layout -->
<div class="ds-container">
  <section class="ds-section">
    <!-- Contenu -->
  </section>
</div>
```

### 3. Variables CSS

```css
.my-component {
  background-color: var(--color-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  font-size: var(--font-size-md);
}
```

## 🔄 Migration automatique

```bash
# Migration complète
npm run migrate:design-system

# Test sans modification
npm run migrate:design-system:dry-run
```

## 🎨 Personnalisation

Modifiez les variables dans `src/styles/design-system.css` :

```css
:root {
  --color-primary: #FF6B35; /* Nouvelle couleur */
  --radius-lg: 1rem;        /* Nouveau rayon */
  --space-4: 1.25rem;       /* Nouvel espacement */
}
```

## 📱 Responsive

```css
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

## 🌙 Mode sombre

Géré automatiquement via `prefers-color-scheme: dark`

## ♿ Accessibilité

- Support de `prefers-reduced-motion`
- Contraste automatique
- Focus states inclus

## 📚 Documentation complète

Voir `DESIGN-SYSTEM.md` pour la documentation détaillée.

## 🆘 Support

En cas de problème :
1. Vérifiez que le design system est importé
2. Consultez la documentation complète
3. Testez avec le mode dry-run
4. Vérifiez les erreurs dans la console 