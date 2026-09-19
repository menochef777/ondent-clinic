/**
 * ONDENT CLINIC — Modern Interactive Scripts & Multilingual Engine
 * Location: San Luis Río Colorado, Sonora, México
 */

// ==========================================================================
// 1. SCROLL RESTORATION: ALWAYS START AT HERO ON PAGE RELOAD
// ==========================================================================
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);

  // Ensure Hero 3D Videos play automatically and smoothly
  const heroVideos = document.querySelectorAll('.hero-implant-video');
  heroVideos.forEach(v => {
    if (v.tagName === 'VIDEO') {
      v.muted = true;
      v.play().catch(() => {});
    }
  });
  const translations = {
    es: {
      nav: {
        home: "Inicio",
        about: "Nosotros",
        services: "Servicios",
        cases: "Casos Clínicos",
        dentists: "Especialistas",
        location: "Ubicación",
        book: "Agendar Cita"
      },
      hero: {
        title: `Restaura <br>Tu Verdadera <br>Sonrisa <span class="hero-ref-avatar-pill"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80" alt="Paciente Satisfecho"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80" alt="Paciente Satisfecho"><span class="pill-count">+2k</span></span>`,
        desc: `Usando <strong>tecnología avanzada</strong>, ofrecemos tratamientos integrales para una sonrisa saludable y <strong>llena de confianza</strong>.`,
        bookBtn: "Agendar Cita Online",
        waBtn: "Hablar por WhatsApp",
        statNum: "98%",
        statLabel: "pacientes leales<br>y satisfechos",
        techBadge: "Tecnología 3D Digital OnDent"
      },
      about: {
        eyebrow: "Nuestra Promesa",
        title: "Sobre Nosotros",
        headline: `Te ayudamos a lograr una <span class="text-accent">sonrisa sana y segura</span> para toda la vida`,
        desc: "OnDent es una clínica moderna fundada bajo una filosofía centrada en el paciente. Combinamos función precisa, biomateriales de última generación y estética de alto nivel para diseñar armonía facial personalizada a cada paciente.",
        card1Title: "Especialistas Certificados",
        card1Desc: "Dra. Ana Castro, Dr. Roy Dávila y especialistas",
        card2Title: "Instalaciones Modernas",
        card2Desc: "Equipos de última generación y atención sin dolor",
        pill1: "Quirófano de Alta Tecnología",
        pill2: "Diagnóstico Digital 3D",
        pill3: "Atención Sin Dolor"
      },
      services: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones odontológicas integrales diseñadas con precisión, durabilidad y alta estética.",
        cat1: "Preventivo y Restaurador",
        card1Title: "Cuidado Dental Básico",
        c1f1: "Exámenes Diagnósticos Completos",
        c1f2: "Resinas Estéticas del Color Dental",
        c1f3: "Limpieza Ultrasónica Preventiva",
        c1f4: "Odontopediatría con Cuidado Gentil",
        c1Btn: "Agendar Cuidado Básico",
        cat2: "Armonización de Sonrisa",
        card2Title: "Estética Dental Avanzada",
        c2f1: "Carillas Cerámicas de Alta Gama",
        c2f2: "Blanqueamiento Clínico Láser / LED",
        c2f3: "Coronas de Zirconia y Diseño de Sonrisa",
        c2f4: "Armonía Facial y Naturalidad",
        c2Btn: "Agendar Estética Dental"
      },
      cases: {
        badge: "CASOS CLÍNICOS REALES",
        title: `Todo lo que tu <span class="text-italic-serif">sonrisa necesita</span>`,
        desc: "Documentamos nuestros casos clínicos con fotografía en alta resolución: desde coronas individuales hasta rediseños completos de sonrisa.",
        learnMore: "Conocer Más"
      },
      dentists: {
        title: "Nuestros Especialistas",
        subtitle: "Doctores certificados comprometidos con la excelencia y la capacitación internacional continua.",
        anaBadge: "Directora & Especialista",
        anaRole: "Estética Dental y Rehabilitación Oral",
        anaBio: "Apasionada por la transformación de sonrisas y la armonía facial con capacitación internacional continua en carillas cerámicas, estética mínimamente invasiva y diseño de sonrisa.",
        royBadge: "Implantología & Cirugía",
        royRole: "Especialista en Implantología & Cirugía Oral",
        royBio: "Experto en implantología de alta precisión, prótesis sobre implantes, regeneración ósea y procedimientos quirúrgicos avanzados mínimamente invasivos con recuperación rápida."
      },
      mascot: {
        badge: "Control",
        title: `Deja de absorber el caos.<br><span class="freedom-gradient">Sonríe con total confianza.</span>`,
        liveBadge: "Mirada Interactiva 360°",
        negatives: [
          "Tratamientos reactivos cuando problemas de fondo surgen demasiado tarde",
          "Citas desgastantes y presupuestos inflados que drenan tu tiempo y energía",
          "Constante desconfianza porque no hay visualización digital de los resultados",
          "Materiales de baja calidad que pierden brillo, se manchan o se fracturan",
          "Atención despersonalizada y expedientes dispersos sin seguimiento real"
        ],
        positives: [
          "Diagnóstico digital 3D estratificado que elimina sorpresas en cada fase",
          "Equipo multidisciplinario que entrega resultados estéticos de alta precisión",
          "Visualización previa y validación digital de tu sonrisa antes de iniciar",
          "Biomateriales de zirconia y porcelana con garantía clínica de por vida",
          "Concierge personalizado y expedientes claros que aceleran cada decisión"
        ]
      },
      booking: {
        eyebrow: "AGENDA TU CITA",
        title: `Agenda Tu Cita en Línea <br><span class="text-italic-serif">Directo con Nuestra Clínica</span>`,
        desc: "Reserva tu consulta con nuestros especialistas certificados en segundos. Elige tu tratamiento preferido, especialista, fecha y horario a continuación.",
        nameLabel: "Nombre Completo",
        phoneLabel: "Teléfono / WhatsApp",
        serviceLabel: "Tratamiento Dental",
        servicePlaceholder: "Selecciona Tratamiento Dental",
        dentistLabel: "Especialista Preferido",
        dentistAny: "Cualquier Especialista Disponible",
        dentistAna: "Dra. Ana Castro (Estética & Rehabilitación)",
        dentistRoy: "Dr. Roy Dávila (Implantes & Cirugía)",
        dateLabel: "Fecha Preferida",
        timeLabel: "Horario Deseado",
        timePlaceholder: "Selecciona Horario",
        submitBtn: "Confirmar Solicitud de Cita",
        openDentalinkBtn: "Abrir Agenda Dentalink en Tiempo Real"
      },
      reviews: {
        badge: "RESEÑAS REALES DE PACIENTES",
        title: `La Confianza de Cientos de Familias en <span class="text-italic-serif">México y EE. UU.</span>`,
        desc: "Calificación 5.0 estrellas por pacientes locales y transfronterizos de Arizona, California y Sonora.",
        verified: "Reseña Verificada en Google"
      },
      footer: {
        tagline: "Clínica dental moderna dedicada a brindar tratamientos odontológicos de excelencia, tecnología digital de vanguardia y un trato humano y personalizado en San Luis Río Colorado, Sonora.",
        hoursTitle: "Horarios de Atención",
        h1: "<strong>Lunes a Viernes:</strong> 9:00 AM – 6:00 PM",
        h2: "<strong>Sábado:</strong> 9:00 AM – 2:00 PM",
        h3: "<strong>Domingo:</strong> Cerrado / Urgencias 24/7",
        linksTitle: "Enlaces Rápidos",
        contactTitle: "Contacto Directo",
        rights: "© 2026 OnDent Clinic. Todos los derechos reservados.",
        privacy: "Aviso de Privacidad",
        terms: "Términos del Servicio"
      }
    },
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Our Services",
        cases: "Clinical Cases",
        dentists: "Dentists",
        location: "Location",
        book: "Book Online"
      },
      hero: {
        title: `Restore <br>Your True <br>Smile <span class="hero-ref-avatar-pill"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80" alt="Happy Patient"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80" alt="Happy Patient"><span class="pill-count">+2k</span></span>`,
        desc: `Using <strong>advanced technology</strong>, we offer comprehensive treatments for a healthy and <strong>confident smile</strong>.`,
        bookBtn: "Book Appointment Online",
        waBtn: "Chat on WhatsApp",
        statNum: "98%",
        statLabel: "loyal & highly<br>satisfied patients",
        techBadge: "OnDent 3D Digital Technology"
      },
      about: {
        eyebrow: "Our Promise",
        title: "About Us",
        headline: `Help you achieve a <span class="text-accent">healthy, confident smile</span> that lasts a lifetime`,
        desc: "OnDent is a modern clinic built around a patient-first philosophy. Combining precision function, cutting-edge biomaterials, and high-end aesthetics, we design facial harmony tailored to each unique patient.",
        card1Title: "Certified Specialists",
        card1Desc: "Dra. Ana Castro, Dr. Roy Davila & regional specialists",
        card2Title: "Modern Facilities",
        card2Desc: "State-of-the-art clinic equipment & tranquil care",
        pill1: "High-Tech Operatory",
        pill2: "3D Digital Diagnostics",
        pill3: "Pain-Free Comfort"
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive dental solutions designed with precision, durability, and high aesthetics.",
        cat1: "Preventive & Restorative",
        card1Title: "Basic Dental Care",
        c1f1: "Comprehensive Diagnostic Exams",
        c1f2: "Tooth-Colored Aesthetic Resins",
        c1f3: "Preventive Ultrasonic Cleaning",
        c1f4: "Gentle Pediatric Dentistry",
        c1Btn: "Book Basic Care",
        cat2: "Smile Harmonization",
        card2Title: "Advanced Aesthetic Care",
        c2f1: "High-End Ceramic Veneers",
        c2f2: "In-Office Laser / LED Whitening",
        c2f3: "Zirconia Crowns & Smile Makeovers",
        c2f4: "Natural Facial Harmony",
        c2Btn: "Book Aesthetic Care"
      },
      cases: {
        badge: "REAL CLINICAL CASES",
        title: `Everything your <span class="text-italic-serif">smile needs</span>`,
        desc: "We document our clinical cases with high-resolution photography: from individual crowns to complete smile redesigns.",
        learnMore: "Learn More"
      },
      dentists: {
        title: "Meet The Dentists",
        subtitle: "Dedicated doctors and specialists committed to continuous training & clinical excellence.",
        anaBadge: "Director & Specialist",
        anaRole: "Aesthetic Dentistry & Oral Rehabilitation",
        anaBio: "Passionate about smile transformations and dental harmony with continuous international training in porcelain veneers, minimally invasive aesthetics and smile architecture.",
        royBadge: "Implantology & Surgery",
        royRole: "Specialist in Implantology & Oral Surgery",
        royBio: "Expert in precision implantology, full-arch restorative solutions, bone regeneration, and advanced minimally invasive surgical procedures with fast recovery."
      },
      mascot: {
        badge: "Control",
        title: `Stop absorbing the chaos.<br><span class="freedom-gradient">Smile with confidence.</span>`,
        liveBadge: "360° Interactive Gaze",
        negatives: [
          "Reactive firefighting when underlying issues surface too late",
          "Exhausting appointments and bloated costs draining your time and energy",
          "Constant re-verification because there is no 3D digital visualization",
          "Low-grade materials that discolor, chip, or fail prematurely",
          "Scattered dental records and impersonal care with zero follow-up"
        ],
        positives: [
          "Layered 3D digital diagnosis eliminating surprises at every phase",
          "Streamlined specialist care delivering production-ready smile makeovers",
          "Live digital validation loops locking in smile aesthetics before starting",
          "Premium zirconia and ceramic biomaterials backed by lifetime warranty",
          "Dedicated concierge and clear digital records accelerating every decision"
        ]
      },
      booking: {
        eyebrow: "BOOK AN APPOINTMENT",
        title: `Effortless Online Booking <br><span class="text-italic-serif">Direct to Our Clinic</span>`,
        desc: "Reserve your consultation with our certified dentists in seconds. Choose your preferred specialist, treatment, date and time below.",
        nameLabel: "Full Name",
        phoneLabel: "Phone / WhatsApp",
        serviceLabel: "Dental Treatment",
        servicePlaceholder: "Select Dental Treatment",
        dentistLabel: "Preferred Dentist",
        dentistAny: "Any Available Specialist",
        dentistAna: "Dra. Ana Castro (Aesthetics & Rehabilitation)",
        dentistRoy: "Dr. Roy Davila (Implants & Surgery)",
        dateLabel: "Preferred Date",
        timeLabel: "Preferred Time",
        timePlaceholder: "Select Time Slot",
        submitBtn: "Confirm Appointment Request",
        openDentalinkBtn: "Open Real-Time Dentalink Calendar"
      },
      reviews: {
        badge: "PATIENT REVIEWS & TESTIMONIALS",
        title: `Trusted by Hundreds of Families Across <span class="text-italic-serif">Mexico & the US</span>`,
        desc: "Rated 5.0 stars by cross-border patients from Arizona, California, and Sonora.",
        verified: "Verified Google Review"
      },
      footer: {
        tagline: "Modern dental clinic dedicated to exceptional oral healthcare, cutting-edge digital technology, and warm personalized care in San Luis Río Colorado, Sonora.",
        hoursTitle: "Clinic Hours",
        h1: "<strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM",
        h2: "<strong>Saturday:</strong> 9:00 AM – 2:00 PM",
        h3: "<strong>Sunday:</strong> Closed / 24/7 Emergencies",
        linksTitle: "Quick Links",
        contactTitle: "Direct Contact",
        rights: "© 2026 OnDent Clinic. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  };

  const setLanguage = (lang) => {
    const t = translations[lang] || translations.es;
    document.documentElement.lang = lang;

    // 1. Navigation links
    const navLinks = document.querySelectorAll('.pill-nav .nav-link, .drawer-links .drawer-link');
    if (navLinks.length >= 6) {
      const keys = ['home', 'about', 'services', 'cases', 'dentists', 'location'];
      document.querySelectorAll('.pill-nav .nav-link').forEach((link, idx) => {
        if (keys[idx] && t.nav[keys[idx]]) link.textContent = t.nav[keys[idx]];
      });
      document.querySelectorAll('.drawer-links .drawer-link').forEach((link, idx) => {
        if (keys[idx] && t.nav[keys[idx]]) link.textContent = t.nav[keys[idx]];
      });
    }

    // 2. Header CTA
    const headerCta = document.querySelector('.header-actions .btn-primary span');
    if (headerCta) headerCta.textContent = t.nav.book;

    // 3. Hero
    const heroTitle = document.querySelector('.hero-ref-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    const heroDesc = document.querySelector('.hero-ref-description');
    if (heroDesc) heroDesc.innerHTML = t.hero.desc;
    const heroBookBtn = document.querySelector('#openHeroAgendaModal span');
    if (heroBookBtn) heroBookBtn.textContent = t.hero.bookBtn;
    const heroWaBtn = document.querySelector('.btn-hero-ref-wa span');
    if (heroWaBtn) heroWaBtn.textContent = t.hero.waBtn;
    const heroStatNum = document.querySelector('.stat-bubble-number');
    if (heroStatNum) heroStatNum.textContent = t.hero.statNum;
    const heroStatLabel = document.querySelector('.stat-bubble-label');
    if (heroStatLabel) heroStatLabel.innerHTML = t.hero.statLabel;
    const heroTechBadge = document.querySelector('.hero-3d-interactive-badge span');
    if (heroTechBadge) heroTechBadge.textContent = t.hero.techBadge;

    // 4. About
    const aboutEyebrow = document.querySelector('.promise-tag span:last-child');
    if (aboutEyebrow) aboutEyebrow.textContent = t.about.eyebrow;
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) aboutTitle.textContent = t.about.title;
    const aboutHeadline = document.querySelector('.about-headline');
    if (aboutHeadline) aboutHeadline.innerHTML = t.about.headline;
    const aboutSubtext = document.querySelector('.about-subtext');
    if (aboutSubtext) aboutSubtext.textContent = t.about.desc;
    const aboutSubcards = document.querySelectorAll('.about-action-cards .subcard-link');
    if (aboutSubcards.length >= 2) {
      aboutSubcards[0].querySelector('h4').textContent = t.about.card1Title;
      aboutSubcards[0].querySelector('p').textContent = t.about.card1Desc;
      aboutSubcards[1].querySelector('h4').textContent = t.about.card2Title;
      aboutSubcards[1].querySelector('p').textContent = t.about.card2Desc;
    }
    const aboutPills = document.querySelectorAll('.photo-pill-item span');
    if (aboutPills.length >= 3) {
      aboutPills[0].textContent = t.about.pill1;
      aboutPills[1].textContent = t.about.pill2;
      aboutPills[2].textContent = t.about.pill3;
    }

    // 5. Services
    const servicesTitle = document.querySelector('#services .section-title');
    if (servicesTitle) servicesTitle.textContent = t.services.title;
    const servicesSubtitle = document.querySelector('#services .section-subtitle');
    if (servicesSubtitle) servicesSubtitle.textContent = t.services.subtitle;
    const basicCard = document.querySelector('.basic-care-card');
    if (basicCard) {
      basicCard.querySelector('.service-category').textContent = t.services.cat1;
      basicCard.querySelector('.service-card-title').textContent = t.services.card1Title;
      const feats = basicCard.querySelectorAll('.service-feature-list li');
      if (feats.length >= 4) {
        feats[0].childNodes[1].nodeValue = " " + t.services.c1f1;
        feats[1].childNodes[1].nodeValue = " " + t.services.c1f2;
        feats[2].childNodes[1].nodeValue = " " + t.services.c1f3;
        feats[3].childNodes[1].nodeValue = " " + t.services.c1f4;
      }
      const c1Link = basicCard.querySelector('.service-explore-link span');
      if (c1Link) c1Link.textContent = t.services.c1Btn;
    }
    const aestheticCard = document.querySelector('.aesthetic-care-card');
    if (aestheticCard) {
      aestheticCard.querySelector('.service-category').textContent = t.services.cat2;
      aestheticCard.querySelector('.service-card-title').textContent = t.services.card2Title;
      const feats = aestheticCard.querySelectorAll('.service-feature-list li');
      if (feats.length >= 4) {
        feats[0].childNodes[1].nodeValue = " " + t.services.c2f1;
        feats[1].childNodes[1].nodeValue = " " + t.services.c2f2;
        feats[2].childNodes[1].nodeValue = " " + t.services.c2f3;
        feats[3].childNodes[1].nodeValue = " " + t.services.c2f4;
      }
      const c2Link = aestheticCard.querySelector('.service-explore-link span');
      if (c2Link) c2Link.textContent = t.services.c2Btn;
    }

    // 6. Clinical Cases
    const casesBadge = document.querySelector('.cases-badge span:last-child');
    if (casesBadge) casesBadge.textContent = t.cases.badge;
    const casesTitle = document.querySelector('.cases-title');
    if (casesTitle) casesTitle.innerHTML = t.cases.title;
    const casesDesc = document.querySelector('.cases-description');
    if (casesDesc) casesDesc.textContent = t.cases.desc;
    document.querySelectorAll('.case-action-btn span:first-child').forEach(btn => {
      btn.textContent = t.cases.learnMore;
    });

    // 7. Dentists
    const dentistsTitle = document.querySelector('#dentists .section-title');
    if (dentistsTitle) dentistsTitle.textContent = t.dentists.title;
    const dentistsSubtitle = document.querySelector('#dentists .section-subtitle');
    if (dentistsSubtitle) dentistsSubtitle.textContent = t.dentists.subtitle;
    const dentistCards = document.querySelectorAll('.dentist-card');
    if (dentistCards.length >= 2) {
      // Dra. Ana
      dentistCards[0].querySelector('.dentist-tag-badge').textContent = t.dentists.anaBadge;
      dentistCards[0].querySelector('.dentist-role').textContent = t.dentists.anaRole;
      dentistCards[0].querySelector('.dentist-bio').textContent = t.dentists.anaBio;
      // Dr. Roy
      dentistCards[1].querySelector('.dentist-tag-badge').textContent = t.dentists.royBadge;
      dentistCards[1].querySelector('.dentist-role').textContent = t.dentists.royRole;
      dentistCards[1].querySelector('.dentist-bio').textContent = t.dentists.royBio;
    }

    // 8. Freedom / Control Mascot Section
    const freedomBadge = document.querySelector('.freedom-badge-pill span');
    if (freedomBadge) freedomBadge.textContent = t.mascot.badge;
    const freedomTitle = document.querySelector('.freedom-title');
    if (freedomTitle) freedomTitle.innerHTML = t.mascot.title;
    const freedomLiveBadge = document.querySelector('.freedom-live-badge');
    if (freedomLiveBadge) freedomLiveBadge.innerHTML = `<i class="ph-fill ph-eye"></i> ${t.mascot.liveBadge}`;
    const negCards = document.querySelectorAll('.freedom-col-negatives .freedom-card-text');
    if (negCards.length && t.mascot.negatives) {
      negCards.forEach((el, idx) => {
        if (t.mascot.negatives[idx]) el.textContent = t.mascot.negatives[idx];
      });
    }
    const posCards = document.querySelectorAll('.freedom-col-positives .freedom-card-text');
    if (posCards.length && t.mascot.positives) {
      posCards.forEach((el, idx) => {
        if (t.mascot.positives[idx]) el.textContent = t.mascot.positives[idx];
      });
    }

    // 9. Booking Section
    const bookingEyebrow = document.querySelector('.booking-eyebrow');
    if (bookingEyebrow) bookingEyebrow.innerHTML = `<span class="eyebrow-dot"></span> ${t.booking.eyebrow}`;
    const bookingTitle = document.querySelector('.booking-main-title');
    if (bookingTitle) bookingTitle.innerHTML = t.booking.title;
    const bookingDesc = document.querySelector('.booking-header-desc');
    if (bookingDesc) bookingDesc.textContent = t.booking.desc;
    const submitBooking = document.querySelector('.btn-submit-booking span');
    if (submitBooking) submitBooking.textContent = t.booking.submitBtn;

    // 10. Reviews Section
    const reviewsBadge = document.querySelector('.reviews-eyebrow span:last-child');
    if (reviewsBadge) reviewsBadge.textContent = t.reviews.badge;
    const reviewsTitle = document.querySelector('.reviews-main-title');
    if (reviewsTitle) reviewsTitle.innerHTML = t.reviews.title;
    const reviewsDesc = document.querySelector('.reviews-header-desc');
    if (reviewsDesc) reviewsDesc.textContent = t.reviews.desc;
    document.querySelectorAll('.review-verified-badge span').forEach(badge => {
      badge.textContent = t.reviews.verified;
    });

    // 11. Footer Section
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.textContent = t.footer.tagline;
    const footerCols = document.querySelectorAll('.footer-col');
    if (footerCols.length >= 4) {
      footerCols[1].querySelector('.footer-heading').textContent = t.footer.hoursTitle;
      const hList = footerCols[1].querySelectorAll('.footer-list li');
      if (hList.length >= 3) {
        hList[0].innerHTML = t.footer.h1;
        hList[1].innerHTML = t.footer.h2;
        hList[2].innerHTML = t.footer.h3;
      }
      footerCols[2].querySelector('.footer-heading').textContent = t.footer.linksTitle;
      footerCols[3].querySelector('.footer-heading').textContent = t.footer.contactTitle;
    }
    const footerRights = document.querySelector('.footer-bottom p');
    if (footerRights) footerRights.textContent = t.footer.rights;
  };

  // Wire Language Switch Buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Default to Spanish (México) on load
  setLanguage('es');

  // ==========================================================================
  // 3. SPECIALTIES MODAL DATA (ES-MX)
  // ==========================================================================
  const specialtiesData = {
    implants: {
      title: "Implantes Dentales",
      desc: "Soluciones de titanio y zirconia biocompatibles de grado quirúrgico diseñadas para restaurar la función masticatoria completa, preservar la densidad ósea y armonizar con la sonrisa natural.",
      benefits: ["Tasa de éxito superior al 98%", "Preserva dientes adyacentes sanos", "Función y estética idénticas al diente natural"]
    },
    veneers: {
      title: "Carillas de Porcelana",
      desc: "Láminas cerámicas de alta gama personalizadas para corregir manchas, bordes desgastados, diastemas y alineación dental con mínima invasión.",
      benefits: ["Porcelana de alta resistencia a manchas", "Tonalidad personalizada a la armonía facial", "Transformación de sonrisa duradera"]
    },
    endodontics: {
      title: "Endodoncia (Tratamiento de Conducto)",
      desc: "Terapia de conductos con localizadores apicales digitales y tecnología rotatoria para eliminar dolor e infección preservando la pieza dental natural.",
      benefits: ["Alivio inmediato del dolor", "Conservación de la pieza natural", "Procedimiento cómodo y sin molestias"]
    },
    orthodontics: {
      title: "Ortodoncia y Alineadores",
      desc: "Alineación y corrección de mordida utilizando brackets estéticos o alineadores transparentes para una oclusión perfecta y armonía dental.",
      benefits: ["Corrige malposiciones y apiñamiento", "Mejora la salud y masticación", "Planificación digital personalizada"]
    },
    periodontics: {
      title: "Periodoncia y Cuidado de Encías",
      desc: "Diagnóstico y tratamiento avanzado para la salud de encías y hueso de soporte, curetajes ultrasónicos y regeneración periodontal.",
      benefits: ["Detiene la recesión gingival y pérdida de hueso", "Elimina bacterias y mal aliento", "Protege la salud bucal integral"]
    },
    exams: {
      title: "Exámenes y Consultas Diagnósticas",
      desc: "Evaluaciones integrales con radiografía digital de mínima radiación, diagnóstico fotográfico y plan de tratamiento transparente.",
      benefits: ["Detección temprana y precisa", "Presupuestos claros y transparentes", "Plan de salud dental personalizado"]
    },
    general: {
      title: "Odontología General y Limpieza",
      desc: "Revisiones periódicas, profilaxis ultrasónica profunda, aplicación de flúor y prevención integral para toda la familia.",
      benefits: ["Prevención activa de caries", "Aliento fresco y encías sanas", "Atención rápida y sin dolor"]
    },
    dentures: {
      title: "Prótesis y Placas Dentales",
      desc: "Prótesis fijas o removibles confeccionadas con polímeros y cerámicas ligeras de alta precisión para devolver estética y soporte facial.",
      benefits: ["Restaura el soporte muscular y facial", "Ajuste anatómico cómodo y seguro", "Apariencia natural"]
    },
    surgery: {
      title: "Cirugía Dental y Muelas del Juicio",
      desc: "Extracciones atraumáticas de terceros molares (muelas del juicio), cirugía periapical e injertos óseos guiados con pronta recuperación.",
      benefits: ["Técnicas quirúrgicas mínimamente invasivas", "Protocolo postoperatorio con rápida recuperación", "Anestesia local confortable"]
    },
    fillings: {
      title: "Resinas Estéticas (Empastes Blancos)",
      desc: "Restauraciones con resina compuesta estética de nanopartículas, 100% libres de mercurio, que devuelven la anatomía exacta del diente.",
      benefits: ["100% Libres de metal y mercurio", "Adhesión química que refuerza la pieza", "Indistinguible del esmalte dental natural"]
    },
    whitening: {
      title: "Blanqueamiento Dental Clínico",
      desc: "Procedimiento profesional acelerado con luz LED/Láser que aclara hasta 8 tonos en una sesión segura sin dañar el esmalte.",
      benefits: ["Resultados visibles inmediatos", "Agentes desensibilizantes seguros", "Brillo radiante y duradero"]
    },
    pediatrics: {
      title: "Odontopediatría",
      desc: "Atención cálida, humana y divertida para niños, con selladores de fosetas, fluoración y prevención del miedo dental.",
      benefits: ["Ambiente libre de estrés y miedo", "Selladores preventivos contra caries", "Guía para un sano desarrollo dental"]
    }
  };

  // Specialties Modal Handler
  const modal = document.getElementById('serviceModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalBookBtn = document.getElementById('modalBookBtn');
  const specialtyPills = document.querySelectorAll('.specialty-pill');

  specialtyPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const serviceKey = pill.getAttribute('data-service');
      const data = specialtiesData[serviceKey];
      if (data && modalTitle && modalBody) {
        modalTitle.textContent = data.title;
        let benefitsHtml = '<ul style="margin-top:14px; list-style:none; display:flex; flex-direction:column; gap:8px;">';
        data.benefits.forEach(b => {
          benefitsHtml += `<li style="display:flex; align-items:center; gap:8px; font-size:0.88rem; color:#059669;"><i class="ph-bold ph-check"></i> <span style="color:#111816;">${b}</span></li>`;
        });
        benefitsHtml += '</ul>';
        modalBody.innerHTML = `<p style="line-height:1.6; color:#475569;">${data.desc}</p>${benefitsHtml}`;

        if (modalBookBtn) {
          modalBookBtn.onclick = () => {
            modal.classList.remove('active');
            const select = document.getElementById('serviceSelect');
            if (select) {
              for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value.toLowerCase().includes(data.title.toLowerCase().split(' ')[0])) {
                  select.selectedIndex = i;
                  break;
                }
              }
            }
          };
        }
        modal.classList.add('active');
      }
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // ==========================================================================
  // 4. MOBILE DRAWER NAVIGATION
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileToggle && drawer) {
    mobileToggle.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', () => drawer.classList.remove('open'));
  }
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.remove('open');
    });
  });

  // ==========================================================================
  // 5. CUSTOM SLEEK INTERACTIVE CURSOR
  // ==========================================================================
  // 5. CUSTOM SLEEK INTERACTIVE CURSOR (LIGHTWEIGHT & THROTTLED)
  // ==========================================================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (cursorDot && cursorRing) {
    let isCursorActive = false;
    let cursorTimeout = null;

    window.addEventListener('pointermove', (e) => {
      const { clientX: x, clientY: y } = e;
      if (!isCursorActive) {
        isCursorActive = true;
        cursorDot.classList.add('visible');
        cursorRing.classList.add('visible');
      }
      cursorDot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursorRing.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }, { passive: true });

    const interactiveSelectors = 'a, button, input, select, textarea, .btn, .specialty-pill, .case-card-v3, .bento-card';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
      }, { passive: true });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
      }, { passive: true });
    });
  }

  // ==========================================================================
  // 6. 3D INTERACTIVE MASCOT EYE-TRACKING (ULTRA-FAST & ZERO LAG VIA INTERSECTIONOBSERVER)
  // ==========================================================================
  const initMiniMascotCanvas = () => {
    const miniCanvas = document.getElementById('miniMascotCanvas');
    const mascotSection = document.getElementById('mascote');
    if (!miniCanvas || !mascotSection) return;

    const ctx = miniCanvas.getContext('2d', { alpha: false });
    const TAU = Math.PI * 2;

    // 48 evenly distributed angular keyframes around 360°
    const DECIMATED_FRAMES = [
      1, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90,
      96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168,
      174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240
    ];

    let mascotImages = {};
    let isSectionVisible = false;
    let isLoaded = false;
    let currentRenderedFrame = 1;
    let targetMascotFrame = 1;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let lastMoveTime = Date.now();
    let idleOrbital = 0;
    let animFrameId = null;

    miniCanvas.width = 480;
    miniCanvas.height = 480;

    const getMascotPath = (idx) => {
      const padNum = String(idx).padStart(3, '0');
      return `herovideo/efeito169hero/ezgif-frame-${padNum}.jpg`;
    };

    const drawFrame = (frameNum) => {
      let img = mascotImages[frameNum];
      if (!img || !img.complete || img.naturalWidth === 0) {
        img = mascotImages[1];
      }
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, 0, 0, 480, 480);
        currentRenderedFrame = frameNum;
      }
    };

    // Load Frame 1 immediately
    const f1 = new Image();
    f1.src = getMascotPath(1);
    f1.onload = () => {
      mascotImages[1] = f1;
      drawFrame(1);
    };
    if (f1.complete) {
      mascotImages[1] = f1;
      drawFrame(1);
    }

    // Lazy load remaining keyframes in background when section is near
    const loadRemainingFrames = () => {
      if (isLoaded) return;
      isLoaded = true;
      let idx = 0;
      const loadBatch = () => {
        for (let i = 0; i < 4 && idx < DECIMATED_FRAMES.length; i++, idx++) {
          const frameNum = DECIMATED_FRAMES[idx];
          if (!mascotImages[frameNum]) {
            const img = new Image();
            img.src = getMascotPath(frameNum);
            mascotImages[frameNum] = img;
          }
        }
        if (idx < DECIMATED_FRAMES.length) {
          setTimeout(loadBatch, 60);
        }
      };
      loadBatch();
    };

    const getNearestKeyframe = (angle) => {
      const normalized = (angle % TAU + TAU) % TAU;
      const step = TAU / DECIMATED_FRAMES.length;
      const index = Math.floor(normalized / step) % DECIMATED_FRAMES.length;
      return DECIMATED_FRAMES[index] || 1;
    };

    const updateGaze = (e) => {
      if (!isSectionVisible) return;
      pointerX = e.clientX;
      pointerY = e.clientY;
      lastMoveTime = Date.now();

      const rect = miniCanvas.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width * 0.49;
      const eyeCenterY = rect.top + rect.height * 0.32;
      const dx = pointerX - eyeCenterX;
      const dy = pointerY - eyeCenterY;

      if (Math.hypot(dx, dy) > 8) {
        const angle = Math.atan2(dy, dx);
        targetMascotFrame = getNearestKeyframe(angle);
        if (targetMascotFrame !== currentRenderedFrame) {
          drawFrame(targetMascotFrame);
        }
      }
    };

    window.addEventListener('pointermove', updateGaze, { passive: true });

    const idleLoop = () => {
      if (!isSectionVisible) return;
      const now = Date.now();
      if (now - lastMoveTime > 3000) {
        idleOrbital += 0.025;
        if (idleOrbital > TAU) idleOrbital -= TAU;
        targetMascotFrame = getNearestKeyframe(idleOrbital);
        if (targetMascotFrame !== currentRenderedFrame) {
          drawFrame(targetMascotFrame);
        }
      }
      animFrameId = requestAnimationFrame(idleLoop);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isSectionVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
          loadRemainingFrames();
          if (!animFrameId) animFrameId = requestAnimationFrame(idleLoop);
        } else {
          if (animFrameId) {
            cancelAnimationFrame(animFrameId);
            animFrameId = null;
          }
        }
      });
    }, { rootMargin: '200px' });

    observer.observe(mascotSection);
  };
  initMiniMascotCanvas();

  // ==========================================================================
  // 7. CLINICAL CASES FULL-BLEED TRAILER LOOP / MARQUEE TICKER (PAUSE OFFSCREEN)
  // ==========================================================================
  const casesTrack = document.getElementById('casesTrack');
  const casesMarqueeWrapper = document.getElementById('casesMarqueeWrapper');
  const casesSection = document.getElementById('cases');
  const casesPrev = document.getElementById('casesPrev');
  const casesNext = document.getElementById('casesNext');

  if (casesTrack && casesMarqueeWrapper) {
    const originalCards = Array.from(casesTrack.children);
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      casesTrack.appendChild(clone);
    });

    let currentX = 0;
    let singleLoopWidth = 0;
    let isHovered = false;
    let isPointerDown = false;
    let pointerStartX = 0;
    let dragStartX = 0;
    let resumeTimeout = null;
    let isCasesVisible = true;
    let casesAnimId = null;
    const baseSpeed = 0.65;

    const calculateLoopWidth = () => {
      let width = 0;
      originalCards.forEach(card => {
        width += card.offsetWidth + 24;
      });
      singleLoopWidth = width;
    };
    calculateLoopWidth();
    window.addEventListener('resize', calculateLoopWidth, { passive: true });

    const animateMarquee = () => {
      if (!isCasesVisible) return;
      if (!isHovered && !isPointerDown) {
        currentX += baseSpeed;
      }
      if (singleLoopWidth > 0) {
        if (currentX >= singleLoopWidth) {
          currentX -= singleLoopWidth;
        } else if (currentX < 0) {
          currentX += singleLoopWidth;
        }
      }
      casesTrack.style.transform = `translate3d(${-currentX}px, 0, 0)`;
      casesAnimId = requestAnimationFrame(animateMarquee);
    };

    if (casesSection) {
      const casesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isCasesVisible = entry.isIntersecting;
          if (entry.isIntersecting) {
            if (!casesAnimId) casesAnimId = requestAnimationFrame(animateMarquee);
          } else {
            if (casesAnimId) {
              cancelAnimationFrame(casesAnimId);
              casesAnimId = null;
            }
          }
        });
      }, { rootMargin: '100px' });
      casesObserver.observe(casesSection);
    } else {
      animateMarquee();
    }

    casesMarqueeWrapper.addEventListener('mouseenter', () => { isHovered = true; }, { passive: true });
    casesMarqueeWrapper.addEventListener('mouseleave', () => { if (!isPointerDown) isHovered = false; }, { passive: true });

    casesTrack.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      isPointerDown = true;
      isHovered = true;
      pointerStartX = e.clientX;
      dragStartX = currentX;
      casesTrack.setPointerCapture(e.pointerId);
    });

    casesTrack.addEventListener('pointermove', (e) => {
      if (!isPointerDown) return;
      const deltaX = e.clientX - pointerStartX;
      currentX = dragStartX - deltaX;
    }, { passive: true });

    const endPointerDrag = (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      try { casesTrack.releasePointerCapture(e.pointerId); } catch (err) {}
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => { isHovered = false; }, 1200);
    };

    casesTrack.addEventListener('pointerup', endPointerDrag);
    casesTrack.addEventListener('pointercancel', endPointerDrag);

    const scrollByAmount = (amount) => {
      isHovered = true;
      currentX += amount;
      casesTrack.style.transform = `translate3d(${-currentX}px, 0, 0)`;
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => { isHovered = false; }, 1800);
    };

    if (casesPrev) casesPrev.addEventListener('click', () => scrollByAmount(-354));
    if (casesNext) casesNext.addEventListener('click', () => scrollByAmount(354));
  }

  // ==========================================================================
  // 8. GOOGLE MAPS REVIEWS CONTINUOUS MARQUEE LOOP (PAUSE OFFSCREEN)
  // ==========================================================================
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewsMarquee = document.getElementById('reviewsMarquee');
  const reviewsSection = document.getElementById('reviews');

  if (reviewsTrack && reviewsMarquee) {
    const originalReviews = Array.from(reviewsTrack.children);
    originalReviews.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      reviewsTrack.appendChild(clone);
    });

    let currentReviewX = 0;
    let singleReviewLoopWidth = 0;
    let isReviewHovered = false;
    let isReviewDragging = false;
    let dragStartX = 0;
    let initialX = 0;
    let isReviewsVisible = true;
    let reviewsAnimId = null;
    const speed = 0.6;

    const calcReviewWidth = () => {
      let width = 0;
      originalReviews.forEach(card => {
        width += card.offsetWidth + 22;
      });
      singleReviewLoopWidth = width;
    };
    calcReviewWidth();
    window.addEventListener('resize', calcReviewWidth, { passive: true });

    const animateReviews = () => {
      if (!isReviewsVisible) return;
      if (!isReviewHovered && !isReviewDragging) {
        currentReviewX += speed;
      }
      if (singleReviewLoopWidth > 0) {
        if (currentReviewX >= singleReviewLoopWidth) {
          currentReviewX -= singleReviewLoopWidth;
        } else if (currentReviewX < 0) {
          currentReviewX += singleReviewLoopWidth;
        }
      }
      reviewsTrack.style.transform = `translate3d(${-currentReviewX}px, 0, 0)`;
      reviewsAnimId = requestAnimationFrame(animateReviews);
    };

    if (reviewsSection) {
      const revObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isReviewsVisible = entry.isIntersecting;
          if (entry.isIntersecting) {
            if (!reviewsAnimId) reviewsAnimId = requestAnimationFrame(animateReviews);
          } else {
            if (reviewsAnimId) {
              cancelAnimationFrame(reviewsAnimId);
              reviewsAnimId = null;
            }
          }
        });
      }, { rootMargin: '100px' });
      revObserver.observe(reviewsSection);
    } else {
      animateReviews();
    }

    reviewsMarquee.addEventListener('mouseenter', () => { isReviewHovered = true; }, { passive: true });
    reviewsMarquee.addEventListener('mouseleave', () => { if (!isReviewDragging) isReviewHovered = false; }, { passive: true });

    reviewsTrack.addEventListener('pointerdown', (e) => {
      isReviewDragging = true;
      isReviewHovered = true;
      dragStartX = e.clientX;
      initialX = currentReviewX;
      reviewsTrack.setPointerCapture(e.pointerId);
    });

    reviewsTrack.addEventListener('pointermove', (e) => {
      if (!isReviewDragging) return;
      const deltaX = e.clientX - dragStartX;
      currentReviewX = initialX - deltaX;
    }, { passive: true });

    const endReviewDrag = (e) => {
      if (!isReviewDragging) return;
      isReviewDragging = false;
      try { reviewsTrack.releasePointerCapture(e.pointerId); } catch (err) {}
      setTimeout(() => { isReviewHovered = false; }, 1000);
    };

    reviewsTrack.addEventListener('pointerup', endReviewDrag);
    reviewsTrack.addEventListener('pointercancel', endReviewDrag);
  }

  // ==========================================================================
  // 9. DENTALINK VIP CONCIERGE MODAL & FORM SUBMISSION
  // ==========================================================================
  const dentalinkModal = document.getElementById('dentalinkModal');
  const openHeroAgendaModal = document.getElementById('openHeroAgendaModal');
  const closeHeroAgendaModal = document.getElementById('closeHeroAgendaModal');
  const openAgendaFromMascot = document.getElementById('openAgendaFromMascot');
  const openAgendaFromForm = document.getElementById('openAgendaFromForm');

  if (dentalinkModal) {
    const openAgenda = (e) => {
      if (e) e.preventDefault();
      dentalinkModal.classList.add('active');
      dentalinkModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeAgenda = () => {
      dentalinkModal.classList.remove('active');
      dentalinkModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    if (openHeroAgendaModal) openHeroAgendaModal.addEventListener('click', openAgenda);
    if (openAgendaFromMascot) openAgendaFromMascot.addEventListener('click', openAgenda);
    if (openAgendaFromForm) openAgendaFromForm.addEventListener('click', openAgenda);
    if (closeHeroAgendaModal) closeHeroAgendaModal.addEventListener('click', closeAgenda);

    // Wire all case cards buttons to agenda modal
    document.querySelectorAll('.case-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        openAgenda(e);
      });
    });

    dentalinkModal.addEventListener('click', (e) => {
      if (e.target === dentalinkModal) closeAgenda();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dentalinkModal.classList.contains('active')) closeAgenda();
    });

    // Handle Appointment Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    const formStatus = document.getElementById('formStatus');
    if (appointmentForm && formStatus) {
      const dateInput = document.getElementById('bookDate');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
      }

      appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = appointmentForm.querySelector('.btn-submit-booking');
        const originalText = submitBtn.innerHTML;

        const name = document.getElementById('patientName').value.trim();
        const contact = document.getElementById('patientContact').value.trim();
        const service = document.getElementById('serviceSelect').value;
        const dentist = document.getElementById('dentistSelect').value;
        const date = document.getElementById('bookDate').value;
        const time = document.getElementById('bookTime').value;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="ph-bold ph-spinner" style="animation: spin 1s linear infinite;"></i> <span>Procesando...</span>`;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          formStatus.style.display = 'block';
          formStatus.style.padding = '14px 18px';
          formStatus.style.borderRadius = '14px';
          formStatus.style.marginTop = '14px';
          formStatus.style.backgroundColor = '#ecfdf5';
          formStatus.style.border = '1px solid #a7f3d0';
          formStatus.style.color = '#065f46';
          formStatus.style.fontSize = '0.92rem';
          formStatus.style.lineHeight = '1.5';
          formStatus.innerHTML = `<strong>✓ ¡Cita Solicitada con Éxito!</strong><br>Gracias ${name}, nuestro equipo se comunicará al ${contact} para confirmar tu horario para <strong>${service}</strong>.`;

          const msg = encodeURIComponent(
            `Hola OnDent Clinic!\n\nMe gustaría solicitar una cita odontológica:\n\n👤 Nombre: ${name}\n📞 Teléfono: ${contact}\n🦷 Tratamiento: ${service}\n👨‍⚕️ Especialista: ${dentist}\n📅 Fecha: ${date}\n⏰ Horario: ${time}\n\n¡Muchas gracias!`
          );

          setTimeout(() => {
            window.open(`https://wa.me/526535158276?text=${msg}`, '_blank');
          }, 1400);

          appointmentForm.reset();
        }, 800);
      });
    }
  }

  // ==========================================================================
  // 10. NAVBAR ACTIVE STATE & HEADER THEME ON SCROLL
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const mainNavLinks = document.querySelectorAll('.pill-nav .nav-link');
  const siteHeader = document.getElementById('siteHeader');

  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        if (siteHeader) {
          if (scrollY > 60) {
            siteHeader.classList.add('scrolled');
          } else {
            siteHeader.classList.remove('scrolled');
          }
        }

        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 140;
          if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        mainNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });

        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

});
