// Master Multi-Style Portfolio Script (Bilingual Engine & Style Studio)
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Master Bilingual Dictionary ---
  const masterI18n = {
    ar: {
      brandSub: "مهندس نظم وبرمجيات سحابية",
      navWork: "الأعمال والنظم",
      navPhilosophy: "فلسفة التنفيذ",
      navArsenal: "الترسانة التقنية",
      navEstimate: "تقدير الاستثمار",
      navContact: "تواصل مباشر",
      dockTitle: "استوديو الستايلات الـ 3D (جرّب الستايل لمعاينته حياً):",
      dockOpt1: "👑 الزمرد الملكي",
      dockOpt2: "🔮 الزئبق السائل",
      dockOpt3: "📐 شبكة الليدار",
      dockOpt4: "💎 بلورات الذهب",
      dockOpt5: "🌊 الأمواج الكوانتية",
      badgeText: "هندسة سحابية ونظم ذكاء اصطناعي نخبوية",
      heroPre: "مهندس نظم متقدمة ومنصات SaaS",
      heroHeadline: "نبني أنظمة برمجية سحابية تحقق الأرباح وتصنع الفارق",
      heroSubhead: "من خطوط معالجة الفيديو بالذكاء الاصطناعي وهندسة الوسائط الموزعة، إلى التدقيق الأمني السيبراني الصارم — حلول برمجية فخمة وموثوقة مصممة لأصحاب الأعمال والشركات الطموحة.",
      btnExplore: "استكشف سجل المشاريع",
      btnEstimate: "احسب ميزانية مشروعك",
      stat1Val: "+6",
      stat1Txt: "منصات SaaS سحابية من الصفر",
      stat2Val: "17+",
      stat2Txt: "موديول تدقيق أمني وفحص ثغرات",
      stat3Val: "99.9%",
      stat3Txt: "جاهزية واستقرار البنية التحتية",
      stat4Val: "100%",
      stat4Txt: "التزام بالمواعيد ومواصفات الكود",
      sectionWorkTitle: "سجل المشاريع والأعمال المعتمدة",
      sectionWorkDesc: "دراسات حالة موثقة لحلول برمجية معقدة تم تسليمها وتشغيلها بكفاءة تجارية عالية.",
      filterAll: "كافة الأعمال",
      filterAi: "SaaS والذكاء الاصطناعي",
      filterSec: "الأمن السيبراني",
      filterLive: "منصات حية وتجارة",
      filterMobile: "تطبيقات الهواتف",
      btnViewArch: "تفاصيل المعمارية وسير البيانات",
      sectionPhilTitle: "لماذا تختار العمل معي؟",
      sectionPhilDesc: "المعايير الهندسية الصارمة التي تجعل مشاريعك استثماراً تجارياً رابحاً ومحصناً.",
      phil1Head: "هندسة موجهة للعائد والربحية",
      phil1Body: "لا نكتب أسطر كود مجردة؛ نبني أنظمة تخدم نموذج عملك: سرعة تحويل فائقة، تكلفة خوادم مدروسة، وتجربة مستخدم تدفع للنمو.",
      phil2Head: "تحصين أمني سيبراني مدمج",
      phil2Body: "بصفتي مطور ماسح الثغرات المتقدم (نظام كشف)، كل سطر برمجي وكل نقطة اتصال API يتم تحصينها ضد الاختراق وتسريب البيانات.",
      phil3Head: "معمارية موزعة للتوسع اللانهائي",
      phil3Body: "طوابير معالجة غير متزامنة (BullMQ/Redis) وبنية تحتية سحابية تتحمل آلاف العمليات المتزامنة دون توقف أو اختناق.",
      phil4Head: "وضوح تام وكود نظيف موثق",
      phil4Body: "بنية برمجية معيارية (Clean Architecture) موثقة بالكامل، تضمن سهولة الإدارة والتسليم لفريقك دون أي تعقيد.",
      sectionArsenalTitle: "الترسانة التقنية والقدرات الهندسية",
      arsenalCol1: "الذكاء الاصطناعي ومعالجة الوسائط",
      arsenalCol2: "المنصات السحابية وهندسة الـ Backend",
      arsenalCol3: "الأمن السيبراني وتطبيقات الهاتف",
      calcTitle: "حاسبة تقدير الاستثمار ونطاق المشروع",
      calcDesc: "حدد معالم نظامك المستهدف واحصل على نطاق ميزانية تقديري شفاف، لتنطلق مباشرة بمحادثة عمل جادة.",
      calcTypeLbl: "نوع النظام البرمجي:",
      calcScopeLbl: "نطاق العمل ومستوى التوسع:",
      calcTimeLbl: "الإطار الزمني المستهدف:",
      optSaas: "منصة SaaS سحابية متكاملة",
      optAi: "نظام معالجة وسائط وذكاء اصطناعي",
      optMobile: "تطبيق هاتف ذكي (Flutter Cross-Platform)",
      optSec: "تدقيق أمني شامل وفحص اختراق",
      optEcom: "منصة تجارة إلكترونية فاخرة عالية التحويل",
      scopeMvp: "إطلاق أولي سريع ومدروس (MVP)",
      scopeFull: "نظام إنتاجي متكامل جاهز للسوق (Production)",
      scopeEnt: "نظام مؤسسي بمواصفات معقدة (Enterprise)",
      timeStd: "إطار زمني قياسي (3 - 5 أسابيع)",
      timeExp: "أولوية قصوى وتسليم سريع (أسبوعين)",
      calcEstLbl: "الميزانية التقديرية المقترحة للمشروع:",
      calcNotice: "شاملة التصميم الفاخر، المعمارية الهندسية، التحصين الأمني، والإطلاق السحابي.",
      btnDiscuss: "ناقش تفاصيل هذا المشروع عبر واتساب",
      contactTitle: "هل لديك مشروع طموح تريد تنفيذه؟",
      contactDesc: "أنا متاح للتعاقد مع الشركات ورواد الأعمال الجادين لبناء منصات رائدة تحقق أهدافهم.",
      btnWhatsApp: "محادثة عمل عبر واتساب",
      btnEmail: "مراسلة بريدية رسمية",
      footerRights: "© 2026 م. عبدالرحيم بركة (Abdelraheem Baraka). جميع الحقوق محفوظة.",
      footerCreds: "نظام استوديو المعمارية الفاخرة — 5 ستايلات 3D تفاعلية",
      modalOverview: "نظرة عامة على المشروع:",
      modalChallenge: "التحدي التقني:",
      modalSolution: "الحل والمعمارية الهندسية:",
      modalArch: "مسار وسير البيانات (Data Pipeline):",
      modalTech: "حزمة التقنيات المستخدمة:",
      modalImpact: "العائد والأثر التجاري المتحقق:"
    },
    en: {
      brandSub: "Senior Systems & Cloud Architect",
      navWork: "Selected Work",
      navPhilosophy: "Philosophy",
      navArsenal: "Tech Arsenal",
      navEstimate: "Estimate Scope",
      navContact: "Contact",
      dockTitle: "3D Visual Studio (Select style to preview live):",
      dockOpt1: "👑 Royal Emerald",
      dockOpt2: "🔮 Liquid Mercury",
      dockOpt3: "📐 Lidar Grid",
      dockOpt4: "💎 Gold Crystals",
      dockOpt5: "🌊 Quantum Wave",
      badgeText: "High-Performance Cloud & AI Engineering",
      heroPre: "Systems Architect & Cloud Engineer",
      heroHeadline: "Architecting High-Scale Cloud Systems Built to Scale Revenue",
      heroSubhead: "From AI-driven automated media pipelines and distributed microservices to hardened cybersecurity audits — delivering prestige digital platforms built strictly for discerning businesses.",
      btnExplore: "Explore Case Studies",
      btnEstimate: "Estimate Project Investment",
      stat1Val: "+6",
      stat1Txt: "Cloud SaaS Platforms Engineered",
      stat2Val: "17+",
      stat2Txt: "Automated PenTest & Audit Engines",
      stat3Val: "99.9%",
      stat3Txt: "Infrastructure Uptime SLA",
      stat4Val: "100%",
      stat4Txt: "Milestone & Code Execution Rate",
      sectionWorkTitle: "Curated Systems Portfolio",
      sectionWorkDesc: "Validated case studies of complex software architectures delivered with commercial excellence.",
      filterAll: "All Systems",
      filterAi: "SaaS & AI",
      filterSec: "Cybersecurity",
      filterLive: "Live Platforms",
      filterMobile: "Mobile Apps",
      btnViewArch: "Architecture & Data Pipeline",
      sectionPhilTitle: "Why Partner With Me?",
      sectionPhilDesc: "The rigorous engineering standards that transform codebases into highly profitable business assets.",
      phil1Head: "Business-First Architecture",
      phil1Body: "We don't write idle code; every subsystem is engineered around your business model: minimizing egress costs, boosting throughput, and maximizing user conversion.",
      phil2Head: "Hardened Security by Design",
      phil2Body: "Drawing from hands-on cybersecurity research (Kashf Scanner), every API endpoint and data flow is guarded against real-world intrusion and leaks.",
      phil3Head: "Infinite Horizontal Scale",
      phil3Body: "Asynchronous worker queues (BullMQ/Redis) and distributed cloud storage engineered to handle thousands of concurrent requests seamlessly.",
      phil4Head: "Exemplary Documentation & Clean Code",
      phil4Body: "Zero architectural debt. Rigorous Clean Architecture standards paired with clear documentation for seamless future onboarding.",
      sectionArsenalTitle: "Core Technical Capabilities",
      arsenalCol1: "AI & Media Processing",
      arsenalCol2: "Cloud Architecture & Backend",
      arsenalCol3: "Cybersecurity & Mobile",
      calcTitle: "Project Investment & Scope Estimator",
      calcDesc: "Configure your system specifications to generate a transparent investment estimate and launch your project.",
      calcTypeLbl: "System Architecture:",
      calcScopeLbl: "Scope & Maturity Level:",
      calcTimeLbl: "Target Delivery Timeline:",
      optSaas: "Full-Stack Cloud SaaS Platform",
      optAi: "AI Media Processing & Vision Pipeline",
      optMobile: "Cross-Platform Mobile App (Flutter)",
      optSec: "Comprehensive Security Audit & PenTest",
      optEcom: "Luxury High-Converting E-Commerce",
      scopeMvp: "Rapid Market Validation (MVP)",
      scopeFull: "Full Commercial Production Platform",
      scopeEnt: "Complex Enterprise Infrastructure",
      timeStd: "Standard Timeline (3 - 5 Weeks)",
      timeExp: "High-Priority Sprint (2 Weeks)",
      calcEstLbl: "Estimated Project Investment Range:",
      calcNotice: "Includes bespoke design, resilient architecture, security hardening, and deployment.",
      btnDiscuss: "Discuss This Scope on WhatsApp",
      contactTitle: "Ready to Execute an Ambitious Project?",
      contactDesc: "Available for strategic contracts with forward-thinking enterprises and founders.",
      btnWhatsApp: "Direct WhatsApp Consultation",
      btnEmail: "Official Inquiries via Email",
      footerRights: "© 2026 Abdelraheem Baraka. All rights reserved.",
      footerCreds: "Architectural Visual Studio — 5 Real-Time 3D Aesthetics",
      modalOverview: "System Overview:",
      modalChallenge: "Engineering Challenge:",
      modalSolution: "Technical Solution & Architecture:",
      modalArch: "Data Flow Pipeline:",
      modalTech: "Core Technologies:",
      modalImpact: "Business Impact & Value Realized:"
    }
  };

  // --- 2. Project Data ---
  const royalProjects = {
    cliptica: {
      ar: {
        title: "Cliptica — AI Video Clipping SaaS",
        category: "منصة ذكاء اصطناعي ومعالجة وسائط",
        tagline: "تحويل الفيديوهات الطويلة إلى مقاطع Shorts/Reels مقاس 9:16 تلقائياً بنماذج الرؤية الحاسوبية",
        badge: "Production SaaS",
        overview: "منصة سحابية متكاملة تتيح إدخال أي رابط يوتيوب أو رفع ملف فيديو، ليقوم النظام بتفريغه صوتياً عبر Groq Whisper، واكتشاف أفضل لحظات التفاعل بالذكاء الاصطناعي، وتتبع وجه المتحدث لتأطير 9:16 عبر InsightFace، مع توليد ترجمة حركية كاريوكي والرفع المباشر إلى Cloudflare R2 واشتراكات Paddle.",
        challenge: "تتبع وجوه المتحدثين ورندرة الفيديو بدقة 9:16 تتطلب استهلاك معالجة ضخم، وخطر تعرض الخادم لهجمات استنزاف وتكلفة ذكاء اصطناعي عالية إذا لم تكن المعمارية محصنة ضد طلبات الـ SSRF والملفات الخبيثة.",
        solution: "بناء مسار عمل موزع ومحصن: تفريغ صوتي سريع عبر Groq Whisper، تتبع المتحدث عبر InsightFace، رندرة متوازية عبر FFmpeg، حماية ضد هجمات SSRF، وفوترة دقيقة لكل دقيقة استهلاك عبر Paddle مع Neon PostgreSQL.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare R2", "Groq Whisper", "InsightFace", "FFmpeg", "Paddle Billing"],
        architecture: [
          "1. واجهة المتصفح ◄ رفع الملفات بروابط موقعة R2 Presigned URLs (تجاوز اختناق السيرفر)",
          "2. طابور العمل ProcessingJob ◄ فحص أمان SSRF والتحقق من الحصة قبل تشغيل الذكاء الاصطناعي",
          "3. تفريغ صوتي دقيق لكل كلمة عبر Groq Whisper Word-Level Transcript",
          "4. تقييم اللحظات الأكثر جاذبية بنماذج LLM Moment Scoring",
          "5. تتبع المتحدث الرئيسي وتوسيط الكاميرا بخوارزمية InsightFace + رندرة FFmpeg 9:16",
          "6. توليد ملفات الترجمة الحركية Karaoke ASS والخصم الآلي للرصيد"
        ],
        impact: "تقليل زمن المونتاج اليدوي بنسبة 95%، وتحويل ساعات من المحتوى الخام إلى مقاطع جاهزة للنشر في أقل من دقيقتين."
      },
      en: {
        title: "Cliptica — AI Video Clipping SaaS",
        category: "AI & Distributed Media SaaS",
        tagline: "Automated 9:16 vertical short creation utilizing Computer Vision & LLMs",
        badge: "Production SaaS",
        overview: "A comprehensive video clipping SaaS taking long YouTube URLs or uploads, transcribing via Groq Whisper, scoring viral moments with LLMs, tracking dominant speakers with InsightFace, and burning kinetic karaoke subtitles with direct Cloudflare R2 export and Paddle subscriptions.",
        challenge: "High compute intensity and severe cloud egress costs during parallel video reframing without an optimized asynchronous queue and SSRF defenses.",
        solution: "Engineered a distributed multi-stage pipeline: instant word-level transcription with Groq Whisper, InsightFace face tracking, FFmpeg parallel rendering, atomic credit billing with Paddle, and Neon PostgreSQL.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare R2", "Groq Whisper", "InsightFace", "FFmpeg", "Paddle Billing"],
        architecture: [
          "1. Browser Direct Uploads via Cloudflare R2 Presigned URLs",
          "2. Asynchronous Queue ProcessingJob with strict SSRF & IP validation",
          "3. Sub-second Word-Level Transcription via Groq Whisper",
          "4. LLM Engagement Scoring & Viral Hook Extraction",
          "5. InsightFace Dominant Speaker Tracking & 9:16 Dynamic Framing",
          "6. Kinetic Subtitle Generation (Karaoke ASS) & Automated Metering"
        ],
        impact: "Reduces manual editing time by 95%, generating 10 viral-ready vertical clips from a 1-hour video in under two minutes."
      }
    },
    recflow: {
      ar: {
        title: "RecFlow — Cloud Screen Recording & Streaming",
        category: "أنظمة وسائط سحابية موزعة",
        tagline: "تسجيل الشاشة والبث المباشر فوراً من المتصفح بدون تثبيت أي برنامج",
        badge: "Microservices",
        overview: "منصة سحابية متقدمة لتسجيل الشاشة بجودة فائقة وبث الفيديو مباشرة دون الحاجة لتحميل أي برنامج على جهاز المستخدم. تقوم برفع قطع الفيديو (Chunked/Resumable) فورياً إلى Cloudflare R2 / AWS S3، مع طوابير معالجة موزعة عبر BullMQ ونظام اشتراكات Stripe.",
        challenge: "رفع الفيديوهات الطويلة مباشرة لسيرفر الـ API يسبب انهيار السيرفر واختناق النطاق الترددي عند تزامن مئات المستخدمين.",
        solution: "تصميم معمارية Zero-API-Video-Load: المتصفح يرفع المقاطع المشفرة مباشرة إلى Object Storage بروابط Signed URLs، بينما يتولى خادم Fastify إدارة الجلسات، ويقوم Worker منفصل (BullMQ + FFmpeg) بدمج المقاطع وتوليد الصور المصغرة، مع دعم بث LiveKit SFU.",
        techStack: ["Next.js 15", "Fastify 5", "TypeScript", "BullMQ", "Redis", "FFmpeg", "LiveKit SFU", "Stripe", "AWS S3 / R2", "PostgreSQL"],
        architecture: [
          "1. متصفح العميل (getDisplayMedia) ◄ تشفير مباشر في المتصفح",
          "2. رفع المقاطع بنظام Chunks مباشرة إلى R2/S3 (تجاوز سيرفر الـ API)",
          "3. خادم Fastify 5 ◄ إدارة الصلاحيات والاشتراكات والحصص التخزينية",
          "4. طابور BullMQ + Redis ◄ تشغيل عمال FFmpeg للمعالجة والضغط",
          "5. نظام تنظيف وتدوير تلقائي للملفات المجانية بعد انتهاء الصلاحية"
        ],
        impact: "تحمل آلاف التسجيلات المتزامنة بتكلفة خوادم منخفضة للغاية بفضل تجاوز مسار خادم الـ API الرئيسي."
      },
      en: {
        title: "RecFlow — Cloud Screen Recording & Streaming",
        category: "Distributed Media Infrastructure",
        tagline: "Zero-install high-definition browser recording with automated cloud transcoding",
        badge: "Microservices",
        overview: "A browser-native recording and live streaming SaaS requiring zero desktop software installation. Utilizes browser MediaRecorder for client-side encoding, uploading directly to S3/R2 via resumable presigned chunks, orchestrated by Fastify 5 and BullMQ workers with Stripe billing.",
        challenge: "Heavy video file ingestion directly on application servers exhausts network bandwidth and CPU under concurrency.",
        solution: "Engineered a Zero-API-Ingestion architecture: video chunks stream directly from browser to S3/R2 storage, while decoupled BullMQ workers on Redis handle concatenation, FFmpeg transcode, and automated lifecycle retention policies.",
        techStack: ["Next.js 15", "Fastify 5", "TypeScript", "BullMQ", "Redis", "FFmpeg", "LiveKit SFU", "Stripe", "AWS S3 / R2", "PostgreSQL"],
        architecture: [
          "1. Browser Media Capture ◄ Direct client-side WebM encoding",
          "2. Resumable Chunk Uploads directly to Cloudflare R2 / AWS S3",
          "3. Lightweight Fastify API coordinating auth, quotas & webhooks",
          "4. Decoupled BullMQ Worker Cluster performing FFmpeg concatenation & thumbnailing",
          "5. Tiered automated retention lifecycle (24h free / 30d paid auto-purge)"
        ],
        impact: "Enables thousands of concurrent screen recordings with near-zero API bandwidth overhead and automated multi-tier storage cost controls."
      }
    },
    kashf: {
      ar: {
        title: "Kashf (كشف) — Enterprise Vulnerability & AI Security Scanner",
        category: "الأمن السيبراني والـ DevSecOps",
        tagline: "ماسح أمني متقدم وتدقيق اختراق شامل بـ 17 موديول مع فحص ثغرات الـ AI",
        badge: "17 Security Modules",
        overview: "نظام أمني هجومي ودفاعي شامل يفحص تطبيقات الويب ضد 17 صنفاً من أعتى الثغرات الأمنية (حقن قواعد البيانات، SSTI، ثغرات التفكيك Deserialization، ثغرات SSRF، تسريبات البيئة)، مع وحدة متقدمة فريدة لفحص هجمات حقن الأوامر لنماذج الذكاء الاصطناعي (Prompt Injection)، وتوليد تقرير أمني تنفيذي باللغتين العربية والإنجليزية.",
        challenge: "معظم أدوات الفحص المفتوحة تقدم بلاغات إيجابية كاذبة تضيع وقت الفرق التقنية، وتفتقر لاختبار ثغرات نماذج الذكاء الاصطناعي الحديثة.",
        solution: "تطوير محرك فحص ذكي يتحقق من استغلال الثغرة فعلياً (PoC Verification) قبل تسجيلها، وتضمين وحدة فحص لهجمات Prompt Injection متوافقة مع مزودات OpenAI، مع نظام تصدير تقارير تدقيق أمني عالي الاحترافية للشركات.",
        techStack: ["Python 3.11", "Network Security", "Automated PoC Engines", "LLM Security Guard", "HTML/PDF Report Engine"],
        architecture: [
          "1. وحدة Recon الاستطلاعية (DNS, Ports, Subdomains, Takeover, WAF)",
          "2. مصفوفة فحص الحقن (SQLi, XSS, CMDi, SSTI, LFI, XXE, NoSQL)",
          "3. فحص البنية التحتية والبيئة (SSRF 169.254, Deserialization, Git/Env Leaks)",
          "4. وحدة أمان الذكاء الاصطناعي (AI Prompt Injection & Jailbreak Scanner)",
          "5. محرك التحقق الآلي PoC Validation لمنع البلاغات الوهمية",
          "6. توليد تقارير تنفيذية وفنية مفصلة مع خطوات الترقيع والتأمين"
        ],
        impact: "حماية الأنظمة البرمجية للشركات من تسريبات البيانات والغرامات المالية واختراقات القراصنة قبل الإطلاق."
      },
      en: {
        title: "Kashf — Enterprise Vulnerability & AI Security Scanner",
        category: "Cybersecurity & DevSecOps",
        tagline: "Comprehensive 17-vector security scanner with automated PoC verification & LLM defense",
        badge: "17 Security Modules",
        overview: "A rigorous security audit and automated penetration scanner featuring 17 deep testing modules (SQLi, XSS, CMDi, SSTI, Deserialization, SSRF metadata probes), coupled with an advanced AI Prompt Injection assessment module and dual-language (Arabic/English) executive audit report generation.",
        challenge: "Standard vulnerability scanners flood teams with false positives and completely lack coverage for generative AI / LLM prompt injection vectors.",
        solution: "Implemented deterministic PoC validation engines that execute verified non-destructive payloads before logging vulnerabilities, integrated an OpenAI-compatible prompt injection test suite, and built an automated audit reporting compiler.",
        techStack: ["Python 3.11", "Network Security", "Automated PoC Engines", "LLM Security Guard", "HTML/PDF Report Engine"],
        architecture: [
          "1. Recon & Attack Surface (DNS, Ports, Subdomain Takeover, WAF Fingerprinting)",
          "2. Full Injection Matrix (SQLi multi-engine, Blind, SSTI, LFI, XXE, NoSQL)",
          "3. Cloud & Server Environment (SSRF metadata 169.254, Deserialization, Git/.env leaks)",
          "4. Specialized LLM Safety Module (System Prompt Extraction & Jailbreak probes)",
          "5. Automated PoC Validation Engine eliminating false positive reports",
          "6. Dual-Language PDF & HTML Audit Report Compilation with remediation steps"
        ],
        impact: "Prevents critical data breaches, API abuse, and costly compliance violations prior to production deployments."
      }
    },
    yadbiyad: {
      ar: {
        title: "منصة يد بيد (Yad Biyad) — Live Production Charity Platform",
        category: "منصات حية وتأثير مجتمعي",
        tagline: "منصة إنسانية وخيرية تعمل أونلاين لإدارة الحملات والمشاريع الإغاثية والتبرعات",
        badge: "Live (handbyhandps.com)",
        overview: "منصة خيرية وإنسانية حقيقية ومباشرة تعمل على النطاق الحي `handbyhandps.com` لخدمة الأسر المحتاجة وتنظيم المبادرات الإغاثية. تتضمن إدارة الحملات التبرعية، نشر القصص الميدانية الموثقة، استقبال المساهمات، ولوحة تحكم آمنة لإدارة المحتوى والتقارير المالية.",
        challenge: "بناء منصة موثوقة تماماً وسريعة التجاوب تحت ظروف الاتصال الضعيف، تضمن شفافية التبرعات وسهولة وصول المتبرعين من كل أنحاء العالم.",
        solution: "تطوير معمارية سريعة وخفيفة بالـ PHP و MySQL مع تحسين سرعة تحميل الصور والمرفقات، ولوحة تحكم مرنة تتيح للفريق الميداني إضافة البرامج والقصص بضغطة زر وتحديث الإحصائيات مباشرة.",
        techStack: ["PHP", "MySQL", "Apache", "Custom Secure CMS", "SEO Optimized", "Responsive UI"],
        architecture: [
          "1. بوابة المتبرعين العامة (تصفح الحملات، البرامج الإغاثية، والقصص الميدانية)",
          "2. محرك التبرعات ومتابعة نسب اكتمال كل حملة بشكل لحظي",
          "3. لوحة تحكم الإدارة (إدارة البرامج، فحص المرفقات، والتحكم بالأمان)",
          "4. حماية شاملة لبيانات المتبرعين وتشفير الجلسات"
        ],
        impact: "تمكين المؤسسة من جمع وإدارة تبرعات للمتضررين بشفافية وسرعة وتوثيق حي للمشاريع على أرض الواقع."
      },
      en: {
        title: "Yad Biyad — Live Production Charity Platform",
        category: "Live Production Platform",
        tagline: "Production humanitarian portal orchestrating live relief campaigns & transparent donations",
        badge: "Live (handbyhandps.com)",
        overview: "A live, actively running humanitarian relief and campaign management platform serving families in crisis (`handbyhandps.com`). Features automated donation tracking, field story documentation, media uploads, and an administrative CMS for real-time campaign oversight.",
        challenge: "Ensuring zero-latency performance across constrained network environments while maintaining bulletproof data integrity for donation transparency.",
        solution: "Engineered a lightweight, performant PHP and MySQL architecture with aggressive static asset optimization, secure sessions, and an administrative control suite allowing field teams to publish programs instantaneously.",
        techStack: ["PHP", "MySQL", "Apache", "Custom Secure CMS", "SEO Optimized", "Responsive UI"],
        architecture: [
          "1. Public Donor Portal (Real-time campaign progress, verified field stories)",
          "2. Live Campaign Tracking Engine with instant goal fulfillment metrics",
          "3. Secure Administrative CMS (Program management, file verification)",
          "4. Hardened session handling and donor privacy protections"
        ],
        impact: "Directly powers transparent international fundraising and field logistics for thousands of real beneficiaries."
      }
    },
    neonarcade: {
      ar: {
        title: "NeonArcade — 50 Instant Mini-Games Platform",
        category: "تطبيقات الويب التفاعلية",
        tagline: "منصة ألعاب متطورة بـ Next.js 14 تضم 50 لعبة تفاعلية بدون أي تثبيت",
        badge: "50 Web Games",
        overview: "منصة ويب تفاعلية حديثة مبنية بأحدث معايير Next.js 14 App Router تضم مكتبة ضخمة من 50 لعبة ذكاء واستراتيجية وكلمات وأركيد تعمل بنقرة واحدة داخل المتصفح بدون أي تحميل، مع لوحة تحكم، ودعم ثنائي اللغة (عربي / إنجليزي)، وجاهزية لتحقيق الأرباح من الإعلانات.",
        challenge: "تشغيل 50 لعبة تفاعلية داخل تطبيق ويب واحد دون التأثير على سرعة التحميل أو استهلاك الذاكرة في أجهزة المستخدمين.",
        solution: "الاعتماد على المعمارية الحديثة لـ Next.js 14 وتقنية التحميل الكسول المخصص (Dynamic Lazy Loading) للمكونات، مع قاعدة بيانات Prisma و Tailwind CSS خفيف جداً.",
        techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Prisma ORM", "MySQL"],
        architecture: [
          "1. Next.js 14 App Router مع توليد مسبق للصفحات (SSG) لأعلى سرعة",
          "2. وحدات ألعاب تفاعلية مستقلة يتم استدعاؤها ديناميكياً عند الطلب",
          "3. قاعدة بيانات Prisma لتسجيل النقاط العالية، المستخدمين، والإحصائيات",
          "4. دعم التبديل بين اللغتين العربية والإنجليزية مع اتجاه RTL/LTR تلقائي"
        ],
        impact: "منصة تجذب آلاف الزيارات وتزيد من مدة بقاء المستخدم في الموقع (User Retention) ومجهزة لتحقيق عوائد إعلانية فورية."
      },
      en: {
        title: "NeonArcade — 50 Instant Mini-Games Platform",
        category: "High-Engagement Web Platform",
        tagline: "Next.js 14 gaming portal hosting 50 instant browser games with sub-second latency",
        badge: "50 Web Games",
        overview: "A high-performance gaming platform engineered with Next.js 14 App Router and TypeScript, hosting 50 instant browser games spanning strategy, puzzles, and arcade categories. Features bilingual localization (AR/EN), dynamic ad-slot architecture, and admin analytics.",
        challenge: "Bundling 50 interactive games without degrading first-contentful paint (FCP) or causing memory bloat on mobile browsers.",
        solution: "Leveraged Next.js dynamic imports with component code-splitting, modular state containers, and Prisma ORM on MySQL for instant score persistence and zero-lag user engagement.",
        techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Prisma ORM", "MySQL"],
        architecture: [
          "1. Next.js 14 App Router with static generation for maximum SEO speed",
          "2. Isolated game modules loaded on-demand via dynamic lazy imports",
          "3. High-score and user engagement persistence via Prisma ORM",
          "4. Seamless bilingual RTL/LTR internationalization engine"
        ],
        impact: "Delivers maximum user retention and ad revenue scalability through instant load times and zero-friction gameplay."
      }
    },
    wasalny: {
      ar: {
        title: "Wasalny (وصلني) — Smart Logistics Mobile App",
        category: "تطبيقات الهواتف الذكية",
        tagline: "تطبيق لوجستي متكامل لإدارة الشحنات والتوصيل الميداني وتتبع العمليات",
        badge: "Flutter & Dart",
        overview: "تطبيق هواتف ذكية متكامل لمنصتي Android و iOS مطور بتقنية Flutter لإدارة عمليات الشحن والنقل اللوجستي، تتبع حالات الطرود، إشعار العملاء، والعمل حتى في ظروف انقطاع الإنترنت عبر قاعدة بيانات محلية سريعة.",
        challenge: "ضمان سلاسة حركة الواجهات بمعدل 60 إطار في الثانية ومزامنة البيانات اللوجستية دون أي بطء أو فقدان لبيانات التوصيل عند ضعف الشبكة.",
        solution: "تطبيق نمط Clean Architecture مع إدارة الحالة عبر Provider وقاعدة بيانات SQLite محلية مدمجة للتخزين المؤقت، وواجهات عربية أصيلة صممت لتوفير أسرع تجربة استخدام لمندوب التوصيل والعميل.",
        techStack: ["Flutter", "Dart", "Provider", "SQLite", "Intl (Localization)", "Clean Architecture"],
        architecture: [
          "1. واجهات مستخدم تفاعلية متجاوبة لنظامي أندرويد وآيفون",
          "2. إدارة الحالة المركزية عبر Provider لضمان تحديث الواجهات الفوري",
          "3. قاعدة بيانات محلية SQLite لتخزين وتعديل الشحنات بدون إنترنت",
          "4. نظام تتبع وتحديث الحالات وإطلاق الإشعارات والتواصل المباشر"
        ],
        impact: "تسريع وتيرة تسليم الشحنات اللوجستية وتفادي أخطاء التسليم الميداني مع تجربة استخدام استثنائية."
      },
      en: {
        title: "Wasalny — Smart Logistics Mobile App",
        category: "Mobile Systems Engineering",
        tagline: "High-performance cross-platform logistics & dispatch mobile application",
        badge: "Flutter & Dart",
        overview: "A production-grade mobile logistics application built with Flutter & Dart for Android and iOS. Manages package dispatch, delivery route milestones, customer communication, and offline-first state synchronization via local SQLite caching.",
        challenge: "Delivering continuous 60 FPS UI performance and preventing delivery status loss when drivers operate in intermittent or dead cellular zones.",
        solution: "Architected with strict Clean Architecture separation, reactive Provider state management, and an offline-first SQLite synchronization layer that guarantees zero delivery record loss.",
        techStack: ["Flutter", "Dart", "Provider", "SQLite", "Intl (Localization)", "Clean Architecture"],
        architecture: [
          "1. Cross-platform native compilation for iOS and Android at 60 FPS",
          "2. Clean Architecture domain, data, and presentation layer isolation",
          "3. Offline-first SQLite local persistence with automated reconciliation",
          "4. Integrated localization engine with seamless Arabic & English support"
        ],
        impact: "Streamlines delivery dispatch operations and eliminates field delivery discrepancies under any connectivity conditions."
      }
    },
    electrolux: {
      ar: {
        title: "ElectroLux — Precision Engineering Luxury E-Commerce",
        category: "التجارة الإلكترونية المتقدمة",
        tagline: "تجربة تسوق إلكتروني متطورة للأجهزة والمعدات الدقيقة مع لوحة تحكم ذكية",
        badge: "Modern E-Commerce",
        overview: "متجر إلكتروني فاخر يجمع بين سرعة التصفح، التصميم عالي التحويل (High-Converting UI)، كتالوج منتجات متقدم مع تصنيفات وفلاتر دقيقة، سلة تسوق تفاعلية، ولوحة تحكم متكاملة لإدارة الطلبات والعملاء.",
        challenge: "المتاجر الإلكترونية التقليدية تعاني من بطء التصفح ومعدلات ارتداد عالية عند إتمام الشراء.",
        solution: "بناء واجهة SPA تفاعلية بـ React و Tailwind CSS تقدم أوقات استجابة فورية، مع تنظيم احترافي لعرض مواصفات المنتجات وسلة شراء بدون إعادة تحميل للصفحة.",
        techStack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"],
        architecture: [
          "1. واجهة متجر تفاعلية وسريعة مع فلاتر وبحث لحظي في الكتالوج",
          "2. سلة تسوق ديناميكية مع حفظ تلقائي للمشتريات",
          "3. صفحة دفع مبسطة ترفع معدل التحويل (Conversion Rate)",
          "4. لوحة تحكم الإدارة لمتابعة المخزون والطلبات"
        ],
        impact: "رفع معدل إتمام عمليات الشراء وتوفير تجربة تسوق سلسة تناسب العلامات التجارية الفاخرة."
      },
      en: {
        title: "ElectroLux — Precision Engineering E-Commerce",
        category: "High-Converting E-Commerce",
        tagline: "Luxury e-commerce experience with instantaneous catalog browsing & checkout",
        badge: "Modern E-Commerce",
        overview: "A streamlined, luxury e-commerce platform built for high checkout conversions. Features dynamic product specification filtering, client-side stateful cart management, administrative stock controls, and lightning-fast page transitions.",
        challenge: "Standard e-commerce storefronts suffer high bounce rates and cart abandonment caused by multi-step page reloads.",
        solution: "Constructed a single-page reactive application using React and utility-first styling with decoupled API services, delivering instantaneous cart updates and frictionless checkout steps.",
        techStack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"],
        architecture: [
          "1. Reactive single-page catalog with instant search & multi-facet filters",
          "2. Stateful client-side cart persistence across browser sessions",
          "3. Optimized high-conversion checkout funnel minimizing drop-offs",
          "4. Administrative dashboard for inventory and order status tracking"
        ],
        impact: "Dramatically increases customer purchase completion rates and delivers a luxury brand feel."
      }
    }
  };

  // --- 3. Language State & Handling ---
  let currentLang = localStorage.getItem('multi_lang') || 'ar';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('multi_lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = masterI18n[lang];

    // Standard data-i18n bindings
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    // Language toggle indicator
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.innerHTML = lang === 'ar'
        ? `<span class="text-white font-bold">العربية</span> <span class="text-slate-500">/</span> <span class="text-slate-400 hover:text-white">EN</span>`
        : `<span class="text-slate-400 hover:text-white">AR</span> <span class="text-slate-500">/</span> <span class="text-white font-bold">English</span>`;
    }

    updateProjectCards(lang);
    calculateScope();
  }

  function updateProjectCards(lang) {
    document.querySelectorAll('[data-card-key]').forEach(card => {
      const key = card.getAttribute('data-card-key');
      const item = royalProjects[key]?.[lang];
      if (!item) return;

      const titleEl = card.querySelector('.theme-card-title');
      const catEl = card.querySelector('.theme-card-cat');
      const tagEl = card.querySelector('.theme-card-tag');

      if (titleEl) titleEl.textContent = item.title;
      if (catEl) catEl.textContent = item.category;
      if (tagEl) tagEl.textContent = item.tagline;
    });
  }

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // --- 4. Style Studio Dock Interactions ---
  document.querySelectorAll('[data-style-target]').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const target = chip.getAttribute('data-style-target');
      if (window.switch3DStyle) {
        window.switch3DStyle(target);
      }
    });
  });

  // --- 5. Modal Case Study Handler ---
  const modalOverlay = document.getElementById('theme-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCat = document.getElementById('modal-cat');
  const modalTag = document.getElementById('modal-tag');
  const modalBadge = document.getElementById('modal-badge');
  const modalOverview = document.getElementById('modal-overview');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSolution = document.getElementById('modal-solution');
  const modalTech = document.getElementById('modal-tech');
  const modalArch = document.getElementById('modal-arch');
  const modalImpact = document.getElementById('modal-impact');
  const closeBtn = document.getElementById('modal-close-btn');

  function openThemeModal(key) {
    const data = royalProjects[key]?.[currentLang];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCat.textContent = data.category;
    modalTag.textContent = data.tagline;
    modalBadge.textContent = data.badge;

    modalOverview.textContent = data.overview;
    modalChallenge.textContent = data.challenge;
    modalSolution.textContent = data.solution;
    modalImpact.textContent = data.impact;

    modalTech.innerHTML = '';
    data.techStack.forEach(t => {
      const pill = document.createElement('span');
      pill.className = 'theme-pill';
      pill.textContent = t;
      modalTech.appendChild(pill);
    });

    modalArch.innerHTML = '';
    data.architecture.forEach(step => {
      const li = document.createElement('li');
      li.className = 'text-xs text-slate-300 flex items-start gap-3 py-2 border-b border-white/10 last:border-b-0';
      li.innerHTML = `<span class="text-amber-400 font-mono-prec font-bold">#</span> <span>${step}</span>`;
      modalArch.appendChild(li);
    });

    modalOverlay.classList.remove('hidden');
    setTimeout(() => {
      modalOverlay.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeThemeModal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
      modalOverlay.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 250);
  }

  document.querySelectorAll('[data-open-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-open-key');
      openThemeModal(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeThemeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeThemeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && !modalOverlay.classList.contains('hidden')) {
      closeThemeModal();
    }
  });

  // --- 6. Project Filter Tabs ---
  const filterBtns = document.querySelectorAll('.theme-filter-btn');
  const cards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 7. Scope & Investment Calculator ---
  const typeSelect = document.getElementById('calc-type');
  const scopeSelect = document.getElementById('calc-scope');
  const timeSelect = document.getElementById('calc-time');
  const outNumber = document.getElementById('calc-display-number');
  const ctaBtn = document.getElementById('calc-whatsapp-cta');

  function calculateScope() {
    if (!typeSelect || !scopeSelect || !timeSelect || !outNumber) return;

    let base = 2500;
    const type = typeSelect.value;
    const scope = scopeSelect.value;
    const speed = timeSelect.value;

    if (type === 'saas') base = 3500;
    else if (type === 'ai') base = 4200;
    else if (type === 'mobile') base = 3200;
    else if (type === 'security') base = 2600;
    else if (type === 'ecommerce') base = 2200;

    let multiplier = 1;
    if (scope === 'mvp') multiplier = 1;
    else if (scope === 'full') multiplier = 1.6;
    else if (scope === 'enterprise') multiplier = 2.4;

    let bonus = 0;
    if (speed === 'express') bonus = 1200;

    const minVal = Math.round((base * multiplier + bonus) / 100) * 100;
    const maxVal = Math.round((minVal * 1.35) / 100) * 100;

    outNumber.textContent = `$${minVal.toLocaleString()} — $${maxVal.toLocaleString()}`;

    // WhatsApp Message
    const typeLabel = typeSelect.options[typeSelect.selectedIndex].text;
    const scopeLabel = scopeSelect.options[scopeSelect.selectedIndex].text;
    const timeLabel = timeSelect.options[timeSelect.selectedIndex].text;

    let msg = "";
    if (currentLang === 'ar') {
      msg = `مرحباً م. عبدالرحيم،\nأرغب في مناقشة مشروع جديد:\n- نوع النظام: ${typeLabel}\n- النطاق: ${scopeLabel}\n- الإطار الزمني: ${timeLabel}\n- الميزانية التقديرية المقترحة: $${minVal.toLocaleString()} — $${maxVal.toLocaleString()}\nأتطلع لتحديد موعد لمناقشة التفاصيل وبدء التنفيذ.`;
    } else {
      msg = `Hello Eng. Abdelraheem,\nI would like to discuss a new software engagement:\n- System Type: ${typeLabel}\n- Scope: ${scopeLabel}\n- Timeline: ${timeLabel}\n- Target Investment: $${minVal.toLocaleString()} — $${maxVal.toLocaleString()}\nLooking forward to scheduling an introductory call to discuss next steps.`;
    }

    if (ctaBtn) {
      ctaBtn.href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    }
  }

  [typeSelect, scopeSelect, timeSelect].forEach(sel => {
    if (sel) sel.addEventListener('change', calculateScope);
  });

  // Apply initial language
  setLanguage(currentLang);
});
