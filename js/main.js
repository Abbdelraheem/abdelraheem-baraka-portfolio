/* ============================================================
   ABDELRAHEEM BARAKA — FLAGSHIP PORTFOLIO INTERACTIONS
   Cinematic Editorial · GSAP Motion · Three.js 3D Engine · i18n
   ============================================================ */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- Global Failsafe ---------- */
  function forceShow() {
    document.documentElement.classList.add('force-show');
    const pre = document.querySelector('.preloader');
    if (pre) pre.classList.add('done');
  }

  window.addEventListener('error', function (e) {
    if (e instanceof ErrorEvent) forceShow();
  });
  window.addEventListener('unhandledrejection', forceShow);

  setTimeout(function () {
    const pre = document.querySelector('.preloader');
    if (pre && !pre.classList.contains('done')) forceShow();
  }, 3500);

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HAS_GSAP = typeof window.gsap !== 'undefined';
  const gsap = window.gsap || null;
  const ScrollTrigger = (HAS_GSAP && window.ScrollTrigger) ? window.ScrollTrigger : null;

  if (HAS_GSAP && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- Helpers ---------- */
  function fmt(val, decimals, suffix) {
    const fixed = Number(val).toFixed(decimals);
    return fixed + (suffix || '');
  }

  /* ---------- Preloader ---------- */
  const preloader = document.querySelector('.preloader');
  const preNum = document.getElementById('preloaderNum');
  const preFill = document.getElementById('preloaderFill');

  function finishPreloader() {
    if (!preloader) return;
    preloader.classList.add('done');
    setTimeout(function () {
      if (preloader && preloader.parentNode) preloader.parentNode.removeChild(preloader);
    }, 800);
    heroIntro();
    initCounters();
  }

  if (preloader) {
    if (REDUCED || !HAS_GSAP) {
      if (preFill) preFill.style.width = '100%';
      if (preNum) preNum.textContent = '100';
      finishPreloader();
    } else {
      const preState = { n: 0 };
      gsap.to(preState, {
        n: 100,
        duration: 0.9,
        ease: 'power2.inOut',
        onUpdate: function () {
          const n = Math.round(preState.n);
          if (preNum) preNum.textContent = String(n).padStart(2, '0');
          if (preFill) preFill.style.width = n + '%';
        },
        onComplete: finishPreloader
      });
    }
  } else {
    heroIntro();
    initCounters();
  }

  /* ---------- Hero Intro Animation ---------- */
  function heroIntro() {
    if (REDUCED || !HAS_GSAP) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero-eyebrow', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.1)
      .fromTo('.hero-line-1', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1.0 }, 0.25)
      .fromTo('.hero-line-2', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1.0 }, 0.4)
      .fromTo('.hero-sub', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.65)
      .fromTo('.hero-para', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.75)
      .fromTo('.hero-actions', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.85)
      .fromTo('.hero-foot', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.95 }, 0.95)
      .fromTo('.hero-visual', { opacity: 0 }, { opacity: 1, duration: 1.3 }, 0.4);
  }

  /* ---------- Numbers Counter ---------- */
  function initCounters() {
    const counterEls = document.querySelectorAll('[data-count]');
    counterEls.forEach(el => {
      const target = parseFloat(el.getAttribute('data-count')) || 0;
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';

      if (HAS_GSAP && ScrollTrigger) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 92%',
          once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = fmt(obj.val, decimals, suffix);
              }
            });
          }
        });
      } else {
        el.textContent = fmt(target, decimals, suffix);
      }
    });
  }

  /* ---------- Custom Cursor ---------- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  if (cursorDot && cursorRing && !window.matchMedia('(pointer: coarse)').matches) {
    document.body.classList.add('cursor-on');
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    function loopCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(loopCursor);
    }
    loopCursor();

    document.querySelectorAll('a, button, [data-magnetic]').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
    });
  }

  /* ---------- Scroll Progress Bar ---------- */
  const progressEl = document.querySelector('.scroll-progress');
  if (progressEl) {
    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressEl.style.transform = `scaleX(${pct})`;
    }, { passive: true });
  }

  /* ---------- Nav Toggle & Mobile Menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });
  }

  /* ============================================================
     THREE.JS 3D HERO VOLUMETRIC SCULPTURE
     ============================================================ */
  (function initThreeJS() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const container = canvas.parentElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.0);
    mainLight.position.set(30, 35, 30);
    scene.add(mainLight);

    const limeLight = new THREE.PointLight(0xc8ff3d, 6.0, 90);
    limeLight.position.set(-25, 20, 25);
    scene.add(limeLight);

    const cyanRim = new THREE.PointLight(0x38bdf8, 3.0, 70);
    cyanRim.position.set(25, -20, -20);
    scene.add(cyanRim);

    // Sculpture Group
    const group = new THREE.Group();
    // Offset group slightly towards the left (RTL visual side)
    group.position.set(window.innerWidth > 992 ? -14 : 0, 0, 0);
    scene.add(group);

    // 1. Titanium Faceted Core
    const coreGeo = new THREE.IcosahedronGeometry(11.5, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x12151b,
      metalness: 0.94,
      roughness: 0.14
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // 2. Lime Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(15.5, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xc8ff3d,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    group.add(cageMesh);

    // 3. Orbital Ring 1 (Lime)
    const ringGeo1 = new THREE.TorusGeometry(21.5, 0.28, 16, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xc8ff3d,
      metalness: 0.9,
      roughness: 0.15
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // 4. Orbital Ring 2 (Titanium Platinum)
    const ringGeo2 = new THREE.TorusGeometry(24.5, 0.22, 16, 120);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x8b949e,
      metalness: 0.95,
      roughness: 0.2
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3.5;
    ring2.rotation.z = Math.PI / 5;
    group.add(ring2);

    // 5. Halo Particle Swarm
    const pCount = 220;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const i3 = i * 3;
      const r = 18 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i3 + 2] = r * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xc8ff3d,
      size: 1.25,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    // Cursor tracking
    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;

    window.addEventListener('mousemove', e => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      group.position.set(window.innerWidth > 992 ? -14 : 0, 0, 0);
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;

      group.rotation.y = t * 0.18 + curX * 0.8;
      group.rotation.x = Math.sin(t * 0.15) * 0.2 + curY * 0.8;

      ring1.rotation.z = t * 0.22;
      ring2.rotation.x = -t * 0.16;
      cageMesh.rotation.y = -t * 0.12;
      particles.rotation.y = t * 0.035;

      renderer.render(scene, camera);
    }
    animate();
  })();

  /* ============================================================
     BILINGUAL ENGINE (ARABIC RTL / ENGLISH LTR)
     ============================================================ */
  const i18nData = {
    ar: {
      brandSub: "هندسة نظم سحابية وذكاء اصطناعي",
      navMethod: "النظام",
      navProblem: "المشكلة",
      navPhilosophy: "الفلسفة",
      navCases: "الأنظمة",
      navContact: "الاستشارة والتعاقد",
      navCta: "احجز استشارة برمجية",
      eyebrow: "نظام المعمارية السحابية المتقدمة",
      heroT1: "البرمجة",
      heroT2: "مش مجرد",
      heroT3: "كود.",
      heroSub: "وراء كل منصة ناجحة <strong>معمارية صلبة.</strong>",
      heroPara: "م. عبدالرحيم بركة يبني للشركات ورواد الأعمال منصات الـ SaaS السحابية، خطوط معالجة الفيديو بالذكاء الاصطناعي، والتدقيق الأمني السيبراني المتقدم — أنظمة تخدم أهدافك التجارية وتتحمل الضغط.",
      heroBtn1: "احجز استشارة برمجية",
      heroBtn2: "استكشف الأنظمة",
      stat1Lbl: "منصات SaaS سحابية من الصفر",
      stat2Lbl: "موديول فحص أمني وتدقيق ثغرات",
      stat3Lbl: "جاهزية واستقرار البنية التحتية",
      stat4Lbl: "التزام كامل بالمواصفات والمواعيد",
      scrollCue: "مرّر",
      probTitle1: "مشكلتك مش إنك مش لاقي مبرمج.",
      probTitle2: "مشكلتك إنك بتدفع لأنظمة بتنهار تحت الضغط أو ما بتكتمل.",
      probLead: "تدفع آلاف الدولارات وتنتظر أشهراً، لتتفاجأ بنظام بطيء، ثغرات كارثية، أو كود عشوائي غير قابل للتوسع. الفجوة بين الكود السطحي والأنظمة الحقيقية تبدأ من هنا.",
      casesTitle: "الأنظمة تتحدث بالأرقام.",
      casesLead: "دراسات حالة موثّقة لأنظمة برمجية حقيقية قيد التشغيل — المعمارية، الأثر التجاري، والتقنيات.",
      btnArch: "استعراض المعمارية والحل ←",
      contactTitle: "جاهز لبناء نظامك البرمجي القادم؟",
      contactLead: "متاح للتعاقد مع الشركات الناشئة، المؤسسات، ورواد الأعمال الجادين لبناء وتطوير أنظمة برمجية بمستوى عالمي.",
      btnWa: "محادثة مباشرة عبر واتساب",
      btnEmail: "استشارة عبر البريد الإلكتروني"
    },
    en: {
      brandSub: "Systems & Cloud Architect",
      navMethod: "The Method",
      navProblem: "The Problem",
      navPhilosophy: "Philosophy",
      navCases: "Systems",
      navContact: "Consultation",
      navCta: "Book Architecture Call",
      eyebrow: "Advanced Cloud & AI Systems Engineering",
      heroT1: "Software",
      heroT2: "is not just",
      heroT3: "code.",
      heroSub: "Behind every scalable platform is a <strong>rock-solid architecture.</strong>",
      heroPara: "Eng. Abdelraheem Baraka architects enterprise SaaS platforms, automated AI video pipelines, and advanced cybersecurity audits — built strictly to withstand traffic and drive business revenue.",
      heroBtn1: "Book Architecture Call",
      heroBtn2: "Explore Systems",
      stat1Lbl: "Cloud SaaS Platforms Built",
      stat2Lbl: "Vulnerability Scanning Engines",
      stat3Lbl: "Infrastructure Uptime SLA",
      stat4Lbl: "Milestone Execution Rate",
      scrollCue: "Scroll",
      probTitle1: "Your issue isn't finding a programmer.",
      probTitle2: "Your issue is paying for code that crashes under load or stays unfinished.",
      probLead: "You invest thousands and wait months, only to get a sluggish app, critical security loopholes, or spaghetti code that can never scale. The gap between naive scripts and production systems begins here.",
      casesTitle: "Systems speak in metrics.",
      casesLead: "Documented case studies of real-world running software platforms — architecture, business impact, and tech stack.",
      btnArch: "View Architecture & Solution ←",
      contactTitle: "Ready to build your next significant system?",
      contactLead: "Available for strategic contract engineering with startups, enterprises, and ambitious founders.",
      btnWa: "Direct WhatsApp Consultation",
      btnEmail: "Email Architecture Inquiry"
    }
  };

  /* Projects Architecture Database */
  const projectsData = {
    cliptica: {
      ar: {
        title: "Cliptica — منصة SaaS لمعالجة الفيديو بالـ AI",
        tag: "AI VIDEO PIPELINE",
        overview: "منصة متطورة لتحويل مقاطع اليوتيوب الطويلة إلى فيديوهات قصيرة (Shorts & Reels 9:16) تلقائياً بنماذج الذكاء الاصطناعي مع تتبع الوجه وتوليد كابشنز حركية.",
        solution: "طابور معالجة موزع (Groq Whisper + InsightFace + FFmpeg) يرفع تلقائياً لسحابة Cloudflare R2 مع اشتراكات Paddle الآلية ونظام حماية SSRF صارم.",
        impact: "توفير 95% من وقت المونتاج اليدوي — معالجة فيديو كامل مدته ساعة إلى 10 مقاطع احترافية في أقل من دقيقتين.",
        stack: ["Next.js", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      },
      en: {
        title: "Cliptica — AI Video Clipping SaaS",
        tag: "AI VIDEO PIPELINE",
        overview: "An automated SaaS transforming long YouTube content into viral 9:16 vertical shorts using computer vision speaker tracking and dynamic karaoke captions.",
        solution: "Decoupled pipeline leveraging Groq Whisper, InsightFace, and GPU FFmpeg streaming directly to Cloudflare R2 with Paddle billing and strict SSRF sanitization.",
        impact: "Cuts 95% of manual editing overhead, outputting 10 viral clips from 1 hour of footage in under 120 seconds.",
        stack: ["Next.js", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      }
    },
    recflow: {
      ar: {
        title: "RecFlow — نظام وسائط سحابي موزع",
        tag: "DISTRIBUTED MEDIA SAAS",
        overview: "منصة ويب متطورة لتسجيل الشاشة والبث الفوري من المتصفح بدون تثبيت أي برامج مع رفع ومعالجة سحابية فورية.",
        solution: "معمارية Zero-API-Load: رفع الفيديوهات المجزأة مباشرة إلى S3/R2 عبر روابط موقّعة Signed URLs مع عمال Fastify 5 و BullMQ و Redis للمعالجة بالخلفية.",
        impact: "استيعاب آلاف التسجيلات المتزامنة بتكلفة خوادم منخفضة وبدون أي استنزاف لباندويث خادم الـ API.",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "Stripe", "AWS S3 / R2"]
      },
      en: {
        title: "RecFlow — Distributed Cloud Media SaaS",
        tag: "DISTRIBUTED MEDIA SAAS",
        overview: "Zero-install browser screen recorder and live streaming portal uploading directly into distributed cloud buckets.",
        solution: "Zero-API-Load ingestion utilizing presigned multi-part chunk uploads orchestrated by Fastify 5, BullMQ workers, and Redis background queues.",
        impact: "Handles thousands of concurrent browser recording sessions with near-zero API bandwidth strain.",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "Stripe", "AWS S3 / R2"]
      }
    },
    kashf: {
      ar: {
        title: "Kashf (كشف) — محرك الأمن السيبراني والـ DevSecOps",
        tag: "ENTERPRISE SECURITY SCANNER",
        overview: "ماسح أمني شامل وتدقيق اختراق يختبر تطبيقات الويب ضد 17 صنفاً من الثغرات المتقدمة مع وحدة لفحص هجمات نماذج الذكاء الاصطناعي (Prompt Injection).",
        solution: "محرك تحقق آلي PoC Validation يمنع البلاغات الوهمية وينتج تقارير تنفيذية رسمية بصيغتي العربية والإنجليزية للشركات.",
        impact: "حماية الأنظمة الحساسة من تسريب البيانات وغرامات الامتثال قبل إطلاق الأنظمة للإنتاج.",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"]
      },
      en: {
        title: "Kashf — Enterprise Cybersecurity Scanner",
        tag: "ENTERPRISE SECURITY SCANNER",
        overview: "Deep vulnerability auditing engine covering 17 critical vectors (SQLi, SSRF, Deserialization, SSTI) alongside an AI Prompt Injection assessment module.",
        solution: "Deterministic PoC validation eliminates false alarms and compiles executive security audit reports.",
        impact: "Protects enterprise systems against catastrophic data leaks and regulatory penalties.",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"]
      }
    },
    yadbiyad: {
      ar: {
        title: "منصة يد بيد — بوابة إغاثة وتبرعات حية",
        tag: "LIVE PRODUCTION PLATFORM",
        overview: "منصة خيرية حقيقية تعمل على النطاق الحي (handbyhandps.com) لإدارة حملات الإغاثة والتبرعات ونشر القصص الميدانية الشفافة.",
        solution: "معمارية خفيفة وسريعة تحت ظروف الاتصال الضعيف مع قاعدة بيانات آمنة ولوحة تحكم CMS مخصصة.",
        impact: "تمكين المؤسسة من جمع وإدارة تبرعات للمتضررين بشفافية وسرعة على أرض الواقع.",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"]
      },
      en: {
        title: "Yad Biyad — Live Humanitarian Portal",
        tag: "LIVE PRODUCTION PLATFORM",
        overview: "An active, live humanitarian portal (handbyhandps.com) managing urgent relief campaigns and international donations.",
        solution: "Ultra-resilient, lightweight architecture engineered for zero-latency response on constrained cellular networks.",
        impact: "Directly powers transparent disaster relief fundraising for thousands of real beneficiaries.",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"]
      }
    },
    neonarcade: {
      ar: {
        title: "NeonArcade — منصة ألعاب الويب التفاعلية",
        tag: "WEB GAMING HUB",
        overview: "منصة ألعاب متطورة مبنية بـ Next.js 14 تستضيف 50 لعبة تفاعلية تعمل فوراً داخل المتصفح بدون أي تثبيت مع لوحة تحكم ودعم لغتين.",
        solution: "تقنية التحميل الكسول المخصص Dynamic Code-Splitting لمنع بطء التصفح مع مساحات إعلانية ذكية.",
        impact: "رفع مدة بقاء المستخدم في الموقع لأكثر من 15 دقيقة للجلسة وتوليد عوائد إعلانية مستمرة.",
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"]
      },
      en: {
        title: "NeonArcade — Next.js 14 Instant Gaming Hub",
        tag: "WEB GAMING HUB",
        overview: "Instant browser gaming ecosystem featuring 50 lightweight games with zero installation overhead, bilingual support, and admin suite.",
        solution: "Dynamic imports and code-splitting preventing performance bloat with programmatic ad slots.",
        impact: "Increases average user session length past 15 minutes with scalable ad monetisation.",
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"]
      }
    },
    wasalny: {
      ar: {
        title: "Wasalny (وصلني) — تطبيق لوجستي لإدارة الشحنات",
        tag: "MOBILE SYSTEMS",
        overview: "تطبيق هواتف ذكية لمنصتي Android و iOS مطور بـ Flutter لإدارة الشحنات الميدانية وتتبع عمليات التوصيل والعمل بدون إنترنت.",
        solution: "تطبيق نمط Clean Architecture مع قاعدة بيانات SQLite للمزامنة التلقائية فور عودة الاتصال وحركة 60 إطار في الثانية.",
        impact: "منع تعطل مندوبي التوصيل في المناطق الخالية من التغطية وتسريع دورة تسليم الطرود.",
        stack: ["Flutter", "Dart", "Provider", "SQLite", "Clean Architecture"]
      },
      en: {
        title: "Wasalny — Cross-Platform Logistics App",
        tag: "MOBILE SYSTEMS",
        overview: "Production mobile app built with Flutter for Android and iOS managing delivery manifests and field milestones.",
        solution: "Clean Architecture domain isolation paired with SQLite offline-first synchronization.",
        impact: "Eliminates field delivery downtime in remote zones with automated background syncing.",
        stack: ["Flutter", "Dart", "Provider", "SQLite", "Clean Architecture"]
      }
    },
    electrolux: {
      ar: {
        title: "ElectroLux — متجر إلكتروني فاخر عالي التحويل",
        tag: "HIGH-CONVERTING E-COMMERCE",
        overview: "تجربة تسوق إلكتروني متطورة للأجهزة والمعدات الدقيقة تجمع بين الفخامة والسرعة الفائقة وسلة تسوق تفاعلية سريعة.",
        solution: "تطبيق SPA تفاعلي بـ React يقدم استجابة فورية بدون إعادة تحميل للصفحة وفلترة ديناميكية سريعة للمنتجات.",
        impact: "رفع نسبة إتمام عمليات الشراء (Checkout Conversion) إلى مستويات استثنائية.",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"]
      },
      en: {
        title: "ElectroLux — Luxury Precision E-Commerce",
        tag: "HIGH-CONVERTING E-COMMERCE",
        overview: "High-performance luxury e-commerce platform built for high checkout conversions with dynamic filtering and reactive cart state.",
        solution: "Single-page reactive catalog with frictionless multi-step checkout funnel.",
        impact: "Maximizes cart checkout conversions and delivers sub-second page transitions.",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"]
      }
    }
  };

  let currentLang = localStorage.getItem('baraka_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('baraka_lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = i18nData[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.innerHTML = dict[k];
    });

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
      langToggleBtn.innerHTML = lang === 'ar'
        ? `<span class="active">العربية</span><i>/</i><span>EN</span>`
        : `<span>AR</span><i>/</i><span class="active">English</span>`;
    }
  }

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  /* ---------- Architecture Modal Drawer ---------- */
  const modal = document.getElementById('archModal');
  const mTitle = document.getElementById('modalTitle');
  const mCat = document.getElementById('modalCat');
  const mOverview = document.getElementById('modalOverview');
  const mSolution = document.getElementById('modalSolution');
  const mImpact = document.getElementById('modalImpact');
  const mStack = document.getElementById('modalStack');
  const mClose = document.getElementById('modalClose');

  function openArchModal(key) {
    const data = projectsData[key]?.[currentLang];
    if (!data) return;

    mTitle.textContent = data.title;
    mCat.textContent = data.tag;
    mOverview.textContent = data.overview;
    mSolution.textContent = data.solution;
    mImpact.textContent = data.impact;

    mStack.innerHTML = '';
    data.stack.forEach(s => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = s;
      mStack.appendChild(span);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeArchModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-arch]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openArchModal(btn.getAttribute('data-open-arch'));
    });
  });

  if (mClose) mClose.addEventListener('click', closeArchModal);
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeArchModal();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeArchModal();
  });

  /* ---------- Method: horizontal storytelling (desktop) ---------- */
  const methodPinEl = document.getElementById('methodPin');
  const methodMobileEl = document.querySelector('.method-mobile');
  const methodTrackEl = document.getElementById('methodTrack');

  function useMobileMethod() {
    if (methodPinEl) methodPinEl.style.display = 'none';
    if (methodMobileEl) {
      methodMobileEl.style.display = 'flex';
      methodMobileEl.style.maxWidth = 'none';
    }
  }

  if (methodPinEl && methodTrackEl && HAS_GSAP && ScrollTrigger && !REDUCED && window.innerWidth > 992) {
    const dist = () => Math.max(methodTrackEl.scrollWidth - window.innerWidth, 0);

    try {
      const tween = gsap.to(methodTrackEl, {
        x: () => dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: methodPinEl,
          start: 'top top',
          end: () => '+=' + dist(),
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth <= 992) {
          if (tween.scrollTrigger) tween.scrollTrigger.kill();
          useMobileMethod();
        }
      });
    } catch (e) {
      useMobileMethod();
    }
  } else if (methodPinEl) {
    useMobileMethod();
  }

  // Init Language
  applyLanguage(currentLang);
})();
