#!/usr/bin/env node

/**
 * Script de migration vers le Design System Studio Emara
 * 
 * Ce script automatise la migration des anciennes classes CSS
 * vers le nouveau design system unifié.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Mapping des classes à migrer
const CLASS_MAPPINGS = {
  // Boutons
  'today-button-black': 'ds-btn ds-btn-black ds-btn-md',
  'today-button-compact': 'ds-btn ds-btn-black ds-btn-sm',
  'today-button-small': 'ds-btn ds-btn-black ds-btn-sm',
  'today-button-large': 'ds-btn ds-btn-black ds-btn-lg',
  
  // Cartes
  'today-card': 'ds-card',
  'today-card-content': 'ds-card-content',
  'today-studio-card': 'ds-card ds-rounded-lg',
  'today-studio-featured-card': 'ds-card ds-rounded-lg',
  'today-artists-marquee': 'ds-card ds-rounded-lg',
  'today-artist-badge': 'ds-card ds-rounded-lg ds-p-2',
  
  // Typographie
  'today-card-title': 'ds-text-2xl ds-font-bold ds-text-primary',
  'today-card-subtitle': 'ds-text-md ds-text-secondary ds-leading-relaxed',
  'today-card-description': 'ds-text-base ds-text-secondary ds-leading-normal',
  
  // Layout
  'today-container': 'ds-container',
  'today-section': 'ds-section',
  'today-section-sm': 'ds-section-sm',
  'today-section-lg': 'ds-section-lg',
  
  // Effets
  'today-glass': 'ds-glass',
  'today-glass-dark': 'ds-glass-dark',
  'today-blur': 'ds-blur-md',
  'today-blur-strong': 'ds-blur-lg',
  
  // Espacement
  'today-mt-8': 'ds-mt-8',
  'today-mb-6': 'ds-mb-6',
  'today-mb-8': 'ds-mb-8',
  'today-p-4': 'ds-p-4',
  'today-p-6': 'ds-p-6',
  'today-px-4': 'ds-px-4',
  'today-px-6': 'ds-px-6',
  'today-py-4': 'ds-py-4',
  'today-py-6': 'ds-py-6',
  'today-py-8': 'ds-py-8',
  
  // Couleurs
  'today-text-primary': 'ds-text-primary',
  'today-text-secondary': 'ds-text-secondary',
  'today-text-inverse': 'ds-text-inverse',
  'today-bg-primary': 'ds-bg-primary',
  'today-bg-card': 'ds-bg-card',
  'today-bg-overlay': 'ds-bg-overlay',
  
  // Ombres
  'today-shadow-card': 'ds-shadow-card',
  'today-shadow-card-hover': 'ds-shadow-card-hover',
  'today-shadow-button': 'ds-shadow-button',
  'today-shadow-gallery': 'ds-shadow-gallery',
  
  // Transitions
  'today-transition': 'ds-transition',
  'today-transition-fast': 'ds-transition-fast',
  'today-transition-slow': 'ds-transition-slow',
  
  // Composants spécifiques
  'today-header': 'ds-glass ds-blur-md ds-border ds-border-light',
  'today-mobile-menu': 'ds-bg-overlay ds-blur-2xl',
  'today-mobile-menu-content': 'ds-glass-dark ds-blur-lg ds-border ds-border-inverse',
  'today-mobile-close': 'ds-btn ds-btn-secondary ds-rounded-full ds-p-2',
  'today-burger-menu': 'ds-btn ds-btn-secondary ds-rounded-lg ds-p-2',
  'today-gallery-overlay': 'ds-bg-overlay ds-blur-lg',
  'today-gallery-image': 'ds-rounded-lg ds-shadow-gallery'
};

// Patterns de fichiers à traiter
const FILE_PATTERNS = [
  'src/**/*.astro',
  'src/**/*.tsx',
  'src/**/*.jsx',
  'src/**/*.vue',
  'src/**/*.html'
];

// Statistiques de migration
let stats = {
  filesProcessed: 0,
  classesMigrated: 0,
  errors: []
};

/**
 * Migre les classes dans une chaîne de caractères
 */
function migrateClasses(content) {
  let migratedContent = content;
  let classesMigrated = 0;
  
  for (const [oldClass, newClasses] of Object.entries(CLASS_MAPPINGS)) {
    // Pattern pour matcher les classes dans différents contextes
    const patterns = [
      // class="..."
      new RegExp(`class=["']([^"']*\\s)?${oldClass}(\\s[^"']*)?["']`, 'g'),
      // className="..."
      new RegExp(`className=["']([^"']*\\s)?${oldClass}(\\s[^"']*)?["']`, 'g'),
      // cls="..."
      new RegExp(`cls=["']([^"']*\\s)?${oldClass}(\\s[^"']*)?["']`, 'g')
    ];
    
    patterns.forEach(pattern => {
      migratedContent = migratedContent.replace(pattern, (match, before, after) => {
        classesMigrated++;
        
        // Construire la nouvelle chaîne de classes
        const beforeClasses = before ? before.trim() : '';
        const afterClasses = after ? after.trim() : '';
        
        let newClassString = '';
        if (beforeClasses) newClassString += beforeClasses + ' ';
        newClassString += newClasses;
        if (afterClasses) newClassString += ' ' + afterClasses;
        
        // Retourner le match avec les nouvelles classes
        return match.replace(/["'][^"']*["']/, `"${newClassString.trim()}"`);
      });
    });
  }
  
  return { content: migratedContent, classesMigrated };
}

/**
 * Traite un fichier individuel
 */
function processFile(filePath) {
  try {
    console.log(`📄 Traitement de: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: migratedContent, classesMigrated } = migrateClasses(content);
    
    if (classesMigrated > 0) {
      fs.writeFileSync(filePath, migratedContent, 'utf8');
      console.log(`  ✅ ${classesMigrated} classe(s) migrée(s)`);
      stats.classesMigrated += classesMigrated;
    } else {
      console.log(`  ⏭️  Aucune classe à migrer`);
    }
    
    stats.filesProcessed++;
    
  } catch (error) {
    console.error(`  ❌ Erreur lors du traitement de ${filePath}:`, error.message);
    stats.errors.push({ file: filePath, error: error.message });
  }
}

/**
 * Fonction principale
 */
function main() {
  console.log('🎨 Migration vers le Design System Studio Emara');
  console.log('===============================================\n');
  
  // Vérifier que le design system existe
  const designSystemPath = path.join(process.cwd(), 'src/styles/design-system.css');
  if (!fs.existsSync(designSystemPath)) {
    console.error('❌ Le fichier design-system.css n\'existe pas!');
    console.error('   Assurez-vous d\'avoir créé le design system avant de lancer la migration.');
    process.exit(1);
  }
  
  // Trouver tous les fichiers à traiter
  let allFiles = [];
  FILE_PATTERNS.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  });
  
  // Supprimer les doublons
  allFiles = [...new Set(allFiles)];
  
  if (allFiles.length === 0) {
    console.log('⚠️  Aucun fichier trouvé à traiter.');
    return;
  }
  
  console.log(`📁 ${allFiles.length} fichier(s) trouvé(s)\n`);
  
  // Traiter chaque fichier
  allFiles.forEach(filePath => {
    processFile(filePath);
  });
  
  // Afficher le résumé
  console.log('\n📊 Résumé de la migration');
  console.log('========================');
  console.log(`📄 Fichiers traités: ${stats.filesProcessed}`);
  console.log(`🔄 Classes migrées: ${stats.classesMigrated}`);
  
  if (stats.errors.length > 0) {
    console.log(`❌ Erreurs: ${stats.errors.length}`);
    stats.errors.forEach(error => {
      console.log(`   - ${error.file}: ${error.error}`);
    });
  }
  
  console.log('\n🎯 Prochaines étapes:');
  console.log('1. Vérifiez que le design system est importé dans vos fichiers CSS');
  console.log('2. Testez l\'apparence de votre site');
  console.log('3. Ajustez manuellement les cas particuliers si nécessaire');
  console.log('4. Supprimez les anciennes classes CSS non utilisées');
  
  console.log('\n✅ Migration terminée!');
}

// Gestion des arguments de ligne de commande
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🎨 Script de migration vers le Design System Studio Emara

Usage:
  node scripts/migrate-to-design-system.js [options]

Options:
  --help, -h     Affiche cette aide
  --dry-run      Affiche les changements sans les appliquer
  --verbose      Affiche plus de détails

Exemples:
  node scripts/migrate-to-design-system.js
  node scripts/migrate-to-design-system.js --dry-run
  node scripts/migrate-to-design-system.js --verbose
  `);
  process.exit(0);
}

// Lancer la migration
main(); 