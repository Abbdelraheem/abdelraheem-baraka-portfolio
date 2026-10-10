// V2 Precision Engineering: Full Bilingual Engine (AR / EN) & Interactions
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Comprehensive Bilingual Dictionary ---
  const i18n = {
    ar: {
      navProjects: "المشاريع",
      navEngineering: "فلسفة العمل",
      navSkills: "الترسانة التقنية",
      navEstimate: "حاسبة المشروع",
      navContact: "تواصل معي",
      navSwitchVersion: "التصميم V1",
      badgeTitle: "مهندس برمجيات ونظم سحابية معتمدة",
      heroHeadline: "أنظمة برمجية سحابية وبنية تحتية عالية التحمل",
      heroSubheadline: "أبني منصات الـ SaaS والأنظمة الموزعة المعقدة وحلول الذكاء الاصطناعي مع تحصين أمني سيبراني صارم، موجهة لخدمة أهداف الأعمال وتوليد الإيرادات.",
      btnExploreProjects: "استعراض المشاريع والنظم",
      btnCalculateScope: "تقدير تكلفة مشروعك",
      stat1Number: "+6",
      stat1Label: "منصات SaaS سحابية من الصفر",
      stat2Number: "17+",
      stat2Label: "موديول فحص أمني وتدقيق ثغرات",
      stat3Number: "99.9%",
      stat3Label: "توافر واستقرار البنية التحتية",
      stat4Number: "100%",
      stat4Label: "التزام بالمواعيد ومواصفات الكود",
      sectionProjectsTitle: "سجل المشاريع الهندسية",
      sectionProjectsSubtitle: "دراسات حالة موثقة لحلول برمجية معقدة تم تسليمها وتشغيلها بكفاءة عالية.",
      filterAll: "الكل",
      filterAiSaas: "SaaS والذكاء الاصطناعي",
      filterCyber: "الأمن السيبراني",
      filterLive: "منصات حية وتجارة",
      filterMobile: "تطبيقات الهواتف",
      btnViewArch: "مخطط وسير المعمارية",
      sectionPhilTitle: "معايير التنفيذ الهندسي",
      sectionPhilSubtitle: "المبادئ الصارمة التي تضمن جودة كل سطر برمجي واستقرار كل خادم.",
      phil1Title: "هندسة موجهة للعائد التجاري",
      phil1Desc: "الأنظمة تُبنى لخدمة نموذج العمل: خفض تكاليف الخوادم، تسريع دورات المعالجة، ورفع معدلات تحويل المستخدمين.",
      phil2Title: "الأمان السيبراني المدمج",
      phil2Desc: "من واقع خبرتي في بناء ماسحات الثغرات (نظام كشف)، كل سطر كود وكل نقطة اتصال API محمية ضد الاستغلال.",
      phil3Title: "بنية تحتية لتوسع فوري",
      phil3Desc: "معمارية عمال موزعة (BullMQ/Redis) وقواعد بيانات متزامنة تتحمل طفرات حركة المرور والبيانات الضخمة.",
      phil4Title: "توثيق شامل وكود نظيف",
      phil4Desc: "كود معياري نظيف بنمط Clean Architecture، مع توثيق شامل وسهولة تسليم لفريقك التقني المستقبلي.",
      sectionSkillsTitle: "الترسانة التقنية الأساسية",
      skillsCol1: "الذكاء الاصطناعي والوسائط",
      skillsCol2: "الأنظمة السحابية والـ Backend",
      skillsCol3: "الأمن السيبراني والموبايل",
      calcTitle: "حاسبة تقدير نطاق وتكلفة المشروع",
      calcSubtitle: "حدد مواصفات نظامك واحصل على نطاق ميزانية تقديري شفاف ومباشر.",
      calcTypeLabel: "نوع النظام البرمجي:",
      calcScopeLabel: "نطاق العمل ومستوى التوسع:",
      calcTimelineLabel: "الإطار الزمني المستهدف:",
      calcOptSaas: "منصة SaaS سحابية متكاملة",
      calcOptAi: "نظام معالجة وسائط وذكاء اصطناعي",
      calcOptMobile: "تطبيق هاتف ذكي (Flutter Cross-Platform)",
      calcOptSecurity: "تدقيق أمني شامل وفحص اختراق",
      calcOptEcom: "منصة تجارة إلكترونية فاخرة عالية التحويل",
      calcScopeMvp: "إطلاق أولي سريع (MVP)",
      calcScopeFull: "نظام إنتاجي متكامل (Full Production)",
      calcScopeEnt: "نظام مؤسسي معقد (Enterprise Scale)",
      calcTimeStd: "جدول زمني قياسي (3 - 5 أسابيع)",
      calcTimeExp: "أولوية قصوى وتسليم سريع (أسبوعين)",
      calcEstBudget: "الميزانية التقديرية المقترحة للمشروع:",
      calcNotice: "شاملة التصميم، المعمارية، الأمان، وإطلاق البنية التحتية.",
      btnDiscussProject: "ناقش تفاصيل هذا المشروع الآن",
      contactTitle: "جاهز لبدء مشروعك القادم؟",
      contactSubtitle: "أنا متاح للتعاقد مع الشركات الناشئة ورواد الأعمال لتنفيذ أنظمة معقدة بأعلى المعايير.",
      btnWhatsApp: "محادثة عمل مباشرة",
      btnEmail: "مراسلة عبر البريد الإلكتروني",
      footerRights: "© 2026 م. عبدالرحيم بركة (Abdelraheem Baraka). جميع الحقوق محفوظة.",
      footerStack: "معمارية هندسية نقية | بدون قوالب AI",
      modalOverviewHead: "نظرة عامة على النظام:",
      modalChallengeHead: "التحدي الهندسي:",
      modalSolutionHead: "الحل والمعمارية المعتمدة:",
      modalArchHead: "مسار وسير البيانات (Data Pipeline):",
      modalTechHead: "حزمة التقنيات (Tech Stack):",
      modalImpactHead: "الأثر والقيمة العائدة للأعمال:"
    },
    en: {
      navProjects: "Projects",
      navEngineering: "Philosophy",
      navSkills: "Tech Stack",
      navEstimate: "Cost Estimator",
      navContact: "Contact",
      navSwitchVersion: "V1 Theme",
      badgeTitle: "Senior Systems & Cloud Software Architect",
      heroHeadline: "High-Throughput Cloud Platforms & Resilient Architecture",
      heroSubheadline: "Architecting high-scale SaaS platforms, distributed media pipelines, and hardened cloud systems designed strictly to scale revenue and endure high traffic.",
      btnExploreProjects: "Explore Case Studies",
      btnCalculateScope: "Estimate Project Cost",
      stat1Number: "+6",
      stat1Label: "Cloud SaaS Platforms Built",
      stat2Number: "17+",
      stat2Label: "Vulnerability Scanning Engines",
      stat3Number: "99.9%",
      stat3Label: "Infrastructure Uptime SLA",
      stat4Number: "100%",
      stat4Label: "On-Time Milestone Execution",
      sectionProjectsTitle: "Engineered Case Studies",
      sectionProjectsSubtitle: "Production-ready architectures deployed and validated under real workload.",
      filterAll: "All",
      filterAiSaas: "SaaS & AI",
      filterCyber: "Cybersecurity",
      filterLive: "Live Platforms",
      filterMobile: "Mobile Apps",
      btnViewArch: "Architecture & Pipeline",
      sectionPhilTitle: "Engineering Standards",
      sectionPhilSubtitle: "Strict principles governing every line of code and every infrastructure node.",
      phil1Title: "Business-Driven Engineering",
      phil1Desc: "Systems designed around your business model: minimizing cloud egress costs, boosting processing velocity, and maximizing conversion.",
      phil2Title: "Hardened Security by Design",
      phil2Desc: "Drawing from deep cybersecurity engineering (Kashf Scanner), every API endpoint and data flow is guarded against real-world exploits.",
      phil3Title: "Infinite Horizontal Scale",
      phil3Desc: "Distributed worker queues (BullMQ/Redis) and resilient database clusters engineered to withstand abrupt traffic spikes.",
      phil4Title: "Clean Architecture & Docs",
      phil4Desc: "Zero spaghetti code. Rigorous modular patterns with comprehensive technical documentation for effortless handover.",
      sectionSkillsTitle: "Core Technical Arsenal",
      skillsCol1: "AI & Distributed Media",
      skillsCol2: "Cloud Systems & Backend",
      skillsCol3: "Cybersecurity & Mobile",
      calcTitle: "Project Scope & Budget Estimator",
      calcSubtitle: "Configure your target system parameters for an immediate, transparent estimation range.",
      calcTypeLabel: "System Architecture:",
      calcScopeLabel: "Project Scope & Maturity:",
      calcTimelineLabel: "Target Timeline:",
      calcOptSaas: "Full-Stack Cloud SaaS Platform",
      calcOptAi: "AI Media Processing & Vision Pipeline",
      calcOptMobile: "Cross-Platform Mobile App (Flutter)",
      calcOptSecurity: "Comprehensive Security Audit & PenTest",
      calcOptEcom: "High-Converting Luxury E-Commerce",
      calcScopeMvp: "Rapid Market Launch (MVP)",
      calcScopeFull: "Full Commercial Production Platform",
      calcScopeEnt: "Complex Enterprise Infrastructure",
      calcTimeStd: "Standard Timeline (3 - 5 Weeks)",
      calcTimeExp: "High-Priority Sprint (2 Weeks)",
      calcEstBudget: "Estimated Investment Range:",
      calcNotice: "Includes UI/UX, core architecture, automated security, and cloud deployment.",
      btnDiscussProject: "Discuss This Scope on WhatsApp",
      contactTitle: "Ready to Build Something Remarkable?",
      contactSubtitle: "Available for strategic contracts with startups, enterprises, and visionary founders.",
      btnWhatsApp: "Direct WhatsApp Inquiry",
      btnEmail: "Email Consultation",
      footerRights: "© 2026 Abdelraheem Baraka. All rights reserved.",
      footerStack: "Engineered with Precision | Zero AI Cliché",
      modalOverviewHead: "System Overview:",
      modalChallengeHead: "Technical Challenge:",
      modalSolutionHead: "Engineering Solution:",
      modalArchHead: "Data Flow & Architecture Pipeline:",
      modalTechHead: "Core Tech Stack:",
      modalImpactHead: "Business Impact & ROI:"
    }
  };

  // --- 2. Bilingual Project Data ---
  const projectDatabase = {
    cliptica: {
      ar: {
        title: "Cliptica — AI Video Clipping SaaS",
        category: "منصة ذكاء اصطناعي (AI SaaS)",
        tagline: "تحويل الفيديوهات الطويلة إلى مقاطع 9:16 تلقائياً بنماذج الرؤية الحاسوبية",
        badge: "Production SaaS",
        overview: "منصة سحابية متكاملة تتيح إدخال أي رابط يوتيوب أو رفع ملف فيديو، ليقوم النظام بتفريغه صوتياً عبر Groq Whisper، واكتشاف أفضل لحظات التفاعل بالذكاء الاصطناعي، وتتبع وجه المتحدث لتأطير 9:16 عبر InsightFace، مع توليد ترجمة حركية كاريوكي والرفع المباشر إلى Cloudflare R2 واشتراكات Paddle.",
        challenge: "تتبع وجوه المتحدثين ورندرة الفيديو بدقة 9:16 تتطلب استهلاك معالجة ضخم، وخطر تعرض الخادم لهجمات استنزاف وتكلفة ذكاء اصطناعي عالية إذا لم تكن المعمارية محصنة ضد طلبات الـ SSRF والملفات الخبيثة.",
        solution: "بناء مسار عمل موزع ومحصن: تفريغ صوتي سريع عبر Groq Whisper، تتبع المتحدث عبر InsightFace، رندرة متوازية عبر FFmpeg، حماية ضد هجمات SSRF، وفوترة دقيقة لكل دقيقة استهلاك عبر Paddle مع Neon PostgreSQL.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare R2", "Groq Whisper", "InsightFace", "FFmpeg", "Paddle Billing"],
        architecture: [
          "1. واجهة المتصفح ◄ رفع الملفات بروابط موقعة R2 Presigned URLs",
          "2. طابور العمل ProcessingJob ◄ فحص أمان SSRF والتحقق من الحصة قبل تشغيل الذكاء الاصطناعي",
          "3. تفريغ صوتي دقيق لكل كلمة عبر Groq Whisper Word-Level Transcript",
          "4. تقييم اللحظات الأكثر جاذبية بنماذج LLM Moment Scoring",
          "5. تتبع المتحدث الرئيسي وتوسيط الكاميرا بخوارزمية InsightFace + رندرة FFmpeg",
          "6. توليد ملفات الترجمة الحركية Karaoke ASS والخصم الآلي للرصيد"
        ],
        impact: "تقليل زمن المونتاج اليدوي بنسبة 95%، وتحويل ساعات من المحتوى الخام إلى مقاطع جاهزة للنشر في أقل من دقيقتين."
      },
      en: {
        title: "Cliptica — AI Video Clipping SaaS",
        category: "AI & Distributed Cloud SaaS",
        tagline: "Automated 9:16 short clip generation using Computer Vision & LLMs",
        badge: "Production SaaS",
        overview: "A comprehensive video clipping SaaS that takes any long YouTube link or raw file, transcribes it via Groq Whisper, ranks viral moments using LLM scoring, reframes the camera with InsightFace dominant speaker tracking, applies kinetic karaoke subtitles, and exports directly to Cloudflare R2 with Paddle billing.",
        challenge: "Real-time face tracking and video transcoding demand heavy computing and risk exorbitant AI costs without a hardened, multi-tier queue and strict SSRF defenses.",
        solution: "Engineered an asynchronous multi-stage pipeline: Groq Whisper for instantaneous transcription, InsightFace for speaker tracking, FFmpeg for parallel rendering, atomic credit billing with Paddle, and Neon PostgreSQL.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare R2", "Groq Whisper", "InsightFace", "FFmpeg", "Paddle Billing"],
        architecture: [
          "1. Browser Upload ◄ Direct R2 Presigned URLs (Bypassing API bottlenecks)",
          "2. Queue ProcessingJob ◄ Strict SSRF domain & IP validation prior to AI invocation",
          "3. Instant Word-Level Transcription via Groq Whisper",
          "4. Multi-Score Engagement Ranking via LLM Moment Heuristics",
          "5. Dominant Speaker Face-Tracking (InsightFace) + 9:16 FFmpeg Reframe",
          "6. Automated Karaoke ASS Subtitle Burn-in & Atomic Paddle Metering"
        ],
        impact: "Eliminates 95% of manual editing time, converting 1-hour recordings into 10 ready-to-post vertical shorts in under 120 seconds."
      }
    },
    recflow: {
      ar: {
        title: "RecFlow — Cloud Screen Recording & Streaming",
        category: "أنظمة وسائط موزعة (Distributed Media)",
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
        category: "منصات حية وتأثير مجتمعي (Live Production)",
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
        category: "تطبيقات الويب التفاعلية (Full-Stack Gaming)",
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
        category: "تطبيقات الهواتف الذكية (Mobile Engineering)",
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
        category: "التجارة الإلكترونية المتقدمة (E-Commerce)",
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

  // --- 3. Language State & Switching Logic ---
  let currentLang = localStorage.getItem('v2_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('v2_lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = i18n[lang];

    // Translate all standard text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    // Update active state on language toggle buttons
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
      langBtn.innerHTML = lang === 'ar' 
        ? `<span class="text-white font-bold">AR</span> <span class="text-slate-500">|</span> <span class="text-slate-400 hover:text-white">EN</span>`
        : `<span class="text-slate-400 hover:text-white">AR</span> <span class="text-slate-500">|</span> <span class="text-white font-bold">EN</span>`;
    }

    // Update project cards text
    updateProjectCards(lang);

    // Update calculator
    updateV2CostEstimate();
  }

  function updateProjectCards(lang) {
    document.querySelectorAll('[data-project-card]').forEach(card => {
      const key = card.getAttribute('data-project-card');
      const data = projectDatabase[key]?.[lang];
      if (!data) return;

      const titleEl = card.querySelector('.project-card-title');
      const catEl = card.querySelector('.project-card-cat');
      const tagEl = card.querySelector('.project-card-tagline');

      if (titleEl) titleEl.textContent = data.title;
      if (catEl) catEl.textContent = data.category;
      if (tagEl) tagEl.textContent = data.tagline;
    });
  }

  const langSwitchBtn = document.getElementById('lang-switch-btn');
  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // --- 4. Project Modal Handler ---
  const modalOverlay = document.getElementById('v2-project-modal');
  const modalTitle = document.getElementById('v2-modal-title');
  const modalCategory = document.getElementById('v2-modal-category');
  const modalTagline = document.getElementById('v2-modal-tagline');
  const modalBadge = document.getElementById('v2-modal-badge');
  const modalOverview = document.getElementById('v2-modal-overview');
  const modalChallenge = document.getElementById('v2-modal-challenge');
  const modalSolution = document.getElementById('v2-modal-solution');
  const modalTechStack = document.getElementById('v2-modal-tech');
  const modalArchList = document.getElementById('v2-modal-arch');
  const modalImpact = document.getElementById('v2-modal-impact');
  const closeModalBtn = document.getElementById('v2-close-modal-btn');

  function openV2Modal(key) {
    const data = projectDatabase[key]?.[currentLang];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalTagline.textContent = data.tagline;
    modalBadge.textContent = data.badge;

    modalOverview.textContent = data.overview;
    modalChallenge.textContent = data.challenge;
    modalSolution.textContent = data.solution;
    modalImpact.textContent = data.impact;

    // Tech badges
    modalTechStack.innerHTML = '';
    data.techStack.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag-pill';
      span.textContent = t;
      modalTechStack.appendChild(span);
    });

    // Architecture steps
    modalArchList.innerHTML = '';
    data.architecture.forEach(step => {
      const li = document.createElement('li');
      li.className = 'text-xs text-slate-300 flex items-start gap-2.5 py-1 border-b border-white/5 last:border-b-0';
      li.innerHTML = `<span class="text-amber-400 font-mono-prec">0${modalArchList.children.length + 1}</span> <span>${step}</span>`;
      modalArchList.appendChild(li);
    });

    modalOverlay.classList.remove('hidden');
    setTimeout(() => {
      modalOverlay.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeV2Modal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
      modalOverlay.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 200);
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-open-modal');
      openV2Modal(key);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeV2Modal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeV2Modal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && !modalOverlay.classList.contains('hidden')) {
      closeV2Modal();
    }
  });

  // --- 5. Filter Tabs Logic ---
  const filterBtns = document.querySelectorAll('.v2-filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 6. Cost & Scope Estimator ---
  const typeSel = document.getElementById('v2-calc-type');
  const scopeSel = document.getElementById('v2-calc-scope');
  const speedSel = document.getElementById('v2-calc-speed');
  const outputEl = document.getElementById('v2-calc-output');
  const ctaBtn = document.getElementById('v2-calc-cta');

  function updateV2CostEstimate() {
    if (!typeSel || !scopeSel || !speedSel || !outputEl) return;

    let base = 2500;
    const type = typeSel.value;
    const scope = scopeSel.value;
    const speed = speedSel.value;

    if (type === 'saas') base = 3500;
    else if (type === 'ai') base = 4000;
    else if (type === 'mobile') base = 3000;
    else if (type === 'security') base = 2500;
    else if (type === 'ecommerce') base = 2200;

    let multiplier = 1;
    if (scope === 'mvp') multiplier = 1;
    else if (scope === 'full') multiplier = 1.6;
    else if (scope === 'enterprise') multiplier = 2.4;

    let speedBonus = 0;
    if (speed === 'express') speedBonus = 1200;

    const minEst = Math.round((base * multiplier + speedBonus) / 100) * 100;
    const maxEst = Math.round((minEst * 1.35) / 100) * 100;

    outputEl.textContent = `$${minEst.toLocaleString()} — $${maxEst.toLocaleString()}`;

    // Format WhatsApp message in current language
    const typeText = typeSel.options[typeSel.selectedIndex].text;
    const scopeText = scopeSel.options[scopeSel.selectedIndex].text;
    const speedText = speedSel.options[speedSel.selectedIndex].text;

    let msg = "";
    if (currentLang === 'ar') {
      msg = `مرحباً م. عبدالرحيم،\nأرغب في مناقشة مشروع جديد:\n- نوع النظام: ${typeText}\n- النطاق: ${scopeText}\n- الجدول الزمني: ${speedText}\n- نطاق الميزانية المقترح: $${minEst.toLocaleString()} — $${maxEst.toLocaleString()}\nأتطلع لمحادثة عمل لمناقشة التفاصيل والبدء.`;
    } else {
      msg = `Hello Eng. Abdelraheem,\nI would like to discuss a new software project:\n- Architecture: ${typeText}\n- Scope: ${scopeText}\n- Timeline: ${speedText}\n- Estimated Investment: $${minEst.toLocaleString()} — $${maxEst.toLocaleString()}\nLooking forward to scheduling an introductory call to discuss next steps.`;
    }

    if (ctaBtn) {
      ctaBtn.href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    }
  }

  [typeSel, scopeSel, speedSel].forEach(sel => {
    if (sel) sel.addEventListener('change', updateV2CostEstimate);
  });

  // Initial application of language
  applyLanguage(currentLang);
});
