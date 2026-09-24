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

  // Smart Video Loading: Play ONLY the video corresponding to the viewport width to prevent Safari/WebKit memory exhaustion
  const setupHeroVideo = () => {
    const isMobile = window.innerWidth < 768;
    const activeVideo = isMobile ? document.getElementById('heroVideoMobile') : document.getElementById('heroVideoDesktop');
    const inactiveVideo = isMobile ? document.getElementById('heroVideoDesktop') : document.getElementById('heroVideoMobile');

    if (inactiveVideo) {
      try {
        inactiveVideo.pause();
      } catch (e) {}
    }

    if (activeVideo) {
      activeVideo.defaultMuted = true;
      activeVideo.muted = true;
      activeVideo.playsInline = true;
      activeVideo.setAttribute('playsinline', 'true');
      activeVideo.setAttribute('webkit-playsinline', 'true');
      
      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const unlock = () => {
            activeVideo.play().catch(() => {});
            ['touchstart', 'click', 'scroll'].forEach(evt => window.removeEventListener(evt, unlock));
          };
          ['touchstart', 'click', 'scroll'].forEach(evt => window.addEventListener(evt, unlock, { passive: true, once: true }));
        });
      }
    }
  };

  setupHeroVideo();
  let resizeVideoTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeVideoTimeout);
    resizeVideoTimeout = setTimeout(setupHeroVideo, 300);
  }, { passive: true });

  const translations = {
    es: {
      nav: {
        home: "Inicio",
        about: "Nosotros",
        services: "Servicios",
        cases: "Casos Clínicos",
        dentists: "Especialistas",
        location: "Contacto",
        book: "Agendar Cita"
      },
      hero: {
        badge: "enfoque individual y ambiente confortable",
        title: `Cuidado atento.<br>Tratamiento preciso.`,
        desc: `¿Buscas una atención odontológica atenta y de alta precisión en San Luis Río Colorado? Ofrecemos tratamientos modernos e individualizados en un ambiente cálido y confortable.`,
        cta: "Agendar Cita",
        stat1Val: "San Luis RC, Sonora",
        stat1Lbl: "Enfoque Individualizado",
        stat2Val: "+52 (653) 515-8276",
        stat2Lbl: "Consulta & Valoración"
      },
      consultorio: {
        badge: "INSTALACIONES & ACCESO",
        topPara: "Una clínica dental diseñada para tu máxima comodidad y precisión médica desde el primer instante.",
        title: "Conoce nuestro<br/>consultorio.",
        desc: "Ubicados estratégicamente en San Luis Río Colorado, a minutos de la frontera con Yuma y San Luis, AZ. Combinamos tecnología 3D, quirófano especializado y atención personalizada.",
        cta1: "Agendar Cita",
        cta2: "Cómo Llegar",
        cap1Title: "Ubicación Privilegiada",
        cap1Desc: "Acceso directo y seguro en el corazón médico de la ciudad, con estacionamiento cómodo para pacientes locales y de EE. UU.",
        cap2Title: "Tecnología Digital 3D",
        cap2Desc: "Quirófano esterilizado de alta tecnología, escáneres intraorales y unidades odontológicas ergonómicas de última generación.",
        cap3Title: "Atención Bilingüe & Calidez",
        cap3Desc: "Equipo médico certificado y personal de atención fluida en inglés y español para guiarte en cada paso de tu sonrisa."
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
        badge: "NUESTROS SERVICIOS",
        title: "Soluciones Odontológicas Integrales",
        subtitle: "Atención médica, quirúrgica y cosmética de excelencia en un solo lugar.",
        card1Title: "Implantes Dentales",
        card1Desc: "Tecnología guiada 3D para restaurar la función completa.",
        card2Title: "Carillas de Porcelana",
        card2Desc: "Láminas cerámicas de alta gama que devuelven blancura y brillo.",
        card3Title: "Blanqueamiento Clínico",
        card3Desc: "Tecnología láser acelerada para aclarar hasta 8 tonos sin dolor.",
        card4Title: "Ortodoncia & Alineadores",
        card4Desc: "Alineación y corrección de mordida con tecnología invisible.",
        card5Title: "Coronas de Zirconia",
        card5Desc: "Biomateriales de máxima durabilidad y estética natural."
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
        location: "Contact",
        book: "Book Online"
      },
      hero: {
        badge: "individual approach & calm environment",
        title: `Attentive Care.<br>Precise Treatment.`,
        desc: `Looking for attentive and precise dental care in San Luis Río Colorado? We offer modern treatments tailored to your individual needs in a warm and comfortable environment.`,
        cta: "Book Appointment",
        stat1Val: "San Luis RC, Sonora",
        stat1Lbl: "Individualized Approach",
        stat2Val: "+52 (653) 515-8276",
        stat2Lbl: "Consultation & Treatment"
      },
      consultorio: {
        badge: "FACILITIES & LOCATION",
        topPara: "A modern dental clinic engineered for exceptional patient comfort and clinical precision from day one.",
        title: "Explore our<br/>dental office.",
        desc: "Strategically located in San Luis Río Colorado, minutes away from the Yuma & San Luis, AZ border. State-of-the-art 3D imaging, certified surgical operatory, and individualized VIP care.",
        cta1: "Book Appointment",
        cta2: "Get Directions",
        cap1Title: "Prime Border Location",
        cap1Desc: "Fast and easy access in the medical district with convenient on-site parking for local and US cross-border patients.",
        cap2Title: "3D Digital Technology",
        cap2Desc: "Sterile high-tech operatory, digital intraoral scanning, and ergonomic comfort dental chairs.",
        cap3Title: "Bilingual Attentive Care",
        cap3Desc: "Certified dental specialists and fluent English/Spanish patient concierge guiding every step of your journey."
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
        badge: "OUR SERVICES",
        title: "Comprehensive Dental Solutions",
        subtitle: "Medical, surgical & cosmetic dental excellence under one roof.",
        card1Title: "Dental Implants",
        card1Desc: "3D guided precision technology to restore full function.",
        card2Title: "Porcelain Veneers",
        card2Desc: "Premium ceramic veneers restoring natural brilliance.",
        card3Title: "Clinical Whitening",
        card3Desc: "Accelerated laser whitening up to 8 shades pain-free.",
        card4Title: "Orthodontics & Aligners",
        card4Desc: "Discreet alignment and bite correction technology.",
        card5Title: "Zirconia Crowns",
        card5Desc: "High-durability biomaterials with natural aesthetics."
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

    // Sync all language buttons across UI
    document.querySelectorAll('.lang-btn, .daria-lang-btn').forEach(b => {
      if (b.getAttribute('data-lang') === lang) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    // 1. Navigation links
    const liquidNavLinks = document.querySelectorAll('.liquid-pill-menu .liquid-nav-link');
    if (liquidNavLinks.length >= 5) {
      liquidNavLinks[0].textContent = t.nav.about;
      liquidNavLinks[1].textContent = t.nav.services;
      liquidNavLinks[2].textContent = t.nav.cases;
      liquidNavLinks[3].textContent = t.nav.dentists;
      liquidNavLinks[4].textContent = t.nav.location;
    }

    const drawerLinks = document.querySelectorAll('.drawer-links .drawer-link');
    if (drawerLinks.length >= 6) {
      const keys = ['home', 'about', 'services', 'cases', 'dentists', 'location'];
      drawerLinks.forEach((link, idx) => {
        if (keys[idx] && t.nav[keys[idx]]) link.textContent = t.nav[keys[idx]];
      });
    }

    // 2. Liquid Hero elements
    const heroBadge = document.querySelector('.liquid-badge-text');
    if (heroBadge) heroBadge.textContent = t.hero.badge;
    const heroTitle = document.querySelector('.liquid-hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    const heroDesc = document.querySelector('.liquid-hero-desc');
    if (heroDesc) heroDesc.textContent = t.hero.desc;
    const heroCta = document.querySelector('.liquid-hero-cta-label');
    if (heroCta) heroCta.textContent = t.hero.cta;
    const stat1Val = document.querySelector('.stat1-val');
    if (stat1Val) stat1Val.textContent = t.hero.stat1Val;
    const stat1Lbl = document.querySelector('.stat1-lbl');
    if (stat1Lbl) stat1Lbl.textContent = t.hero.stat1Lbl;
    const stat2Val = document.querySelector('.stat2-val');
    if (stat2Val) stat2Val.textContent = t.hero.stat2Val;
    const stat2Lbl = document.querySelector('.stat2-lbl');
    if (stat2Lbl) stat2Lbl.textContent = t.hero.stat2Lbl;

    // 3. Section 2 — Consultorio (Editorial Glass)
    const glassBadge = document.querySelector('.glass-badge span');
    if (glassBadge && t.consultorio) glassBadge.textContent = t.consultorio.badge;
    const glassTopPara = document.querySelector('.glass-top-paragraph');
    if (glassTopPara && t.consultorio) glassTopPara.textContent = t.consultorio.topPara;
    const glassMainTitle = document.querySelector('.glass-main-title');
    if (glassMainTitle && t.consultorio) glassMainTitle.innerHTML = t.consultorio.title;
    const glassSupportDesc = document.querySelector('.glass-support-desc');
    if (glassSupportDesc && t.consultorio) glassSupportDesc.textContent = t.consultorio.desc;
    const glassBtnSolid = document.querySelector('.glass-btn-solid span');
    if (glassBtnSolid && t.consultorio) glassBtnSolid.textContent = t.consultorio.cta1;
    const glassBtnPill = document.querySelector('.glass-btn-pill span');
    if (glassBtnPill && t.consultorio) glassBtnPill.textContent = t.consultorio.cta2;


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

    // 5. Services (Cloned Procedure Cards)
    const servicesBadge = document.querySelector('.services-eyebrow-badge');
    if (servicesBadge && t.services) servicesBadge.textContent = t.services.badge;
    const servicesTitle = document.querySelector('#services .section-title');
    if (servicesTitle && t.services) servicesTitle.textContent = t.services.title;
    const servicesSubtitle = document.querySelector('#services .section-subtitle');
    if (servicesSubtitle && t.services) servicesSubtitle.textContent = t.services.subtitle;

    const procCards = document.querySelectorAll('.procedure-service-card');
    if (procCards.length >= 5 && t.services) {
      const titles = [t.services.card1Title, t.services.card2Title, t.services.card3Title, t.services.card4Title, t.services.card5Title];
      const descs = [t.services.card1Desc, t.services.card2Desc, t.services.card3Desc, t.services.card4Desc, t.services.card5Desc];
      procCards.forEach((card, idx) => {
        const titleEl = card.querySelector('.procedure-title');
        const descEl = card.querySelector('.procedure-desc');
        if (titleEl && titles[idx]) titleEl.textContent = titles[idx];
        if (descEl && descs[idx]) descEl.textContent = descs[idx];
      });
    }

    // 6. Clinical Cases
    const casesBadge = document.querySelector('.cases-badge span:last-child, .cases-stage-badge span:last-child');
    if (casesBadge && t.cases) casesBadge.textContent = t.cases.badge;
    const casesTitle = document.querySelector('.cases-title, .cases-stage-main-title');
    if (casesTitle && t.cases) casesTitle.innerHTML = t.cases.title;
    const casesDesc = document.querySelector('.cases-description, .cases-stage-description');
    if (casesDesc && t.cases) casesDesc.textContent = t.cases.desc;
    document.querySelectorAll('.case-action-btn span:first-child').forEach(btn => {
      if (t.cases) btn.textContent = t.cases.learnMore;
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
  const langBtns = document.querySelectorAll('.lang-btn, .daria-lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
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
  // 4. MOBILE DRAWER NAVIGATION & BODY LOCK
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    if (drawer) {
      drawer.classList.add('open');
      document.body.classList.add('no-scroll');
    }
  };

  const closeDrawer = () => {
    if (drawer) {
      drawer.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
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
  // 7. GOOGLE MAPS REVIEWS CONTINUOUS MARQUEE LOOP (PAUSE OFFSCREEN)
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
  // 8. DENTALINK VIP CONCIERGE MODAL & FORM SUBMISSION
  // ==========================================================================
  const dentalinkModal = document.getElementById('dentalinkModal');
  const openHeroAgendaModal = document.getElementById('openHeroAgendaModal');
  const closeHeroAgendaModal = document.getElementById('closeHeroAgendaModal');
  const openAgendaFromMascot = document.getElementById('openAgendaFromMascot');
  const openAgendaFromForm = document.getElementById('openAgendaFromForm');

  if (dentalinkModal) {
    const openAgenda = (e) => {
      if (e) e.preventDefault();
      dentalinkModal.removeAttribute('inert');
      dentalinkModal.classList.add('active');
      dentalinkModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeAgenda = () => {
      dentalinkModal.setAttribute('inert', '');
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
  // 9. NAVBAR ACTIVE STATE & HEADER THEME ON SCROLL
  // ==========================================================================
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
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // ==========================================================================
  // 10. SMOOTH ANCHOR NAVIGATION (ULTRA FAST NATIVE SCROLL)
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const drawer = document.getElementById('mobileDrawer');
          if (drawer && drawer.classList.contains('active')) {
            drawer.classList.remove('active');
          }
        }
      }
    });
  });

  // ==========================================================================
  // 11. SECTION 2 — CONSULTORIO 102-FRAME PINNED SCROLL TOUR (SAFARI OPTIMIZED)
  // ==========================================================================
  const consultorioSection = document.getElementById('consultorio');
  const consultorioCanvas = document.getElementById('consultorioCanvas');

  if (consultorioSection && consultorioCanvas) {
    const ctx = consultorioCanvas.getContext('2d', { alpha: false });
    const totalFrames = 102;
    const pad = (n) => String(n).padStart(3, '0');
    const frames = new Array(totalFrames);
    let framesLoaded = 0;

    let targetProgress = 0;
    let currentProgress = 0;
    let lastRenderedFrame = -1;
    let isLoopRunning = false;

    let canvasW = 0;
    let canvasH = 0;
    let drawW = 0;
    let drawH = 0;
    let offsetX = 0;
    let offsetY = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvasW = consultorioCanvas.clientWidth || window.innerWidth;
      canvasH = consultorioCanvas.clientHeight || window.innerHeight;
      
      consultorioCanvas.width = Math.round(canvasW * dpr);
      consultorioCanvas.height = Math.round(canvasH * dpr);

      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'medium';
      }

      const imgAspect = 1920 / 1080;
      const cAspect = canvasW / canvasH;

      if (cAspect > imgAspect) {
        drawW = canvasW;
        drawH = canvasW / imgAspect;
        offsetX = 0;
        offsetY = (canvasH - drawH) / 2;
      } else {
        drawH = canvasH;
        drawW = canvasH * imgAspect;
        offsetX = (canvasW - drawW) / 2;
        offsetY = 0;
      }

      if (lastRenderedFrame >= 0 && frames[lastRenderedFrame]) {
        drawFrame(frames[lastRenderedFrame]);
      }
    };

    const drawFrame = (img) => {
      if (!ctx || !img || !img.complete || img.naturalWidth === 0) return;
      ctx.drawImage(img, Math.round(offsetX), Math.round(offsetY), Math.round(drawW), Math.round(drawH));
    };

    // Safari-optimized progressive WebP loader
    let allFramesRequested = false;

    const loadFrame = (index, callback) => {
      if (frames[index]) {
        if (callback && frames[index].complete && frames[index].naturalWidth > 0) {
          callback(frames[index]);
        }
        return;
      }
      const img = new Image();
      img.decoding = 'async';
      img.src = `sectionmotion/motion1/ezgif-frame-${pad(index + 1)}.webp`;
      img.onload = () => {
        framesLoaded++;
        if (callback) callback(img);
      };
      frames[index] = img;
    };

    // Load Frame 0 and Frame 101 immediately for fast visual response
    loadFrame(0, (img) => {
      lastRenderedFrame = 0;
      resizeCanvas();
      drawFrame(img);
    });
    loadFrame(totalFrames - 1);

    const loadAllFramesProgressive = () => {
      if (allFramesRequested) return;
      allFramesRequested = true;
      let cur = 1;
      const batchSize = 4;
      const loadNextBatch = () => {
        const end = Math.min(cur + batchSize, totalFrames - 1);
        for (let i = cur; i < end; i++) {
          loadFrame(i);
        }
        cur = end;
        if (cur < totalFrames - 1) {
          if ('requestIdleCallback' in window) {
            requestIdleCallback(loadNextBatch, { timeout: 800 });
          } else {
            setTimeout(loadNextBatch, 40);
          }
        }
      };
      loadNextBatch();
    };

    if ('IntersectionObserver' in window) {
      const motionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadAllFramesProgressive();
          motionObserver.disconnect();
        }
      }, { rootMargin: '500px 0px' });
      motionObserver.observe(consultorioSection);
    } else {
      setTimeout(loadAllFramesProgressive, 1500);
    }

    const renderLoop = () => {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0003) {
        currentProgress += diff * 0.28;
      } else {
        currentProgress = targetProgress;
      }

      const frameIdx = Math.min(Math.max(Math.round(currentProgress * (totalFrames - 1)), 0), totalFrames - 1);
      
      if (frameIdx !== lastRenderedFrame) {
        if (frames[frameIdx] && frames[frameIdx].complete && frames[frameIdx].naturalWidth > 0) {
          drawFrame(frames[frameIdx]);
          lastRenderedFrame = frameIdx;
        } else {
          loadFrame(frameIdx, (img) => {
            drawFrame(img);
            lastRenderedFrame = frameIdx;
          });
        }
      }

      if (Math.abs(targetProgress - currentProgress) > 0.0003) {
        requestAnimationFrame(renderLoop);
      } else {
        isLoopRunning = false;
      }
    };

    const onScroll = () => {
      const rect = consultorioSection.getBoundingClientRect();
      const winH = window.innerHeight;
      const scrollableDist = rect.height - winH;

      if (scrollableDist <= 0) return;

      if (rect.top > 0) {
        targetProgress = 0;
      } else if (-rect.top >= scrollableDist) {
        targetProgress = 1;
      } else {
        targetProgress = -rect.top / scrollableDist;
      }

      if (!isLoopRunning) {
        isLoopRunning = true;
        requestAnimationFrame(renderLoop);
      }
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    resizeCanvas();
    setTimeout(() => {
      resizeCanvas();
      if (frames[0] && frames[0].complete) {
        drawFrame(frames[0]);
      }
    }, 100);
  }

  // ==========================================================================
  // 12. CASOS CLÍNICOS REALES — INFINITE CINEMA TRAILER LOOP ENGINE
  // ==========================================================================
  const stageTrack = document.getElementById('stageTrack');
  const stageMarquee = document.getElementById('stageMarquee');
  const stagePrev = document.getElementById('stagePrev');
  const stageNext = document.getElementById('stageNext');
  const casesSection = document.getElementById('cases');

  if (stageTrack && stageMarquee) {
    // Clone original cards to enable seamless infinite wrap
    const initialCards = Array.from(stageTrack.children);
    initialCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      stageTrack.appendChild(clone);
    });

    let currentX = 0;
    let targetX = 0;
    let baseSpeed = 0.85;
    let currentSpeed = baseSpeed;
    let isHovered = false;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartPos = 0;
    let dragMoved = false;
    let rafId = null;
    let isVisible = false;

    function getHalfWidth() {
      let totalWidth = 0;
      for (let i = 0; i < initialCards.length; i++) {
        totalWidth += (stageTrack.children[i].offsetWidth || 340) + 28;
      }
      return totalWidth || (initialCards.length * 368);
    }

    let halfWidth = getHalfWidth();
    window.addEventListener('resize', () => {
      halfWidth = getHalfWidth();
    });

    function updateTrack() {
      if (halfWidth > 0) {
        while (currentX >= halfWidth) {
          currentX -= halfWidth;
          targetX -= halfWidth;
        }
        while (currentX < 0) {
          currentX += halfWidth;
          targetX += halfWidth;
        }
      }
      stageTrack.style.transform = `translate3d(${-currentX}px, 0, 0)`;
    }

    function animate() {
      if (!isVisible) {
        rafId = null;
        return;
      }

      if (!isDragging) {
        const targetSpeed = isHovered ? 0.15 : baseSpeed;
        currentSpeed += (targetSpeed - currentSpeed) * 0.08;
        targetX += currentSpeed;
        currentX += (targetX - currentX) * 0.12;
      }

      updateTrack();
      rafId = requestAnimationFrame(animate);
    }

    function startAnimation() {
      if (!rafId && isVisible) {
        rafId = requestAnimationFrame(animate);
      }
    }

    function stopAnimation() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    // IntersectionObserver to preserve 60fps & 0% idle CPU when out of view
    if ('IntersectionObserver' in window && casesSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            startAnimation();
          } else {
            stopAnimation();
          }
        });
      }, { rootMargin: '100px 0px' });
      observer.observe(casesSection);
    } else {
      isVisible = true;
      startAnimation();
    }

    // Hover slowdown
    stageMarquee.addEventListener('mouseenter', () => { isHovered = true; });
    stageMarquee.addEventListener('mouseleave', () => { isHovered = false; });

    // Pointer Drag & Scrub Interaction
    stageMarquee.addEventListener('pointerdown', (e) => {
      isDragging = true;
      dragMoved = false;
      dragStartX = e.clientX;
      dragStartPos = currentX;
      stageTrack.classList.add('is-dragging');
      stageMarquee.setPointerCapture(e.pointerId);
    });

    stageMarquee.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const delta = e.clientX - dragStartX;
      if (Math.abs(delta) > 4) dragMoved = true;
      targetX = dragStartPos - delta;
      currentX = targetX;
      updateTrack();
    });

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      stageTrack.classList.remove('is-dragging');
      try {
        if (stageMarquee.hasPointerCapture(e.pointerId)) {
          stageMarquee.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
    }

    stageMarquee.addEventListener('pointerup', endDrag);
    stageMarquee.addEventListener('pointercancel', endDrag);

    // Prevent accidental link clicks during drag
    stageMarquee.addEventListener('click', (e) => {
      if (dragMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Arrow controls (Dynamic Mobile-First Card Step)
    const getCardStep = () => {
      if (stageTrack.children && stageTrack.children[0]) {
        return (stageTrack.children[0].offsetWidth || 320) + 16;
      }
      return 320;
    };
    if (stagePrev) {
      stagePrev.addEventListener('click', (e) => {
        e.preventDefault();
        targetX -= getCardStep();
      });
    }
    if (stageNext) {
      stageNext.addEventListener('click', (e) => {
        e.preventDefault();
        targetX += getCardStep();
      });
    }
  }

  // Procedure Cards & Specialty Pills Interaction
  const procedureCards = document.querySelectorAll('.procedure-service-card, .specialty-pill');
  procedureCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});





