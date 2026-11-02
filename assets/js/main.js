/**
 * PORTFOLIO JAVASCRIPT LOGIC
 * Author: Umar (UmarEnam51)
 * Framework: Bootstrap 5
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 1. Tab Navigation System ---
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const navbarCollapse = document.getElementById('navbarContent');

  function switchTab(targetId) {
    // Clean targetId if passed with hash
    const cleanId = targetId.replace('#', '');
    const targetPane = document.getElementById(cleanId);
    if (!targetPane) return;

    // Update active nav-link
    navLinks.forEach(link => {
      if (link.getAttribute('data-target') === cleanId || link.getAttribute('href') === `#${cleanId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update active tab pane
    tabPanes.forEach(pane => {
      if (pane.id === cleanId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Trigger skill bars animation if switching to skills tab
    if (cleanId === 'skills') {
      animateSkillBars();
    }

    // Scroll smoothly to top of main content on mobile
    if (window.innerWidth < 992) {
      const mainCard = document.querySelector('.main-content-card');
      if (mainCard) {
        mainCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Close mobile navbar dropdown if open
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  }

  // Bind click on navbar links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('data-target') || this.getAttribute('href').substring(1);
      switchTab(target);
      window.location.hash = target;
    });
  });

  // Handle direct hash navigation on page load
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (document.getElementById(hash)) {
      switchTab(hash);
    }
  }

  // --- 2. Mobile Contact Details Toggle (vCard style) ---
  const toggleContactsBtn = document.getElementById('toggleContactsBtn');
  const contactsCollapse = document.getElementById('contactsCollapse');
  const toggleContactsText = document.getElementById('toggleContactsText');
  const toggleContactsIcon = document.getElementById('toggleContactsIcon');

  if (toggleContactsBtn && contactsCollapse) {
    contactsCollapse.addEventListener('show.bs.collapse', function () {
      if (toggleContactsText) toggleContactsText.textContent = 'Sembunyikan Kontak';
      if (toggleContactsIcon) {
        toggleContactsIcon.classList.remove('bi-chevron-down');
        toggleContactsIcon.classList.add('bi-chevron-up');
      }
    });

    contactsCollapse.addEventListener('hide.bs.collapse', function () {
      if (toggleContactsText) toggleContactsText.textContent = 'Lihat Kontak Lengkap';
      if (toggleContactsIcon) {
        toggleContactsIcon.classList.remove('bi-chevron-up');
        toggleContactsIcon.classList.add('bi-chevron-down');
      }
    });
  }

  // --- 3. Portfolio Project Filtering ---
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // --- 4. Project Modal Details Preview ---
  const projectModal = document.getElementById('projectModal');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectImg = document.getElementById('modalProjectImg');
  const modalProjectCategory = document.getElementById('modalProjectCategory');
  const modalProjectDesc = document.getElementById('modalProjectDesc');
  const modalProjectTools = document.getElementById('modalProjectTools');
  const modalProjectLink = document.getElementById('modalProjectLink');

  document.querySelectorAll('.open-project-modal').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const card = this.closest('.project-card');
      if (!card) return;

      const title = card.getAttribute('data-title') || 'Project Preview';
      const img = card.getAttribute('data-img') || '';
      const category = card.getAttribute('data-cat-label') || 'Web & Design';
      const desc = card.getAttribute('data-desc') || 'Deskripsi detail proyek.';
      const tools = card.getAttribute('data-tools') || 'Bootstrap 5, HTML, CSS';
      const link = card.getAttribute('data-link') || 'https://github.com/UmarEnam51';

      if (modalProjectTitle) modalProjectTitle.textContent = title;
      if (modalProjectImg) modalProjectImg.src = img;
      if (modalProjectCategory) modalProjectCategory.textContent = category;
      if (modalProjectDesc) modalProjectDesc.textContent = desc;
      if (modalProjectTools) modalProjectTools.textContent = tools;
      if (modalProjectLink) modalProjectLink.href = link;

      const bsModal = new bootstrap.Modal(projectModal);
      bsModal.show();
    });
  });

  // --- 5. Skill Bars Animation ---
  let animated = false;
  function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth + '%';
    });
  }

  // --- 6. Contact Form Submission & Toast ---
  const contactForm = document.getElementById('contactForm');
  const contactToastEl = document.getElementById('contactToast');
  const toastMessage = document.getElementById('toastMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('Mohon lengkapi semua kolom formulir.');
        return;
      }

      // Show button loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Mengirim...';

      setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (toastMessage) {
          toastMessage.textContent = `Terima kasih, ${nameInput.value}! Pesan Anda telah berhasil dikirim.`;
        }

        if (contactToastEl) {
          const toast = new bootstrap.Toast(contactToastEl, { delay: 4500 });
          toast.show();
        }

        contactForm.reset();
      }, 900);
    });
  }

  // Run skill bars animation on load if skills is default active
  const activePane = document.querySelector('.tab-pane.active');
  if (activePane && activePane.id === 'skills') {
    animateSkillBars();
  }
});
