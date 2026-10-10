// Clean Portfolio Bilingual Engine & Interactions
document.addEventListener('DOMContentLoaded', () => {

  const cleanI18n = {
    ar: {
      roleSub: "مهندس برمجيات ونظم سحابية",
      navWork: "المشاريع",
      navCapabilities: "القدرات الهندسية",
      navPhilosophy: "فلسفة العمل",
      navContact: "تواصل معي",
      heroBadge: "هندسة سحابية ونظم ذكاء اصطناعي",
      heroTitle1: "أبني منصات برمجية",
      heroTitle2: "حقيقية ومحصنة.",
      heroDesc: "مهندس برمجيات متخصص في بناء منصات الـ SaaS السحابية، خطوط معالجة الفيديو بالذكاء الاصطناعي، والتدقيق الأمني السيبراني المتقدم — حلول عملية تخدم أهدافك التجارية وتحقق إيرادات.",
      btnWork: "استكشف المشاريع",
      btnHire: "تواصل للتعاقد",
      stat1Num: "+6",
      stat1Lbl: "منصات SaaS سحابية من الصفر",
      stat2Num: "17+",
      stat2Lbl: "موديول فحص أمني وتدقيق ثغرات",
      stat3Num: "99.9%",
      stat3Lbl: "جاهزية واستقرار البنية التحتية",
      stat4Num: "100%",
      stat4Lbl: "التزام كامل بالمواعيد والمواصفات",
      sectionWorkPre: "01 // المشاريع المعتمدة",
      sectionWorkTitle: "أعمال برمجية تثبت الكفاءة",
      filterAll: "الكل",
      filterAi: "SaaS والذكاء الاصطناعي",
      filterSec: "الأمن السيبراني",
      filterLive: "منصات حية وتجارة",
      filterMob: "تطبيقات الموبايل",
      btnDetails: "تفاصيل المعمارية",
      sectionCapPre: "02 // القدرات الهندسية",
      sectionCapTitle: "ماذا أقدم لمشروعك؟",
      cap1Title: "منصات الـ SaaS والأنظمة السحابية",
      cap1Desc: "بناء تطبيقات ويب متكاملة من الصفر (Next.js / Node / Fastify) مع قواعد بيانات موزعة وطوابير عمال (BullMQ) تتحمل آلاف المستخدمين.",
      cap2Title: "معالجة الوسائط والذكاء الاصطناعي",
      cap2Desc: "دمج نماذج الذكاء الاصطناعي (Whisper, LLMs, InsightFace) مع محركات FFmpeg لأتمتة معالجة الفيديو والصوت بدقة عالية.",
      cap3Title: "الأمن السيبراني وتطبيقات الهاتف",
      cap3Desc: "فحص وتأمين تطبيقات الويب ضد ثغرات الحقن والـ SSRF والـ AI (مطور نظام كشف)، وبرمجة تطبيقات هواتف ذكية سريعة بـ Flutter.",
      sectionContactPre: "03 // تواصل مباشر",
      sectionContactTitle: "هل لديك فكرة أو نظام تريد تنفيذه؟",
      sectionContactDesc: "أنا متاح للتعاقد مع الشركات ورواد الأعمال الجادين لتنفيذ أنظمة برمجية بمستوى عالمي.",
      btnWhatsApp: "محادثة فورية عبر واتساب",
      btnEmail: "مراسلة عبر البريد الإلكتروني",
      footerRights: "© 2026 م. عبدالرحيم بركة (Abdelraheem Baraka). جميع الحقوق محفوظة."
    },
    en: {
      roleSub: "Senior Systems & Cloud Architect",
      navWork: "Selected Work",
      navCapabilities: "Capabilities",
      navPhilosophy: "Philosophy",
      navContact: "Get in Touch",
      heroBadge: "Cloud Architecture & AI Engineering",
      heroTitle1: "Architecting Real-World",
      heroTitle2: "Software Systems.",
      heroDesc: "Senior software engineer specializing in scalable SaaS platforms, automated AI video pipelines, and rigorous cybersecurity audits — built strictly to drive business revenue.",
      btnWork: "Explore Work",
      btnHire: "Hire / Contract",
      stat1Num: "+6",
      stat1Lbl: "Cloud SaaS Platforms Built",
      stat2Num: "17+",
      stat2Lbl: "Vulnerability Scanning Engines",
      stat3Num: "99.9%",
      stat3Lbl: "Uptime & System Reliability",
      stat4Num: "100%",
      stat4Lbl: "Milestone Execution Rate",
      sectionWorkPre: "01 // CASE STUDIES",
      sectionWorkTitle: "Engineered Software Systems",
      filterAll: "All Systems",
      filterAi: "SaaS & AI",
      filterSec: "Cybersecurity",
      filterLive: "Live Platforms",
      filterMob: "Mobile Apps",
      btnDetails: "View Architecture",
      sectionCapPre: "02 // CAPABILITIES",
      sectionCapTitle: "What I Bring to Your Team",
      cap1Title: "Full-Stack Cloud SaaS Platforms",
      cap1Desc: "Architecting end-to-end web platforms (Next.js / Fastify) with distributed message queues (BullMQ/Redis) built to handle thousands of concurrent users.",
      cap2Title: "AI & Distributed Media Pipelines",
      cap2Desc: "Integrating speech AI (Whisper), LLM heuristics, and InsightFace tracking with FFmpeg rendering for automated zero-lag media production.",
      cap3Title: "Cybersecurity & Cross-Platform Mobile",
      cap3Desc: "Hardening cloud APIs against injection and SSRF (creator of Kashf Scanner), combined with high-performance Flutter mobile applications.",
      sectionContactPre: "03 // CONTACT",
      sectionContactTitle: "Ready to Build Something Significant?",
      sectionContactDesc: "Available for strategic contracts with startups, enterprises, and ambitious founders.",
      btnWhatsApp: "Direct WhatsApp Inquiry",
      btnEmail: "Email Consultation",
      footerRights: "© 2026 Abdelraheem Baraka. All rights reserved."
    }
  };

  // Projects Data
  const cleanProjects = {
    cliptica: {
      ar: {
        title: "Cliptica",
        cat: "منصة ذكاء اصطناعي ومعالجة وسائط",
        tag: "تحويل الفيديوهات الطويلة إلى مقاطع Shorts/Reels مقاس 9:16 بنماذج الرؤية الحاسوبية",
        stack: ["Next.js", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"],
        overview: "منصة SaaS متكاملة لتحويل الفيديوهات الطويلة إلى مقاطع قصيرة ريلز وتيك توك تلقائياً مع تتبع حركة الوجه وتوليد الترجمة الحركية كاريوكي والرفع المباشر لسحابة Cloudflare R2 واشتراكات Paddle.",
        solution: "طابور معالجة موزع متعدد المراحل مع حماية SSRF صارمة ونظام فوترة دقيقة لكل دقيقة استهلاك.",
        impact: "توفير 95% من وقت المونتاج اليدوي وتحويل ساعة من المحتوى إلى 10 مقاطع احترافية في دقيقتين."
      },
      en: {
        title: "Cliptica",
        cat: "AI Video Processing SaaS",
        tag: "Automated 9:16 short clip generation using Computer Vision & LLMs",
        stack: ["Next.js", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"],
        overview: "A production SaaS transcribing long YouTube videos via Groq Whisper, ranking viral moments with LLMs, tracking dominant speakers with InsightFace, and burning karaoke captions to Cloudflare R2.",
        solution: "Decoupled asynchronous pipeline with strict SSRF guards and atomic credit metering.",
        impact: "Eliminates 95% of manual editing time, generating 10 viral clips from 1 hour of video in under 2 minutes."
      }
    },
    recflow: {
      ar: {
        title: "RecFlow",
        cat: "أنظمة وسائط سحابية موزعة",
        tag: "تسجيل الشاشة والبث المباشر فوراً من المتصفح بدون تثبيت أي برنامج",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "LiveKit SFU", "Stripe", "AWS S3 / R2"],
        overview: "منصة لتسجيل الشاشة والبث المباشر فوراً من المتصفح، ترفع مقاطع الفيديو المجزأة مباشرة إلى R2/S3 دون المرور بخادم الـ API، مع عمال معالجة خلفية BullMQ ونظام اشتراكات Stripe.",
        solution: "معمارية Zero-API-Load تعتمد على الرفع المباشر بروابط Signed URLs ومعالجة موزعة بـ FFmpeg.",
        impact: "تحمل آلاف التسجيلات المتزامنة بتكلفة خوادم منخفضة للغاية."
      },
      en: {
        title: "RecFlow",
        cat: "Distributed Cloud Media SaaS",
        tag: "Zero-install high-definition browser recording with automated cloud transcoding",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "LiveKit SFU", "Stripe", "AWS S3 / R2"],
        overview: "A browser-native screen recording and streaming SaaS uploading directly to S3/R2 presigned chunks, orchestrated by Fastify 5 and BullMQ workers with Stripe billing.",
        solution: "Zero-API-Ingestion architecture eliminating server bandwidth bottlenecks.",
        impact: "Enables thousands of concurrent recordings with near-zero API bandwidth overhead."
      }
    },
    kashf: {
      ar: {
        title: "Kashf (كشف)",
        cat: "الأمن السيبراني والـ DevSecOps",
        tag: "ماسح أمني متقدم وتدقيق اختراق شامل بـ 17 موديول مع فحص ثغرات نماذج الـ AI",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"],
        overview: "نظام أمني شامل يفحص تطبيقات الويب ضد 17 صنفاً من أعتى الثغرات (SQLi, SSRF, Deserialization, SSTI) مع وحدة متقدمة لفحص هجمات Prompt Injection للذكاء الاصطناعي وتقارير رسمية.",
        solution: "محرك تحقق آلي PoC Validation يمنع البلاغات الوهمية وينتج تقارير احترافية للشركات.",
        impact: "حماية الأنظمة البرمجية للشركات من تسريبات البيانات والغرامات المالية قبل الإطلاق."
      },
      en: {
        title: "Kashf",
        cat: "Cybersecurity & DevSecOps",
        tag: "Comprehensive 17-vector vulnerability scanner with automated PoC verification",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"],
        overview: "A rigorous security scanner featuring 17 deep testing modules (SQLi, SSRF, Deserialization) coupled with an AI Prompt Injection assessment module and executive dual-language audit reports.",
        solution: "Deterministic PoC validation engines that eliminate false positives.",
        impact: "Protects enterprise systems against critical data leaks and compliance breaches."
      }
    },
    yadbiyad: {
      ar: {
        title: "منصة يد بيد (Yad Biyad)",
        cat: "منصات حية وتأثير مجتمعي",
        tag: "منصة إنسانية وخيرية تعمل أونلاين لإدارة الحملات والمشاريع الإغاثية والتبرعات",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"],
        overview: "منصة خيرية حقيقية تعمل على النطاق الحي `handbyhandps.com` لخدمة الأسر المحتاجة وإدارة حملات التبرع ونشر القصص الميدانية ولوحة تحكم آمنة للمسؤولين.",
        solution: "معمارية خفيفة وسريعة تحت ظروف الاتصال الضعيف مع حماية بيانات المتبرعين.",
        impact: "تمكين المؤسسة من جمع وإدارة تبرعات للمتضررين بشفافية وسرعة على أرض الواقع."
      },
      en: {
        title: "Yad Biyad",
        cat: "Live Production Platform",
        tag: "Humanitarian portal orchestrating live relief campaigns & transparent donations",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"],
        overview: "A live, actively running humanitarian platform serving families in crisis (`handbyhandps.com`) with automated donation tracking, field stories, and CMS oversight.",
        solution: "High-performance architecture with zero-latency response on constrained networks.",
        impact: "Directly powers transparent international fundraising for thousands of real beneficiaries."
      }
    },
    neonarcade: {
      ar: {
        title: "NeonArcade",
        cat: "تطبيقات الويب التفاعلية",
        tag: "منصة ألعاب متطورة بـ Next.js 14 تضم 50 لعبة تفاعلية بدون أي تثبيت",
        stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"],
        overview: "منصة ويب تضم مكتبة من 50 لعبة ذكاء واستراتيجية تعمل بنقرة واحدة داخل المتصفح بدون أي تحميل، مع لوحة تحكم، ودعم ثنائي اللغة، ومساحات إعلانية.",
        solution: "تقنية التحميل الكسول المخصص (Dynamic Lazy Loading) للمكونات لمنع بطء التصفح.",
        impact: "منصة تجذب آلاف الزيارات وتزيد من مدة بقاء المستخدم ومجهزة لتحقيق عوائد إعلانية."
      },
      en: {
        title: "NeonArcade",
        cat: "High-Engagement Web Platform",
        tag: "Next.js 14 gaming portal hosting 50 instant browser games",
        stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"],
        overview: "A gaming platform engineered with Next.js 14 hosting 50 instant browser games, bilingual localization (AR/EN), dynamic ad-slot architecture, and admin analytics.",
        solution: "Dynamic imports and code-splitting guaranteeing instant first-contentful paint.",
        impact: "Delivers maximum user retention and ad revenue scalability."
      }
    },
    wasalny: {
      ar: {
        title: "Wasalny (وصلني)",
        cat: "تطبيقات الهواتف الذكية",
        tag: "تطبيق لوجستي متكامل لإدارة الشحنات والتوصيل الميداني وتتبع العمليات",
        stack: ["Flutter", "Dart", "Provider", "SQLite", "Clean Architecture"],
        overview: "تطبيق هواتف ذكية لمنصتي Android و iOS مطور بـ Flutter لإدارة عمليات الشحن اللوجستي، تتبع الطرود، والعمل حتى عند انقطاع الإنترنت عبر قاعدة بيانات محلية سريعة.",
        solution: "تطبيق نمط Clean Architecture مع SQLite للتخزين المؤقت وحركة سلسة 60 إطار في الثانية.",
        impact: "تسريع تسليم الشحنات اللوجستية وتفادي أخطاء التسليم الميداني."
      },
      en: {
        title: "Wasalny",
        cat: "Mobile Systems Engineering",
        tag: "High-performance cross-platform logistics & dispatch mobile app",
        stack: ["Flutter", "Dart", "Provider", "SQLite", "Clean Architecture"],
        overview: "A production mobile app built with Flutter for Android and iOS, managing dispatch, delivery milestones, and offline-first state synchronization via local SQLite.",
        solution: "Clean Architecture domain isolation with offline-first synchronization.",
        impact: "Streamlines delivery operations and eliminates field delivery discrepancies."
      }
    },
    electrolux: {
      ar: {
        title: "ElectroLux",
        cat: "التجارة الإلكترونية المتقدمة",
        tag: "تجربة تسوق إلكتروني متطورة للأجهزة والمعدات الدقيقة مع لوحة تحكم ذكية",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"],
        overview: "متجر إلكتروني فاخر يجمع بين سرعة التصفح، التصميم عالي التحويل، كتالوج منتجات متقدم، وسلة تسوق تفاعلية سريعة ولوحة تحكم متكاملة.",
        solution: "واجهة SPA تفاعلية تقدم استجابة فورية وسلة شراء بدون إعادة تحميل للصفحة.",
        impact: "رفع معدل إتمام عمليات الشراء وتوفير تجربة تسوق سلسة."
      },
      en: {
        title: "ElectroLux",
        cat: "High-Converting E-Commerce",
        tag: "Luxury e-commerce experience with instantaneous catalog browsing",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"],
        overview: "A streamlined luxury e-commerce platform built for high checkout conversions with dynamic filtering, stateful cart, and admin inventory controls.",
        solution: "Single-page reactive catalog with frictionless checkout funnel.",
        impact: "Dramatically increases customer purchase completion rates."
      }
    }
  };

  let currentLang = localStorage.getItem('clean_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('clean_lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = cleanI18n[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });

    const toggle = document.getElementById('lang-toggle-btn');
    if (toggle) {
      toggle.innerHTML = lang === 'ar'
        ? `<span class="text-white font-bold">العربية</span> <span class="text-slate-600">/</span> <span class="text-slate-400 hover:text-white">EN</span>`
        : `<span class="text-slate-400 hover:text-white">AR</span> <span class="text-slate-600">/</span> <span class="text-white font-bold">English</span>`;
    }

    updateCards(lang);
  }

  function updateCards(lang) {
    document.querySelectorAll('[data-project-key]').forEach(card => {
      const k = card.getAttribute('data-project-key');
      const item = cleanProjects[k]?.[lang];
      if (!item) return;

      const title = card.querySelector('.p-title');
      const cat = card.querySelector('.p-cat');
      const tag = card.querySelector('.p-tag');

      if (title) title.textContent = item.title;
      if (cat) cat.textContent = item.cat;
      if (tag) tag.textContent = item.tag;
    });
  }

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // Filter
  const filterBtns = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('[data-cat-group]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const f = btn.getAttribute('data-f');
      cards.forEach(card => {
        const cat = card.getAttribute('data-cat-group');
        if (f === 'all' || cat.includes(f)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal
  const modal = document.getElementById('clean-modal');
  const mTitle = document.getElementById('m-title');
  const mCat = document.getElementById('m-cat');
  const mOverview = document.getElementById('m-overview');
  const mSolution = document.getElementById('m-solution');
  const mImpact = document.getElementById('m-impact');
  const mStack = document.getElementById('m-stack');
  const closeBtn = document.getElementById('m-close');

  function openModal(key) {
    const data = cleanProjects[key]?.[currentLang];
    if (!data) return;

    mTitle.textContent = data.title;
    mCat.textContent = data.cat;
    mOverview.textContent = data.overview;
    mSolution.textContent = data.solution;
    mImpact.textContent = data.impact;

    mStack.innerHTML = '';
    data.stack.forEach(s => {
      const span = document.createElement('span');
      span.className = 'badge-clean text-xs';
      span.textContent = s;
      mStack.appendChild(span);
    });

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 200);
  }

  document.querySelectorAll('[data-open-modal]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(b.getAttribute('data-open-modal'));
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeModal();
  });

  applyLanguage(currentLang);
});
