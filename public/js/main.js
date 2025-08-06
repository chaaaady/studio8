/**
 * Studio Emara - Main JavaScript
 * Gestion des interactions et animations
 */

// ===== CONFIGURATION =====
const CONFIG = {
  PHONE_NUMBER: '0756812255',
  GALLERY_IMAGES: {
    'studio-a': ['/studio-a.jpeg', '/placeholder.svg', '/placeholder.svg'],
    'studio-b': ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    'studio-c': ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    'studio-d': ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
  }
};

// ===== ÉTATS GLOBAUX =====
let currentGallery = null;
let currentImageIndex = 0;
let galleryImages = [];

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
  initializeMobileMenu();
  initializeAnimations();
  initializeGallery();
  initializeFAQ();
  initializeSmoothScroll();
  initializeKeyboardEvents();
});

// ===== MOBILE MENU =====
function initializeMobileMenu() {
  const burgerMenu = document.getElementById('burger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  if (!burgerMenu || !mobileMenu || !mobileClose) {
    console.error('Mobile menu elements not found');
    return;
  }

  // Toggle menu
  burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  });

  // Close button
  mobileClose.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeMobileMenu();
  });

  // Click outside to close
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });

  // Global function for navigation links
  window.closeMobileMenu = closeMobileMenu;
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerMenu = document.getElementById('burger-menu');
  const isActive = mobileMenu.classList.contains('active');

  if (isActive) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerMenu = document.getElementById('burger-menu');
  
  mobileMenu.classList.add('active');
  burgerMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerMenu = document.getElementById('burger-menu');
  
  mobileMenu.classList.remove('active');
  burgerMenu.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== ANIMATIONS =====
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('[class*="today-animate"]');
  animatedElements.forEach(el => {
    el.classList.add('today-fade-in');
    observer.observe(el);
  });
}

// ===== GALLERY =====
function initializeGallery() {
  // Global functions for gallery
  window.openGallery = openGallery;
  window.closeGallery = closeGallery;
  window.changeGalleryImage = changeGalleryImage;
}

function openGallery(studioId) {
  currentGallery = studioId;
  currentImageIndex = 0;
  galleryImages = CONFIG.GALLERY_IMAGES[studioId] || [];

  if (galleryImages.length > 0) {
    const galleryImage = document.getElementById('gallery-image');
    galleryImage.src = galleryImages[0];
    updateGalleryCounter();
    
    const overlay = document.getElementById('gallery-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeGallery() {
  const overlay = document.getElementById('gallery-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  
  currentGallery = null;
  currentImageIndex = 0;
}

function changeGalleryImage(direction) {
  if (!currentGallery || galleryImages.length === 0) return;

  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }

  const galleryImage = document.getElementById('gallery-image');
  galleryImage.src = galleryImages[currentImageIndex];
  updateGalleryCounter();
}

function updateGalleryCounter() {
  const counter = document.getElementById('gallery-counter');
  if (counter) {
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
  }
}

// ===== FAQ =====
function initializeFAQ() {
  window.toggleFAQ = toggleFAQ;
}

function toggleFAQ(faqId) {
  const faqItem = document.querySelector(`[data-faq="${faqId}"]`);
  const isActive = faqItem.classList.contains('active');

  // Close all other FAQs
  document.querySelectorAll('.today-faq-item').forEach(item => {
    item.classList.remove('active');
  });

  // Open clicked FAQ if it wasn't active
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// ===== SMOOTH SCROLL =====
function initializeSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== KEYBOARD EVENTS =====
function initializeKeyboardEvents() {
  document.addEventListener('keydown', (e) => {
    // Escape key
    if (e.key === 'Escape') {
      if (document.getElementById('gallery-overlay').classList.contains('active')) {
        closeGallery();
      } else if (document.getElementById('mobile-menu').classList.contains('active')) {
        closeMobileMenu();
      }
    }

    // Arrow keys for gallery navigation
    if (document.getElementById('gallery-overlay').classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        changeGalleryImage(-1);
      } else if (e.key === 'ArrowRight') {
        changeGalleryImage(1);
      }
    }
  });
}

// ===== UTILITIES =====
function copyToClipboard(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return Promise.resolve();
  }
}

// ===== COPY BUTTONS =====
document.addEventListener('click', async (e) => {
  if (e.target.textContent?.includes('TARIFS')) {
    try {
      await copyToClipboard(CONFIG.PHONE_NUMBER);
      const originalText = e.target.textContent;
      e.target.textContent = 'Copié !';
      e.target.style.backgroundColor = '#34D399';
      
      setTimeout(() => {
        e.target.textContent = originalText;
        e.target.style.backgroundColor = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
}); 