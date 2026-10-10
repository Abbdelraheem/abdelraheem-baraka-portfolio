// ============================================================
// WHITE & GREEN PORTFOLIO — 3D ENGINE & INTERACTIONS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. THREE.JS MINIMALIST 3D SCULPTURE ---------- */
  (function initMinimalist3D() {
    const container = document.getElementById('hero-3d-box');
    const canvas = document.getElementById('hero-3d-canvas');
    if (!container || !canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 42);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(20, 30, 25);
    scene.add(mainLight);

    // Emerald Point Light
    const emeraldLight = new THREE.PointLight(0x059669, 4.0, 70);
    emeraldLight.position.set(-18, 15, 20);
    scene.add(emeraldLight);

    // Soft Mint Rim Light
    const rimLight = new THREE.PointLight(0x10b981, 2.5, 60);
    rimLight.position.set(18, -15, -15);
    scene.add(rimLight);

    // Sculpture Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Emerald Gem Core
    const coreGeo = new THREE.IcosahedronGeometry(9.5, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      metalness: 0.82,
      roughness: 0.2,
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // 2. Pearl White Wireframe Outer Cage
    const cageGeo = new THREE.IcosahedronGeometry(13.5, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    group.add(cageMesh);

    // 3. Smooth Porcelain Gyroscopic Ring
    const ringGeo = new THREE.TorusGeometry(18.5, 0.28, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.15
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    group.add(ringMesh);

    // 4. Subtle Outer Emerald Particles
    const pCount = 120;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const i3 = i * 3;
      const r = 16 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i3 + 2] = r * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x059669,
      size: 1.1,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    // Smooth Cursor Parallax
    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - (rect.left + rect.width / 2)) / rect.width) * 1.5;
      targetY = ((e.clientY - (rect.top + rect.height / 2)) / rect.height) * 1.5;
    });

    window.addEventListener('resize', () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;

      group.rotation.y = time * 0.2 + curX * 0.8;
      group.rotation.x = Math.sin(time * 0.15) * 0.2 + curY * 0.8;
      ringMesh.rotation.z = time * 0.25;
      cageMesh.rotation.y = -time * 0.12;

      renderer.render(scene, camera);
    }
    animate();
  })();

  /* ---------- 2. BILINGUAL DICTIONARY (AR / EN) ---------- */
  const translations = {
    ar: {
      roleSub: "مهندس برمجيات ونظم سحابية",
      navWork: "المشاريع",
      navCapabilities: "القدرات الهندسية",
      navContact: "تواصل معي",
      navBtn: "تواصل للتعاقد",
      statusBadge: "متاح للتعاقد والمشاريع الجديدة",
      heroT1: "أبني منصات برمجية سحابية،",
      heroT2: "ذكاء اصطناعي، وأنظمة محصنة.",
      heroDesc: "مهندس برمجيات متخصص في بناء تطبيقات الـ SaaS السحابية، خطوط معالجة الفيديو بالذكاء الاصطناعي، والتدقيق الأمني السيبراني المتقدم — حلول هندسية واضحة ومستقرة تحقق أهدافك وتخدم عملائك.",
      btnChat: "محادثة فورية عبر واتساب",
      btnExplore: "استكشف المشاريع",
      stat1Num: "+6",
      stat1Lbl: "منصات SaaS سحابية من الصفر",
      stat2Num: "17+",
      stat2Lbl: "موديول فحص وتدقيق أمني",
      stat3Num: "99.9%",
      stat3Lbl: "جاهزية واستقرار البنية التحتية",
      stat4Num: "100%",
      stat4Lbl: "التزام كامل بالمواعيد والمواصفات",
      workTag: "01 // المشاريع المعتمدة",
      workTitle: "أعمال برمجية تثبت الكفاءة",
      filterAll: "الكل",
      filterAi: "SaaS والذكاء الاصطناعي",
      filterSec: "الأمن السيبراني",
      filterLive: "منصات حية وتجارة",
      filterMob: "تطبيقات الموبايل",
      btnDetails: "تفاصيل المعمارية والحل ←",
      capTag: "02 // القدرات الهندسية",
      capTitle: "ماذا أقدم لمشروعك؟",
      cap1Title: "منصات الـ SaaS والأنظمة السحابية",
      cap1Desc: "بناء تطبيقات ويب متكاملة وسريعة (Next.js / Node / Fastify) مع قواعد بيانات موزعة وطوابير عمال (BullMQ) تتحمل آلاف المستخدمين.",
      cap2Title: "معالجة الوسائط والذكاء الاصطناعي",
      cap2Desc: "دمج نماذج الذكاء الاصطناعي (Whisper, LLMs, InsightFace) مع محركات FFmpeg لأتمتة معالجة الفيديو والصوت بدقة عالية.",
      cap3Title: "الأمن السيبراني وتطبيقات الهاتف",
      cap3Desc: "فحص وتأمين تطبيقات الويب ضد ثغرات الحقن والـ SSRF والـ AI (مطور نظام كشف)، وبرمجة تطبيقات هواتف ذكية سريعة بـ Flutter.",
      contactHeading: "هل لديك فكرة أو نظام تريد تنفيذه؟",
      contactLead: "أنا متاح للتعاقد مع الشركات ورواد الأعمال الجادين لبناء وتطوير أنظمة برمجية بمستوى عالمي وبأعلى معايير الاستقرار.",
      btnEmail: "مراسلة عبر البريد الإلكتروني",
      footerRights: "© 2026 م. عبدالرحيم بركة (Abdelraheem Baraka). جميع الحقوق محفوظة."
    },
    en: {
      roleSub: "Senior Systems & Cloud Architect",
      navWork: "Projects",
      navCapabilities: "Capabilities",
      navContact: "Contact",
      navBtn: "Hire / Contract",
      statusBadge: "Available for new projects & contracts",
      heroT1: "Engineering Scalable Cloud SaaS,",
      heroT2: "AI Pipelines, and Secure Systems.",
      heroDesc: "Senior software engineer specializing in scalable SaaS platforms, automated AI video pipelines, and advanced cybersecurity audits — delivering clean, resilient solutions built to scale.",
      btnChat: "Direct WhatsApp Inquiry",
      btnExplore: "Explore Selected Work",
      stat1Num: "+6",
      stat1Lbl: "Cloud SaaS Platforms Built",
      stat2Num: "17+",
      stat2Lbl: "Vulnerability Auditing Modules",
      stat3Num: "99.9%",
      stat3Lbl: "System Uptime Reliability",
      stat4Num: "100%",
      stat4Lbl: "Milestone Execution Rate",
      workTag: "01 // SELECTED SYSTEMS",
      workTitle: "Production Software Systems",
      filterAll: "All",
      filterAi: "SaaS & AI",
      filterSec: "Cybersecurity",
      filterLive: "Live Platforms",
      filterMob: "Mobile Apps",
      btnDetails: "View Architecture & Solution ←",
      capTag: "02 // CAPABILITIES",
      capTitle: "Core Engineering Strengths",
      cap1Title: "Full-Stack Cloud SaaS Platforms",
      cap1Desc: "Architecting end-to-end web platforms (Next.js / Fastify) with distributed background message queues (BullMQ/Redis) built for thousands of concurrent users.",
      cap2Title: "AI & Distributed Media Pipelines",
      cap2Desc: "Integrating speech AI (Whisper), LLMs, and computer vision face tracking with GPU FFmpeg rendering for zero-lag automated media production.",
      cap3Title: "Cybersecurity & Cross-Platform Mobile",
      cap3Desc: "Hardening cloud APIs against injection and SSRF (creator of Kashf Scanner), combined with high-performance Flutter mobile applications.",
      contactHeading: "Ready to Build Something Significant?",
      contactLead: "Available for strategic contract engineering with startups, enterprises, and ambitious founders.",
      btnEmail: "Email Architecture Inquiry",
      footerRights: "© 2026 Abdelraheem Baraka. All rights reserved."
    }
  };

  /* Projects Details */
  const projectsData = {
    cliptica: {
      ar: {
        title: "Cliptica",
        cat: "AI VIDEO SAAS",
        desc: "تحويل الفيديوهات الطويلة إلى مقاطع Shorts/Reels مقاس 9:16 بنماذج الرؤية الحاسوبية وتتبع حركة الوجه مع توليد كابشنز حركية.",
        overview: "منصة SaaS متكاملة لتحويل الفيديوهات الطويلة إلى مقاطع قصيرة ريلز وتيك توك تلقائياً مع تتبع حركة الوجه وتوليد الترجمة الحركية كاريوكي والرفع المباشر لسحابة Cloudflare R2 واشتراكات Paddle.",
        solution: "طابور معالجة موزع متعدد المراحل مع حماية SSRF صارمة ونظام فوترة دقيقة لكل دقيقة استهلاك.",
        impact: "توفير 95% من وقت المونتاج اليدوي وتحويل ساعة من المحتوى إلى 10 مقاطع احترافية في دقيقتين.",
        stack: ["Next.js", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      },
      en: {
        title: "Cliptica",
        cat: "AI VIDEO SAAS",
        desc: "Automated 9:16 short clip generation using Computer Vision speaker tracking, Whisper AI transcription, and dynamic subtitles.",
        overview: "A production SaaS transcribing long YouTube videos via Groq Whisper, ranking viral moments, tracking dominant speakers with InsightFace, and burning captions directly to Cloudflare R2.",
        solution: "Decoupled asynchronous pipeline with strict SSRF guards and atomic credit metering.",
        impact: "Eliminates 95% of manual editing time, generating 10 viral clips from 1 hour of video in under 2 minutes.",
        stack: ["Next.js", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      }
    },
    recflow: {
      ar: {
        title: "RecFlow",
        cat: "DISTRIBUTED SAAS",
        desc: "تسجيل الشاشة والبث المباشر فوراً من المتصفح بدون تثبيت أي برنامج برفع مباشر إلى R2/S3 ومعالجة سحابية موزعة.",
        overview: "منصة لتسجيل الشاشة والبث المباشر فوراً من المتصفح، ترفع مقاطع الفيديو المجزأة مباشرة إلى R2/S3 دون المرور بخادم الـ API، مع عمال معالجة خلفية BullMQ ونظام اشتراكات Stripe.",
        solution: "معمارية Zero-API-Load تعتمد على الرفع المباشر بروابط Signed URLs ومعالجة موزعة بـ FFmpeg.",
        impact: "تحمل آلاف التسجيلات المتزامنة بتكلفة خوادم منخفضة للغاية وبدون أي ضغط على خادم الـ API الرئيسي.",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "Stripe", "AWS S3 / R2"]
      },
      en: {
        title: "RecFlow",
        cat: "DISTRIBUTED SAAS",
        desc: "Zero-install browser screen recording and live streaming uploading directly into distributed cloud buckets with cloud transcoding.",
        overview: "A browser-native screen recording and streaming SaaS uploading directly to S3/R2 presigned chunks, orchestrated by Fastify 5 and BullMQ workers with Stripe billing.",
        solution: "Zero-API-Ingestion architecture eliminating server bandwidth bottlenecks.",
        impact: "Enables thousands of concurrent recordings with near-zero API bandwidth overhead.",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "Stripe", "AWS S3 / R2"]
      }
    },
    kashf: {
      ar: {
        title: "Kashf (كشف)",
        cat: "CYBERSECURITY",
        desc: "ماسح أمني متقدم وتدقيق اختراق شامل بـ 17 موديول مع فحص ثغرات نماذج الـ AI وتقارير رسمية بصيغتي العربية والإنجليزية.",
        overview: "نظام أمني شامل يفحص تطبيقات الويب ضد 17 صنفاً من أعتى الثغرات (SQLi, SSRF, Deserialization, SSTI) مع وحدة متقدمة لفحص هجمات Prompt Injection للذكاء الاصطناعي وتقارير رسمية.",
        solution: "محرك تحقق آلي PoC Validation يمنع البلاغات الوهمية وينتج تقارير احترافية للشركات.",
        impact: "حماية الأنظمة البرمجية للشركات من تسريبات البيانات والغرامات المالية قبل الإطلاق.",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"]
      },
      en: {
        title: "Kashf",
        cat: "CYBERSECURITY",
        desc: "Comprehensive 17-vector vulnerability scanner with automated PoC verification and AI Prompt Injection assessment.",
        overview: "A rigorous security scanner featuring 17 deep testing modules (SQLi, SSRF, Deserialization) coupled with an AI Prompt Injection assessment module and dual-language audit reports.",
        solution: "Deterministic PoC validation engines that eliminate false positives.",
        impact: "Protects enterprise systems against critical data leaks and compliance breaches.",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"]
      }
    },
    yadbiyad: {
      ar: {
        title: "منصة يد بيد (Yad Biyad)",
        cat: "LIVE PRODUCTION",
        desc: "منصة إنسانية وخيرية حقيقية تعمل أونلاين لإدارة الحملات والمشاريع الإغاثية والتبرعات (handbyhandps.com).",
        overview: "منصة خيرية حقيقية تعمل على النطاق الحي `handbyhandps.com` لخدمة الأسر المحتاجة وإدارة حملات التبرع ونشر القصص الميدانية ولوحة تحكم آمنة للمسؤولين.",
        solution: "معمارية خفيفة وسريعة تحت ظروف الاتصال الضعيف مع حماية بيانات المتبرعين.",
        impact: "تمكين المؤسسة من جمع وإدارة تبرعات للمتضررين بشفافية وسرعة على أرض الواقع.",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"]
      },
      en: {
        title: "Yad Biyad",
        cat: "LIVE PRODUCTION",
        desc: "Active humanitarian portal orchestrating live relief campaigns & transparent donations at handbyhandps.com.",
        overview: "A live, actively running humanitarian platform serving families in crisis (`handbyhandps.com`) with automated donation tracking, field stories, and CMS oversight.",
        solution: "High-performance architecture with zero-latency response on constrained networks.",
        impact: "Directly powers transparent international fundraising for thousands of real beneficiaries.",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"]
      }
    },
    neonarcade: {
      ar: {
        title: "NeonArcade",
        cat: "WEB GAMING",
        desc: "منصة ألعاب متطورة بـ Next.js 14 تضم 50 لعبة تفاعلية بدون أي تثبيت مع لوحة تحكم ودعم لغتين.",
        overview: "منصة ويب تضم مكتبة من 50 لعبة ذكاء واستراتيجية تعمل بنقرة واحدة داخل المتصفح بدون أي تحميل، مع لوحة تحكم، ودعم ثنائي اللغة، ومساحات إعلانية.",
        solution: "تقنية التحميل الكسول المخصص (Dynamic Lazy Loading) للمكونات لمنع بطء التصفح.",
        impact: "منصة تجذب آلاف الزيارات وتزيد من مدة بقاء المستخدم ومجهزة لتحقيق عوائد إعلانية.",
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"]
      },
      en: {
        title: "NeonArcade",
        cat: "WEB GAMING",
        desc: "Next.js 14 instant browser gaming ecosystem hosting 50 games with zero installation and bilingual support.",
        overview: "A gaming platform engineered with Next.js 14 hosting 50 instant browser games, bilingual localization (AR/EN), dynamic ad-slot architecture, and admin analytics.",
        solution: "Dynamic imports and code-splitting guaranteeing instant first-contentful paint.",
        impact: "Delivers maximum user retention and ad revenue scalability.",
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"]
      }
    },
    wasalny: {
      ar: {
        title: "Wasalny (وصلني)",
        cat: "MOBILE APP",
        desc: "تطبيق لوجستي متكامل لإدارة الشحنات والتوصيل الميداني وتتبع العمليات بنمط Clean Architecture ويعمل بدون إنترنت.",
        overview: "تطبيق هواتف ذكية لمنصتي Android و iOS مطور بـ Flutter لإدارة عمليات الشحن اللوجستي، تتبع الطرود، والعمل حتى عند انقطاع الإنترنت عبر قاعدة بيانات محلية سريعة.",
        solution: "تطبيق نمط Clean Architecture مع SQLite للتخزين المؤقت وحركة سلسة 60 إطار في الثانية.",
        impact: "تسريع تسليم الشحنات اللوجستية وتفادي أخطاء التسليم الميداني.",
        stack: ["Flutter", "Dart", "Provider", "SQLite", "Clean Architecture"]
      },
      en: {
        title: "Wasalny",
        cat: "MOBILE APP",
        desc: "High-performance Flutter logistics and package tracking application with offline-first synchronization.",
        overview: "A production mobile app built with Flutter for Android and iOS, managing dispatch, delivery milestones, and offline-first state synchronization via local SQLite.",
        solution: "Clean Architecture domain isolation with offline-first synchronization.",
        impact: "Streamlines delivery operations and eliminates field delivery discrepancies.",
        stack: ["Flutter", "Dart", "Provider", "SQLite", "Clean Architecture"]
      }
    },
    electrolux: {
      ar: {
        title: "ElectroLux",
        cat: "E-COMMERCE",
        desc: "تجربة تسوق إلكتروني متطورة للأجهزة والمعدات الدقيقة مع لوحة تحكم وسلة تسوق تفاعلية سريعة ترفع معدل التحويل.",
        overview: "متجر إلكتروني فاخر يجمع بين سرعة التصفح، التصميم عالي التحويل، كتالوج منتجات متقدم، وسلة تسوق تفاعلية سريعة ولوحة تحكم متكاملة.",
        solution: "واجهة SPA تفاعلية تقدم استجابة فورية وسلة شراء بدون إعادة تحميل للصفحة.",
        impact: "رفع معدل إتمام عمليات الشراء وتوفير تجربة تسوق سلسة.",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"]
      },
      en: {
        title: "ElectroLux",
        cat: "E-COMMERCE",
        desc: "Luxury e-commerce experience with instantaneous catalog browsing, reactive cart, and high checkout conversion.",
        overview: "A streamlined luxury e-commerce platform built for high checkout conversions with dynamic filtering, stateful cart, and admin inventory controls.",
        solution: "Single-page reactive catalog with frictionless checkout funnel.",
        impact: "Dramatically increases customer purchase completion rates.",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"]
      }
    }
  };

  let currentLang = localStorage.getItem('wg_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wg_lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.innerHTML = lang === 'ar'
        ? `<strong>العربية</strong> <span>/</span> <span style="opacity:0.65">EN</span>`
        : `<span style="opacity:0.65">AR</span> <span>/</span> <strong>English</strong>`;
    }

    // Update project cards text
    document.querySelectorAll('[data-p-key]').forEach(card => {
      const k = card.getAttribute('data-p-key');
      const item = projectsData[k]?.[lang];
      if (!item) return;

      const title = card.querySelector('.card-title');
      const desc = card.querySelector('.card-desc');
      const cat = card.querySelector('.card-category');
      if (title) title.textContent = item.title;
      if (desc) desc.textContent = item.desc;
      if (cat) cat.textContent = item.cat;
    });
  }

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  /* ---------- 3. CATEGORY FILTERING ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-p-cat]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const f = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-p-cat');
        if (f === 'all' || cat.includes(f)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ---------- 4. ARCHITECTURE MODAL ---------- */
  const modal = document.getElementById('archModal');
  const mTitle = document.getElementById('modalTitle');
  const mCat = document.getElementById('modalCat');
  const mOverview = document.getElementById('modalOverview');
  const mSolution = document.getElementById('modalSolution');
  const mImpact = document.getElementById('modalImpact');
  const mStack = document.getElementById('modalStack');
  const mClose = document.getElementById('modalClose');

  function openModal(key) {
    const data = projectsData[key]?.[currentLang];
    if (!data) return;

    mTitle.textContent = data.title;
    mCat.textContent = data.cat;
    mOverview.textContent = data.overview;
    mSolution.textContent = data.solution;
    mImpact.textContent = data.impact;

    mStack.innerHTML = '';
    data.stack.forEach(s => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = s;
      mStack.appendChild(span);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(btn.getAttribute('data-open-modal'));
    });
  });

  if (mClose) mClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
  });

  // Initialize Language
  applyLanguage(currentLang);
});
